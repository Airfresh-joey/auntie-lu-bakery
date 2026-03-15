import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'
import { galleryImages } from '@/data/gallery'
import ProductGallery from '@/components/ProductGallery'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ContactFormCTA } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Our Products | Auntie Lu's Bakery",
  description:
    "Browse our full selection of custom cakes, cupcakes, cookies, pastries, and specialty baked goods. Handcrafted with love in San Diego.",
  openGraph: {
    title: "Our Products | Auntie Lu's Bakery",
    description:
      "Browse our full selection of custom cakes, cupcakes, cookies, pastries, and specialty baked goods.",
    url: 'https://www.auntielusbakery.com/products',
    type: 'website',
  },
  alternates: { canonical: 'https://www.auntielusbakery.com/products' },
}

const categoryImages: Record<string, string> = {
  'custom-cakes': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  cupcakes: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec',
  cookies: 'https://images.unsplash.com/photo-1519869325930-281384f7f584',
  pastries: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636',
  'gluten-free': 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d',
  'vegan-cakes': 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
  'sugar-free': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
  'photo-cakes': 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d',
  'tiered-cakes': 'https://images.unsplash.com/photo-1562440499-64c9a111f713',
  'sheet-cakes': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
}

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">
            Handcrafted with Love
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Our Baked Creations
          </h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            From elegant wedding cakes to playful cupcakes and artisan cookies,
            every item is baked fresh and crafted to make your celebration
            unforgettable.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const imageSrc = categoryImages[product.slug] || categoryImages['custom-cakes']
              return (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  className="group relative overflow-hidden rounded-2xl no-underline bg-cream aspect-[4/3]"
                >
                  <Image
                    src={`${imageSrc}?w=600&h=450&fit=crop&q=80`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {product.variants[0]?.price}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full group-hover:bg-white/30 transition-colors">
                      View Details
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Gallery
            </h2>
            <p className="text-soft-brown max-w-xl mx-auto">
              A glimpse at some of our recent creations. Click any image to view
              it larger.
            </p>
          </div>
          <ProductGallery images={galleryImages} columns={4} />
        </div>
      </section>

      <ContactFormCTA
        title="Ready to Order?"
        description="Tell us about your event and we'll create something beautiful. Custom quotes available for all orders."
      />
    </>
  )
}
