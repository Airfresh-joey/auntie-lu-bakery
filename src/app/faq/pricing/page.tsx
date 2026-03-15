import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Pricing Guide | FAQ - Auntie Lu's Bakery San Diego",
  description: 'How much do custom cakes, wedding cakes, cake pops, and sourdough cost at Auntie Lu\'s Bakery? Pricing guide, what affects cost, quotes, and payment options.',
  openGraph: {
    title: "Pricing FAQ | Auntie Lu's Bakery San Diego",
    description: 'Transparent pricing information for custom cakes, wedding cakes, cake pops, cupcakes, and sourdough bread from Auntie Lu\'s Bakery.',
    url: 'https://www.auntielusbakery.com/faq/pricing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/pricing',
  },
}

const faqs = [
  {
    question: 'How much does a wedding cake cost?',
    answer: 'Wedding cakes at Auntie Lu\'s start at $350 for a simple two-tier buttercream design serving 30-50 guests. Most wedding cakes range from $500-$1,500 depending on the number of tiers, serving size, design complexity, fondant work, and sugar flowers. Elaborate multi-tier designs with intricate detailing can go higher. We provide detailed quotes after your free consultation.',
  },
  {
    question: 'How much do custom birthday cakes cost?',
    answer: 'Custom birthday cakes start at $75 for a single-tier 6-inch cake serving 8-12 people. Standard 8-inch cakes start at $95 and serve 15-20. Two-tier birthday cakes start at $175. Pricing increases based on design complexity, fondant work, 3D elements, and special finishes.',
  },
  {
    question: 'What is the price for cake pops?',
    answer: 'Cake pops are priced per dozen. Standard flavors and simple designs start at $36/dozen. Custom decorated cake pops with detailed designs start at $42/dozen. Premium flavors and elaborate designs (branded, character-themed, etc.) start at $48/dozen. Minimum order is 1 dozen (12 pieces).',
  },
  {
    question: 'How much does sourdough bread cost?',
    answer: 'Our artisan sourdough loaves are $12 each. Specialty sourdough varieties (rosemary olive oil, jalapeño cheddar, everything seasoning, etc.) are $14 each. We also offer sourdough focaccia starting at $16.',
  },
  {
    question: 'What factors affect the price of a custom cake?',
    answer: 'Several factors influence pricing: Number of tiers and serving size, design complexity (simple buttercream vs. hand-painted fondant), special elements (sugar flowers, gold leaf, edible images, 3D toppers), premium ingredients (imported chocolate, specialty flavors), delivery and setup requirements. We always provide a detailed quote before you commit.',
  },
  {
    question: 'Do you offer cupcake pricing?',
    answer: 'Standard cupcakes start at $4 each with a minimum order of 12. Decorated cupcakes with custom toppers or detailed piping start at $5 each. Cupcake towers for events (24+ cupcakes) start at $100. We also offer mini cupcakes starting at $2.50 each.',
  },
  {
    question: 'How do I get a quote for my custom order?',
    answer: 'The best way to get an accurate quote is to contact us with your event date, guest count, desired flavors, and any design inspiration (Pinterest boards, photos, sketches). We\'ll respond within 24 hours with a detailed quote. For wedding cakes, we offer free in-person or virtual consultations.',
  },
  {
    question: 'Do you charge for delivery?',
    answer: 'Yes, delivery fees are separate from product pricing. Local delivery within 10 miles of our San Diego location starts at $25. Delivery to venues farther away ranges from $35-$75 depending on distance. Venue setup (assembling tiered cakes on-site) is an additional $50. See our delivery FAQ for full details.',
  },
  {
    question: 'Is there a tasting fee?',
    answer: 'Wedding cake tastings are complimentary for orders over $500. For other custom cake orders, we offer tasting boxes for $35 that include 6 flavor samples. The tasting box cost is credited toward your final order if you book with us.',
  },
  {
    question: 'Do prices include tax?',
    answer: 'Prices listed on our website do not include California sales tax (currently 7.75% in San Diego). Tax is calculated and added at checkout. Delivery fees are also subject to tax.',
  },
  {
    question: 'Do you offer discounts for large orders?',
    answer: 'We offer volume pricing for large event orders. Orders of 100+ cake pops, 50+ cupcakes, or multi-item event packages may qualify for a 10-15% discount. Contact us with your event details and we\'ll create a custom package with the best pricing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards through our secure online checkout powered by Stripe. For invoiced custom orders, we also accept bank transfers. We require a 50% deposit for custom cakes over $300, with the balance due 7 days before delivery.',
  },
]

export default function PricingFAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Pricing', href: '/faq/pricing' },
      ]} />

      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Pricing Guide</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            Transparent pricing for all our baked goods. Every creation is custom, so prices reflect the artistry and quality ingredients that go into each order.
          </p>
        </div>
      </section>

      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Price Overview */}
          <div className="bg-cream rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-6">Starting Prices at a Glance</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">Sourdough Bread</span>
                <span className="text-crust font-semibold">From $12</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">Cake Pops (per dozen)</span>
                <span className="text-crust font-semibold">From $36</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">Cupcakes (each)</span>
                <span className="text-crust font-semibold">From $4</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">Custom Birthday Cakes</span>
                <span className="text-crust font-semibold">From $75</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal font-medium">Wedding Cakes</span>
                <span className="text-crust font-semibold">From $350</span>
              </div>
            </div>
          </div>

          <FAQList faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">Related Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/faq/ordering" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Ordering & Lead Times</h3>
              <p className="text-soft-brown text-sm m-0">How to order, lead times, and deposits</p>
            </Link>
            <Link href="/faq/custom-cakes" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Custom Cake Design</h3>
              <p className="text-soft-brown text-sm m-0">The design process and consultations</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Get a Custom Quote</h2>
        <p className="text-blush text-lg mb-8">Tell us about your vision and we&apos;ll provide a detailed quote within 24 hours.</p>
        <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
          Request a Quote
        </Link>
      </section>
    </>
  )
}
