import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "How to Order | FAQ - Auntie Lu's Bakery San Diego",
  description: 'Learn how to order sourdough bread and cake pops from Auntie Lu\'s Bakery in San Diego. Local pickup only. Order via contact form, Instagram, or text.',
  openGraph: {
    title: "Ordering FAQ | Auntie Lu's Bakery San Diego",
    description: 'Everything you need to know about ordering from Auntie Lu\'s Bakery. Local pickup in San Diego.',
    url: 'https://www.auntielusbakery.com/faq/ordering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/ordering',
  },
}

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'You can order by filling out our contact form, sending us an Instagram DM, or texting us directly. We\'ll confirm your order details and send an invoice for payment.',
  },
  {
    question: 'How far in advance should I order?',
    answer: 'Sourdough bread requires 3\u20135 days lead time. Cake pops need 5\u20137 days. For large event orders (50+ cake pops), we recommend ordering 2\u20133 weeks ahead.',
  },
  {
    question: 'Is there a minimum order?',
    answer: 'Cake pops have a minimum order of 12 pieces (1 dozen). Sourdough bread has a minimum of 1 loaf.',
  },
  {
    question: 'Do you deliver?',
    answer: 'No, we are pickup only at this time. Pickup is in the San Diego area. The exact address is provided when your order is confirmed.',
  },
  {
    question: 'How does payment work?',
    answer: 'Full payment is required upfront to secure your order date. We\'ll email you an invoice with payment options.',
  },
  {
    question: 'Can I modify or cancel my order?',
    answer: 'Please contact us as soon as possible if you need to make changes. We do our best to accommodate modifications, but once ingredients have been purchased and production has begun, cancellations may not be possible.',
  },
  {
    question: 'Do you take large or event orders?',
    answer: 'Yes! We love doing large cake pop orders for weddings, corporate events, baby showers, and more. Contact us for a custom quote.',
  },
  {
    question: 'Do you take orders during holidays?',
    answer: 'We accept holiday orders but recommend ordering extra early \u2014 at least 2\u20133 weeks in advance for Valentine\'s Day, Easter, Mother\'s Day, Thanksgiving, and Christmas.',
  },
]

export default function OrderingFAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Ordering', href: '/faq/ordering' },
      ]} />

      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Ordering & Lead Times</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            Everything you need to know about ordering sourdough bread and cake pops from Auntie Lu&apos;s Bakery.
          </p>
        </div>
      </section>

      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Quick Reference */}
          <div className="bg-cream rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-4">Quick Reference: Lead Times</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-wheat flex-shrink-0" />
                <span className="text-soft-brown"><strong className="text-charcoal">Sourdough Bread:</strong> 3&ndash;5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-wheat flex-shrink-0" />
                <span className="text-soft-brown"><strong className="text-charcoal">Cake Pops:</strong> 5&ndash;7 days</span>
              </div>
            </div>
          </div>

          <FAQList faqs={faqs} />
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Place Your Order?</h2>
        <p className="text-blush text-lg mb-8">Get in touch via our contact form, Instagram, or text.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
