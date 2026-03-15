'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { PortfolioImage } from '@/data/portfolio'

const STYLES = ['All', 'Elegant', 'Rustic', 'Modern', 'Whimsical'] as const

interface PortfolioGalleryProps {
  images: PortfolioImage[]
}

export default function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [activeStyle, setActiveStyle] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [columns, setColumns] = useState(3)

  const filteredImages = activeStyle === 'All'
    ? images
    : images.filter(img => img.style === activeStyle.toLowerCase())

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setColumns(1)
      else if (window.innerWidth < 1024) setColumns(2)
      else setColumns(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Distribute images into columns for masonry layout
  const columnArrays: PortfolioImage[][] = Array.from({ length: columns }, () => [])
  filteredImages.forEach((img, i) => {
    columnArrays[i % columns].push(img)
  })

  // Map masonry position back to flat index for lightbox
  function getFlatIndex(colIdx: number, rowIdx: number): number {
    return rowIdx * columns + colIdx
  }

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
  }, [lightboxIndex, filteredImages.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
  }, [lightboxIndex, filteredImages.length])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    },
    [closeLightbox, goNext, goPrev]
  )

  const styleCounts = STYLES.reduce((acc, style) => {
    if (style === 'All') {
      acc[style] = images.length
    } else {
      acc[style] = images.filter(img => img.style === style.toLowerCase()).length
    }
    return acc
  }, {} as Record<string, number>)

  return (
    <>
      {/* Style Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {STYLES.map((style) => (
          <button
            key={style}
            onClick={() => {
              setActiveStyle(style)
              setLightboxIndex(null)
            }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border-0 cursor-pointer ${
              activeStyle === style
                ? 'bg-dark-crust text-white shadow-md'
                : 'bg-white text-[#6B6560] hover:bg-dark-crust/5 shadow-sm'
            }`}
          >
            {style}
            <span className="ml-1.5 text-xs opacity-60">
              ({styleCounts[style]})
            </span>
          </button>
        ))}
      </div>

      {/* Image Count */}
      <p className="text-center text-[#6B6560] text-sm mb-10">
        Showing {filteredImages.length} {filteredImages.length === 1 ? 'design' : 'designs'}
        {activeStyle !== 'All' && ` in ${activeStyle} style`}
      </p>

      {/* Masonry Grid */}
      <div className="flex gap-4 md:gap-6">
        {columnArrays.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4 md:gap-6">
            {col.map((image, rowIdx) => {
              const flatIdx = getFlatIndex(colIdx, rowIdx)
              // Vary aspect ratios for masonry effect
              const aspectVariants = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]']
              const aspectClass = aspectVariants[(colIdx + rowIdx) % aspectVariants.length]

              return (
                <button
                  key={`${image.src}-${activeStyle}-${rowIdx}`}
                  onClick={() => openLightbox(flatIdx)}
                  className={`group relative ${aspectClass} overflow-hidden rounded-2xl bg-cream border-0 p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-crust focus-visible:ring-offset-2 w-full`}
                >
                  <Image
                    src={`${image.src}?w=600&h=800&fit=crop&q=80`}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-semibold mb-1">{image.alt}</p>
                    <p className="text-white/80 text-xs mb-2">{image.caption}</p>
                    <span className="inline-block text-xs text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full capitalize">
                      {image.style}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#6B6560] text-lg">No designs found in this style.</p>
          <button
            onClick={() => setActiveStyle('All')}
            className="mt-4 text-crust underline cursor-pointer bg-transparent border-0 text-base"
          >
            View all designs
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={0}
          ref={(el) => el?.focus()}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-0 cursor-pointer transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-0 cursor-pointer transition-colors"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${filteredImages[lightboxIndex].src}?w=1400&h=1000&fit=crop&q=90`}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border-0 cursor-pointer transition-colors"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center px-4">
            <p className="text-white font-semibold mb-1">{filteredImages[lightboxIndex].alt}</p>
            <p className="text-white/70 text-sm mb-2">{filteredImages[lightboxIndex].caption}</p>
            <p className="text-white/50 text-xs">
              {lightboxIndex + 1} of {filteredImages.length}
              {activeStyle !== 'All' && ` \u00b7 ${activeStyle} style`}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
