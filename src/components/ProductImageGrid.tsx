import Image from 'next/image'

export interface ProductGridImage {
  src: string
  alt: string
  category?: string
}

interface ProductImageGridProps {
  title?: string
  subtitle?: string
  images: ProductGridImage[]
  columns?: 2 | 3 | 4
  background?: 'white' | 'cream'
}

export default function ProductImageGrid({
  title = 'Our Creations',
  subtitle = 'Handcrafted with love for every occasion',
  images,
  columns = 4,
  background = 'cream',
}: ProductImageGridProps) {
  const bgClass = background === 'cream' ? 'bg-cream' : 'bg-white'

  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 3
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-2 lg:grid-cols-4'

  return (
    <section className={`py-16 px-[4%] ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-soft-brown">{subtitle}</p>
          )}
        </div>
        <div className={`grid ${colClass} gap-4 md:gap-6`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream"
            >
              <Image
                src={`${image.src}?w=600&h=450&fit=crop&q=80`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                {image.category && (
                  <span className="inline-block mt-1 text-xs text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {image.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
