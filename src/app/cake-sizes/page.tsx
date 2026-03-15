import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Cake Sizes & Pricing | Serving Guide & Size Chart",
  description: "Find the perfect cake size for your event. View our serving guide, size recommendations by guest count, and pricing for custom cakes at Auntie Lu's Bakery San Diego.",
  openGraph: {
    title: "Cake Sizes & Pricing | Auntie Lu's Bakery San Diego",
    description: "Find the perfect cake size for your event. Serving guide, size recommendations by guest count, and transparent pricing.",
    images: [{ url: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/cake-sizes',
  },
}

const cakeSizes = [
  { size: '6"', servings: '8–12', shape: 'Round', ideal: 'Intimate dinners, smash cakes', price: '$55–$75' },
  { size: '8"', servings: '16–24', shape: 'Round', ideal: 'Small gatherings, birthdays', price: '$75–$110' },
  { size: '10"', servings: '28–38', shape: 'Round', ideal: 'Medium parties', price: '$110–$150' },
  { size: '12"', servings: '40–56', shape: 'Round', ideal: 'Large celebrations', price: '$150–$200' },
  { size: '14"', servings: '63–78', shape: 'Round', ideal: 'Large events', price: '$200–$260' },
  { size: 'Quarter Sheet', servings: '12–18', shape: 'Rectangle', ideal: 'Office parties, casual events', price: '$45–$65' },
  { size: 'Half Sheet', servings: '24–36', shape: 'Rectangle', ideal: 'Larger gatherings', price: '$75–$110' },
  { size: 'Full Sheet', servings: '48–72', shape: 'Rectangle', ideal: 'Big celebrations, school events', price: '$140–$190' },
]

const tieredCakes = [
  { tiers: '2-Tier', sizes: '6" + 10"', servings: '36–50', price: '$185–$275', popular: false },
  { tiers: '2-Tier', sizes: '8" + 12"', servings: '56–80', price: '$250–$375', popular: true },
  { tiers: '3-Tier', sizes: '6" + 8" + 10"', servings: '52–74', price: '$300–$475', popular: true },
  { tiers: '3-Tier', sizes: '6" + 10" + 14"', servings: '100–128', price: '$425–$625', popular: false },
  { tiers: '4-Tier', sizes: '6" + 8" + 10" + 12"', servings: '92–130', price: '$475–$700', popular: false },
  { tiers: '4-Tier', sizes: '6" + 8" + 10" + 14"', servings: '115–152', price: '$550–$800', popular: false },
]

const guestRecommendations = [
  { guests: '10–20', recommendation: '8" round or quarter sheet', note: 'Perfect for intimate birthday dinners and small family gatherings' },
  { guests: '25–40', recommendation: '10" round or 2-tier (6" + 8")', note: 'Great for house parties, engagement parties, and office celebrations' },
  { guests: '50–75', recommendation: '2-tier (8" + 12") or 3-tier (6" + 8" + 10")', note: 'Ideal for larger birthdays, bridal showers, and medium weddings' },
  { guests: '75–100', recommendation: '3-tier (6" + 10" + 14")', note: 'A stunning centerpiece for weddings and milestone celebrations' },
  { guests: '100–150', recommendation: '4-tier or 3-tier + sheet cake', note: 'For grand weddings and large-scale events. Sheet cake for kitchen cutting saves cost' },
  { guests: '150+', recommendation: 'Custom multi-tier + sheet cakes', note: 'Contact us for a custom consultation. We\'ll design the perfect setup for your event' },
]

export default function CakeSizesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Cake Sizes & Pricing', url: 'https://www.auntielusbakery.com/cake-sizes' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1600&h=900&fit=crop"
            alt="Tiered wedding cake at Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Size Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Cake Sizes & Pricing
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Find the perfect size for your celebration. From intimate gatherings to grand weddings — we&apos;ve got the right cake for every occasion.
          </p>
        </div>
      </section>

      {/* Visual Size Diagram */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Visual Guide</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Cake Size Comparison</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              See how our round cake sizes compare. Each size is shown to scale.
            </p>
          </div>
          <div className="flex items-end justify-center gap-4 md:gap-8 py-8">
            {[
              { size: '6"', w: 'w-16 md:w-20', h: 'h-12 md:h-14', servings: '8–12' },
              { size: '8"', w: 'w-24 md:w-28', h: 'h-14 md:h-16', servings: '16–24' },
              { size: '10"', w: 'w-32 md:w-36', h: 'h-16 md:h-[4.5rem]', servings: '28–38' },
              { size: '12"', w: 'w-40 md:w-44', h: 'h-[4.5rem] md:h-20', servings: '40–56' },
              { size: '14"', w: 'w-48 md:w-52', h: 'h-20 md:h-[5.5rem]', servings: '63–78' },
            ].map((cake) => (
              <div key={cake.size} className="flex flex-col items-center">
                <p className="text-dark-crust font-semibold text-sm mb-1">{cake.size}</p>
                <div className={`${cake.w} ${cake.h} bg-gradient-to-b from-blush to-accent/40 rounded-t-[50%] border-2 border-accent/60 flex items-center justify-center`}>
                  <span className="text-dark-crust text-[10px] md:text-xs font-medium">{cake.servings}</span>
                </div>
                <div className={`${cake.w} h-1.5 bg-accent/60 rounded-b-sm`} />
                <p className="text-[#6B6560] text-[10px] md:text-xs mt-1">slices</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Tier Sizes & Pricing */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Single Layer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Single-Tier Sizes & Pricing</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Pricing varies based on flavor, frosting complexity, and decorations. These ranges cover our standard to premium options.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-blush">
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Size</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Shape</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Servings</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Ideal For</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {cakeSizes.map((row, i) => (
                  <tr key={row.size + row.shape} className={`border-b border-blush/50 ${i % 2 === 0 ? 'bg-cream/30' : ''}`}>
                    <td className="py-4 px-4 font-semibold text-dark-crust">{row.size}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.shape}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.servings}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.ideal}</td>
                    <td className="py-4 px-4 font-semibold text-crust">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiered Cakes */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Multi-Tier</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Tiered Cake Pricing</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Tiered cakes are perfect for weddings and grand celebrations. Each tier can feature a different flavor and filling.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tieredCakes.map((cake) => (
              <div key={cake.tiers + cake.sizes} className={`relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ${cake.popular ? 'ring-2 ring-wheat' : ''}`}>
                {cake.popular && (
                  <span className="absolute -top-3 left-6 bg-wheat text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                )}
                <h3 className="font-serif text-xl text-dark-crust mb-1">{cake.tiers}</h3>
                <p className="text-wheat font-medium text-sm mb-4">{cake.sizes}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B6560]">Servings</span>
                    <span className="text-dark-crust font-medium">{cake.servings}</span>
                  </div>
                </div>
                <p className="font-serif text-2xl text-crust">{cake.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B6560] text-sm mt-8">
            * Pricing varies based on design complexity, special decorations (sugar flowers, hand-painting, gold leaf), and premium flavors. Contact us for an exact quote.
          </p>
        </div>
      </section>

      {/* Guest Count Recommendations */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Not Sure What Size?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Recommendations by Guest Count</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Tell us how many guests you&apos;re expecting and we&apos;ll help you pick the perfect size.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guestRecommendations.map((rec) => (
              <div key={rec.guests} className="bg-cream rounded-2xl p-6 border border-blush/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wheat/10 text-wheat mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-1">{rec.guests} Guests</h3>
                <p className="text-crust font-semibold text-sm mb-3">{rec.recommendation}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{rec.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 px-[4%] bg-blush/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Insider Knowledge</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Pro Tips for Choosing Your Cake Size</h2>
          </div>
          <div className="space-y-6">
            {[
              { title: 'The Sheet Cake Secret', tip: 'For large weddings, order a beautiful display cake (2-3 tiers) and supplement with sheet cakes for kitchen cutting. You get the stunning photos AND save 20-30% on cost.' },
              { title: 'Dessert Table? Size Down', tip: 'If you\'re serving other desserts alongside the cake (cupcakes, cookies, pie), you can safely size down by one tier. Not every guest will have cake.' },
              { title: 'Kids Count as Half', tip: 'Young children typically eat half a slice or less. For events with many kids, count them as half-servings when choosing your size.' },
              { title: 'Always Round Up', tip: 'When in doubt, go one size bigger. Leftover cake is always welcome — but running out is a party foul nobody forgets.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-wheat text-white flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </span>
                <div>
                  <h3 className="font-serif text-lg text-dark-crust mb-1">{tip.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Need Help Choosing?</h2>
          <p className="text-white/80 text-lg mb-8">
            We&apos;re happy to help you pick the perfect size and design. Reach out for a free consultation and we&apos;ll guide you through the options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Get a Custom Quote
            </Link>
            <Link href="/flavors" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Flavors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
