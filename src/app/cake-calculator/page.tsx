import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServingCalculator from '@/components/ServingCalculator'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: "Cake Serving Size Calculator | Auntie Lu's Bakery - San Diego",
  description: 'Use our free cake serving calculator to find the perfect cake size for your event. Get recommendations for tiered cakes, sheet cakes, or cupcakes based on your guest count.',
  openGraph: {
    title: "Cake Serving Size Calculator | Auntie Lu's Bakery",
    description: 'Find the perfect cake size for your event. Free serving calculator with instant recommendations and pricing estimates.',
    url: 'https://www.auntielusbakery.com/cake-calculator',
    type: 'website',
  },
  alternates: { canonical: 'https://www.auntielusbakery.com/cake-calculator' },
}

const SERVING_GUIDE = [
  { size: '6" Round', servings: 12, ideal: 'Small gatherings, smash cakes' },
  { size: '8" Round', servings: 24, ideal: 'Intimate parties, small birthdays' },
  { size: '10" Round', servings: 38, ideal: 'Medium events, office celebrations' },
  { size: '12" Round', servings: 56, ideal: 'Large parties, small weddings' },
  { size: '14" Round', servings: 78, ideal: 'Grand events, large weddings' },
  { size: 'Quarter Sheet', servings: 24, ideal: 'Small parties, casual events' },
  { size: 'Half Sheet', servings: 48, ideal: 'Medium events, team lunches' },
  { size: 'Full Sheet', servings: 96, ideal: 'Large gatherings, corporate events' },
]

export default function CakeCalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Cake Calculator', href: '/cake-calculator' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">
            Plan Your Perfect Event
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Cake Serving Size Calculator
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Not sure how much cake you need? Use our interactive calculator to find the perfect size,
            style, and estimated price for your celebration.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <ServingCalculator />
        </div>
      </section>

      {/* Serving Guide Reference */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">
              Reference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Serving Size Guide
            </h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Standard cake servings are based on 1&quot; x 2&quot; x 4&quot; slices —
              the industry standard for event cakes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVING_GUIDE.map((item) => (
              <div
                key={item.size}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blush/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush to-accent flex items-center justify-center">
                    <span className="text-dark-crust font-bold text-sm">
                      {item.servings}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-dark-crust">{item.size}</h3>
                </div>
                <p className="text-sm text-[#6B6560]">{item.ideal}</p>
              </div>
            ))}
          </div>

          {/* Cupcake equivalents */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-blush/30">
            <h3 className="font-serif text-xl text-dark-crust mb-4">Cupcake Equivalents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-serif text-dark-crust mb-1">2 dozen</p>
                <p className="text-sm text-[#6B6560]">Small event (10–16 guests)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif text-dark-crust mb-1">6 dozen</p>
                <p className="text-sm text-[#6B6560]">Medium event (30–48 guests)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif text-dark-crust mb-1">12+ dozen</p>
                <p className="text-sm text-[#6B6560]">Large event (75–100+ guests)</p>
              </div>
            </div>
            <p className="text-xs text-[#6B6560] mt-4 text-center">
              We recommend 1.5 cupcakes per guest to ensure everyone gets their fill.
            </p>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">
              Pro Tips
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">
              Getting the Right Amount
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🍽️',
                title: 'Dessert Buffet?',
                desc: 'If you\'re serving other desserts alongside the cake, reduce your cake order by 25–30%. Your guests will graze!',
              },
              {
                icon: '🎭',
                title: 'Display vs. Serving',
                desc: 'Want a stunning tiered display cake but need more servings? We can create a small display cake plus sheet cakes for serving.',
              },
              {
                icon: '📦',
                title: 'Leftovers Welcome',
                desc: 'We recommend ordering 10% extra for weddings and corporate events. Guests love take-home slices!',
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-cream rounded-2xl p-6 border border-blush/30"
              >
                <span className="text-3xl block mb-3">{tip.icon}</span>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{tip.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Order Your Cake?"
        description="Now that you know what you need, let's make it happen. Contact us for a free custom quote."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  )
}
