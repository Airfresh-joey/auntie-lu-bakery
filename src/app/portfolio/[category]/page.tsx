import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import PortfolioGallery from '@/components/PortfolioGallery'
import { portfolioCategories, getPortfolioCategory, getAllPortfolioSlugs } from '@/data/portfolio'

interface PageProps {
  params: { category: string }
}

export function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ category: slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getPortfolioCategory(params.category)
  if (!category) return { title: 'Not Found' }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      type: 'website',
      images: [{ url: `${category.heroImage}?w=1200&h=630&fit=crop`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://www.auntielusbakery.com/portfolio/${category.slug}`,
    },
  }
}

export default function PortfolioCategoryPage({ params }: PageProps) {
  const category = getPortfolioCategory(params.category)
  if (!category) notFound()

  const currentIndex = portfolioCategories.findIndex(c => c.slug === category.slug)
  const prevCategory = portfolioCategories[(currentIndex - 1 + portfolioCategories.length) % portfolioCategories.length]
  const nextCategory = portfolioCategories[(currentIndex + 1) % portfolioCategories.length]

  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: category.name, href: `/portfolio/${category.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${category.heroImage}?w=1600&h=900&fit=crop`}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <Link href="/portfolio" className="inline-flex items-center text-white/80 text-sm hover:text-white transition-colors no-underline mb-4">
            <svg className="mr-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Categories
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl mx-auto leading-tight">
            {category.title}
          </h1>
          <p className="text-wheat font-medium tracking-wide text-sm mb-4">{category.heroSubtitle}</p>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-[4%]">
        <div className="max-w-7xl mx-auto">
          <PortfolioGallery images={category.images} />
        </div>
      </section>

      {/* Navigate Categories */}
      <section className="py-12 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">Explore More Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/portfolio/${prevCategory.slug}`}
              className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={`${prevCategory.heroImage}?w=160&h=160&fit=crop`}
                  alt={prevCategory.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <p className="text-xs text-soft-brown mb-1">Previous</p>
                <p className="font-serif text-lg text-dark-crust group-hover:text-crust transition-colors">{prevCategory.name}</p>
                <p className="text-xs text-[#6B6560]">{prevCategory.images.length} designs</p>
              </div>
            </Link>
            <Link
              href={`/portfolio/${nextCategory.slug}`}
              className="group flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow no-underline sm:flex-row-reverse sm:text-right"
            >
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={`${nextCategory.heroImage}?w=160&h=160&fit=crop`}
                  alt={nextCategory.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-soft-brown mb-1">Next</p>
                <p className="font-serif text-lg text-dark-crust group-hover:text-crust transition-colors">{nextCategory.name}</p>
                <p className="text-xs text-[#6B6560]">{nextCategory.images.length} designs</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Love What You See?</h2>
          <p className="text-white/80 text-lg mb-8">
            Let us create a custom {category.name.toLowerCase().replace(/s$/, '')} just for you. Every design is tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Order
            </Link>
            <Link href="/portfolio" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View All Categories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
