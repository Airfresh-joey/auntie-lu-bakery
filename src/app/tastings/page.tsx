import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/SchemaMarkup'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cake Tastings | Auntie Lu\'s Bakery - San Diego Custom Cakes',
  description: 'Book a cake tasting at Auntie Lu\'s Bakery! Sample our flavors, frostings, and fillings. $50 tasting fee credited toward your order. San Diego area.',
  openGraph: {
    title: 'Cake Tastings | Auntie Lu\'s Bakery',
    description: 'Sample our cake flavors and frostings. $50 tasting fee credited toward your order.',
    url: 'https://www.auntielusbakery.com/tastings',
  },
}

const FLAVORS = [
  { name: 'Vanilla Bean', desc: 'Classic Madagascar vanilla with real bean specks', popular: true },
  { name: 'Chocolate', desc: 'Rich Dutch-process cocoa, deep and indulgent', popular: true },
  { name: 'Red Velvet', desc: 'Velvety cocoa cake with a hint of tang', popular: true },
  { name: 'Funfetti', desc: 'Vanilla cake loaded with rainbow sprinkles', popular: false },
  { name: 'Lemon', desc: 'Bright, citrusy lemon zest cake', popular: false },
  { name: 'Strawberry', desc: 'Real strawberry puree folded into vanilla cake', popular: false },
  { name: 'Marble', desc: 'Swirled vanilla and chocolate in every bite', popular: false },
  { name: 'Carrot', desc: 'Spiced carrot cake with walnuts and raisins', popular: false },
  { name: 'Cookies & Cream', desc: 'Vanilla cake with crushed cookie pieces', popular: false },
  { name: 'Salted Caramel', desc: 'Buttery caramel with a sea salt finish', popular: false },
  { name: 'Coconut', desc: 'Tropical coconut cake with toasted flakes', popular: false },
  { name: 'Almond', desc: 'Delicate almond-infused cake with a tender crumb', popular: false },
]

const FROSTINGS = [
  { name: 'Buttercream', desc: 'Smooth, sweet, and pipeable. Our most popular choice.' },
  { name: 'Cream Cheese', desc: 'Tangy and rich - perfect with red velvet and carrot cake.' },
  { name: 'Chocolate Ganache', desc: 'Luxurious dark chocolate glaze for the ultimate chocolate lover.' },
  { name: 'Fondant', desc: 'Smooth, sculpt-ready finish for elaborate designs and clean lines.' },
]

export default function TastingsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Cake Tastings', url: 'https://www.auntielusbakery.com/tastings' },
      ]} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-[4%] bg-gradient-to-b from-blush/40 to-cream">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[
            { name: 'Home', href: '/' },
            { name: 'Cake Tastings', href: '/tastings' },
          ]} />
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-wheat/15 text-crust px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              Taste Before You Commit
            </div>
            <h1 className="text-4xl md:text-5xl text-dark-crust mb-4">Cake Tastings</h1>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto">
              Not sure which flavor is &ldquo;the one&rdquo;? Book a tasting session and sample our
              handmade cakes, frostings, and fillings before you decide.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">The Experience</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">What&apos;s Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <div className="space-y-5">
                {[
                  { title: 'Up to 6 Cake Flavors', desc: 'Sample from our full flavor menu - from classic vanilla to salted caramel.' },
                  { title: '4 Frosting Options', desc: 'Try buttercream, cream cheese, ganache, and fondant to find your perfect pairing.' },
                  { title: 'Design Consultation', desc: 'We\'ll discuss your vision, colors, and design ideas during the tasting.' },
                  { title: 'Personalized Recommendations', desc: 'Based on your event, we\'ll suggest the best flavor and design combinations.' },
                  { title: 'Take-Home Samples', desc: 'Can\'t decide? Take leftover samples home for your partner, family, or bridal party.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-wheat/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-wheat"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <h4 className="text-dark-crust font-semibold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-[#6B6560] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-2">Tasting Fee</div>
                <div className="text-5xl font-serif text-dark-crust font-bold">$50</div>
                <p className="text-[#6B6560] text-sm mt-2">per tasting session</p>
              </div>
              <div className="bg-wheat/10 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wheat"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-dark-crust font-semibold text-sm">Credited to Your Order!</span>
                </div>
                <p className="text-crust text-xs">When you place your cake order with us, the full $50 tasting fee is credited toward your total. It&apos;s essentially a free tasting!</p>
              </div>
              <ul className="space-y-2 mb-6">
                {['Up to 6 flavors', '4 frosting types', '30-45 minute session', 'Design consultation included', 'Take-home samples'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#6B6560]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-wheat"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/book-consultation" className="block text-center bg-dark-crust text-white py-4 rounded-full font-semibold no-underline hover:bg-crust transition-colors">
                Book a Tasting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available Flavors */}
      <section className="py-16 px-[4%] bg-blush/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Menu</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">Available Flavors</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">Choose up to 6 flavors to sample at your tasting. All cakes are made fresh from scratch.</p>
          </div>

          <h3 className="font-serif text-xl text-dark-crust mb-4">Cake Flavors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {FLAVORS.map(flavor => (
              <div key={flavor.name} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
                {flavor.popular && (
                  <span className="absolute top-3 right-3 bg-wheat/15 text-crust text-xs font-semibold px-2 py-0.5 rounded-full">Popular</span>
                )}
                <h4 className="text-dark-crust font-semibold mb-1">{flavor.name}</h4>
                <p className="text-[#6B6560] text-sm">{flavor.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl text-dark-crust mb-4">Frostings &amp; Finishes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FROSTINGS.map(frost => (
              <div key={frost.name} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-dark-crust font-semibold mb-1">{frost.name}</h4>
                <p className="text-[#6B6560] text-sm">{frost.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Getting Started</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">How to Book a Tasting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Book Online', desc: 'Use our consultation form to request a tasting. Mention which flavors interest you!' },
              { num: '2', title: 'Confirm Date', desc: 'We\'ll email you within 24 hours to confirm your date, time, and flavor selections.' },
              { num: '3', title: 'Taste & Design', desc: 'Sample your flavors, discuss designs, and finalize your cake vision during a 30-45 min session.' },
              { num: '4', title: 'Place Your Order', desc: 'Love what you tasted? Place your order and your $50 tasting fee is credited to the total!' },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-wheat/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-wheat text-2xl font-serif font-bold">{step.num}</span>
                </div>
                <h3 className="text-lg text-dark-crust mb-2 font-semibold">{step.title}</h3>
                <p className="text-[#6B6560] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasting FAQ */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Questions</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust">Tasting FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Can I bring guests to the tasting?', a: 'Of course! Bring up to 2 guests - your partner, mom, maid of honor, or whoever is helping you decide. Additional guests are $15 each.' },
              { q: 'How far in advance should I book?', a: 'We recommend booking your tasting at least 2-3 weeks before you need to finalize your cake order. For weddings, 3-6 months out is ideal.' },
              { q: 'What if I have dietary restrictions?', a: 'Please let us know about any allergies when booking. We can prepare specific samples to accommodate dietary needs where possible. Note: our kitchen handles gluten, dairy, nuts, and eggs.' },
              { q: 'Do I have to order a cake after the tasting?', a: 'Not at all! The tasting is a no-pressure experience. If you decide to order, the $50 fee is credited to your total. If not, you still enjoyed some delicious cake!' },
              { q: 'Can I request flavors not on the menu?', a: 'We\'re always open to custom flavor requests! Let us know when booking and we\'ll do our best to accommodate special requests.' },
            ].map(faq => (
              <div key={faq.q} className="bg-white rounded-xl p-5 shadow-sm">
                <h4 className="text-dark-crust font-semibold mb-1.5">{faq.q}</h4>
                <p className="text-[#6B6560] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Ready to Find Your Perfect Flavor?</h2>
          <p className="text-blush text-lg mb-8">Book a consultation and tasting today. Your $50 tasting fee is credited toward your cake order!</p>
          <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white transition-colors">
            Book a Consultation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
