import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Corporate Catering & Business Events | Auntie Lu's Bakery - San Diego",
  description: "Elevate your corporate events with Auntie Lu's Bakery. Custom logo cakes, branded desserts, office celebrations, client gifts, holiday gifting, and monthly office treat subscriptions in San Diego.",
  openGraph: {
    title: "Corporate Catering & Business Events | Auntie Lu's Bakery",
    description: "Elevate your corporate events with custom logo cakes, branded desserts, office celebrations, and monthly treat subscriptions. Serving San Diego businesses.",
    url: 'https://www.auntielusbakery.com/corporate',
    type: 'website',
  },
  alternates: { canonical: 'https://www.auntielusbakery.com/corporate' },
}

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Corporate Catering',
    description: 'Full-service catering for board meetings, lunch-and-learns, company-wide events, and conferences. From artisan bread spreads to elegant dessert tables.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Office Celebrations',
    description: 'Make every employee birthday, work anniversary, promotion, and retirement special with custom cakes, cupcake towers, and cake pop displays.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Company Events & Parties',
    description: 'Holiday parties, team-building events, product launches, and grand openings. We create memorable dessert experiences for any corporate occasion.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Client Appreciation Gifts',
    description: 'Show your clients you care with beautifully packaged artisan treats. Custom gift boxes, branded packaging, and handwritten notes available.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Holiday Corporate Gifting',
    description: 'End-of-year gifts, holiday party desserts, and seasonal treat boxes for employees and clients. Order early for Thanksgiving, Christmas, and New Year&apos;s.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Logo Cakes & Branded Desserts',
    description: 'Your company logo on custom cakes, cookies, and cake pops. Perfect for trade shows, open houses, and corporate events that need brand presence.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Bulk Ordering',
    description: 'Large-quantity orders for events of any size. 50 to 5,000+ servings with volume pricing. We handle the logistics so you can focus on your event.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Monthly Office Treats Subscription',
    description: 'Keep your team happy with recurring deliveries of fresh-baked sourdough, seasonal cake pops, and rotating pastries. Customizable frequency and selections.',
  },
]

const testimonials = [
  {
    quote: 'Auntie Lu&apos;s has been our go-to for every company event for the past two years. The logo cake pops at our product launch were a huge hit with clients and employees alike.',
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    company: 'Teradata San Diego',
    stars: 5,
  },
  {
    quote: 'We switched to their monthly office treats subscription and team morale noticeably improved. The sourdough Fridays are legendary in our office now.',
    name: 'David Park',
    role: 'VP of People',
    company: 'Qualcomm',
    stars: 5,
  },
  {
    quote: 'They handled our 500-person holiday party dessert spread flawlessly. The branded cookies were elegant, and the custom cake was a showstopper. Highly recommend for large events.',
    name: 'Jennifer Adams',
    role: 'Events Coordinator',
    company: 'Procopio Law Firm',
    stars: 5,
  },
]

const caseStudies = [
  {
    company: 'BioMed Startup Launch Party',
    industry: 'Healthcare / Biotech',
    challenge: 'A Sorrento Valley biotech startup needed a memorable dessert experience for their 200-person product launch event with branded elements throughout.',
    solution: 'We created 400 custom cake pops in their brand colors, a three-tier logo cake, and an artisan bread wall for the appetizer spread. Everything was delivered and set up on-site.',
    result: 'The event was featured in the San Diego Business Journal. The company now uses us for all quarterly all-hands meetings and client events.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    company: 'Downtown Law Firm Holiday Gifting',
    industry: 'Legal',
    challenge: 'A top San Diego law firm needed 150 premium gift boxes for their annual client appreciation program, each with custom branding and a personal touch.',
    solution: 'We assembled curated gift boxes with sourdough loaves, assorted cake pops, and artisan cookies, each in branded packaging with handwritten holiday cards.',
    result: 'The firm received overwhelmingly positive feedback from clients. They&apos;ve since signed on for quarterly client gifts and monthly office deliveries on Net 30 terms.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop',
  },
  {
    company: 'Hotel Chain Employee Appreciation',
    industry: 'Hospitality',
    challenge: 'A major San Diego hotel group wanted to recognize 800+ employees across 4 properties during National Hospitality Workers Week.',
    solution: 'We produced bulk cake pop assortments and custom-decorated cookies for each property, coordinating staggered deliveries across all four locations in a single day.',
    result: 'The hotel group now partners with us for all seasonal employee celebrations and has added us to their preferred vendor list for guest event catering.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
  },
]

const volumeDiscounts = [
  { range: '50 - 99 units', discount: '10% off' },
  { range: '100 - 249 units', discount: '15% off' },
  { range: '250 - 499 units', discount: '20% off' },
  { range: '500+ units', discount: 'Custom pricing' },
]

export default function CorporatePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Corporate', url: 'https://www.auntielusbakery.com/corporate' },
      ]} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Corporate & Business', href: '/corporate' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop"
            alt="Corporate event catering with elegant dessert display"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/70 via-dark-crust/50 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Corporate & Business</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            Elevate Your Business Events with Handcrafted Treats
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            From office celebrations to client gifting, we help San Diego businesses create memorable moments with artisan baked goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/corporate-inquiry" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Request a Corporate Quote
            </Link>
            <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-8">Trusted by San Diego Businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Tech Startups', 'Law Firms', 'Healthcare', 'Hospitality'].map((industry) => (
              <div key={industry} className="bg-cream rounded-2xl p-6 text-center">
                <p className="font-serif text-lg text-dark-crust">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Corporate Services</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Comprehensive bakery solutions designed for San Diego businesses of every size.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wheat/10 text-wheat mb-4">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{service.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Success Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Case Studies</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              See how we&apos;ve helped San Diego businesses create unforgettable events and build stronger relationships.
            </p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div key={study.company} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-dark-crust/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {study.industry}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-dark-crust mb-4">{study.company}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-crust uppercase tracking-wide mb-1">The Challenge</p>
                      <p className="text-[#6B6560] text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crust uppercase tracking-wide mb-1">Our Solution</p>
                      <p className="text-[#6B6560] text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-crust uppercase tracking-wide mb-1">The Result</p>
                      <p className="text-[#6B6560] text-sm leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Discounts & Payment Terms */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Volume Discounts */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Save More</p>
            <h2 className="font-serif text-2xl md:text-3xl text-dark-crust mb-6">Volume Discounts</h2>
            <p className="text-[#6B6560] mb-6">
              The more you order, the more you save. Our tiered pricing rewards businesses that order in bulk.
            </p>
            <div className="space-y-3">
              {volumeDiscounts.map((tier) => (
                <div key={tier.range} className="flex items-center justify-between py-3 border-b border-blush last:border-0">
                  <span className="text-dark-crust font-medium">{tier.range}</span>
                  <span className="bg-wheat/15 text-crust px-3 py-1 rounded-full text-sm font-semibold">{tier.discount}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6B6560] mt-4">* Applies to cake pops, cookies, and cupcakes. Custom cake pricing varies.</p>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Flexible Payment</p>
            <h2 className="font-serif text-2xl md:text-3xl text-dark-crust mb-6">Net 30 for Businesses</h2>
            <p className="text-[#6B6560] mb-6">
              We understand business billing cycles. Approved companies enjoy Net 30 payment terms for a seamless ordering experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-wheat mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </span>
                <span className="text-[#6B6560] text-sm"><strong className="text-dark-crust">Net 30 invoicing</strong> for approved business accounts</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wheat mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </span>
                <span className="text-[#6B6560] text-sm"><strong className="text-dark-crust">Credit card & ACH</strong> accepted for all orders</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wheat mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </span>
                <span className="text-[#6B6560] text-sm"><strong className="text-dark-crust">Dedicated account manager</strong> for recurring clients</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-wheat mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </span>
                <span className="text-[#6B6560] text-sm"><strong className="text-dark-crust">W-9 & tax documents</strong> provided upon request</span>
              </div>
            </div>
            <Link href="/corporate-inquiry" className="inline-block mt-6 bg-dark-crust text-white px-6 py-3 rounded-full font-semibold hover:bg-crust transition-colors no-underline text-sm">
              Apply for Net 30 Terms
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Client Feedback</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What Our Corporate Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4A853">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B6560] leading-relaxed text-[15px] mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-blush pt-4">
                  <p className="font-semibold text-dark-crust text-sm">{t.name}</p>
                  <p className="text-[#6B6560] text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscription Spotlight */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Most Popular</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Monthly Office Treats Subscription
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Keep your team energized and appreciated with recurring deliveries of fresh-baked goods. Choose your frequency, customize your selections, and we handle the rest.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-wheat/10 text-wheat flex items-center justify-center font-serif font-semibold">1</div>
                <div>
                  <p className="font-semibold text-dark-crust text-sm">Sourdough Fridays</p>
                  <p className="text-[#6B6560] text-xs">Fresh loaves delivered every Friday morning</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-wheat/10 text-wheat flex items-center justify-center font-serif font-semibold">2</div>
                <div>
                  <p className="font-semibold text-dark-crust text-sm">Monthly Cake Pop Assortment</p>
                  <p className="text-[#6B6560] text-xs">Seasonal flavors and themed designs each month</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-wheat/10 text-wheat flex items-center justify-center font-serif font-semibold">3</div>
                <div>
                  <p className="font-semibold text-dark-crust text-sm">Custom Mix</p>
                  <p className="text-[#6B6560] text-xs">Build your own rotation of breads, pastries, and treats</p>
                </div>
              </div>
            </div>
            <Link href="/corporate-inquiry" className="inline-block mt-8 bg-dark-crust text-white px-8 py-4 rounded-full font-semibold hover:bg-crust transition-colors no-underline">
              Start Your Subscription
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1000&fit=crop"
              alt="Fresh baked office treats and sourdough bread"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-1 -left-1 bg-wheat text-white rounded-2xl p-6 shadow-lg max-w-[220px]">
              <p className="font-serif text-3xl font-semibold">20%</p>
              <p className="text-sm text-white/90">off your first month with annual commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Partner with Us?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join the growing list of San Diego businesses that trust Auntie Lu&apos;s for their corporate catering, employee celebrations, and client gifting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/corporate-inquiry" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Get a Corporate Quote
            </Link>
            <a href="mailto:hello@auntielusbakery.com" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
