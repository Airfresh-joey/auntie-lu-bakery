import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "How to Order | FAQ - Auntie Lu's Bakery San Diego",
  description: 'Learn how to order custom cakes, cake pops, and sourdough from Auntie Lu\'s Bakery. Lead times, deposits, minimum orders, cancellation policy, and step-by-step ordering guide.',
  openGraph: {
    title: "Ordering FAQ | Auntie Lu's Bakery San Diego",
    description: 'Everything you need to know about placing an order with Auntie Lu\'s Bakery. Lead times, deposits, cancellations, and more.',
    url: 'https://www.auntielusbakery.com/faq/ordering',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/ordering',
  },
}

const faqs = [
  {
    question: 'How do I place an order with Auntie Lu\'s Bakery?',
    answer: 'You can place orders directly through our website using our online ordering system, or contact us at hello@auntielusbakery.com for custom orders. For standard products like sourdough bread and pre-designed cake pops, simply add items to your cart and checkout. For custom cakes, we recommend reaching out via our contact form so we can discuss your vision.',
  },
  {
    question: 'How far in advance should I order?',
    answer: 'Lead times vary by product: Sourdough bread requires 3-5 days advance notice. Cake pops need 5-7 days lead time. Standard custom cakes require 5-7 days. Elaborate multi-tier or wedding cakes need at least 2 weeks, ideally 3-4 weeks. For holidays and peak wedding season (May-October), we recommend ordering even further in advance as dates fill up quickly.',
  },
  {
    question: 'Is there a minimum order requirement?',
    answer: 'Cake pops have a minimum order of 12 pieces (1 dozen). Sourdough bread has a minimum of 1 loaf. Custom cakes start at a single tier. For event catering, minimums may apply depending on the scope — contact us for details.',
  },
  {
    question: 'Do you require a deposit for custom orders?',
    answer: 'Yes, custom cake orders over $300 require a 50% non-refundable deposit to secure your date. The remaining balance is due 7 days before your pickup or delivery date. For orders under $300, full payment is required at the time of ordering.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Orders can be cancelled up to 72 hours (3 days) before the scheduled pickup or delivery for a full refund. Cancellations within 72 hours are subject to a 50% charge, as ingredients have already been purchased and production may have begun. Custom cake deposits are non-refundable once the design consultation has been completed.',
  },
  {
    question: 'Can I modify my order after placing it?',
    answer: 'Minor modifications (flavor changes, color adjustments) can usually be accommodated up to 72 hours before your order date. Major changes (size upgrades, design overhauls) may require additional lead time and may affect pricing. Contact us as soon as possible if you need to make changes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover) through our secure Stripe-powered checkout. For custom orders invoiced directly, we also accept bank transfers. We do not accept cash or checks.',
  },
  {
    question: 'Do you offer rush orders?',
    answer: 'We can sometimes accommodate rush orders depending on our current schedule. Rush orders (less than the standard lead time) incur a 25-50% rush fee. Contact us directly to check availability — we\'ll do our best to make it happen!',
  },
  {
    question: 'How do I order for a large event?',
    answer: 'For events with 50+ guests or orders requiring multiple items (cakes, cake pops, cupcakes, etc.), we recommend scheduling a consultation. Email us at hello@auntielusbakery.com with your event date, guest count, and what you have in mind. We\'ll create a custom proposal with pricing and a timeline.',
  },
  {
    question: 'Will I receive an order confirmation?',
    answer: 'Yes! You\'ll receive an immediate email confirmation when you place your order online. For custom orders, you\'ll receive a confirmation once your deposit is processed. We\'ll also send a reminder email 2 days before your pickup or delivery date with all the details.',
  },
  {
    question: 'Can I order for someone else as a gift?',
    answer: 'Absolutely! We love gift orders. During checkout, you can specify a different recipient for delivery. We can also include a gift message with your order. For cake pops, we offer special gift packaging options at checkout.',
  },
  {
    question: 'Do you take orders during holidays?',
    answer: 'We accept holiday orders but recommend ordering extra early — at least 2-3 weeks in advance for Thanksgiving, Christmas, Easter, Valentine\'s Day, and Mother\'s Day. We close for a limited number of holidays each year, which we announce on our social media channels.',
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
            Everything you need to know about placing an order, lead times, deposits, and our cancellation policy.
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
                <span className="text-soft-brown"><strong className="text-charcoal">Sourdough Bread:</strong> 3-5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-wheat flex-shrink-0" />
                <span className="text-soft-brown"><strong className="text-charcoal">Cake Pops:</strong> 5-7 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-wheat flex-shrink-0" />
                <span className="text-soft-brown"><strong className="text-charcoal">Custom Cakes:</strong> 5-7 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-wheat flex-shrink-0" />
                <span className="text-soft-brown"><strong className="text-charcoal">Wedding Cakes:</strong> 2-4 weeks</span>
              </div>
            </div>
          </div>

          <FAQList faqs={faqs} />
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">Related Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/faq/pricing" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Pricing Guide</h3>
              <p className="text-soft-brown text-sm m-0">What affects cost and how to get a quote</p>
            </Link>
            <Link href="/faq/delivery" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Delivery & Pickup</h3>
              <p className="text-soft-brown text-sm m-0">Delivery areas, fees, and pickup info</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Place Your Order?</h2>
        <p className="text-blush text-lg mb-8">Browse our products or get in touch for a custom order.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            View Products
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold no-underline hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
