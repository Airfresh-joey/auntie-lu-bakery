'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const galleryImages = [
  // Wedding Cakes
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', alt: 'Elegant Three-Tier Wedding Cake', category: 'Wedding Cakes' },
  { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d', alt: 'White Floral Wedding Cake', category: 'Wedding Cakes' },
  { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713', alt: 'Classic Tiered Wedding Cake', category: 'Wedding Cakes' },
  { src: 'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2', alt: 'Rustic Wedding Cake with Flowers', category: 'Wedding Cakes' },

  // Birthday Cakes
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', alt: 'Colorful Birthday Celebration Cake', category: 'Birthday Cakes' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec', alt: 'Sprinkle-Topped Birthday Cupcakes', category: 'Birthday Cakes' },
  { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d', alt: 'Beautifully Decorated Birthday Cake', category: 'Birthday Cakes' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce', alt: 'Rich Chocolate Birthday Cake', category: 'Birthday Cakes' },

  // Cupcakes
  { src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2', alt: 'Gourmet Frosted Cupcakes', category: 'Cupcakes' },
  { src: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd', alt: 'Vanilla Bean Cupcakes', category: 'Cupcakes' },
  { src: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75', alt: 'Decorated Cupcake Assortment', category: 'Cupcakes' },
  { src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7', alt: 'Mini Cupcakes with Buttercream', category: 'Cupcakes' },

  // Sourdough
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff', alt: 'Artisan Sourdough Loaf', category: 'Sourdough' },
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a', alt: 'Fresh Scored Sourdough', category: 'Sourdough' },
  { src: 'https://images.unsplash.com/photo-1586444248902-2367d0834971', alt: 'Sourdough Bread Basket', category: 'Sourdough' },
  { src: 'https://images.unsplash.com/photo-1549931319-a545753467c8', alt: 'Golden Sourdough Rolls', category: 'Sourdough' },

  // Cake Pops
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e', alt: 'Assorted Chocolate Cake Pops', category: 'Cake Pops' },
  { src: 'https://images.unsplash.com/photo-1600326145308-d3d00a4c7e4e', alt: 'Decorated Party Cake Pops', category: 'Cake Pops' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307', alt: 'Pink Sprinkle Cake Pops', category: 'Cake Pops' },

  // Cookies & Pastries
  { src: 'https://images.unsplash.com/photo-1519869325930-281384f7f584', alt: 'Decorated Sugar Cookies', category: 'Cookies' },
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636', alt: 'Fresh Baked Pastry Assortment', category: 'Pastries' },
  { src: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086', alt: 'Buttery Croissants', category: 'Pastries' },
  { src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e', alt: 'Chocolate Chip Cookies', category: 'Cookies' },
  { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', alt: 'Fresh Danish Pastries', category: 'Pastries' },
]

const categories = ['All', 'Wedding Cakes', 'Birthday Cakes', 'Cupcakes', 'Sourdough', 'Cake Pops', 'Cookies', 'Pastries']

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
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&h=900&fit=crop"
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
            Browse our portfolio of custom cakes, artisan sourdough, handcrafted cake pops, and more.
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
                  src={`${image.src}?w=600&h=450&fit=crop&q=80`}
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
            Let us create something beautiful for your next celebration. Every design is custom-made just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Order
            </Link>
            <Link href="/products" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
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
