import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Our Guarantee | Satisfaction Promise - Auntie Lu's Bakery San Diego",
  description: "Our satisfaction guarantee means every order is backed by our promise. Learn about our refund policy, remake commitment, and how we handle any issues with your order.",
  openGraph: {
    title: "Satisfaction Guarantee | Auntie Lu's Bakery",
    description: "We stand behind every cake and baked good we create. Learn about our satisfaction guarantee, refund policy, and commitment to making things right.",
    url: 'https://www.auntielusbakery.com/guarantee',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/guarantee',
  },
}

const promises = [
  {
    title: 'Fresh, Premium Quality',
    description: 'Every item is baked fresh to order using premium, locally-sourced ingredients. No preservatives, no shortcuts, no frozen anything.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Design Accuracy',
    description: 'Your cake will match the approved design. We confirm every detail before baking \u2014 colors, dimensions, flavors, and decorations \u2014 so there are no surprises.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    description: 'We\u2019ll be there when we say we\u2019ll be there. Our delivery team arrives early to ensure setup is complete before your event begins.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Safe Transport',
    description: 'Every order is delivered in temperature-controlled vehicles with proper support and packaging. Your cake arrives looking exactly as it left our kitchen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Clear Communication',
    description: 'You\u2019ll always know the status of your order. We respond within 24 hours, send confirmation details, and reach out proactively if anything needs your attention.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'No Hidden Fees',
    description: 'The quote you approve is the price you pay. We don\u2019t add surprise charges for delivery, setup, or minor adjustments discussed during the design process.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

const issueSteps = [
  {
    step: '1',
    title: 'Tell Us Right Away',
    description: 'Contact us within 24 hours of receiving your order. Send photos if applicable and describe the issue. The sooner we know, the faster we can help.',
  },
  {
    step: '2',
    title: 'We Assess & Respond',
    description: 'We\u2019ll review the situation within a few hours. Our team will reach out to understand exactly what went wrong and discuss the best solution.',
  },
  {
    step: '3',
    title: 'We Make It Right',
    description: 'Depending on the issue, we\u2019ll offer a remake, partial or full refund, credit toward a future order, or another solution that makes you happy.',
  },
  {
    step: '4',
    title: 'We Learn & Improve',
    description: 'Every piece of feedback helps us get better. We take issues seriously and use them to improve our processes so the same problem never happens again.',
  },
]

const policies = [
  {
    title: 'Full Remake',
    description: 'If your order has a significant design error that we made, we\u2019ll remake it at no charge. For time-sensitive events, we\u2019ll expedite the remake or provide an alternative solution.',
    when: 'When the cake doesn\u2019t match the approved design, has structural issues, or doesn\u2019t meet our quality standards.',
  },
  {
    title: 'Partial Refund',
    description: 'If a portion of your order is affected \u2014 wrong flavor on one tier, a decoration that\u2019s off \u2014 we\u2019ll refund the proportional amount and make it right for any future order.',
    when: 'When the issue affects part of the order but the overall product is usable for your event.',
  },
  {
    title: 'Full Refund',
    description: 'In rare cases where the order is unusable or we\u2019ve made a serious error, we\u2019ll issue a full refund. No fine print, no hassle.',
    when: 'When the order is significantly wrong, damaged beyond repair in transit, or we fail to deliver on time.',
  },
  {
    title: 'Future Order Credit',
    description: 'For minor issues or when you\u2019d prefer credit over a refund, we\u2019ll apply a generous credit to your next order as a thank-you for your understanding.',
    when: 'For minor cosmetic issues, slight flavor variations, or when you prefer to give us another chance.',
  },
]

export default function GuaranteePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Our Guarantee', url: 'https://www.auntielusbakery.com/guarantee' },
      ]} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Our Guarantee', href: '/guarantee' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Our Promise to You</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Satisfaction Guaranteed
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            We stand behind every cake, cake pop, and baked good we create. If something isn&apos;t right, we&apos;ll make it right &mdash; that&apos;s our promise.
          </p>
        </div>
      </section>

      {/* Guarantee Badge */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-wheat to-crust text-white mb-8">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
            The Auntie Lu&apos;s Guarantee
          </h2>
          <p className="text-[#6B6560] text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Every order from Auntie Lu&apos;s is backed by our satisfaction guarantee. We believe that if we wouldn&apos;t serve it to our own family, we won&apos;t serve it to yours.
          </p>
          <p className="text-[#6B6560] text-lg leading-relaxed max-w-2xl mx-auto">
            If your order doesn&apos;t meet your expectations or the design we agreed upon, contact us within 24 hours and we will make it right &mdash; whether that&apos;s a remake, a refund, or a credit toward your next order. No fine print.
          </p>
        </div>
      </section>

      {/* What We Promise */}
      <section className="py-24 px-[4%] bg-blush/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Promise</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Six Commitments to You</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              These aren&apos;t just words &mdash; they&apos;re the standards we hold ourselves to on every single order.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((promise) => (
              <div key={promise.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center mb-5">
                  {promise.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{promise.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed m-0">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Issues */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">How We Handle Issues</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              We hope you never need this, but if something goes wrong, here&apos;s exactly what to expect.
            </p>
          </div>
          <div className="space-y-6">
            {issueSteps.map((step, i) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-crust text-white flex items-center justify-center font-serif text-xl font-semibold">
                  {step.step}
                </div>
                <div className={`flex-1 pb-6 ${i < issueSteps.length - 1 ? 'border-b border-blush/40' : ''}`}>
                  <h3 className="font-serif text-xl text-dark-crust mb-2">{step.title}</h3>
                  <p className="text-[#6B6560] leading-relaxed m-0">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund / Remake Policy */}
      <section className="py-24 px-[4%] bg-blush/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Policy</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Refund & Remake Policy</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              We keep things simple and fair. Here&apos;s how we determine the right resolution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <div key={policy.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl text-dark-crust mb-3">{policy.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{policy.description}</p>
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-crust mb-1.5">When this applies</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed m-0">{policy.when}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Good to Know</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">A Few Details</h2>
          </div>
          <div className="bg-cream rounded-2xl p-8 space-y-4">
            {[
              'Contact us within 24 hours of receiving your order to report any issues.',
              'Please include photos when reporting visual or design concerns \u2014 it helps us respond faster.',
              'Our guarantee covers quality, design accuracy, and freshness. Taste preferences for flavors you approved during tasting are not covered.',
              'Cancellations made more than 7 days before the event receive a full deposit refund. Cancellations within 7 days may forfeit the deposit, as ingredients have been purchased and production has begun.',
              'For wedding cakes, we schedule a final design confirmation 2 weeks before your event. Changes after this point may incur additional charges.',
              'Orders damaged after our delivery and setup are not covered. Once we hand off the order in perfect condition, responsibility transfers to you or your venue.',
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-wheat mt-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <p className="text-[#6B6560] text-sm leading-relaxed m-0">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Order with Confidence</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Your celebration is in safe hands. Every order is backed by our guarantee, our reputation, and our family name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/why-choose-us" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
