import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Pricing | Auntie Lu's Bakery - Sourdough Bread & Cake Pops San Diego",
  description: 'Pricing for artisan sourdough bread and handcrafted cake pops from Auntie Lu\'s Bakery in San Diego. Local pickup only.',
  openGraph: {
    title: "Pricing | Auntie Lu's Bakery San Diego",
    description: 'See our pricing for artisan sourdough bread and handcrafted cake pops. Local pickup in San Diego.',
    url: 'https://www.auntielusbakery.com/pricing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/pricing',
  },
}

const pricingTiers = [
  {
    category: 'Artisan Sourdough Bread',
    description: 'Small-batch, naturally leavened bread baked fresh to order',
    items: [
      { name: 'Classic Sourdough Loaf', serving: '1 loaf', price: '$12' },
      { name: 'Specialty Flavors', serving: '1 loaf', price: '$14' },
      { name: 'Sourdough Focaccia', serving: '1 slab', price: 'From $16' },
    ],
    note: 'Flavors include rosemary olive oil, jalape\u00f1o cheddar, and everything seasoning. Order 3\u20135 days ahead.',
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
]

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'Reach out via our contact form, Instagram DM, or text. We\'ll confirm your order details and send you an invoice for payment.',
  },
  {
    question: 'How far in advance should I order?',
    answer: 'Sourdough bread requires 3\u20135 days lead time. Cake pops need 5\u20137 days. For large event orders, we recommend 2\u20133 weeks.',
  },
  {
    question: 'Is delivery available?',
    answer: 'We are pickup only at this time. Pickup is in the San Diego area \u2014 the exact address is provided when your order is confirmed.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Full payment is required upfront to secure your order date. We\'ll email you an invoice with payment options.',
  },
  {
    question: 'Do prices include tax?',
    answer: 'Prices shown do not include California sales tax. Tax is calculated at checkout.',
  },
  {
    question: 'Do you offer discounts for large orders?',
    answer: 'Yes! Orders of 100+ cake pops may qualify for a volume discount. Contact us with your event details for a custom quote.',
  },
]

export default function PricingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '/pricing' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Simple, Honest Pricing
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Handcrafted sourdough bread and cake pops, made fresh to order. Local pickup in San Diego.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust transition-colors hover:-translate-y-0.5 transition-transform">
              Place an Order
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
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              { label: 'Sourdough', price: '$12+', sub: 'per loaf' },
              { label: 'Cake Pops', price: '$36+', sub: 'per dozen' },
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
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What We Offer</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto leading-relaxed">
              Everything is handcrafted with premium ingredients, baked fresh to order. Pickup only in San Diego.
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
                      <span>Quantity</span>
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Order?</h2>
          <p className="text-blush text-lg mb-8 leading-relaxed">
            Get in touch and we&apos;ll get your order started. Local pickup in San Diego.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Contact Us to Order
          </Link>
        </div>
      </section>
    </>
  )
}
