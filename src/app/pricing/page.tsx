import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Pricing | Auntie Lu's Bakery - Custom Cake & Bakery Prices San Diego",
  description: 'Transparent pricing for custom cakes, wedding cakes, birthday cakes, cake pops, cupcakes, cookies, and sourdough bread. San Diego bakery with upfront pricing and free quotes.',
  openGraph: {
    title: "Pricing | Auntie Lu's Bakery San Diego",
    description: 'See our pricing for wedding cakes, birthday cakes, cake pops, cupcakes, cookies, and artisan sourdough. Request a free custom quote today.',
    url: 'https://www.auntielusbakery.com/pricing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/pricing',
  },
}

const pricingTiers = [
  {
    category: 'Wedding Cakes',
    description: 'Custom-designed for your special day with free consultation',
    items: [
      { name: '2-Tier Buttercream', serving: '30–50 guests', price: 'From $350' },
      { name: '3-Tier Buttercream', serving: '75–100 guests', price: 'From $650' },
      { name: '3-Tier Fondant', serving: '75–100 guests', price: 'From $850' },
      { name: '4+ Tier Custom Design', serving: '150+ guests', price: 'From $1,200' },
    ],
    note: 'Complimentary tasting for orders over $500. Price varies with design complexity, sugar flowers, and hand-painted details.',
  },
  {
    category: 'Birthday & Celebration Cakes',
    description: 'Custom designs for every age and theme',
    items: [
      { name: '6-inch Single Tier', serving: '8–12 servings', price: 'From $75' },
      { name: '8-inch Single Tier', serving: '15–20 servings', price: 'From $95' },
      { name: '10-inch Single Tier', serving: '25–30 servings', price: 'From $135' },
      { name: '2-Tier Custom', serving: '30–40 servings', price: 'From $175' },
    ],
    note: 'Add fondant covering (+$25), 3D toppers (+$30-$75), or edible images (+$15).',
  },
  {
    category: 'Cake Pops',
    description: 'Handcrafted and individually decorated',
    items: [
      { name: 'Classic (per dozen)', serving: '12 pieces', price: '$36' },
      { name: 'Custom Decorated (per dozen)', serving: '12 pieces', price: '$42' },
      { name: 'Premium / Branded (per dozen)', serving: '12 pieces', price: '$48' },
      { name: 'Event Package (50+)', serving: '50+ pieces', price: 'Custom quote' },
    ],
    note: 'Minimum order: 1 dozen. Volume discounts available for 100+ pieces.',
  },
  {
    category: 'Cupcakes',
    description: 'Perfect for parties, showers, and corporate events',
    items: [
      { name: 'Standard Cupcakes', serving: 'Per cupcake', price: 'From $4' },
      { name: 'Decorated / Custom Topper', serving: 'Per cupcake', price: 'From $5' },
      { name: 'Mini Cupcakes', serving: 'Per cupcake', price: 'From $2.50' },
      { name: 'Cupcake Tower (24+)', serving: '24+ cupcakes', price: 'From $100' },
    ],
    note: 'Minimum order: 12 cupcakes. Towers include display stand rental.',
  },
  {
    category: 'Cookies',
    description: 'Hand-decorated sugar cookies for any occasion',
    items: [
      { name: 'Simple Decorated (per dozen)', serving: '12 cookies', price: 'From $36' },
      { name: 'Detailed / Multi-Color (per dozen)', serving: '12 cookies', price: 'From $48' },
      { name: 'Premium / Branded (per dozen)', serving: '12 cookies', price: 'From $60' },
      { name: 'Cookie Favors (individually wrapped)', serving: 'Per cookie', price: 'From $5' },
    ],
    note: 'Minimum order: 1 dozen. Custom shapes and packaging available.',
  },
  {
    category: 'Artisan Sourdough',
    description: 'Small-batch, naturally leavened bread',
    items: [
      { name: 'Classic Sourdough Loaf', serving: '1 loaf', price: '$12' },
      { name: 'Specialty Flavors', serving: '1 loaf', price: '$14' },
      { name: 'Sourdough Focaccia', serving: '1 slab', price: 'From $16' },
    ],
    note: 'Flavors include rosemary olive oil, jalapeno cheddar, and everything seasoning. Order 3-5 days ahead.',
  },
]

const addOns = [
  { name: 'Fondant Covering', price: '+$25–$50', description: 'Smooth, polished finish for any cake' },
  { name: 'Sugar Flowers', price: '+$15–$75 each', description: 'Handcrafted, lifelike sugar blooms' },
  { name: 'Gold / Silver Leaf', price: '+$20–$40', description: 'Edible metallic accents' },
  { name: '3D Cake Toppers', price: '+$30–$75', description: 'Custom sculpted fondant or gum paste figures' },
  { name: 'Edible Image Printing', price: '+$15', description: 'Photo or logo printed on edible paper' },
  { name: 'Hand-Painted Details', price: '+$50–$150', description: 'Watercolor, brush strokes, or custom art' },
]

const deliveryFees = [
  { area: 'Within 10 miles (Central San Diego)', fee: '$25' },
  { area: 'La Jolla, Coronado, Mission Valley', fee: '$35' },
  { area: 'Del Mar, Encinitas, Chula Vista', fee: '$50' },
  { area: 'North County, East County', fee: '$65–$75' },
  { area: 'Venue Setup (tiered cake assembly)', fee: '+$50' },
]

const faqs = [
  {
    question: 'How do I get a quote for my custom order?',
    answer: 'Contact us with your event date, guest count, desired flavors, and any design inspiration (Pinterest boards, photos, or sketches). We respond within 24 hours with a detailed quote. For wedding cakes, we offer free in-person or virtual consultations.',
  },
  {
    question: 'What factors affect the price of a custom cake?',
    answer: 'Several factors influence pricing: number of tiers and serving size, design complexity (simple buttercream vs. hand-painted fondant), special elements (sugar flowers, gold leaf, 3D toppers), premium ingredients, and delivery requirements. We always provide a detailed quote upfront so there are no surprises.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes, we require a 50% deposit for custom cake orders over $300. The remaining balance is due 7 days before your event date. For smaller orders placed through our online shop, full payment is collected at checkout.',
  },
  {
    question: 'Is there a tasting fee?',
    answer: 'Wedding cake tastings are complimentary for orders over $500. For other custom orders, we offer tasting boxes for $35 that include 6 flavor samples. The $35 is credited toward your final order if you book with us.',
  },
  {
    question: 'Do prices include tax?',
    answer: 'Prices shown do not include California sales tax (currently 7.75% in San Diego). Tax is calculated at checkout. Delivery fees are also subject to tax.',
  },
  {
    question: 'Do you offer discounts for large orders?',
    answer: 'Yes! Orders of 100+ cake pops, 50+ cupcakes, or multi-item event packages may qualify for a 10–15% discount. Contact us with your event details and we\'ll create a custom package with the best pricing.',
  },
  {
    question: 'Can I pick up my order instead of delivery?',
    answer: 'Absolutely! Free pickup is available from our San Diego location. We\'ll have your order boxed and ready at your scheduled pickup time. We recommend pickup for simpler items — tiered cakes are best delivered by us for safety.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards through Stripe. For invoiced custom orders, we also accept bank transfers (ACH/Zelle). Payment plans are available for wedding cake orders over $1,000.',
  },
]

function PricingSchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: "Auntie Lu's Bakery",
    url: 'https://www.auntielusbakery.com',
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bakery Products',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Wedding Cakes',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wedding Cake - 2 Tier Buttercream' }, price: '350', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '350', priceCurrency: 'USD', unitText: 'starting price' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wedding Cake - 3 Tier Buttercream' }, price: '650', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Wedding Cake - 3 Tier Fondant' }, price: '850', priceCurrency: 'USD' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Birthday Cakes',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Birthday Cake - 6 inch' }, price: '75', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Birthday Cake - 8 inch' }, price: '95', priceCurrency: 'USD' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cake Pops',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Classic Cake Pops (dozen)' }, price: '36', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Decorated Cake Pops (dozen)' }, price: '42', priceCurrency: 'USD' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cupcakes',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Standard Cupcake' }, price: '4', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Decorated Cupcake' }, price: '5', priceCurrency: 'USD' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Cookies',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Decorated Cookies (dozen)' }, price: '36', priceCurrency: 'USD' },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Artisan Sourdough',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Classic Sourdough Loaf' }, price: '12', priceCurrency: 'USD' },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Specialty Sourdough Loaf' }, price: '14', priceCurrency: 'USD' },
          ],
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function PricingPage() {
  return (
    <>
      <PricingSchemaMarkup />
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '/pricing' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Transparent Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Know What to Expect
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Every creation is handcrafted with premium ingredients and custom artistry. Here&apos;s our straightforward pricing so you can plan with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust transition-colors hover:-translate-y-0.5 transition-transform">
              Request a Quote
            </Link>
            <Link href="#pricing-tiers" className="inline-flex items-center justify-center bg-wheat/20 text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/30 transition-colors">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Glance */}
      <section className="py-16 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">At a Glance</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Starting Prices</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Wedding Cakes', price: '$350+', sub: 'per cake' },
              { label: 'Birthday Cakes', price: '$75+', sub: 'per cake' },
              { label: 'Cake Pops', price: '$36+', sub: 'per dozen' },
              { label: 'Cupcakes', price: '$4+', sub: 'each' },
              { label: 'Cookies', price: '$36+', sub: 'per dozen' },
              { label: 'Sourdough', price: '$12+', sub: 'per loaf' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-2xl md:text-3xl font-serif text-crust font-bold mb-1">{item.price}</p>
                <p className="text-dark-crust font-medium text-sm mb-0.5">{item.label}</p>
                <p className="text-[#6B6560] text-xs m-0">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Tiers */}
      <section id="pricing-tiers" className="py-24 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Detailed Pricing</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What We Charge & Why</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              All prices reflect handcrafted quality, premium ingredients, and the time our bakers invest in every order. Prices are starting points — your final quote depends on your specific design.
            </p>
          </div>

          <div className="space-y-8">
            {pricingTiers.map((tier) => (
              <div key={tier.category} className="bg-cream rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-dark-crust mb-2">{tier.category}</h3>
                  <p className="text-[#6B6560] text-sm mb-6">{tier.description}</p>

                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="hidden md:grid grid-cols-3 gap-4 px-5 py-3 bg-blush/40 text-xs font-semibold uppercase tracking-wider text-crust">
                      <span>Item</span>
                      <span>Serves</span>
                      <span className="text-right">Price</span>
                    </div>
                    {tier.items.map((item, i) => (
                      <div key={i} className={`grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-5 py-4 ${i < tier.items.length - 1 ? 'border-b border-blush/60' : ''}`}>
                        <span className="text-dark-crust font-medium">{item.name}</span>
                        <span className="text-[#6B6560] text-sm">{item.serving}</span>
                        <span className="text-crust font-semibold md:text-right">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {tier.note && (
                    <p className="text-soft-brown text-sm mt-4 mb-0 italic">{tier.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Add-Ons */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Extras</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Custom Design Add-Ons</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Elevate your order with premium decorations and custom details.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-dark-crust m-0 text-base">{addon.name}</h3>
                  <span className="text-crust font-semibold text-sm whitespace-nowrap ml-3">{addon.price}</span>
                </div>
                <p className="text-[#6B6560] text-sm m-0">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Fees */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Delivery</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Delivery Fees by Area</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              We hand-deliver throughout San Diego County. Free pickup is always available.
            </p>
          </div>
          <div className="bg-cream rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-2 gap-4 px-6 py-3 bg-blush/40 text-xs font-semibold uppercase tracking-wider text-crust">
              <span>Area</span>
              <span className="text-right">Fee</span>
            </div>
            {deliveryFees.map((item, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 px-6 py-4 ${i < deliveryFees.length - 1 ? 'border-b border-blush/60' : ''}`}>
                <span className="text-dark-crust font-medium">{item.area}</span>
                <span className="text-crust font-semibold md:text-right">{item.fee}</span>
              </div>
            ))}
          </div>
          <p className="text-soft-brown text-sm mt-4 italic text-center">
            Free pickup available from our San Diego location. Delivery includes careful transport in temperature-controlled vehicles.
          </p>
        </div>
      </section>

      {/* What Affects the Price */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Good to Know</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What Affects Your Price</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Custom baking is an art. Here&apos;s what goes into your quote.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Serving Size & Tiers',
                desc: 'More servings or tiers means more cake, more filling, and more structural support. A 6-inch single tier is less than a 4-tier showpiece.',
              },
              {
                title: 'Design Complexity',
                desc: 'Simple buttercream with sprinkles costs less than hand-painted fondant, sculpted figures, or intricate piping. More detail = more hours of skilled artistry.',
              },
              {
                title: 'Premium Ingredients',
                desc: 'Specialty flavors, imported chocolate, organic ingredients, or dietary accommodations (gluten-free, vegan) may add to the cost.',
              },
              {
                title: 'Custom Elements',
                desc: 'Sugar flowers, gold leaf, 3D toppers, edible images, and branded designs each add time and materials to your order.',
              },
              {
                title: 'Timeline & Rush Orders',
                desc: 'Standard lead times keep prices at base rate. Rush orders (less than our standard lead time) incur a 25% rush fee.',
              },
              {
                title: 'Delivery & Setup',
                desc: 'Distance to your venue and on-site setup requirements (multi-tier assembly, display arrangement) affect the total cost.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{item.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Pricing FAQ</h2>
          </div>
          <FAQList faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Get a Quote?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Tell us about your event and vision. We&apos;ll send you a detailed, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Request a Quote
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center border-2 border-blush text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-blush/10 transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
