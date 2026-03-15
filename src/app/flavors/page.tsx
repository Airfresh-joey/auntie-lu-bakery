import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Cake Flavors | Custom Cake Flavors, Frostings & Fillings",
  description: "Explore all of Auntie Lu's cake flavors including Vanilla, Chocolate, Red Velvet, Carrot, Lemon, Strawberry & more. Choose from buttercream, ganache, fondant frostings and delicious fillings.",
  openGraph: {
    title: "Cake Flavors | Auntie Lu's Bakery San Diego",
    description: "Explore all of our custom cake flavors, frosting options, and filling choices. From classic vanilla to champagne — find your perfect combination.",
    images: [{ url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/flavors',
  },
}

const cakeFlavors = [
  {
    name: 'Vanilla',
    description: 'Classic Madagascar vanilla bean cake — light, moist, and timeless. Our most popular flavor for weddings.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Chocolate',
    description: 'Rich dark chocolate cake made with premium Dutch-process cocoa. Deeply decadent and perfectly moist.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Red Velvet',
    description: 'Southern-style red velvet with a hint of cocoa and tangy buttermilk. Always paired with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Carrot',
    description: 'Spiced carrot cake with toasted walnuts, crushed pineapple, and warm cinnamon. A crowd favorite.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Lemon',
    description: 'Bright and zesty lemon cake bursting with fresh citrus flavor. Perfect for spring and summer celebrations.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384f7f025?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Strawberry',
    description: 'Made with real strawberry puree — no artificial flavors. Light, fruity, and beautifully pink.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Marble',
    description: 'The best of both worlds — swirls of vanilla and chocolate in every slice. A classic for all occasions.',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Funfetti',
    description: 'Vanilla cake loaded with rainbow sprinkles baked right in. Fun, festive, and perfect for birthdays.',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Coconut',
    description: 'Tropical coconut cake with toasted coconut flakes. Light, airy, and brings the island vibes.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Almond',
    description: 'Delicate almond cake with a subtle nutty sweetness. An elegant choice for sophisticated palates.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12571?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Champagne',
    description: 'Luxurious champagne-infused cake with delicate bubbles of flavor. The ultimate celebration cake.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=450&fit=crop&q=80',
  },
  {
    name: 'Mocha',
    description: 'Espresso meets chocolate in this coffee lover\'s dream. Bold, rich, and irresistibly smooth.',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=450&fit=crop&q=80',
  },
]

const frostings = [
  {
    name: 'Buttercream',
    description: 'Our signature Swiss meringue buttercream — silky smooth, not too sweet, and pipes beautifully. Available in any flavor or color.',
    color: 'bg-[#FFF5E1]',
  },
  {
    name: 'Cream Cheese',
    description: 'Tangy and rich cream cheese frosting. The perfect complement to red velvet, carrot, and spice cakes.',
    color: 'bg-[#FFF8F0]',
  },
  {
    name: 'Fondant',
    description: 'Smooth, sculptable fondant for flawless finishes and intricate designs. Ideal for wedding and show-piece cakes.',
    color: 'bg-[#F5F0EB]',
  },
  {
    name: 'Ganache',
    description: 'Luxurious chocolate ganache made with premium chocolate and heavy cream. Available in dark, milk, or white.',
    color: 'bg-[#E8D5C4]',
  },
  {
    name: 'Whipped Cream',
    description: 'Light and airy stabilized whipped cream. A fresh, delicate option perfect for fruit-topped and summer cakes.',
    color: 'bg-[#FFFEF9]',
  },
]

const fillings = [
  {
    name: 'Fruit Preserves',
    description: 'House-made preserves using seasonal fruits — strawberry, raspberry, apricot, and mixed berry available year-round.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
  },
  {
    name: 'Bavarian Cream',
    description: 'Silky vanilla custard-based filling that adds a luscious, creamy layer between every tier of cake.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    name: 'Mousse',
    description: 'Airy chocolate, raspberry, or passion fruit mousse. Light yet flavorful — adds an elegant touch to any cake.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /><circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    name: 'Caramel',
    description: 'Rich, buttery salted caramel made from scratch. Pairs beautifully with chocolate, vanilla, and almond cakes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: 'Nutella',
    description: 'Creamy hazelnut chocolate spread layered between moist cake. A decadent choice loved by kids and adults alike.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

export default function FlavorsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Cake Flavors', url: 'https://www.auntielusbakery.com/flavors' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&h=900&fit=crop"
            alt="Beautiful custom cakes at Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Menu</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Cake Flavors & Options
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            From classic vanilla to luxurious champagne — explore our full range of flavors, frostings, and fillings to create your dream cake.
          </p>
        </div>
      </section>

      {/* Cake Flavors Section */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Choose Your Base</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Cake Flavors</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Every flavor is baked from scratch using premium ingredients. Can&apos;t decide? Schedule a tasting and try your favorites.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakeFlavors.map((flavor) => (
              <div key={flavor.name} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={flavor.image}
                    alt={`${flavor.name} cake at Auntie Lu's Bakery`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-white drop-shadow-lg">{flavor.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-[#6B6560] text-sm leading-relaxed">{flavor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frosting Options Section */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The Perfect Finish</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Frosting Options</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              The frosting makes the cake. Choose from our carefully crafted options — each one complements different flavors and styles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frostings.map((frosting) => (
              <div key={frosting.name} className={`${frosting.color} rounded-2xl p-8 border border-blush/50`}>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{frosting.name}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{frosting.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fillings Section */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Hidden Layers of Flavor</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Filling Options</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Add a surprise layer of flavor between your cake tiers. Our fillings are all made in-house with the finest ingredients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fillings.map((filling) => (
              <div key={filling.name} className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow-md">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-wheat/10 text-wheat flex items-center justify-center">
                  {filling.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-dark-crust mb-2">{filling.name}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{filling.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mix & Match CTA */}
      <section className="py-20 px-[4%] bg-blush/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Your Dream Combination</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">Mix & Match to Your Heart&apos;s Content</h2>
          <p className="text-[#6B6560] text-lg mb-4 max-w-2xl mx-auto">
            Every cake is fully customizable. Combine any flavor, frosting, and filling to create something uniquely yours. Multi-tier cakes can have different flavors on each tier.
          </p>
          <p className="text-[#6B6560] mb-8">
            Not sure what works together? Book a <strong className="text-dark-crust">free tasting session</strong> and let us guide you to your perfect combination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-dark-crust text-white px-8 py-4 rounded-full font-semibold hover:bg-crust transition-colors no-underline inline-flex items-center gap-2">
              Book a Tasting
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/cake-sizes" className="bg-transparent border-2 border-dark-crust text-dark-crust px-8 py-4 rounded-full font-semibold hover:bg-dark-crust hover:text-white transition-colors no-underline">
              View Cake Sizes & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Design Your Cake?</h2>
          <p className="text-white/80 text-lg mb-8">
            Share your vision with us and we&apos;ll bring it to life. From flavor to frosting to the final flourish — every detail matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Order
            </Link>
            <Link href="/order-process" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              How Ordering Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
