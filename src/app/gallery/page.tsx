'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type GalleryItem = { src: string; alt: string; category: string; local?: boolean }

const galleryImages: GalleryItem[] = [
  { src: '/gallery/sourdough/sourdough-01.jpg', alt: 'Hand-scored artisan sourdough loaf with golden crust on a wooden board', category: 'Sourdough', local: true },
  { src: '/gallery/sourdough/sourdough-02.jpg', alt: 'Rustic sourdough loaf with crisp crackled crust', category: 'Sourdough', local: true },
  { src: '/gallery/sourdough/sourdough-03.jpg', alt: 'Golden-brown round sourdough loaf fresh from the oven', category: 'Sourdough', local: true },
  { src: '/gallery/sourdough/sourdough-04.jpg', alt: 'Beautifully scored sourdough boule with a deep golden crust', category: 'Sourdough', local: true },
  { src: '/gallery/sourdough/sourdough-05.jpg', alt: 'Cluster of seeded sourdough rolls with sesame and poppy', category: 'Sourdough', local: true },
  { src: '/gallery/sourdough/sourdough-06.jpg', alt: 'Classic round sourdough loaf with a crisp golden crust', category: 'Sourdough', local: true },
  { src: '/gallery/cake-pops/baseball-cake-pop.jpg', alt: 'Baseball cake pop with red stitching on a sunny ballfield', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/sprinkle-49-cake-pop.jpg', alt: 'White chocolate cake pop with rainbow sprinkles and a "49" number topper', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/first-birthday-cake-pops.jpg', alt: 'First birthday cake pops with pink "1" toppers and monogram on marble', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/thank-you-basket-cake-pops.jpg', alt: 'Basket of sprinkle cake pops with "Thank you for celebrating" favor tags', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/one-birthday-cake-pop.jpg', alt: 'Yellow "ONE" first birthday cake pop on a sunshine napkin', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/cake-pops-01.jpg', alt: 'Colorful cake pops coated in white chocolate with vibrant rainbow sprinkles', category: 'Cake Pops', local: true },
  { src: '/gallery/cake-pops/cake-pops-02.jpg', alt: 'Cake pops with creamy frosting base and crushed cookie crumb topping', category: 'Cake Pops', local: true },
]

const categories = ['All', 'Sourdough', 'Cake Pops']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

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
            src="/gallery/sourdough/sourdough-01.jpg"
            alt="Auntie Lu's Bakery creations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Our Creations
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse our artisan sourdough and handcrafted cake pops.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 px-[4%]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setLightboxIndex(null)
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border-0 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-dark-crust text-white shadow-md'
                    : 'bg-white text-[#6B6560] hover:bg-dark-crust/5 shadow-sm'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({galleryImages.filter(img => img.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Image Count */}
          <p className="text-center text-[#6B6560] text-sm mb-8">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <button
                key={`${image.src}-${activeCategory}`}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream border-0 p-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-crust focus-visible:ring-offset-2"
              >
                <Image
                  src={image.local ? image.src : `${image.src}?w=800&h=600&fit=crop&q=80`}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium mb-1">{image.alt}</p>
                  <span className="inline-block text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {image.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B6560] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Love What You See?</h2>
          <p className="text-white/80 text-lg mb-8">
            Ready to order sourdough or cake pops? Get in touch and let&apos;s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Order
            </Link>
            <Link href="/#products" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Products
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
              src={filteredImages[lightboxIndex].local ? filteredImages[lightboxIndex].src : `${filteredImages[lightboxIndex].src}?w=1400&h=1000&fit=crop&q=90`}
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

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white font-medium mb-1">{filteredImages[lightboxIndex].alt}</p>
            <p className="text-white/60 text-sm">
              {lightboxIndex + 1} of {filteredImages.length}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
