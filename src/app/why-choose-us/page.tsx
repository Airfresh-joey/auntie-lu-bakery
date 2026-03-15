import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Why Choose Us | 10 Reasons to Choose Auntie Lu's Bakery San Diego",
  description: "Discover why San Diego families trust Auntie Lu's Bakery for custom cakes, wedding cakes, and baked goods. Quality ingredients, expert designs, on-time delivery, and a satisfaction guarantee.",
  openGraph: {
    title: "Why Choose Auntie Lu's Bakery | San Diego's Trusted Custom Bakery",
    description: "Quality ingredients, custom design expertise, on-time delivery, competitive pricing, and a family-owned commitment to excellence. See why San Diego chooses Auntie Lu's.",
    url: 'https://www.auntielusbakery.com/why-choose-us',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/why-choose-us',
  },
}

const reasons = [
  {
    number: '01',
    title: 'Premium Quality Ingredients',
    description: 'We use locally-sourced flour, real butter, farm-fresh eggs, and zero preservatives. Every ingredient is chosen for flavor and quality \u2014 never shortcuts. You can taste the difference in every bite.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Custom Design Expertise',
    description: 'Our cake designers are true artists. From hand-painted fondant to sculpted sugar flowers, we bring your vision to life with precision and creativity. No design is too simple or too ambitious.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Proudly San Diego Local',
    description: 'We know San Diego inside and out \u2014 the venues, the communities, the events. Being local means we understand your needs, deliver with care, and are always just a phone call away.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Family-Owned & Operated',
    description: 'Auntie Lu\u2019s is a real family bakery, not a franchise or factory. You work directly with us from consultation to delivery. Every order gets personal attention because our family name is on it.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Trusted Venue Relationships',
    description: 'We\u2019ve delivered to venues across San Diego County \u2014 from the Hotel del Coronado to intimate La Jolla gardens. Our venue relationships mean smooth setups and a baker your coordinator already trusts.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'On-Time, Every Time',
    description: 'Your event doesn\u2019t wait, and neither do we. We deliver in temperature-controlled vehicles, arrive early, and handle on-site setup with care. In hundreds of deliveries, we\u2019ve never been late.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Competitive & Transparent Pricing',
    description: 'Custom doesn\u2019t have to mean expensive. We offer upfront pricing with no hidden fees, and our rates are competitive with other San Diego bakeries \u2014 often better for the same level of quality.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Rave Customer Reviews',
    description: 'Don\u2019t just take our word for it. Our customers consistently share 5-star reviews praising our flavor, artistry, and reliability. See what real San Diego customers say about working with us.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '09',
    title: 'Award-Winning Creations',
    description: 'Our cakes and baked goods have been recognized by San Diego\u2019s best wedding publications and food blogs. We bring that same award-winning quality to every order, big or small.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    number: '10',
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every order with our satisfaction guarantee. If something isn\u2019t right, we\u2019ll make it right \u2014 whether that means a redo, a refund, or whatever it takes to make you happy.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Jessica M.',
    event: 'Wedding Cake',
    text: 'Auntie Lu\u2019s created the most stunning wedding cake I\u2019ve ever seen. Our guests couldn\u2019t stop talking about how beautiful AND delicious it was. Worth every penny!',
    rating: 5,
  },
  {
    name: 'David & Sarah K.',
    event: 'Anniversary Celebration',
    text: 'We\u2019ve ordered from Auntie Lu\u2019s three years running for our anniversary. The quality and care never wavers. They feel like family at this point.',
    rating: 5,
  },
  {
    name: 'Rachel T.',
    event: 'Corporate Event',
    text: 'We needed 200 cake pops branded with our company logo for a product launch. The detail was incredible, they arrived on time, and our team loved them. Already planning our next order.',
    rating: 5,
  },
  {
    name: 'Maria L.',
    event: 'Quincea\u00f1era Cake',
    text: 'The cake was exactly what my daughter dreamed of. Auntie Lu\u2019s took her sketch and turned it into a breathtaking 3-tier masterpiece. So grateful for their talent and patience.',
    rating: 5,
  },
]

export default function WhyChooseUsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Why Choose Us', url: 'https://www.auntielusbakery.com/why-choose-us' },
      ]} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Why Choose Us', href: '/why-choose-us' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">The Auntie Lu&apos;s Difference</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            10 Reasons San Diego Chooses Us
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            From premium ingredients to on-time delivery, here&apos;s why families and event planners across San Diego trust Auntie Lu&apos;s for their most important celebrations.
          </p>
        </div>
      </section>

      {/* 10 Reasons Grid */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 rounded-2xl ${
                  i % 2 === 0 ? 'bg-cream' : 'bg-blush/20'
                }`}
              >
                <div className="flex-shrink-0 flex items-center gap-4">
                  <span className="font-serif text-4xl md:text-5xl text-wheat/40 font-bold leading-none">
                    {reason.number}
                  </span>
                  <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl text-dark-crust mb-3">
                    {reason.title}
                  </h2>
                  <p className="text-[#6B6560] leading-relaxed m-0">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Real Reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What Our Customers Say</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Hear from real San Diego customers who trusted us with their celebrations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B6560] leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-dark-crust font-semibold m-0">{t.name}</p>
                  <p className="text-soft-brown text-sm m-0">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">By the Numbers</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Our Track Record Speaks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '1,500+', label: 'Cakes Delivered' },
              { stat: '100%', label: 'On-Time Rate' },
              { stat: '4.9', label: 'Average Rating' },
              { stat: '50+', label: 'Venue Partners' },
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <p className="font-serif text-4xl md:text-5xl text-crust font-bold mb-2">{item.stat}</p>
                <p className="text-[#6B6560] font-medium text-sm m-0">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Join thousands of happy San Diego customers. Tell us about your celebration and let&apos;s create something unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/compare" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              See How We Compare
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
