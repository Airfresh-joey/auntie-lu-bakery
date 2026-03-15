import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Gift Cards | The Sweetest Gift for Any Occasion',
  description: 'Give the gift of Auntie Lu\'s Bakery! Digital and physical gift cards available from $25 to $250. Perfect for birthdays, holidays, thank you gifts, and more. Instant digital delivery.',
  openGraph: {
    title: 'Gift Cards | Auntie Lu\'s Bakery San Diego',
    description: 'Give the gift of Auntie Lu\'s Bakery! Digital and physical gift cards available from $25 to $250. Perfect for birthdays, holidays, and more.',
    images: [{ url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/gift-cards',
  },
}

const giftCardAmounts = [
  { value: 25, label: '$25', description: 'A sweet little treat', popular: false },
  { value: 50, label: '$50', description: 'Perfect for a dozen cake pops', popular: true },
  { value: 100, label: '$100', description: 'A custom cake experience', popular: false },
  { value: 250, label: '$250', description: 'The ultimate bakery splurge', popular: false },
]

const perfectFor = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Birthdays',
    description: 'Let them choose their own birthday cake or treat',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Thank You Gifts',
    description: 'Show appreciation with something truly sweet',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Holidays',
    description: 'The perfect stocking stuffer or holiday surprise',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Corporate Gifts',
    description: 'Delight clients or reward your team',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Housewarming',
    description: 'Welcome new neighbors with something special',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: 'Celebrations',
    description: 'Engagements, graduations, promotions & more',
  },
]

const howItWorks = [
  { step: '1', title: 'Choose an Amount', description: 'Select from our preset amounts or enter a custom value from $10 to $500.' },
  { step: '2', title: 'Pick Digital or Physical', description: 'Digital cards are delivered instantly by email. Physical cards ship within 2-3 business days.' },
  { step: '3', title: 'Add a Personal Message', description: 'Include a heartfelt note to make your gift extra special.' },
  { step: '4', title: 'They Enjoy!', description: 'Your recipient can use their gift card on any Auntie Lu\'s product &mdash; cakes, cake pops, sourdough & more.' },
]

export default function GiftCardsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Gift Cards', url: 'https://www.auntielusbakery.com/gift-cards' },
      ]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-crust to-crust min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,168,83,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,83,0.2) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">The Sweetest Gift</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Auntie Lu&apos;s Gift Cards
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Give the gift of handcrafted cakes, artisan sourdough, and custom cake pops. Available in digital and physical formats &mdash; perfect for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#purchase" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Buy a Gift Card
            </a>
            <a href="#how-it-works" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Gift Card Amounts */}
      <section id="purchase" className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Choose Your Amount</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Gift Card Options</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">Select a preset amount or contact us for a custom value from $10 to $500.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {giftCardAmounts.map((card) => (
              <div key={card.value} className="relative bg-white rounded-2xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all border border-blush/30">
                {card.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wheat text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
                )}
                <p className="font-serif text-4xl text-dark-crust mb-2">{card.label}</p>
                <p className="text-[#6B6560] text-sm mb-6">{card.description}</p>
                <Link href="/contact" className="inline-block bg-dark-crust text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-crust transition-colors no-underline">
                  Purchase
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-wheat/10 rounded-2xl p-8 text-center border border-wheat/20">
            <p className="font-serif text-xl text-dark-crust mb-2">Custom Amount</p>
            <p className="text-[#6B6560] text-sm mb-4">Need a specific amount? We offer custom gift cards from $10 to $500.</p>
            <Link href="/contact" className="inline-block bg-wheat text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Contact Us for Custom Amount
            </Link>
          </div>
        </div>
      </section>

      {/* Digital vs Physical */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Two Great Options</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Digital &amp; Physical Gift Cards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Card */}
            <div className="bg-cream rounded-2xl p-10 border border-blush/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wheat/10 text-wheat mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-crust mb-4">Digital Gift Card</h3>
              <ul className="space-y-3 text-[#6B6560] text-sm mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Instant delivery</strong> via email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Beautiful <strong className="text-dark-crust">custom email design</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Schedule delivery</strong> for a future date</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Include a <strong className="text-dark-crust">personal message</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Perfect for <strong className="text-dark-crust">last-minute gifts</strong></span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-dark-crust text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-crust transition-colors no-underline">
                Get Digital Card
              </Link>
            </div>

            {/* Physical Card */}
            <div className="bg-cream rounded-2xl p-10 border border-blush/30">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wheat/10 text-wheat mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-crust mb-4">Physical Gift Card</h3>
              <ul className="space-y-3 text-[#6B6560] text-sm mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Premium card</strong> with branded packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Ships within <strong className="text-dark-crust">2-3 business days</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Comes in a <strong className="text-dark-crust">beautiful gift envelope</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Free shipping</strong> on all gift cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span>Great for a <strong className="text-dark-crust">tangible, personal gift</strong></span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-dark-crust text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-crust transition-colors no-underline">
                Get Physical Card
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Simple &amp; Easy</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">How Gift Cards Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wheat text-white font-serif text-xl font-semibold mb-5">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-3">{item.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Every Occasion</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Perfect For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfectFor.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-cream transition-colors">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-wheat/10 text-wheat">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-dark-crust mb-1">{item.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Gift Card FAQs</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: 'Do gift cards expire?', a: 'No! Auntie Lu\'s gift cards never expire. Use them whenever you\'re ready for something delicious.' },
              { q: 'Can gift cards be used for custom cake orders?', a: 'Absolutely! Gift cards can be applied toward any Auntie Lu\'s product, including custom cakes, cake pops, sourdough, and more.' },
              { q: 'Can I check my gift card balance?', a: 'Yes! Contact us at hello@auntielusbakery.com with your gift card number and we\'ll let you know your remaining balance.' },
              { q: 'Can I send a digital gift card to multiple people?', a: 'Each digital gift card is sent to one email address. For multiple recipients, simply purchase separate gift cards.' },
              { q: 'What if the recipient doesn\'t receive the digital card?', a: 'Check their spam/junk folder first. If it\'s still missing, contact us and we\'ll resend it right away.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-blush/20">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{faq.q}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Give the Gift of Something Sweet</h2>
          <p className="text-white/80 text-lg mb-8">
            Whether it&apos;s a birthday, holiday, or just because &mdash; an Auntie Lu&apos;s gift card is always the right choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Purchase a Gift Card
            </Link>
            <Link href="/special-offers" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View Special Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
