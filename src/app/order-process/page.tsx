import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "How to Order | Custom Cake Ordering Process",
  description: "Learn how to order a custom cake from Auntie Lu's Bakery. Step-by-step process, timelines, consultation details, deposit info, and delivery options in San Diego.",
  openGraph: {
    title: "How to Order | Auntie Lu's Bakery San Diego",
    description: "Step-by-step guide to ordering your custom cake. Timelines, consultations, payments, and delivery options.",
    images: [{ url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/order-process',
  },
}

const steps = [
  {
    number: '01',
    title: 'Reach Out',
    description: 'Contact us via our website form, email, or phone. Share the basics — your event date, type, guest count, and any initial ideas. We respond within 24 hours.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Free Consultation',
    description: 'We\'ll schedule a 30-minute consultation (in-person or virtual) to discuss your vision, flavors, design, and budget. Bring inspiration photos — Pinterest boards welcome!',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Tasting Session',
    description: 'For custom cakes $200+, enjoy a complimentary tasting of up to 4 flavors with frosting and filling pairings. Tastings are by appointment only.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Design & Quote',
    description: 'We\'ll create a detailed proposal with your design sketch, flavor selections, size, and itemized pricing. Revisions are welcome until you\'re 100% happy.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Secure Your Date',
    description: 'Once you approve the design, a 50% deposit secures your event date on our calendar. We accept all major credit cards, Venmo, and Zelle.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Delivery or Pickup',
    description: 'We\'ll bake your cake fresh and deliver it to your venue or have it ready for pickup. Final balance is due 7 days before your event.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
]

const timeline = [
  { event: 'Wedding Cakes', lead: '4–8 weeks', note: 'Book early — peak wedding season (May–October) fills up fast' },
  { event: 'Birthday & Celebration Cakes', lead: '1–2 weeks', note: 'Rush orders may be available for an additional fee' },
  { event: 'Quinceañera Cakes', lead: '3–6 weeks', note: 'Complex designs and large tiered cakes need extra time' },
  { event: 'Cupcakes & Cake Pops', lead: '5–7 days', note: 'Large quantities (100+) require 2 weeks notice' },
  { event: 'Corporate Events', lead: '1–3 weeks', note: 'Depends on quantity and customization level' },
  { event: 'Holiday Orders', lead: '2–4 weeks', note: 'Thanksgiving and Christmas orders should be placed by early November' },
]

const consultationExpectations = [
  {
    title: 'Share Your Vision',
    description: 'Bring photos, color swatches, or Pinterest boards. Tell us about your event theme, venue, and any special elements you want incorporated.',
  },
  {
    title: 'Flavor Discussion',
    description: 'We\'ll walk through our full flavor menu and help you find combinations that match your taste. Each tier can be a different flavor.',
  },
  {
    title: 'Design Possibilities',
    description: 'From elegant minimalist to elaborate multi-tier showpieces — we\'ll discuss what\'s possible and sketch initial ideas together.',
  },
  {
    title: 'Budget Planning',
    description: 'We\'ll provide transparent pricing and work within your budget. We always find creative solutions to deliver a beautiful cake at your price point.',
  },
]

export default function OrderProcessPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'How to Order', url: 'https://www.auntielusbakery.com/order-process' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&h=900&fit=crop"
            alt="Custom cake being decorated at Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">How It Works</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Your Cake, Your Way
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            From first inquiry to the moment your cake arrives — here&apos;s everything you need to know about ordering with us.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Simple & Sweet</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">6 Steps to Your Dream Cake</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              We&apos;ve made the ordering process as smooth as our buttercream. Here&apos;s how it works from start to finish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
                <span className="absolute top-6 right-6 font-serif text-5xl text-blush font-bold">{step.number}</span>
                <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{step.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Plan Ahead</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">When to Order</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              We bake everything fresh to order. Here&apos;s how much lead time each type of order typically needs.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-blush">
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Order Type</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Lead Time</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row, i) => (
                  <tr key={row.event} className={`border-b border-blush/50 ${i % 2 === 0 ? 'bg-cream/30' : ''}`}>
                    <td className="py-4 px-4 font-semibold text-dark-crust">{row.event}</td>
                    <td className="py-4 px-4 text-crust font-semibold">{row.lead}</td>
                    <td className="py-4 px-4 text-[#6B6560] text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to Expect at Consultation */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The Consultation</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              What to Expect
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Your free consultation is a relaxed, no-pressure conversation about your dream cake. Here&apos;s what we&apos;ll cover:
            </p>
            <div className="space-y-6">
              {consultationExpectations.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-wheat text-white flex items-center justify-center mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-dark-crust mb-1">{item.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&h=1000&fit=crop"
              alt="Cake consultation at Auntie Lu's Bakery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Deposit & Payment */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Transparent Pricing</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Deposits & Payments</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream rounded-2xl p-8 border border-blush/50">
              <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-dark-crust mb-3">50% Deposit</h3>
              <p className="text-[#6B6560] text-sm leading-relaxed">
                A 50% deposit is required to secure your date and begin work on your order. This is non-refundable but transferable to a new date with 14+ days notice.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-blush/50">
              <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-dark-crust mb-3">Final Balance</h3>
              <p className="text-[#6B6560] text-sm leading-relaxed">
                The remaining 50% is due 7 days before your event. We&apos;ll send a reminder with a secure payment link. Any design changes must be finalized at this time.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-blush/50">
              <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-dark-crust mb-3">Payment Methods</h3>
              <p className="text-[#6B6560] text-sm leading-relaxed">
                We accept all major credit cards, debit cards, Venmo, Zelle, and cash. For corporate orders, we can also accept purchase orders and invoicing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Pickup */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop"
              alt="Cake delivery and setup by Auntie Lu's team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Getting Your Cake</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Delivery & Pickup
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-dark-crust mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-wheat/20 text-wheat flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Free Pickup
                </h3>
                <p className="text-[#6B6560] text-sm leading-relaxed ml-8">
                  Pick up your cake from our San Diego kitchen at no extra charge. We&apos;ll have it boxed, chilled, and ready at your scheduled time. We&apos;ll provide handling and storage instructions.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-dark-crust mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-wheat/20 text-wheat flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Local Delivery
                </h3>
                <p className="text-[#6B6560] text-sm leading-relaxed ml-8">
                  We deliver throughout San Diego County. Delivery fees start at $25 and vary by distance. For tiered and wedding cakes, we personally deliver, set up, and style on-site.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-dark-crust mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-wheat/20 text-wheat flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Venue Setup
                </h3>
                <p className="text-[#6B6560] text-sm leading-relaxed ml-8">
                  For wedding and event cakes, our team handles delivery, assembly, and styling at your venue. We coordinate directly with your venue&apos;s event coordinator for a seamless setup.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-dark-crust mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-wheat/20 text-wheat flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  Delivery Areas
                </h3>
                <p className="text-[#6B6560] text-sm leading-relaxed ml-8">
                  We serve all of San Diego County including La Jolla, Coronado, Del Mar, Pacific Beach, North Park, Carlsbad, Encinitas, Chula Vista, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Answers */}
      <section className="py-20 px-[4%] bg-blush/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Quick Answers</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Can I change my design after placing the deposit?', a: 'Yes! Minor design changes are free up to 14 days before your event. Major changes (size or tier count) may affect pricing.' },
              { q: 'Do you accommodate dietary restrictions?', a: 'Absolutely. We offer gluten-free, dairy-free, nut-free, and vegan options. Let us know during your consultation and we\'ll find the perfect solution.' },
              { q: 'What if I need to cancel?', a: 'Deposits are non-refundable but can be transferred to a future date with at least 14 days notice. We understand plans change!' },
              { q: 'Can I order just a tasting box without a consultation?', a: 'Yes! We offer a Tasting Box ($35) with 6 mini cupcakes in our most popular flavors. Perfect for deciding before committing.' },
              { q: 'Do you provide cake stands and toppers?', a: 'We have a selection of cake stands available for rental ($25–$50). We can also source or create custom cake toppers for an additional fee.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{faq.q}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/faq" className="text-crust font-semibold hover:text-dark-crust transition-colors no-underline inline-flex items-center gap-2">
              View All FAQs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-8">
            Your perfect cake is just a conversation away. Reach out today and let&apos;s start planning something sweet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Contact Us
            </Link>
            <Link href="/flavors" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Flavors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
