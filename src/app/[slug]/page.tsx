import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { eventPages, getEventPage, getAllEventSlugs } from '@/data/events'
import { allCities } from '@/data/cities'
import { CityPage } from '@/data/cities/types'
import { products, ProductPage } from '@/data/products'
import { galleryImages, categoryGalleryMap, cityPageImages, eventPageImages } from '@/data/gallery'
import ProductImageGrid from '@/components/ProductImageGrid'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import { ContactFormCTA } from '@/components/ContactForm'
import { FAQSchema } from '@/components/SchemaMarkup'
import { EventTestimonials } from '@/components/Testimonials'
import ProductGallery from '@/components/ProductGallery'

// ─── Static Params (both city + event/service pages) ───

export function generateStaticParams() {
  const eventSlugs = getAllEventSlugs().map(slug => ({ slug }))
  const citySlugs = allCities.map(city => ({ slug: city.slug }))
  const productSlugs = products.map(p => ({ slug: p.slug }))
  return [...eventSlugs, ...citySlugs, ...productSlugs]
}

// ─── Metadata ───

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEventPage(params.slug)
  if (event) {
    return {
      title: event.title,
      description: event.metaDescription,
      openGraph: {
        title: event.title,
        description: event.metaDescription,
        url: `https://www.auntielusbakery.com/${event.slug}`,
        type: 'website',
      },
      alternates: { canonical: `https://www.auntielusbakery.com/${event.slug}` },
    }
  }

  const product = products.find(p => p.slug === params.slug)
  if (product) {
    return {
      title: product.title,
      description: product.metaDescription,
      openGraph: {
        title: product.title,
        description: product.metaDescription,
        url: `https://www.auntielusbakery.com/${product.slug}`,
        siteName: "Auntie Lu's Bakery",
        type: 'website',
      },
      alternates: { canonical: `https://www.auntielusbakery.com/${product.slug}` },
    }
  }

  const city = allCities.find(c => c.slug === params.slug)
  if (city) {
    return {
      title: city.title,
      description: city.metaDescription,
      openGraph: {
        title: city.title,
        description: city.metaDescription,
        url: `https://www.auntielusbakery.com/${city.slug}`,
        siteName: "Auntie Lu's Bakery",
        type: 'website',
        images: [{ url: city.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
      },
      alternates: { canonical: `https://www.auntielusbakery.com/${city.slug}` },
    }
  }

  return {}
}

// ─── Main Route ───

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const event = getEventPage(params.slug)
  if (event) return <EventServicePage page={event} />

  const product = products.find(p => p.slug === params.slug)
  if (product) return <ProductPageView product={product} />

  const city = allCities.find(c => c.slug === params.slug)
  if (city) return <CityPageView city={city} />

  notFound()
}

// ═══════════════════════════════════════════════════════
// EVENT / SERVICE PAGE COMPONENT
// ═══════════════════════════════════════════════════════

function EventServicePage({ page }: { page: (typeof eventPages)[number] }) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: page.category === 'event' ? 'Events' : 'Products & Services', href: '/' },
    { name: page.h1.replace(' in San Diego', '').replace(' San Diego', ''), href: `/${page.slug}` },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.intro,
    provider: {
      '@type': 'Bakery',
      name: "Auntie Lu's Bakery",
      url: 'https://www.auntielusbakery.com',
      address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: 'San Diego', sameAs: 'https://en.wikipedia.org/wiki/San_Diego' },
    url: `https://www.auntielusbakery.com/${page.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FAQSchema faqs={page.faqs} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-cream py-16 md:py-24 px-[4%]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">
            Auntie Lu&apos;s Bakery &mdash; San Diego, CA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">{page.h1}</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto mb-8">{page.heroSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-dark-crust text-white px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-crust transition-colors">
              Get a Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="tel:" className="inline-flex items-center justify-center gap-2 bg-white text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline border border-blush hover:bg-cream transition-colors">
              Call Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-charcoal/80">{page.intro}</p>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white py-12 px-[4%] border-y border-blush/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {page.features.map((feature) => (
              <div key={feature} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5E34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-medium text-charcoal">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {page.sections.map((section, i) => (
        <section key={section.heading} className={`py-16 md:py-20 px-[4%] ${i % 2 === 0 ? 'bg-cream' : 'bg-white'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">{section.heading}</h2>
            <p className="text-charcoal/80 leading-relaxed text-lg">{section.content}</p>
          </div>
        </section>
      ))}

      {/* Product Image Gallery */}
      <ProductImageGrid
        title={`${page.h1.replace(' in San Diego', '')} Inspiration`}
        subtitle="Browse our recent creations for inspiration"
        images={eventPageImages}
        columns={4}
        background="white"
      />

      {/* Pricing */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Pricing</h2>
          <p className="text-5xl font-serif text-dark-crust mb-4">{page.priceRange}</p>
          <p className="text-soft-brown mb-8">Every order is custom. Contact us with your event details for an exact quote. No hidden fees.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white hover:ring-2 hover:ring-wheat transition-all">
            Request a Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-[4%] bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl p-6 shadow-sm">
                <summary className="font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <svg className="w-5 h-5 text-crust shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="mt-4 text-charcoal/70 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <EventTestimonials eventSlug={page.slug} />

      {/* Related Pages */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {page.relatedPages.map((relSlug) => {
              const rel = eventPages.find(p => p.slug === relSlug)
              if (!rel) return null
              return (
                <Link key={relSlug} href={`/${relSlug}`} className="bg-cream rounded-2xl p-6 text-center no-underline hover:shadow-md transition-shadow group">
                  <h3 className="font-serif text-lg text-dark-crust group-hover:text-crust transition-colors">{rel.h1.replace(' in San Diego', '')}</h3>
                  <p className="text-sm text-soft-brown mt-2">{rel.priceRange}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactFormCTA title={page.cta.title} description={page.cta.description} />
    </>
  )
}

// ═══════════════════════════════════════════════════════
// CITY PAGE COMPONENT (migrated from [city])
// ═══════════════════════════════════════════════════════

function CityLocalBusinessSchema({ city }: { city: CityPage }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: `Auntie Lu's Bakery - ${city.name}`,
    description: city.metaDescription,
    url: `https://www.auntielusbakery.com/${city.slug}`,
    telephone: '',
    email: 'hello@auntielusbakery.com',
    address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 32.7157, longitude: -117.1611 },
    areaServed: { '@type': 'City', name: city.name },
    priceRange: '$$',
    servesCuisine: ['Custom Cakes', 'Wedding Cakes', 'Birthday Cakes', 'Cupcakes', 'Cake Pops'],
    image: city.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    sameAs: ['https://instagram.com/auntielusbakery', 'https://facebook.com/auntielusbakery'],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

function CityPageView({ city }: { city: CityPage }) {
  const nearbyPages = city.nearbyAreas.map(slug => allCities.find(c => c.slug === slug)).filter(Boolean) as CityPage[]

  return (
    <>
      <CityLocalBusinessSchema city={city} />
      <FAQSchema faqs={[{ question: city.faqQuestion, answer: city.faqAnswer }]} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Areas We Serve', href: '/#areas' },
        { name: city.name, href: `/${city.slug}` },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">{city.region}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">{city.h1}</h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-3xl mx-auto">{city.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#products" className="inline-flex items-center justify-center gap-2 bg-dark-crust text-white px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-crust transition-colors">
              Order Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 border-2 border-dark-crust text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-dark-crust hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* City Hero Image */}
      {city.image && (
        <section className="px-[4%] pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={city.image}
                alt={`${city.name}, ${city.region} - Auntie Lu's Bakery delivery area`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="bg-white/90 backdrop-blur-sm text-dark-crust text-sm font-semibold px-4 py-2 rounded-full">
                  {city.name}, {city.region}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About the Area */}
      <section className="py-16 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">About {city.name}</h2>
          <p className="text-[#6B6560] text-lg leading-relaxed">{city.areaDescription}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-[4%] bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-8">Our Services in {city.name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {city.services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm">
                <span className="text-crust mt-0.5 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span className="text-[#6B6560]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-8">Popular in {city.name}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {city.popularProducts.map((product, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center mb-4">
                  <span className="text-crust font-serif font-bold">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-2">{product}</h3>
                <Link href="/#products" className="text-crust text-sm font-medium no-underline hover:underline">View &amp; Order &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <ProductImageGrid
        title={`Our Cakes & Treats in ${city.name}`}
        subtitle="Handcrafted desserts delivered fresh to your door"
        images={cityPageImages}
        columns={4}
        background="white"
      />

      {/* Delivery Info */}
      <section className="py-16 px-[4%] bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">Delivery to {city.name}</h2>
          <p className="text-[#6B6560] text-lg leading-relaxed">{city.deliveryInfo}</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 text-cream">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
          </svg>
          <blockquote className="text-xl md:text-2xl text-dark-crust font-serif italic leading-relaxed mb-6">
            &ldquo;{city.testimonialQuote}&rdquo;
          </blockquote>
          <cite className="text-crust font-medium not-italic">&mdash; {city.testimonialName}</cite>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[4%] bg-cream/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-8">Frequently Asked</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-serif text-xl text-dark-crust mb-4">{city.faqQuestion}</h3>
            <p className="text-[#6B6560] leading-relaxed">{city.faqAnswer}</p>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyPages.length > 0 && (
        <section className="py-16 px-[4%]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-8">Also Serving Nearby</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyPages.map((nearby) => (
                <Link key={nearby.slug} href={`/${nearby.slug}`} className="bg-cream rounded-xl p-4 text-center no-underline hover:shadow-md transition-shadow">
                  <span className="text-dark-crust font-serif font-medium">{nearby.name}</span>
                  <span className="block text-crust text-xs mt-1">Custom Cakes</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactFormCTA
        title={`Order Custom Cakes in ${city.name}`}
        description={`Ready to order? Auntie Lu's Bakery delivers custom cakes, cupcakes, and cake pops to ${city.name}. Contact us today!`}
      />
    </>
  )
}

// ═══════════════════════════════════════════════════════
// PRODUCT PAGE COMPONENT
// ═══════════════════════════════════════════════════════

const productHeroImages: Record<string, string> = {
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

function ProductPageView({ product }: { product: ProductPage }) {
  const heroImage = productHeroImages[product.slug] || productHeroImages['custom-cakes']
  const gallery = categoryGalleryMap[product.slug] || galleryImages.slice(0, 4)
  const relatedProductPages = product.relatedProducts
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as ProductPage[]

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.intro,
    brand: { '@type': 'Brand', name: "Auntie Lu's Bakery" },
    url: `https://www.auntielusbakery.com/${product.slug}`,
    offers: product.variants.map((v) => ({
      '@type': 'Offer',
      name: v.name,
      price: v.price.replace('From $', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <FAQSchema faqs={[{ question: product.faqQuestion, answer: product.faqAnswer }]} />
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: product.name, href: `/${product.slug}` },
        ]}
      />

      {/* Hero with Background Image */}
      <section className="relative pt-28 pb-20 px-[4%] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${heroImage}?w=1600&h=800&fit=crop&q=80`}
            alt={product.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">
            Auntie Lu&apos;s Bakery
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {product.h1}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {product.variants[0]?.price} and up
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white transition-colors"
            >
              Order Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold no-underline border border-white/30 hover:bg-white/20 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-charcoal/80">{product.intro}</p>
        </div>
      </section>

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section className="py-16 px-[4%] bg-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
                {product.name} Gallery
              </h2>
              <p className="text-soft-brown">Click any image to view it larger</p>
            </div>
            <ProductGallery images={gallery} columns={gallery.length <= 2 ? 2 : 3} />
          </div>
        </section>
      )}

      {/* Description */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">About Our {product.name}</h2>
          <p className="text-charcoal/80 leading-relaxed text-lg">{product.description}</p>
        </div>
      </section>

      {/* Variants / Pricing */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center">
            Options &amp; Pricing
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {product.variants.map((variant) => (
              <div
                key={variant.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-lg text-dark-crust">{variant.name}</h3>
                  <span className="text-wheat font-bold text-lg whitespace-nowrap">{variant.price}</span>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed">{variant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">Customization Options</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.customizationOptions.map((option, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream p-5 rounded-xl">
                <span className="text-crust mt-0.5 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-charcoal/80 text-sm">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">How to Order</h2>
          <p className="text-charcoal/80 leading-relaxed text-lg mb-8">{product.orderInfo}</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-dark-crust text-white px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-crust transition-colors"
          >
            Place Your Order
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <details className="group bg-cream rounded-2xl p-6 shadow-sm">
            <summary className="font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center gap-4">
              {product.faqQuestion}
              <svg className="w-5 h-5 text-crust shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-4 text-charcoal/70 leading-relaxed">{product.faqAnswer}</p>
          </details>
        </div>
      </section>

      {/* Related Products */}
      {relatedProductPages.length > 0 && (
        <section className="py-16 px-[4%] bg-cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProductPages.map((rel) => {
                const relImage = productHeroImages[rel.slug] || productHeroImages['custom-cakes']
                return (
                  <Link
                    key={rel.slug}
                    href={`/${rel.slug}`}
                    className="group relative overflow-hidden rounded-2xl no-underline aspect-[3/4]"
                  >
                    <Image
                      src={`${relImage}?w=300&h=400&fit=crop&q=80`}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-sm md:text-base text-white">{rel.name}</h3>
                      <p className="text-white/70 text-xs mt-1">{rel.variants[0]?.price}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <ContactFormCTA
        title={`Order ${product.name} Today`}
        description={`Ready to order? Tell us about your event and we'll create the perfect ${product.name.toLowerCase()} for your celebration.`}
      />
    </>
  )
}
