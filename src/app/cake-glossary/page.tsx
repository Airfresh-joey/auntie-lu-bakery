import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Cake Glossary | Terminology & Styles Explained | Auntie Lu's Bakery San Diego",
  description: "Learn cake terminology, frosting types, filling options, cake styles, tier sizes, and serving guides. Your complete guide to understanding custom cakes from Auntie Lu's Bakery.",
  keywords: ['cake glossary', 'cake terminology', 'fondant vs buttercream', 'cake fillings', 'cake styles', 'naked cake', 'semi-naked cake', 'cake tiers', 'cake serving sizes', 'San Diego bakery'],
  openGraph: {
    title: "Cake Glossary & Terminology | Auntie Lu's Bakery San Diego",
    description: "Your complete guide to cake terminology, frosting types, filling options, and serving sizes.",
    images: [{ url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/cake-glossary',
  },
}

const frostingTypes = [
  {
    name: 'American Buttercream',
    description: 'The classic — made with butter, powdered sugar, and vanilla. Sweet, creamy, and easy to work with. Great for colorful designs and piping.',
    texture: 'Sweet & Creamy',
    best_for: 'Birthday cakes, cupcakes, colorful designs',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Swiss Meringue Buttercream',
    description: 'Silky smooth and less sweet than American buttercream. Made by heating egg whites and sugar before whipping with butter. A bakery favorite.',
    texture: 'Silky & Light',
    best_for: 'Wedding cakes, elegant designs, smooth finishes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Cream Cheese Frosting',
    description: 'Tangy and rich, made with cream cheese and butter. The perfect complement to carrot cake, red velvet, and spice cakes. Must be refrigerated.',
    texture: 'Tangy & Rich',
    best_for: 'Carrot cake, red velvet, spice cakes',
    image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Fondant',
    description: 'A smooth, pliable sugar paste rolled out and draped over the cake. Creates flawless, sculpted surfaces ideal for intricate decorations and custom shapes.',
    texture: 'Smooth & Firm',
    best_for: 'Sculpted cakes, intricate designs, formal events',
    image: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Ganache',
    description: 'A luxurious blend of chocolate and cream. Can be poured as a glaze, whipped for frosting, or used as a drip. Intensely chocolatey.',
    texture: 'Rich & Glossy',
    best_for: 'Drip cakes, chocolate lovers, groom\'s cakes',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Whipped Cream',
    description: 'Light, airy, and not too sweet. Made from heavy cream whipped with sugar. Delicate and refreshing, but must be kept cold.',
    texture: 'Light & Airy',
    best_for: 'Fruit cakes, summer events, casual celebrations',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=400&fit=crop&q=80',
  },
]

const fillingTypes = [
  { name: 'Fruit Curd', description: 'Lemon, passion fruit, or raspberry curd adds bright, tangy flavor between layers.', icon: '🍋' },
  { name: 'Fresh Fruit', description: 'Sliced strawberries, blueberries, or tropical fruits layered with cream or mousse.', icon: '🍓' },
  { name: 'Chocolate Ganache', description: 'Rich dark, milk, or white chocolate ganache for an indulgent center.', icon: '🍫' },
  { name: 'Bavarian Cream', description: 'A custard-based filling that is light, silky, and subtly sweet.', icon: '🍮' },
  { name: 'Fruit Preserves', description: 'Classic jam or preserves — strawberry, apricot, or mixed berry.', icon: '🫐' },
  { name: 'Caramel', description: 'Salted or classic caramel for a rich, buttery sweetness.', icon: '🧈' },
  { name: 'Mousse', description: 'Airy chocolate, vanilla, or flavored mousse for a cloud-like layer.', icon: '☁️' },
  { name: 'Cookie Butter', description: 'Creamy, spiced cookie butter spread for a unique, warm flavor.', icon: '🍪' },
]

const cakeStyles = [
  {
    name: 'Fully Frosted',
    description: 'A cake completely covered in smooth or textured buttercream or fondant. The most traditional and polished look.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=450&fit=crop&q=80',
    features: ['Clean, polished look', 'Perfect canvas for decorations', 'Hides imperfections', 'Ideal for formal events'],
  },
  {
    name: 'Semi-Naked',
    description: 'A thin, see-through layer of buttercream that lets the cake layers peek through. The perfect balance of rustic and refined.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=450&fit=crop&q=80',
    features: ['Shows off cake layers', 'Rustic-meets-elegant', 'Less frosting = lighter feel', 'Pairs beautifully with flowers'],
  },
  {
    name: 'Naked Cake',
    description: 'Completely unfrosted on the outside, exposing all the cake and filling layers. A trendy, organic look perfect for casual celebrations.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=450&fit=crop&q=80',
    features: ['Natural, unfrosted look', 'Great for fruit & flower decor', 'Best for same-day events', 'Casual, boho aesthetic'],
  },
  {
    name: 'Drip Cake',
    description: 'Ganache or colored drips cascading over the edge of a frosted cake. Fun, playful, and perfect for celebrations.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop&q=80',
    features: ['Fun, eye-catching design', 'Works with any flavor combo', 'Great for birthdays', 'Can be elegant or playful'],
  },
  {
    name: 'Sculpted / 3D',
    description: 'A cake carved and shaped into a specific form — from purses to animals to buildings. True edible art.',
    image: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=450&fit=crop&q=80',
    features: ['Custom shapes & figures', 'Gravity-defying designs', 'Statement centerpiece', 'Requires advance planning'],
  },
  {
    name: 'Sheet Cake',
    description: 'A flat, rectangular cake baked in a sheet pan. Simple, practical, and perfect for feeding a crowd without the fuss of tiers.',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=450&fit=crop&q=80',
    features: ['Easy to serve & transport', 'Cost-effective option', 'Great for large groups', 'Decoratable top surface'],
  },
]

const tierGuide = [
  { size: '6"', servings: '10–12', occasion: 'Intimate dinners, smash cakes', tiers: 'Single tier' },
  { size: '8"', servings: '20–24', occasion: 'Small birthday parties', tiers: 'Single tier' },
  { size: '10"', servings: '30–38', occasion: 'Medium celebrations', tiers: 'Single tier' },
  { size: '12"', servings: '40–56', occasion: 'Large parties', tiers: 'Single tier' },
  { size: '6" + 8"', servings: '30–36', occasion: 'Weddings, milestone birthdays', tiers: '2 tiers' },
  { size: '6" + 8" + 10"', servings: '60–74', occasion: 'Large weddings, galas', tiers: '3 tiers' },
  { size: '6" + 8" + 10" + 12"', servings: '100–130', occasion: 'Grand celebrations', tiers: '4 tiers' },
]

const cakeTerms = [
  { term: 'Crumb Coat', definition: 'A thin first layer of frosting applied to seal in crumbs before the final coat. Think of it as the cake\'s primer.' },
  { term: 'Dowels', definition: 'Support rods inserted into lower tiers to bear the weight of upper tiers in a stacked cake.' },
  { term: 'Piping', definition: 'The technique of squeezing frosting through a pastry bag tip to create decorative borders, flowers, lettering, and designs.' },
  { term: 'Gum Paste', definition: 'A pliable sugar dough used to create realistic flowers and delicate decorations. Dries hard and holds its shape.' },
  { term: 'Isomalt', definition: 'A sugar substitute melted and shaped to create glass-like decorations — sails, spheres, and shards.' },
  { term: 'Modeling Chocolate', definition: 'Chocolate mixed with corn syrup to create a pliable, clay-like material for sculpting figures and decorations.' },
  { term: 'Torting', definition: 'Cutting a single cake layer horizontally into thinner layers to allow more filling and create an even crumb.' },
  { term: 'Stacking', definition: 'Placing tiers directly on top of each other using dowels for support. Creates a seamless, unified look.' },
  { term: 'Offset', definition: 'A stacking style where tiers are positioned off-center for a modern, asymmetric look.' },
  { term: 'Dummy Tier', definition: 'A styrofoam tier covered in fondant used to add height and drama without extra servings. Also called a display tier.' },
  { term: 'Drip', definition: 'Ganache or colored glaze poured over the top edge so it drips down the sides. Can be thick and dramatic or thin and delicate.' },
  { term: 'Swiss Dots', definition: 'Tiny, uniform dots of royal icing piped across the surface of a cake in an evenly spaced pattern.' },
  { term: 'Rosette', definition: 'A spiral of piped buttercream that resembles a rose. Often used to cover an entire cake surface.' },
  { term: 'Ruffles', definition: 'Thin, wavy strips of fondant or buttercream applied in overlapping layers to mimic fabric ruffles.' },
  { term: 'Mirror Glaze', definition: 'A shiny, reflective glaze made with gelatin and white chocolate that creates a mirror-like finish.' },
]

const faqs = [
  {
    question: 'What is the difference between fondant and buttercream?',
    answer: 'Buttercream is a creamy frosting made from butter and sugar that is soft and spreadable. Fondant is a smooth sugar paste that is rolled out and draped over the cake like fabric. Buttercream tastes richer and creamier, while fondant provides a flawless, sculpted surface ideal for intricate designs.',
  },
  {
    question: 'How many servings do I need for my event?',
    answer: 'A standard cake serving is about 1" x 2" x 4". For a wedding, plan on 1 slice per guest. For a birthday or casual event, plan on about 1.5 servings per guest since some people want seconds. We can help you choose the right size during your consultation.',
  },
  {
    question: 'What is a naked cake?',
    answer: 'A naked cake has no frosting on the outside, exposing the beautiful cake layers and fillings. Semi-naked cakes have a very thin layer of frosting that lets the layers peek through. Both styles look gorgeous with fresh flowers and fruit.',
  },
  {
    question: 'Can I mix flavors in a tiered cake?',
    answer: 'Absolutely! Each tier can be a different flavor combination. This is especially popular for weddings — for example, a chocolate tier, a vanilla tier, and a lemon tier so guests can choose their favorite.',
  },
]

export default function CakeGlossaryPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Cake Glossary', url: 'https://www.auntielusbakery.com/cake-glossary' },
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600&h=900&fit=crop&q=80"
            alt="Assorted cake layers and decorating tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Know Your Cake
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            The Cake Glossary
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            From fondant to fillings, tiers to torting — everything you need to know to speak cake like a pro.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-10 px-[4%] bg-white border-b border-blush/30">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {['Frostings', 'Fillings', 'Cake Styles', 'Tiers & Sizing', 'Terminology'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
              className="text-[#6B6560] text-sm font-medium px-5 py-2.5 rounded-full border border-blush hover:bg-wheat hover:text-white hover:border-wheat transition-colors no-underline"
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Fondant vs Buttercream - Featured Comparison */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              The Great Debate
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Fondant vs. Buttercream
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              The most common question we get — and the answer is: it depends on your design, taste, and event.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=450&fit=crop&q=80"
                  alt="Smooth buttercream frosted cake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-dark-crust mb-4">Buttercream</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Taste', value: 'Rich, buttery, and sweet — most people prefer the flavor' },
                    { label: 'Texture', value: 'Soft, creamy, and spreadable' },
                    { label: 'Look', value: 'Can be smooth or textured; allows for piping details' },
                    { label: 'Best for', value: 'Casual to semi-formal events, flavor-focused celebrations' },
                    { label: 'Limitation', value: 'Melts in heat; not ideal for intricate sculpted designs' },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className="font-medium text-dark-crust text-sm min-w-[70px]">{item.label}:</span>
                      <span className="text-[#6B6560] text-sm">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=450&fit=crop&q=80"
                  alt="Smooth fondant covered cake with decorations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-dark-crust mb-4">Fondant</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Taste', value: 'Sweet and vanilla-flavored; some guests peel it off' },
                    { label: 'Texture', value: 'Smooth, firm, and pliable like modeling clay' },
                    { label: 'Look', value: 'Flawless, porcelain-like finish; holds sharp edges' },
                    { label: 'Best for', value: 'Formal events, sculpted designs, outdoor weddings' },
                    { label: 'Limitation', value: 'Flavor is less popular; can be gummy if too thick' },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className="font-medium text-dark-crust text-sm min-w-[70px]">{item.label}:</span>
                      <span className="text-[#6B6560] text-sm">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-wheat/10 rounded-2xl p-6 text-center">
            <p className="text-[#6B6560] text-sm leading-relaxed">
              <span className="font-medium text-dark-crust">Pro tip:</span> Many of our cakes use buttercream underneath with fondant accents on top — giving you the best of both worlds: great taste and stunning design.
            </p>
          </div>
        </div>
      </section>

      {/* Frosting Types */}
      <section id="frostings" className="py-20 px-[4%] bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Frosting Guide
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Types of Frosting
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Each frosting has its own personality. Here&apos;s what makes each one unique.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frostingTypes.map((frosting) => (
              <div key={frosting.name} className="group bg-cream rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={frosting.image}
                    alt={`${frosting.name} frosted cake`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl text-dark-crust">{frosting.name}</h3>
                  </div>
                  <span className="inline-block text-xs font-medium text-wheat bg-wheat/10 px-3 py-1 rounded-full mb-3">
                    {frosting.texture}
                  </span>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-3">{frosting.description}</p>
                  <p className="text-xs text-[#6B6560]">
                    <span className="font-medium text-dark-crust">Best for:</span> {frosting.best_for}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fillings */}
      <section id="fillings" className="py-20 px-[4%] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Between the Layers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Types of Fillings
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              The filling is where the magic happens. It adds flavor, moisture, and surprise to every slice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fillingTypes.map((filling) => (
              <div key={filling.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{filling.icon}</div>
                <h3 className="font-serif text-lg text-dark-crust mb-2">{filling.name}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{filling.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cake Styles */}
      <section id="cake-styles" className="py-20 px-[4%] bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Find Your Style
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Cake Styles Explained
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              From classic fully-frosted to trendy naked cakes — discover the style that fits your event.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakeStyles.map((style) => (
              <div key={style.name} className="group bg-cream rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.name} cake style`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-dark-crust mb-2">{style.name}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{style.description}</p>
                  <ul className="space-y-1.5">
                    {style.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-wheat flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6B6560] text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers & Serving Sizes */}
      <section id="tiers-sizing" className="py-20 px-[4%] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Size Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Tiers & Serving Sizes
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Not sure what size you need? Use this guide to match your guest count to the perfect cake.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-blush">
                      <th className="py-4 px-4 font-serif text-dark-crust text-lg">Size</th>
                      <th className="py-4 px-4 font-serif text-dark-crust text-lg">Servings</th>
                      <th className="py-4 px-4 font-serif text-dark-crust text-lg">Tiers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierGuide.map((row, i) => (
                      <tr key={row.size} className={`border-b border-blush/50 ${i % 2 === 0 ? 'bg-cream/30' : ''}`}>
                        <td className="py-4 px-4 font-medium text-dark-crust">{row.size}</td>
                        <td className="py-4 px-4 text-[#6B6560]">{row.servings}</td>
                        <td className="py-4 px-4 text-[#6B6560]">{row.tiers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B6560] text-xs mt-4 italic">
                * Serving sizes based on standard 1&quot; x 2&quot; x 4&quot; slices. Actual servings may vary based on how generously the cake is cut.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=750&fit=crop&q=80"
                alt="Multi-tiered wedding cake showing different tier sizes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cake Terminology */}
      <section id="terminology" className="py-20 px-[4%] bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Speak Cake
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Cake Terminology A–Z
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Impress your baker (and your friends) with these essential cake terms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cakeTerms.map((item) => (
              <div key={item.term} className="bg-cream/50 rounded-2xl p-5 hover:bg-cream transition-colors duration-200">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{item.term}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Glossary FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="font-serif text-lg text-dark-crust mb-2">{faq.question}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Now That You Speak Cake...</h2>
          <p className="text-white/80 text-lg mb-8">
            Put your new knowledge to use and start designing your dream cake with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Order Your Custom Cake
            </Link>
            <Link href="/flavors" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Our Flavors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
