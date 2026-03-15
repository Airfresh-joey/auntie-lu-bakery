import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { portfolioCategories } from '@/data/portfolio'

export const metadata: Metadata = {
  title: "Cake Design Portfolio | Custom Cake Gallery San Diego",
  description: 'Browse our complete cake design portfolio. Wedding cakes, birthday cakes, quinceañera cakes, cupcakes, cookies, corporate cakes, and specialty designs by Auntie Lu\'s Bakery.',
  openGraph: {
    title: "Cake Design Portfolio | Auntie Lu's Bakery San Diego",
    description: 'Browse our complete cake design portfolio featuring stunning custom cakes for every occasion.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&h=900&fit=crop"
            alt="Auntie Lu's Bakery cake portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Portfolio</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Cake Design Portfolio
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Explore our collection of custom cakes, cupcakes, cookies, and specialty desserts.
            Every creation is handcrafted with love in San Diego.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 px-[4%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">Browse by Category</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Our Specialties</h2>
            <p className="text-soft-brown text-lg max-w-2xl mx-auto">
              Click on any category to view our full portfolio of designs, filtered by style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl no-underline"
              >
                <Image
                  src={`${category.heroImage}?w=600&h=750&fit=crop&q=80`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-dark-crust/90 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-2">{category.name}</h3>
                  <p className="text-white/70 text-sm mb-3">{category.images.length} designs</p>
                  <span className="inline-flex items-center text-wheat text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Gallery
                    <svg className="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-dark-crust mb-2">
                {portfolioCategories.reduce((sum, cat) => sum + cat.images.length, 0)}+
              </p>
              <p className="text-soft-brown text-sm">Designs in Portfolio</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-dark-crust mb-2">{portfolioCategories.length}</p>
              <p className="text-soft-brown text-sm">Cake Categories</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-dark-crust mb-2">4</p>
              <p className="text-soft-brown text-sm">Design Styles</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-dark-crust mb-2">100%</p>
              <p className="text-soft-brown text-sm">Custom Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Inspired by What You See?</h2>
          <p className="text-white/80 text-lg mb-8">
            Every cake in our portfolio started as an idea. Share yours with us and let&apos;s create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Custom Order
            </Link>
            <Link href="/pricing" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
