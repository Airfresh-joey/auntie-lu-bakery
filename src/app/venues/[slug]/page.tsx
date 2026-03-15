import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ContactFormCTA } from '@/components/ContactForm'
import { FAQSchema } from '@/components/SchemaMarkup'
import { venuePartners } from '@/data/venues-partners'

export function generateStaticParams() {
  return venuePartners.map((venue) => ({ slug: venue.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const venue = venuePartners.find((v) => v.slug === params.slug)
  if (!venue) return {}

  return {
    title: venue.title,
    description: venue.metaDescription,
    openGraph: {
      title: venue.title,
      description: venue.metaDescription,
      url: `https://www.auntielusbakery.com/venues/${venue.slug}`,
      siteName: "Auntie Lu's Bakery",
      type: 'website',
      images: [
        {
          url: `${venue.heroImage}&w=1200&h=630`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://www.auntielusbakery.com/venues/${venue.slug}`,
    },
  }
}

export default function VenuePage({
  params,
}: {
  params: { slug: string }
}) {
  const venue = venuePartners.find((v) => v.slug === params.slug)
  if (!venue) notFound()

  const otherVenues = venuePartners.filter((v) => v.slug !== venue.slug).slice(0, 3)

  const venueSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: venue.title,
    description: venue.metaDescription,
    url: `https://www.auntielusbakery.com/venues/${venue.slug}`,
    about: {
      '@type': 'Place',
      name: venue.name,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    provider: {
      '@type': 'Bakery',
      name: "Auntie Lu's Bakery",
      url: 'https://www.auntielusbakery.com',
      areaServed: {
        '@type': 'City',
        name: 'San Diego',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }}
      />
      <FAQSchema faqs={venue.faqs} />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Venue Partners', href: '/venues' },
          { name: venue.name, href: `/venues/${venue.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-[4%]">
        <div className="absolute inset-0 z-0">
          <Image
            src={venue.heroImage}
            alt={`${venue.name} wedding venue`}
            fill
            unoptimized
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-wheat font-medium text-sm tracking-widest uppercase mb-4">
            Venue Partner
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            {venue.h1}
          </h1>
          <p className="text-lg md:text-xl text-blush leading-relaxed max-w-2xl mx-auto mb-8">
            {venue.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white transition-colors"
            >
              Get a Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href="/venues"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white hover:text-dark-crust transition-colors"
            >
              All Venues
            </Link>
          </div>
        </div>
      </section>

      {/* Venue Details Strip */}
      <section className="bg-white py-6 px-[4%] border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 text-dark-crust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            <span className="font-medium">{venue.venueStyle}</span>
          </div>
          <div className="flex items-center gap-2 text-dark-crust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span className="font-medium">{venue.capacity}</span>
          </div>
          <div className="flex items-center gap-2 text-dark-crust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span className="font-medium">{venue.setting}</span>
          </div>
        </div>
      </section>

      {/* About This Venue */}
      <section className="py-16 md:py-20 px-[4%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              About {venue.name}
            </h2>
            <p className="text-[#6B6560] text-lg leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Why We Love It */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-dark-crust mb-6">
              Why We Love Working at {venue.name}
            </h3>
            <ul className="space-y-4">
              {venue.whyWeLoveIt.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  <span className="text-[#6B6560] leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cake Recommendations */}
      <section className="py-16 md:py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-wheat font-medium text-sm tracking-widest uppercase mb-3">
              Designed for {venue.name}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Our Cake Recommendations
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              These designs are specifically curated to complement {venue.name}&apos;s
              unique style and atmosphere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venue.cakeRecommendations.map((cake, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-8 border border-blush/30"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-crust mb-4 shadow-sm">
                  <span className="font-serif text-lg font-semibold">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">
                  {cake.title}
                </h3>
                <p className="text-[#6B6560] leading-relaxed">
                  {cake.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 px-[4%] bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Gallery
            </h2>
            <p className="text-[#6B6560] text-lg">
              Inspiration from celebrations at {venue.name}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venue.gallery.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B6560] text-lg">
              Common questions about cakes for {venue.name} weddings
            </p>
          </div>
          <div className="space-y-4">
            {venue.faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-cream rounded-2xl overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer font-serif text-lg text-dark-crust flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-crust flex-shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#6B6560] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Venues */}
      <section className="py-16 md:py-20 px-[4%] bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Explore More Venues
            </h2>
            <p className="text-[#6B6560] text-lg">
              Discover other San Diego venues we partner with
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherVenues.map((v) => (
              <Link
                key={v.slug}
                href={`/venues/${v.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 no-underline group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={v.heroImage}
                    alt={`${v.name} venue`}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-dark-crust mb-1">
                    {v.name}
                  </h3>
                  <p className="text-[#6B6560] text-sm">{v.venueStyle}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/venues"
              className="inline-flex items-center gap-2 text-crust font-medium no-underline hover:text-dark-crust transition-colors"
            >
              View All Venue Partners
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactFormCTA
        title={`Planning a Wedding at ${venue.name}?`}
        description={`Tell us about your celebration and we'll design a custom cake that's perfect for ${venue.name}. Free consultations and tastings available.`}
      />
    </>
  )
}
