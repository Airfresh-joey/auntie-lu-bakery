import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { venuePartners } from '@/data/venues-partners'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'San Diego Venue Partners - Wedding Cakes for Top Venues | Auntie Lu\'s Bakery',
  description:
    'Auntie Lu\'s Bakery partners with San Diego\'s finest wedding venues. Custom cakes for Hotel del Coronado, The Lodge at Torrey Pines, Rancho Valencia, The Prado, and more.',
  openGraph: {
    title: 'San Diego Venue Partners | Auntie Lu\'s Bakery',
    description:
      'Custom wedding cakes designed for San Diego\'s most iconic venues. Explore our venue partnerships and see cakes crafted for each location.',
    url: 'https://www.auntielusbakery.com/venues',
    siteName: "Auntie Lu's Bakery",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/venues',
  },
}

export default function VenuesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Venue Partners', href: '/venues' },
        ]}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 px-[4%] bg-gradient-to-b from-dark-crust to-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-medium text-sm tracking-widest uppercase mb-4">
            Our Venue Partners
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            San Diego&apos;s Finest Wedding Venues
          </h1>
          <p className="text-lg md:text-xl text-blush leading-relaxed max-w-2xl mx-auto">
            We partner with the most iconic venues in San Diego to create
            custom cakes that perfectly complement each setting. Explore our
            venue partnerships below.
          </p>
        </div>
      </section>

      {/* Venue Grid */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venuePartners.map((venue) => (
              <article
                key={venue.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <Link
                  href={`/venues/${venue.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={venue.heroImage}
                    alt={`${venue.name} wedding venue in San Diego`}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  {/* Venue Style Badge */}
                  <span className="inline-block self-start bg-cream text-crust text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    {venue.venueStyle}
                  </span>

                  {/* Name */}
                  <h2 className="font-serif text-xl text-dark-crust mb-2 leading-snug">
                    <Link
                      href={`/venues/${venue.slug}`}
                      className="no-underline text-dark-crust hover:text-crust transition-colors"
                    >
                      {venue.name}
                    </Link>
                  </h2>

                  {/* Tagline */}
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-1">
                    {venue.tagline}
                  </p>

                  {/* Details */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      {venue.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      {venue.setting}
                    </span>
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={`/venues/${venue.slug}`}
                    className="inline-flex items-center gap-1 text-crust text-sm font-medium no-underline hover:text-dark-crust transition-colors pt-4 border-t border-gray-100"
                  >
                    View Cake Recommendations
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-wheat font-medium text-sm tracking-widest uppercase mb-3">
              Why Venues Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              A Trusted Venue Partner
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              San Diego&apos;s top venues trust Auntie Lu&apos;s Bakery because we
              deliver excellence every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                ),
                title: 'Venue Coordination',
                description: 'We work directly with your venue\'s events team on delivery, setup, and timing.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                ),
                title: 'Custom Designs',
                description: 'Every cake is designed to complement your venue\'s architecture and atmosphere.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                ),
                title: 'On-Time Delivery',
                description: 'Reliable delivery with venue-specific logistics planning for every event.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                ),
                title: 'Tasting Sessions',
                description: 'Complimentary tastings for couples who have booked one of our partner venues.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-crust mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{feature.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a Wedding at a San Diego Venue?"
        description="Contact us for a free consultation. We'll design a cake that's perfect for your venue and celebration."
        buttonText="Get a Free Quote"
        buttonHref="/#contact"
      />
    </>
  )
}
