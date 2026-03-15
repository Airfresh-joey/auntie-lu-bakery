import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Delivery & Pickup | FAQ - Auntie Lu's Bakery San Diego",
  description: 'Delivery areas, setup services, delivery fees, and pickup information for Auntie Lu\'s Bakery in San Diego. We deliver to venues across San Diego County.',
  openGraph: {
    title: "Delivery FAQ | Auntie Lu's Bakery San Diego",
    description: 'Learn about our delivery areas, venue setup, fees, and pickup options across San Diego County.',
    url: 'https://www.auntielusbakery.com/faq/delivery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/delivery',
  },
}

const faqs = [
  {
    question: 'What is your delivery area?',
    answer: 'We deliver throughout San Diego County, covering all major neighborhoods and cities including La Jolla, Coronado, Del Mar, Pacific Beach, North Park, Hillcrest, Carlsbad, Encinitas, Chula Vista, Rancho Santa Fe, Poway, and more. We can also accommodate deliveries to South Orange County for an additional fee.',
  },
  {
    question: 'How much does delivery cost?',
    answer: 'Delivery fees are based on distance from our San Diego location: Within 10 miles — $25. 10-20 miles — $35. 20-30 miles — $50. 30+ miles — $75. Venue setup (assembling tiered cakes, arranging displays) is an additional $50. Exact fees are calculated at checkout based on your delivery address.',
  },
  {
    question: 'Do you deliver to wedding venues?',
    answer: 'Yes! We regularly deliver and set up at wedding venues across San Diego County. We work with popular venues including Hotel del Coronado, The Lodge at Torrey Pines, Rancho Valencia, The Prado at Balboa Park, La Jolla Shores, and many more. We coordinate directly with venue staff to ensure everything is perfect.',
  },
  {
    question: 'What does venue setup include?',
    answer: 'Our venue setup service ($50) includes transporting the cake safely to your venue, assembling multi-tier cakes on-site, placing the cake on your display table, adding any fresh flowers or final decorations, and ensuring everything looks exactly as designed. We recommend venue setup for all wedding cakes and multi-tier event cakes.',
  },
  {
    question: 'Can I pick up my order instead?',
    answer: 'Absolutely! Pickup is always free. Your pickup location and time will be provided in your order confirmation email. We schedule pickup windows to ensure your order is as fresh as possible. Pickups are available in the San Diego metro area.',
  },
  {
    question: 'What time do you deliver?',
    answer: 'Standard delivery windows are between 9 AM and 5 PM, Monday through Saturday. For weddings and special events, we can accommodate earlier or later delivery times to match your event schedule. We\'ll confirm an exact delivery window with you 48 hours before your order date.',
  },
  {
    question: 'How do you ensure cakes arrive safely?',
    answer: 'We take cake safety seriously! All cakes are transported in temperature-controlled vehicles with anti-slip mats and custom supports. Multi-tier cakes are transported unassembled and carefully stacked on-site. Cake pops and cupcakes are packaged in secure carriers. We\'ve delivered thousands of orders without incident.',
  },
  {
    question: 'What if I need to change my delivery address?',
    answer: 'You can update your delivery address up to 48 hours before your scheduled delivery. Address changes may affect the delivery fee. Contact us at hello@auntielusbakery.com to update your delivery details.',
  },
  {
    question: 'Do you deliver on Sundays?',
    answer: 'Sunday deliveries are available for weddings and special events by request. There is a $25 weekend surcharge for Sunday deliveries. Saturday deliveries are included in our standard schedule at no additional charge.',
  },
  {
    question: 'Can someone else pick up my order?',
    answer: 'Yes! If someone else will be picking up your order, just let us know their name and we\'ll make a note. The person picking up should mention the order name. We\'ll also send them handling instructions to ensure your order stays perfect on the way home.',
  },
  {
    question: 'What happens if there\'s a delivery issue?',
    answer: 'While delivery issues are extremely rare, we stand behind every order. If your cake is damaged during delivery, we will repair it on-site if possible, provide a partial or full refund, or rush a replacement depending on timing. Contact us immediately if there\'s any issue and we\'ll make it right.',
  },
  {
    question: 'Do you ship orders outside San Diego?',
    answer: 'Currently, we do not ship cakes or baked goods. Our products are made fresh and are best enjoyed within a day or two. We focus on local delivery within San Diego County to ensure the highest quality. Cake pops can travel well for up to 5 days at room temperature if you\'d like to pick up and transport them yourself.',
  },
]

export default function DeliveryFAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Delivery', href: '/faq/delivery' },
      ]} />

      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Delivery & Pickup</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            We deliver fresh baked goods across San Diego County and set up at venues throughout the region.
          </p>
        </div>
      </section>

      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Delivery Fee Reference */}
          <div className="bg-cream rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-6">Delivery Fee Guide</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">Within 10 miles</span>
                <span className="text-crust font-semibold">$25</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">10-20 miles</span>
                <span className="text-crust font-semibold">$35</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">20-30 miles</span>
                <span className="text-crust font-semibold">$50</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-blush">
                <span className="text-charcoal font-medium">30+ miles</span>
                <span className="text-crust font-semibold">$75</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal font-medium">Venue Setup</span>
                <span className="text-crust font-semibold">+$50</span>
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
              <p className="text-soft-brown text-sm m-0">How to order and when to place your order</p>
            </Link>
            <Link href="/faq/pricing" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Pricing Guide</h3>
              <p className="text-soft-brown text-sm m-0">Product pricing and payment info</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Need Delivery to Your Venue?</h2>
        <p className="text-blush text-lg mb-8">We work with venues across San Diego County. Tell us where and we&apos;ll handle the rest.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/venues" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            View Partner Venues
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold no-underline hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
