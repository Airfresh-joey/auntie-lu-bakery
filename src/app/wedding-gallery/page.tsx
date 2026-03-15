'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const weddingImages = [
  // Classic / Traditional
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', alt: 'Elegant three-tier wedding cake with cascading sugar flowers', style: 'Classic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d', alt: 'White fondant wedding cake with fresh floral accents', style: 'Classic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713', alt: 'Classic tiered wedding cake with pearl piping details', style: 'Classic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552', alt: 'Traditional white wedding cake with lace fondant overlay', style: 'Classic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', alt: 'Five-tier buttercream wedding cake with gold leaf accents', style: 'Classic', color: 'Gold' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec', alt: 'Round tiered classic wedding cake with fondant roses', style: 'Classic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d', alt: 'Elegant ivory wedding cake with hand-piped scrollwork', style: 'Classic', color: 'Ivory' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce', alt: 'Rich chocolate wedding cake with gold drip detailing', style: 'Classic', color: 'Chocolate' },
  { src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2', alt: 'Classic buttercream wedding cake with sugar flower cascade', style: 'Classic', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307', alt: 'Pastel pink classic wedding cake with fondant ruffles', style: 'Classic', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', alt: 'Ivory three-tier wedding cake with pearlized finish', style: 'Classic', color: 'Ivory' },
  { src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e', alt: 'Classic white wedding cake with sugar paste orchids', style: 'Classic', color: 'White' },

  // Modern / Contemporary
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636', alt: 'Geometric modern wedding cake with metallic accents', style: 'Modern', color: 'Gold' },
  { src: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086', alt: 'Minimalist modern wedding cake with clean lines', style: 'Modern', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e', alt: 'Modern marble-effect fondant wedding cake', style: 'Modern', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1600326145308-d3d00a4c7e4e', alt: 'Abstract painted buttercream modern wedding cake', style: 'Modern', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd', alt: 'Modern acrylic-tier wedding cake with fresh flowers', style: 'Modern', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7', alt: 'Sleek contemporary wedding cake with edible gold paint', style: 'Modern', color: 'Gold' },
  { src: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75', alt: 'Modern hexagonal tiered wedding cake', style: 'Modern', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1519869325930-281384f7f584', alt: 'Modern watercolor-effect wedding cake with ombre', style: 'Modern', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', alt: 'Contemporary black and gold wedding cake', style: 'Modern', color: 'Gold' },
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a', alt: 'Modern concrete-textured wedding cake with succulents', style: 'Modern', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1586444248902-2367d0834971', alt: 'Geometric faceted modern wedding cake in blush', style: 'Modern', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1549931319-a545753467c8', alt: 'Modern asymmetric wedding cake with fresh berries', style: 'Modern', color: 'White' },

  // Rustic
  { src: 'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2', alt: 'Rustic naked wedding cake with wildflowers and greenery', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1556217477-d325251ece38', alt: 'Semi-naked rustic wedding cake with fig and berry accents', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f', alt: 'Rustic buttercream cake with lavender sprigs', style: 'Rustic', color: 'Lavender' },
  { src: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46', alt: 'Naked cake with caramel drip on wood stump', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5', alt: 'Rustic textured buttercream with eucalyptus garland', style: 'Rustic', color: 'Greenery' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', alt: 'Semi-naked rustic cake with seasonal autumn fruits', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956', alt: 'Rustic log-themed wedding cake with fondant bark', style: 'Rustic', color: 'Chocolate' },
  { src: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9', alt: 'Naked wedding cake with powdered sugar and roses', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d', alt: 'Rustic tiered cake with fresh garden roses', style: 'Rustic', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', alt: 'Rustic wedding cake with burlap ribbon accent', style: 'Rustic', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce', alt: 'Rustic chocolate drip cake with candied fruit', style: 'Rustic', color: 'Chocolate' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307', alt: 'Naked cake tower with fresh strawberries and cream', style: 'Rustic', color: 'White' },

  // Boho / Bohemian
  { src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2', alt: 'Boho wedding cake with dried flowers and pampas grass', style: 'Boho', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd', alt: 'Bohemian tiered cake with macramé lace fondant', style: 'Boho', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75', alt: 'Boho cake with earthy tones and dried botanicals', style: 'Boho', color: 'Ivory' },
  { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d', alt: 'Bohemian watercolor wedding cake with feather accents', style: 'Boho', color: 'Lavender' },
  { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713', alt: 'Boho chic naked cake with succulent decorations', style: 'Boho', color: 'Greenery' },
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', alt: 'Bohemian three-tier cake with dreamcatcher topper', style: 'Boho', color: 'White' },
  { src: 'https://images.unsplash.com/photo-1519869325930-281384f7f584', alt: 'Boho ombre cake with pressed edible flowers', style: 'Boho', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552', alt: 'Free-spirited boho cake with trailing greenery', style: 'Boho', color: 'Greenery' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec', alt: 'Boho desert-inspired cake with cactus fondant', style: 'Boho', color: 'Greenery' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e', alt: 'Bohemian textured buttercream with dried orange slices', style: 'Boho', color: 'Gold' },
  { src: 'https://images.unsplash.com/photo-1600326145308-d3d00a4c7e4e', alt: 'Boho wedding cake with hand-painted florals', style: 'Boho', color: 'Blush' },
  { src: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086', alt: 'Bohemian cake with whimsical wildflower cascade', style: 'Boho', color: 'Lavender' },
  { src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7', alt: 'Boho tiered cake with pampas and terracotta accents', style: 'Boho', color: 'Gold' },
]

const styles = ['All Styles', 'Classic', 'Modern', 'Rustic', 'Boho']
const colors = ['All Colors', 'White', 'Ivory', 'Blush', 'Gold', 'Chocolate', 'Lavender', 'Greenery']

export default function WeddingGalleryPage() {
  const [activeStyle, setActiveStyle] = useState('All Styles')
  const [activeColor, setActiveColor] = useState('All Colors')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = weddingImages.filter((img) => {
    const styleMatch = activeStyle === 'All Styles' || img.style === activeStyle
    const colorMatch = activeColor === 'All Colors' || img.color === activeColor
    return styleMatch && colorMatch
  })

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

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1600&h=900&fit=crop"
            alt="Collection of wedding cakes by Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Wedding Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Wedding Cake Inspiration
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse over 50 wedding cakes we&apos;ve created for San Diego couples. Filter by style and color to find your perfect design.
          </p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-16 px-[4%]">
        <div className="max-w-7xl mx-auto">
          {/* Style Filter */}
          <div className="mb-6">
            <p className="text-dark-crust font-medium text-sm mb-3 text-center">Filter by Style</p>
            <div className="flex flex-wrap justify-center gap-3">
              {styles.map((style) => (
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
                  {style !== 'All Styles' && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({weddingImages.filter(img => img.style === style).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-10">
            <p className="text-dark-crust font-medium text-sm mb-3 text-center">Filter by Color</p>
            <div className="flex flex-wrap justify-center gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setActiveColor(color)
                    setLightboxIndex(null)
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border-0 cursor-pointer ${
                    activeColor === color
                      ? 'bg-dark-crust text-white shadow-md'
                      : 'bg-white text-[#6B6560] hover:bg-dark-crust/5 shadow-sm'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Image Count */}
          <p className="text-center text-[#6B6560] text-sm mb-8">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'cake' : 'cakes'}
            {activeStyle !== 'All Styles' && ` in ${activeStyle} style`}
            {activeColor !== 'All Colors' && ` • ${activeColor}`}
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={`${image.src}-${image.alt}-${index}`}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream border-0 p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-crust focus-visible:ring-offset-2"
              >
                <Image
                  src={`${image.src}?w=600&h=450&fit=crop&q=80`}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium mb-1.5 line-clamp-2">{image.alt}</p>
                  <div className="flex gap-2">
                    <span className="inline-block text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {image.style}
                    </span>
                    <span className="inline-block text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {image.color}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B6560] text-lg mb-2">No cakes found matching your filters.</p>
              <p className="text-[#6B6560] text-sm">Try adjusting your style or color selection.</p>
              <button
                onClick={() => { setActiveStyle('All Styles'); setActiveColor('All Colors') }}
                className="mt-4 text-wheat font-medium text-sm hover:text-crust transition-colors bg-transparent border-0 cursor-pointer underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Found Your Dream Design?</h2>
          <p className="text-white/80 text-lg mb-8">
            Every wedding cake is custom-designed just for you. Share your inspiration and let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Book a Consultation
            </Link>
            <Link href="/wedding-services" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View Wedding Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Wedding cake image lightbox"
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
            <p className="text-white font-medium mb-1">{filteredImages[lightboxIndex].alt}</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-white/60 text-sm">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <span className="inline-block text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {filteredImages[lightboxIndex].style}
              </span>
              <span className="inline-block text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {filteredImages[lightboxIndex].color}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
