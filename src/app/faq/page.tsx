import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "FAQ | Auntie Lu's Bakery - Sourdough & Cake Pops San Diego",
  description: 'Find answers to common questions about ordering sourdough bread and cake pops from Auntie Lu\'s Bakery in San Diego. Pickup, packaging, allergies, and more.',
  openGraph: {
    title: "Frequently Asked Questions | Auntie Lu's Bakery San Diego",
    description: 'Everything you need to know about ordering sourdough and cake pops from Auntie Lu\'s Bakery.',
    url: 'https://www.auntielusbakery.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq',
  },
}

const faqs = [
  {
    question: 'How far in advance should I order?',
    answer: 'Sourdough bread requires 3-5 days lead time. Cake pops need 5-7 days. For large events, we recommend ordering 2-3 weeks ahead to guarantee your date.',
  },
  {
    question: 'Where is pickup?',
    answer: 'Pickup is in the San Diego area. The exact address will be provided in your order confirmation email once your order is placed.',
  },
  {
    question: 'Do you deliver?',
    answer: 'No, we are pickup only at this time. Our pickup location is in the San Diego metro area.',
  },
  {
    question: 'How do cake pops come packaged?',
    answer: 'Cake pops are individually wrapped with allergy info noted on the back, and packaged laying flat in a windowed pastry box. You can upgrade to a display stand carrier for an additional fee.',
  },
  {
    question: 'Do cake pops need refrigeration?',
    answer: 'Cake pops can be stored at room temperature for up to 5 days, refrigerated for up to 2 weeks, or frozen for up to 3 months.',
  },
  {
    question: 'Do you cater to allergies?',
    answer: 'Unfortunately, we\'re unable to accommodate specific food allergies. All items are made in a home kitchen that handles gluten, dairy, nuts, and eggs. We cannot guarantee an allergen-free environment.',
  },
  {
    question: 'How does payment work?',
    answer: 'Full payment is required upfront to secure your order date. We\'ll email you an invoice with payment options.',
  },
  {
    question: 'Can I do large or corporate orders?',
    answer: 'Yes! We love doing large orders for weddings, corporate events, baby showers, and more. Contact us for custom quotes.',
  },
  {
    question: 'How do I order?',
    answer: 'Fill out our contact form and we\'ll get back to you within 24 hours with a detailed order form to customize your request. You can also email us directly at hello@auntielusbakery.com.',
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
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

      {/* FAQs */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <FAQList faqs={faqs} />
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
