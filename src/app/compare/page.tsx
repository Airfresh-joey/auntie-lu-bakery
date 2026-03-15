import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Compare | Auntie Lu's vs Grocery Store & Other Bakeries in San Diego",
  description: "See how Auntie Lu's custom cakes compare to grocery store cakes and other San Diego bakeries. Compare quality, customization, ingredients, delivery, and value side by side.",
  openGraph: {
    title: "Bakery Comparison | Why Custom Cakes Beat Off-the-Shelf",
    description: "Compare Auntie Lu's custom cakes vs grocery store cakes and other local bakeries. See the real difference in quality, design, and value.",
    url: 'https://www.auntielusbakery.com/compare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/compare',
  },
}

const vsGroceryRows = [
  { feature: 'Ingredients', auntieLu: 'Premium, locally-sourced, no preservatives', other: 'Mass-produced, preservatives, artificial flavors' },
  { feature: 'Customization', auntieLu: 'Fully custom designs, flavors, colors, and themes', other: 'Limited pre-set designs and written messages' },
  { feature: 'Freshness', auntieLu: 'Baked to order, never frozen', other: 'Often pre-made days in advance, may be frozen' },
  { feature: 'Flavor Options', auntieLu: '20+ flavors with custom filling combinations', other: 'Chocolate, vanilla, or marble \u2014 that\u2019s about it' },
  { feature: 'Design Quality', auntieLu: 'Hand-decorated by trained cake artists', other: 'Machine-piped or template-based decoration' },
  { feature: 'Dietary Options', auntieLu: 'Gluten-free, vegan, nut-free available', other: 'Rarely available, limited selection' },
  { feature: 'Consultation', auntieLu: 'Free personal consultation with your baker', other: 'Counter ordering only' },
  { feature: 'Delivery', auntieLu: 'Temperature-controlled delivery with on-site setup', other: 'Pickup only (you transport it)' },
  { feature: 'Taste', auntieLu: 'Real butter, fresh cream, scratch-made everything', other: 'Standard mixes, shortening-based frosting' },
  { feature: 'Guarantee', auntieLu: 'Full satisfaction guarantee', other: 'Store return policy only' },
]

const vsLocalRows = [
  { feature: 'Pricing Transparency', auntieLu: 'Published pricing, detailed quotes upfront', other: 'Varies \u2014 some quote only after consultation' },
  { feature: 'Lead Time', auntieLu: '1\u20132 weeks standard, rush available', other: '2\u20134 weeks typical, rush rarely offered' },
  { feature: 'Tasting', auntieLu: 'Free for weddings $500+, $35 tasting boxes (credited to order)', other: '$50\u2013$100 tasting fees, often non-refundable' },
  { feature: 'Venue Knowledge', auntieLu: '50+ San Diego venue partnerships', other: 'Varies by bakery' },
  { feature: 'Communication', auntieLu: 'Direct line to your baker, quick responses', other: 'May go through assistants or have slow response' },
  { feature: 'Product Range', auntieLu: 'Cakes, cake pops, cupcakes, cookies, sourdough', other: 'Most specialize in just cakes' },
  { feature: 'Setup Service', auntieLu: 'Included with delivery \u2014 assembly, display, styling', other: 'Often charged separately or not offered' },
  { feature: 'Reviews', auntieLu: '4.9 average with 200+ reviews', other: 'Varies' },
]

const customVsShelf = [
  {
    title: 'Design That Matches Your Vision',
    custom: 'Send us a Pinterest board, sketch, or description and we\u2019ll bring it to life exactly as you imagined. Your cake is one-of-a-kind.',
    shelf: 'Choose from a catalog of pre-made designs. What you see is what you get \u2014 with minor text or color tweaks at best.',
  },
  {
    title: 'Flavor & Filling Combinations',
    custom: 'Mix and match from 20+ cake flavors and fillings. Each tier can be different. We\u2019ll help you find the perfect combination.',
    shelf: 'Pick one flavor from a small menu. Fillings are standard buttercream or a basic fruit preserve.',
  },
  {
    title: 'Ingredient Quality',
    custom: 'Scratch-made with real butter, fresh eggs, premium chocolate, and no preservatives. You can taste the quality difference.',
    shelf: 'Made from commercial mixes with shortening, artificial flavors, and preservatives for shelf stability.',
  },
  {
    title: 'Size & Serving Flexibility',
    custom: 'Built to your exact guest count \u2014 no wasted cake, no running short. We\u2019ll recommend the right size for your event.',
    shelf: 'Standard sizes only. You either buy too much or not enough.',
  },
  {
    title: 'The Experience',
    custom: 'Personal consultations, tastings, design revisions, and a dedicated baker who knows your name and your event.',
    shelf: 'Walk in, point at the display case, and check out. Transactional and impersonal.',
  },
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B0A8A0" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function ComparePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Compare', url: 'https://www.auntielusbakery.com/compare' },
      ]} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Honest Comparison</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            See How We Compare
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Not all cakes are created equal. Here&apos;s an honest look at how Auntie Lu&apos;s stacks up against grocery store cakes and other local bakeries.
          </p>
        </div>
      </section>

      {/* vs Grocery Store */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Comparison #1</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Auntie Lu&apos;s vs. Grocery Store Cakes
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Grocery store cakes are convenient, but here&apos;s what you&apos;re giving up \u2014 and what you gain when you go custom.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-cream rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-4 bg-dark-crust text-white">
              <span className="font-semibold text-sm uppercase tracking-wider">Feature</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-wheat">Auntie Lu&apos;s</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-white/60">Grocery Store</span>
            </div>
            {vsGroceryRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 py-5 ${
                  i < vsGroceryRows.length - 1 ? 'border-b border-blush/60' : ''
                }`}
              >
                <span className="text-dark-crust font-semibold text-sm md:text-base">{row.feature}</span>
                <span className="text-dark-crust text-sm flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5"><CheckIcon /></span>
                  {row.auntieLu}
                </span>
                <span className="text-[#B0A8A0] text-sm flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5"><XIcon /></span>
                  {row.other}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Local Bakeries */}
      <section className="py-24 px-[4%] bg-blush/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Comparison #2</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Auntie Lu&apos;s vs. Other Local Bakeries
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              San Diego has talented bakeries. Here&apos;s what sets Auntie Lu&apos;s apart from the rest.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="hidden md:grid grid-cols-3 gap-4 px-6 py-4 bg-dark-crust text-white">
              <span className="font-semibold text-sm uppercase tracking-wider">Feature</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-wheat">Auntie Lu&apos;s</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-white/60">Other Bakeries</span>
            </div>
            {vsLocalRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 py-5 ${
                  i < vsLocalRows.length - 1 ? 'border-b border-blush/40' : ''
                }`}
              >
                <span className="text-dark-crust font-semibold text-sm md:text-base">{row.feature}</span>
                <span className="text-dark-crust text-sm flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5"><CheckIcon /></span>
                  {row.auntieLu}
                </span>
                <span className="text-[#6B6560] text-sm">{row.other}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom vs Off-the-Shelf */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Custom vs. Off-the-Shelf</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              What You Get with Custom
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              A custom cake isn&apos;t just a cake \u2014 it&apos;s an experience. Here&apos;s what that really means.
            </p>
          </div>

          <div className="space-y-6">
            {customVsShelf.map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8">
                <h3 className="font-serif text-xl text-dark-crust mb-6">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-wheat/30">
                    <p className="text-wheat font-semibold text-xs uppercase tracking-widest mb-3">Custom (Auntie Lu&apos;s)</p>
                    <p className="text-dark-crust text-sm leading-relaxed m-0">{item.custom}</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-blush/40">
                    <p className="text-[#B0A8A0] font-semibold text-xs uppercase tracking-widest mb-3">Off-the-Shelf</p>
                    <p className="text-[#6B6560] text-sm leading-relaxed m-0">{item.shelf}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-24 px-[4%] bg-blush/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Real Value</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              The Value Breakdown
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Custom cakes cost more upfront, but here&apos;s what that investment actually includes.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 bg-dark-crust text-white">
              <span className="font-semibold text-sm uppercase tracking-wider">What&apos;s Included</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-wheat text-center">Auntie Lu&apos;s Custom</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-white/60 text-center">Other Bakeries</span>
              <span className="font-semibold text-sm uppercase tracking-wider text-white/60 text-center">Grocery Store</span>
            </div>
            {([
              { feature: 'Personal consultation', al: true, other: 'Sometimes', grocery: false },
              { feature: 'Free tasting (weddings)', al: true, other: 'Paid', grocery: false },
              { feature: 'Unlimited design revisions', al: true, other: '1\u20132 revisions', grocery: false },
              { feature: 'Premium ingredients', al: true, other: 'Varies', grocery: false },
              { feature: 'Temperature-controlled delivery', al: true, other: 'Extra fee', grocery: false },
              { feature: 'On-site setup & assembly', al: true, other: 'Extra fee', grocery: false },
              { feature: 'Satisfaction guarantee', al: true, other: 'Varies', grocery: 'Returns only' },
              { feature: 'Dietary accommodations', al: true, other: 'Sometimes', grocery: 'Rarely' },
            ] as { feature: string; al: boolean | string; other: boolean | string; grocery: boolean | string }[]).map((row, i, arr) => (
              <div
                key={row.feature}
                className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 items-center ${
                  i < arr.length - 1 ? 'border-b border-blush/40' : ''
                }`}
              >
                <span className="text-dark-crust font-medium text-sm">{row.feature}</span>
                <span className="flex justify-center">
                  {row.al === true ? <CheckIcon /> : <span className="text-[#6B6560] text-sm">{String(row.al)}</span>}
                </span>
                <span className="flex justify-center">
                  {row.other === true ? <CheckIcon /> : row.other === false ? <XIcon /> : <span className="text-[#6B6560] text-sm">{String(row.other)}</span>}
                </span>
                <span className="flex justify-center">
                  {row.grocery === true ? <CheckIcon /> : row.grocery === false ? <XIcon /> : <span className="text-[#B0A8A0] text-sm">{String(row.grocery)}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The Choice Is Clear</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Your celebration deserves more than a generic cake. Get a custom creation made with premium ingredients, expert artistry, and genuine care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/guarantee" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Our Guarantee
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
