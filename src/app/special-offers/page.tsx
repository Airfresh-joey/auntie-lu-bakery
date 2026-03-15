import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Special Offers & Promotions | Save on Custom Cakes & Treats',
  description: 'Discover special offers at Auntie Lu\'s Bakery! First-time customer discounts, referral rewards, military discounts, seasonal specials, and exclusive newsletter deals on San Diego\'s best baked goods.',
  openGraph: {
    title: 'Special Offers & Promotions | Auntie Lu\'s Bakery San Diego',
    description: 'Discover special offers at Auntie Lu\'s Bakery! First-time discounts, referral rewards, military discounts, and seasonal specials.',
    images: [{ url: 'https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/special-offers',
  },
}

const currentPromotions = [
  {
    badge: 'New Customer',
    title: '10% Off Your First Order',
    description: 'Welcome to the Auntie Lu\'s family! Enjoy 10% off your entire first order &mdash; cakes, cake pops, sourdough, or anything else that catches your eye.',
    code: 'WELCOME10',
    cta: 'Order Now',
    ctaHref: '/products',
    highlight: true,
  },
  {
    badge: 'Referral Program',
    title: 'Give $25, Get $25',
    description: 'Love Auntie Lu\'s? Share the sweetness! When you refer a friend and they place their first order, you both receive a $25 credit toward your next purchase.',
    code: null,
    cta: 'Learn More',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    badge: 'Thank You For Your Service',
    title: 'Military & First Responder Discount',
    description: 'We proudly offer 15% off all orders for active military, veterans, police, firefighters, and EMTs. Just show valid ID at pickup or mention it when ordering.',
    code: 'HEROES15',
    cta: 'Order With Discount',
    ctaHref: '/products',
    highlight: false,
  },
]

const seasonalSpecials = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Spring Collection',
    description: 'Pastel cake pops, floral-themed cakes, and fresh berry sourdough. Available March through May.',
    available: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    title: 'Summer Treats',
    description: 'Tropical cake pops, citrus sourdough, and patriotic Fourth of July cakes. Available June through August.',
    available: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" /><path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" /><path d="M11 1v4" /><path d="M13 1v4" /><path d="M11 19v4" /><path d="M13 19v4" />
      </svg>
    ),
    title: 'Fall Flavors',
    description: 'Pumpkin spice cake pops, apple cider sourdough, and autumn-themed celebration cakes. Available September through November.',
    available: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Holiday Specials',
    description: 'Gingerbread cake pops, cranberry sourdough, and festive holiday cakes. Available November through January.',
    available: false,
  },
]

const perks = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    title: 'Exclusive Deals',
    description: 'Subscriber-only discounts and early access to seasonal specials',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      </svg>
    ),
    title: 'Birthday Surprise',
    description: 'A special treat on your birthday month &mdash; just for being part of our family',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'First to Know',
    description: 'Be the first to hear about new flavors, products, and limited-edition items',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'VIP Events',
    description: 'Invitations to tasting events, baking workshops, and community gatherings',
  },
]

export default function SpecialOffersPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Special Offers', url: 'https://www.auntielusbakery.com/special-offers' },
      ]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-dark-crust to-crust min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(212,168,83,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(212,168,83,0.2) 0%, transparent 50%)' }} />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Sweet Savings</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Special Offers &amp; Promotions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Enjoy exclusive discounts, referral rewards, and seasonal specials on San Diego&apos;s favorite handcrafted baked goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#promotions" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              View Current Offers
            </a>
            <a href="#newsletter" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Join Our Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section id="promotions" className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Limited Time</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Current Promotions</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">Take advantage of these sweet deals while they last.</p>
          </div>
          <div className="space-y-6">
            {currentPromotions.map((promo) => (
              <div key={promo.title} className={`rounded-2xl p-8 md:p-10 border ${promo.highlight ? 'bg-wheat/5 border-wheat/30 shadow-[0_4px_20px_rgba(212,168,83,0.15)]' : 'bg-white border-blush/30 shadow-[0_2px_10px_rgba(0,0,0,0.04)]'}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${promo.highlight ? 'bg-wheat text-white' : 'bg-dark-crust/10 text-dark-crust'}`}>
                      {promo.badge}
                    </span>
                    <h3 className="font-serif text-2xl text-dark-crust mb-3">{promo.title}</h3>
                    <p className="text-[#6B6560] leading-relaxed" dangerouslySetInnerHTML={{ __html: promo.description }} />
                    {promo.code && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-cream rounded-lg px-4 py-2 border border-blush/30">
                        <span className="text-[#6B6560] text-sm">Use code:</span>
                        <span className="font-mono font-bold text-dark-crust tracking-wider">{promo.code}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <Link href={promo.ctaHref} className="inline-block bg-dark-crust text-white px-8 py-4 rounded-full font-semibold hover:bg-crust transition-colors no-underline text-center">
                      {promo.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Details */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Share the Love</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">How Our Referral Program Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Share Your Love', description: 'Tell your friends and family about Auntie Lu\'s. Share in person, via text, or on social media.' },
              { step: '2', title: 'They Order', description: 'When your referral places their first order and mentions your name, they get $25 off.' },
              { step: '3', title: 'You Get Rewarded', description: 'Once their order is confirmed, you receive a $25 credit toward your next Auntie Lu\'s purchase.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-wheat text-white font-serif text-xl font-semibold mb-5">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-3">{item.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-block bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Referring Friends
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Throughout the Year</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Seasonal Specials</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">We celebrate every season with limited-edition flavors and creations.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {seasonalSpecials.map((special) => (
              <div key={special.title} className={`rounded-2xl p-8 border ${special.available ? 'bg-wheat/5 border-wheat/30' : 'bg-white border-blush/20'}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full ${special.available ? 'bg-wheat/20 text-wheat' : 'bg-gray-100 text-gray-400'}`}>
                    {special.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif text-lg text-dark-crust">{special.title}</h3>
                      {special.available && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">Available Now</span>
                      )}
                      {!special.available && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">Coming Soon</span>
                      )}
                    </div>
                    <p className="text-[#6B6560] text-sm leading-relaxed">{special.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream rounded-3xl p-10 md:p-14 text-center border border-blush/30">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wheat/10 text-wheat mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Get Exclusive Offers</h2>
            <p className="text-[#6B6560] mb-8 max-w-lg mx-auto">
              Join our newsletter for subscriber-only discounts, early access to seasonal specials, birthday surprises, and more. We promise to only send the sweet stuff.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-3">
                  <span className="text-wheat mt-0.5 flex-shrink-0">{perk.icon}</span>
                  <div>
                    <p className="text-dark-crust text-sm font-semibold">{perk.title}</p>
                    <p className="text-[#6B6560] text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: perk.description }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full border border-blush/50 bg-white text-dark-crust placeholder:text-[#A89F97] focus:outline-none focus:border-wheat transition-colors text-sm"
              />
              <button className="bg-dark-crust text-white px-8 py-3.5 rounded-full font-semibold hover:bg-crust transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[#A89F97] text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Bulk / Corporate */}
      <section className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-dark-crust rounded-2xl p-10 text-white">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">For Businesses</p>
            <h3 className="font-serif text-2xl mb-4">Corporate &amp; Bulk Orders</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Planning a corporate event, employee appreciation day, or large celebration? We offer special pricing on bulk orders of 50+ items. Custom branding available.
            </p>
            <Link href="/contact" className="inline-block bg-wheat text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Get a Custom Quote
            </Link>
          </div>
          <div className="bg-wheat/10 rounded-2xl p-10 border border-wheat/20">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Gift Giving?</p>
            <h3 className="font-serif text-2xl text-dark-crust mb-4">Auntie Lu&apos;s Gift Cards</h3>
            <p className="text-[#6B6560] leading-relaxed mb-6">
              Can&apos;t decide? Let them choose! Our gift cards are available in digital and physical formats, from $25 to $250. The perfect gift for any occasion.
            </p>
            <Link href="/gift-cards" className="inline-block bg-dark-crust text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-crust transition-colors no-underline">
              Shop Gift Cards
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Save on Something Sweet?</h2>
          <p className="text-white/80 text-lg mb-8">
            Browse our full menu and use your discount code at checkout. Don&apos;t forget &mdash; first-time customers get 10% off with code WELCOME10!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Shop Now
            </Link>
            <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
