import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "FAQ | Auntie Lu's Bakery - Custom Cakes & Baked Goods San Diego",
  description: 'Find answers to common questions about ordering custom cakes, cake pops, sourdough bread, delivery, pricing, dietary options, and more from Auntie Lu\'s Bakery in San Diego.',
  openGraph: {
    title: "Frequently Asked Questions | Auntie Lu's Bakery San Diego",
    description: 'Everything you need to know about ordering from Auntie Lu\'s Bakery. Custom cakes, cake pops, sourdough, delivery, pricing, and dietary accommodations.',
    url: 'https://www.auntielusbakery.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq',
  },
}

const categories = [
  {
    title: 'Ordering & Lead Times',
    href: '/faq/ordering',
    description: 'How to place orders, lead times, deposits, and cancellation policies.',
  },
  {
    title: 'Pricing Guide',
    href: '/faq/pricing',
    description: 'What affects pricing, cost ranges, payment methods, and quotes.',
  },
  {
    title: 'Delivery & Pickup',
    href: '/faq/delivery',
    description: 'Delivery areas, setup services, fees, and pickup information.',
  },
  {
    title: 'Custom Cake Design',
    href: '/faq/custom-cakes',
    description: 'The design process, consultations, tastings, and photo matching.',
  },
  {
    title: 'Dietary & Allergens',
    href: '/faq/dietary',
    description: 'Gluten-free, vegan, nut-free, and allergen information.',
  },
]

const generalFaqs = [
  {
    question: 'How far in advance should I order?',
    answer: 'It depends on the product! Sourdough bread requires 3-5 days lead time. Cake pops need 5-7 days. Custom cakes require 5-7 days for standard designs, and 2+ weeks for elaborate multi-tier or wedding cakes. For large events, we recommend ordering 2-3 weeks ahead to guarantee your date.',
  },
  {
    question: 'What is your delivery area?',
    answer: 'We serve all of San Diego County including La Jolla, Coronado, Del Mar, Pacific Beach, North Park, Hillcrest, Carlsbad, Encinitas, Chula Vista, and surrounding areas. Delivery fees vary by distance. We also offer pickup from our San Diego location.',
  },
  {
    question: 'Do you offer tastings?',
    answer: 'Yes! We offer complimentary tastings for wedding cake orders over $500. For other custom cake orders, we offer tasting boxes that include samples of our most popular flavors for $35. Tasting boxes can be picked up or delivered within our service area.',
  },
  {
    question: 'Can you match a design from a photo?',
    answer: 'Absolutely! We love recreating designs from photos or Pinterest boards. Send us your inspiration images and we\'ll provide a quote. While we can\'t guarantee an exact replica (every cake is handmade!), we\'ll work closely with you to capture the style, colors, and feel of your vision.',
  },
  {
    question: 'What dietary options do you offer?',
    answer: 'We offer gluten-free cake and cupcake options, as well as dairy-free and vegan alternatives for many of our products. Please note that all items are made in a shared kitchen that handles gluten, dairy, nuts, and eggs, so we cannot guarantee a completely allergen-free environment.',
  },
  {
    question: 'How much does a wedding cake cost?',
    answer: 'Wedding cakes start at $350 for simple two-tier designs serving 30-50 guests. Most wedding cakes range from $500-$1,500 depending on size, complexity, fondant work, sugar flowers, and other custom details. We provide detailed quotes after your consultation.',
  },
  {
    question: 'Do you deliver to venues?',
    answer: 'Yes! We deliver and set up cakes at venues throughout San Diego County. We work with many popular venues including Hotel del Coronado, The Lodge at Torrey Pines, Rancho Valencia, and more. Delivery and setup fees start at $50 depending on location.',
  },
  {
    question: 'How does payment work?',
    answer: 'For standard orders, full payment is required at the time of ordering. For custom cakes over $300, we require a 50% deposit to secure your date, with the remaining balance due 7 days before delivery/pickup. We accept all major credit cards and offer Stripe-powered secure checkout.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Orders can be cancelled up to 72 hours before the scheduled pickup/delivery date for a full refund. Cancellations within 72 hours are subject to a 50% charge. Custom cake deposits are non-refundable once the design process has begun.',
  },
  {
    question: 'Do you cater large events?',
    answer: 'Yes! We love catering weddings, corporate events, baby showers, quinceañeras, and more. We can provide custom cakes, cake pop displays, cupcake towers, dessert tables, and sourdough bread stations. Contact us for custom quotes on large orders.',
  },
  {
    question: 'How do I contact Auntie Lu\'s Bakery?',
    answer: 'You can reach us at hello@auntielusbakery.com, through our contact form, or via Instagram or Facebook @auntielusbakery. We typically respond within 24 hours on business days.',
  },
  {
    question: 'Where is Auntie Lu\'s Bakery located?',
    answer: 'We are located in San Diego, California and serve the entire San Diego County area. Our exact pickup address is provided in your order confirmation email.',
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={generalFaqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">Help Center</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            Everything you need to know about ordering from Auntie Lu&apos;s Bakery. Can&apos;t find your answer? <Link href="/contact" className="text-crust font-medium hover:text-dark-crust transition-colors">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">Browse by Topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="no-underline group">
                <div className="bg-white rounded-2xl p-6 border border-blush hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="w-10 h-10 rounded-full bg-wheat/40 flex items-center justify-center mb-3"></span>
                  <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-crust transition-colors">{cat.title}</h3>
                  <p className="text-soft-brown text-sm leading-relaxed m-0">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">General Questions</h2>
          <FAQList faqs={generalFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Still Have Questions?</h2>
        <p className="text-blush text-lg mb-8 max-w-xl mx-auto">We&apos;d love to hear from you. Reach out and we&apos;ll get back to you within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Contact Us
          </Link>
          <a href="mailto:hello@auntielusbakery.com" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold no-underline hover:bg-white/10 transition-colors">
            Email Auntie Lu
          </a>
        </div>
      </section>
    </>
  )
}
