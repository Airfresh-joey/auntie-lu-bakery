import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Awards & Recognition | Auntie Lu's Bakery",
  description: "Auntie Lu's Bakery is proud to be recognized as one of San Diego's top bakeries. See our awards including Best of San Diego 2024 & 2025, wedding industry honors, and local business recognition.",
  openGraph: {
    title: "Awards & Recognition | Auntie Lu's Bakery",
    description: "See the awards and recognition earned by San Diego's favorite home bakery.",
    images: [{ url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/awards',
  },
}

const majorAwards = [
  {
    year: '2025',
    title: 'Best of San Diego - Top Bakery',
    org: 'San Diego Magazine',
    description: 'Voted one of San Diego\'s top bakeries for the second consecutive year, recognized for our artisan sourdough and innovative cake pop designs.',
    badge: 'Best of SD',
  },
  {
    year: '2025',
    title: 'Couples\' Choice Award',
    org: 'WeddingWire',
    description: 'Recognized for outstanding wedding dessert service based on reviews from San Diego couples. Top 5% of wedding vendors nationally.',
    badge: 'Top 5%',
  },
  {
    year: '2025',
    title: 'Best Cake Pops - San Diego County',
    org: 'San Diego Reader - Best Of Issue',
    description: 'Reader-voted winner for Best Cake Pops in San Diego County, praised for creativity, flavor variety, and stunning custom designs.',
    badge: '#1 Voted',
  },
  {
    year: '2024',
    title: 'Best of San Diego - Emerging Bakery',
    org: 'San Diego Magazine',
    description: 'Named the top emerging bakery in San Diego, highlighting our rapid growth from home kitchen to one of the most in-demand custom bakeries in the region.',
    badge: 'Best of SD',
  },
  {
    year: '2024',
    title: 'Best Home Bakery - San Diego',
    org: 'Eater San Diego',
    description: 'Selected by Eater San Diego\'s editorial team as the standout home bakery in the cottage food scene, with special mention of our sourdough fermentation process.',
    badge: 'Editor Pick',
  },
  {
    year: '2024',
    title: 'Rising Star Small Business Award',
    org: 'San Diego Small Business Association',
    description: 'Honored as a rising star in San Diego\'s small business community for exceptional growth, community involvement, and product quality.',
    badge: 'Rising Star',
  },
]

const weddingAwards = [
  {
    year: '2025',
    title: 'Couples\' Choice Award',
    org: 'WeddingWire',
    description: 'Based on quality, service, responsiveness, and professionalism reviews from real couples.',
  },
  {
    year: '2025',
    title: 'Best of Weddings',
    org: 'The Knot',
    description: 'Recognized in the desserts category for exceptional wedding cake alternatives and cake pop displays.',
  },
  {
    year: '2024',
    title: 'Top Wedding Dessert Vendor',
    org: 'San Diego Wedding Network',
    description: 'Voted by local wedding planners as a top dessert vendor for creativity and reliability.',
  },
  {
    year: '2024',
    title: 'Best Wedding Cake Alternative',
    org: 'Here Comes The Guide - SoCal',
    description: 'Featured as the go-to vendor for couples seeking unique wedding dessert alternatives in Southern California.',
  },
]

const communityRecognition = [
  {
    title: 'Certified Cottage Food Operator',
    org: 'San Diego County Environmental Health',
    description: 'Fully licensed and inspected cottage food operation meeting all California health and safety standards.',
  },
  {
    title: 'Shop Small Saturday Featured Business',
    org: 'American Express',
    description: 'Selected as a featured small business for Shop Small Saturday 2025 in the San Diego market.',
  },
  {
    title: 'Community Partner Award',
    org: 'San Diego Food Bank',
    description: 'Recognized for regular donations and volunteering with the San Diego Food Bank\'s community programs.',
  },
  {
    title: 'Neighborhood Favorite',
    org: 'Nextdoor',
    description: 'Voted a Neighborhood Favorite by local residents for two years running (2024, 2025).',
  },
  {
    title: 'Top-Rated on Google',
    org: 'Google Business Profile',
    description: '4.9-star average rating with 200+ reviews from happy customers across San Diego.',
  },
  {
    title: 'Instagram Small Business Spotlight',
    org: 'Instagram @shop',
    description: 'Featured in Instagram\'s small business spotlight series highlighting creative food entrepreneurs.',
  },
]

const stats = [
  { num: '4.9', label: 'Google Rating', sub: '200+ reviews' },
  { num: '8', label: 'Awards Won', sub: 'Since 2024' },
  { num: '2x', label: 'Best of SD', sub: '2024 & 2025' },
  { num: 'Top 5%', label: 'Wedding Vendors', sub: 'Nationally' },
]

export default function AwardsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Awards & Recognition', url: 'https://www.auntielusbakery.com/awards' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Recognition</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Awards & Honors
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;re humbled and grateful to be recognized by these incredible organizations for doing what we love.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark-crust py-12 px-[4%]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-wheat text-3xl md:text-4xl font-serif font-bold">{s.num}</div>
              <div className="text-white text-sm font-medium mt-1">{s.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Highlights</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Major Awards</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Our most significant recognitions from San Diego&apos;s top publications and organizations.
            </p>
          </div>
          <div className="space-y-6">
            {majorAwards.map((award, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-blush/30 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-wheat to-crust flex flex-col items-center justify-center text-white shadow-md">
                  <span className="text-2xl font-serif font-bold leading-none">{award.year.slice(-2)}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-80">{award.badge}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-dark-crust mb-1">{award.title}</h3>
                  <p className="text-crust text-sm font-medium mb-2">{award.org} &middot; {award.year}</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Industry Awards */}
      <section className="py-20 px-[4%] bg-blush/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Wedding Industry</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Wedding Awards</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Recognized by the wedding industry for creating unforgettable dessert experiences for couples.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {weddingAwards.map((award, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blush/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-wheat/15 text-crust px-3 py-1 rounded-full text-xs font-semibold">{award.year}</span>
                  <span className="text-[#6B6560] text-xs">{award.org}</span>
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{award.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Recognition */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Local Recognition</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Being part of the San Diego community means everything to us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityRecognition.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blush/30 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-wheat/15 flex items-center justify-center text-wheat mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dark-crust mb-1">{item.title}</h3>
                <p className="text-crust text-xs font-medium mb-2">{item.org}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Taste the Award-Winning Difference</h2>
          <p className="text-white/80 text-lg mb-8">
            Order from San Diego&apos;s most recognized home bakery and see why our customers keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#products" className="bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Order Now
            </Link>
            <Link href="/press" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold no-underline border border-white/20 hover:bg-white/20 transition-colors">
              View Press Coverage
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
