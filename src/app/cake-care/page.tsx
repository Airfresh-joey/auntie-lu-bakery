import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Cake Care Instructions | How to Store & Serve | Auntie Lu's Bakery San Diego",
  description: "Expert cake care tips from Auntie Lu's Bakery. Learn how to store, transport, cut, serve, and freeze your cake to keep it fresh and delicious for every occasion.",
  keywords: ['cake care', 'how to store cake', 'cake storage tips', 'how to transport a cake', 'cutting cake guide', 'freezing cake', 'cake freshness', 'San Diego bakery'],
  openGraph: {
    title: "Cake Care Instructions | Auntie Lu's Bakery San Diego",
    description: "Expert tips on storing, transporting, cutting, and serving your cake. Keep your Auntie Lu's creation fresh and beautiful.",
    images: [{ url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/cake-care',
  },
}

const storageTips = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Room Temperature',
    description: 'Buttercream cakes can sit at room temperature for up to 2 days. Keep away from direct sunlight, heat sources, and humid areas.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    title: 'Refrigeration',
    description: 'Fondant and cream-filled cakes should be refrigerated. Remove 1–2 hours before serving to let flavors develop and frosting soften.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Avoid Sunlight',
    description: 'Never leave your cake in direct sunlight or near windows. Heat can melt buttercream and cause fondant decorations to soften or wilt.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Keep Covered',
    description: 'Store your cake in a cake box or under a dome to protect it from drying out, absorbing fridge odors, and collecting dust.',
  },
]

const transportSteps = [
  {
    step: '01',
    title: 'Level Your Vehicle',
    description: 'Place the cake on a flat, level surface in your car. The floor of the backseat or trunk is ideal. Use a non-slip mat or damp towel underneath.',
    image: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=400&fit=crop&q=80',
  },
  {
    step: '02',
    title: 'Keep It Cool',
    description: 'Run the AC before loading the cake. In warm weather, transport with the air conditioning on and avoid leaving the cake in a parked car.',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop&q=80',
  },
  {
    step: '03',
    title: 'Drive Smoothly',
    description: 'Take turns slowly and brake gently. Avoid sudden stops and rough roads. If possible, have a passenger hold or monitor the cake during transit.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop&q=80',
  },
  {
    step: '04',
    title: 'Timing Matters',
    description: 'Pick up your cake as close to event time as possible. If you must transport early, keep it refrigerated at the venue until ready to display.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop&q=80',
  },
]

const cuttingGuide = [
  {
    shape: 'Round Cakes',
    instructions: 'Cut from the center outward in slices like a pie. For larger cakes (10"+), cut a circle 2 inches from the edge, then slice the outer ring into pieces.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&q=80',
    tips: ['Use a long, thin serrated knife', 'Wipe blade between cuts with a warm, damp cloth', 'Cut with a gentle sawing motion'],
  },
  {
    shape: 'Square & Sheet Cakes',
    instructions: 'Cut into a grid pattern. Create rows first, then cut each row into equal pieces. A 9x13 sheet cake typically yields 24–35 servings.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=400&fit=crop&q=80',
    tips: ['Mark cuts before slicing', 'Cut straight down — don\'t drag', 'Remove first piece with a pie server'],
  },
  {
    shape: 'Tiered Cakes',
    instructions: 'Remove tiers one at a time starting from the top. Set each tier on a cutting board and cut as you would a single round cake.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=400&fit=crop&q=80',
    tips: ['Remove all decorations and toppers first', 'Gently lift upper tiers off dowels', 'Save the top tier for freezing if desired'],
  },
]

const faqs = [
  {
    question: 'How long does a buttercream cake stay fresh?',
    answer: 'A buttercream cake stays fresh for 2–3 days at room temperature or up to 5 days refrigerated. Always keep it covered to prevent drying.',
  },
  {
    question: 'Can I freeze my cake?',
    answer: 'Yes! Wrap individual slices or the whole cake tightly in plastic wrap, then aluminum foil. Freeze for up to 3 months. Thaw overnight in the refrigerator.',
  },
  {
    question: 'How far in advance can I pick up my cake?',
    answer: 'We recommend picking up your cake the day of your event when possible. For buttercream cakes, the day before is fine if refrigerated properly.',
  },
  {
    question: 'My fondant is sweating — what do I do?',
    answer: 'This happens when a cold cake meets warm air. Let the cake sit undisturbed — the condensation will usually evaporate within 30 minutes. Do not wipe or touch the fondant.',
  },
  {
    question: 'How should I store leftover cake?',
    answer: 'Wrap leftover cake tightly in plastic wrap or store in an airtight container. Refrigerate for up to 5 days or freeze for up to 3 months.',
  },
]

export default function CakeCarePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Cake Care', url: 'https://www.auntielusbakery.com/cake-care' },
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&h=900&fit=crop&q=80"
            alt="Beautiful decorated cake ready for care and storage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Care Instructions
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            How to Care for Your Cake
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Your cake was made with love — here&apos;s how to keep it fresh, beautiful, and delicious from pickup to the last bite.
          </p>
        </div>
      </section>

      {/* Storage Tips */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Storage Essentials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              How to Store Your Cake
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Proper storage is key to keeping your cake moist, flavorful, and picture-perfect.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {storageTips.map((tip) => (
              <div key={tip.title} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wheat/10 text-wheat mb-5">
                  {tip.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{tip.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Timeline */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Freshness Guide
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              How Long Does Cake Last?
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-blush">
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Cake Type</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Room Temp</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Refrigerated</th>
                  <th className="py-4 px-4 font-serif text-dark-crust text-lg">Frozen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Buttercream', room: '2–3 days', fridge: '5–7 days', frozen: 'Up to 3 months' },
                  { type: 'Fondant', room: '2 days', fridge: '4–5 days', frozen: 'Up to 2 months' },
                  { type: 'Cream Cheese Frosting', room: '4 hours max', fridge: '5–7 days', frozen: 'Up to 3 months' },
                  { type: 'Whipped Cream', room: '2 hours max', fridge: '2–3 days', frozen: 'Not recommended' },
                  { type: 'Naked / Semi-Naked', room: '1 day', fridge: '3–4 days', frozen: 'Up to 2 months' },
                  { type: 'Cupcakes', room: '2 days', fridge: '5 days', frozen: 'Up to 3 months' },
                ].map((row, i) => (
                  <tr key={row.type} className={`border-b border-blush/50 ${i % 2 === 0 ? 'bg-cream/30' : ''}`}>
                    <td className="py-4 px-4 font-medium text-dark-crust">{row.type}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.room}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.fridge}</td>
                    <td className="py-4 px-4 text-[#6B6560]">{row.frozen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transportation Tips */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Safe Transport
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Transportation Tips
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Getting your cake home safely is just as important as how it was made. Follow these steps for a smooth ride.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {transportSteps.map((step) => (
              <div key={step.step} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-wheat text-white w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-dark-crust mb-3">{step.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting & Serving Guide */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Serving Guide
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Cutting & Serving Your Cake
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              The right technique makes all the difference. Get clean slices and maximize your servings with these expert tips.
            </p>
          </div>
          <div className="space-y-12">
            {cuttingGuide.map((guide, index) => (
              <div key={guide.shape} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={guide.image}
                      alt={`How to cut ${guide.shape.toLowerCase()}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="font-serif text-2xl text-dark-crust mb-4">{guide.shape}</h3>
                  <p className="text-[#6B6560] leading-relaxed mb-5">{guide.instructions}</p>
                  <ul className="space-y-2">
                    {guide.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-wheat mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6B6560] text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freezing Leftover Cake */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Save for Later
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Freezing Leftover Cake
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Don&apos;t let any of that deliciousness go to waste. Properly frozen cake tastes just as good weeks later.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&h=500&fit=crop&q=80"
                alt="Cake slices ready for freezing and storage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Remove Decorations', desc: 'Take off any non-edible toppers, fresh flowers, or delicate fondant pieces that won\'t freeze well.' },
                  { step: '2', title: 'Slice or Portion', desc: 'Cut the cake into individual portions for easier thawing. You can freeze the whole cake if you plan to serve it all at once.' },
                  { step: '3', title: 'Wrap Tightly', desc: 'Wrap each piece in plastic wrap first, pressing out air bubbles. Then wrap again in aluminum foil for extra protection.' },
                  { step: '4', title: 'Label & Freeze', desc: 'Write the date and flavor on the foil. Place in the freezer on a flat surface. Frozen cake keeps for up to 3 months.' },
                  { step: '5', title: 'Thaw Properly', desc: 'Move frozen cake to the refrigerator the night before. Unwrap and bring to room temperature 1–2 hours before serving.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-wheat/10 rounded-full flex items-center justify-center">
                      <span className="text-wheat font-serif font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-dark-crust mb-1">{item.title}</h4>
                      <p className="text-[#6B6560] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Summary */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Quick Reference
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Best Practices at a Glance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { do: true, text: 'Store in a cool, dry place away from sunlight' },
              { do: true, text: 'Keep covered with a cake dome or in its box' },
              { do: true, text: 'Use a warm, clean knife for cutting' },
              { do: true, text: 'Bring refrigerated cake to room temp before serving' },
              { do: true, text: 'Wrap leftovers tightly in plastic wrap' },
              { do: true, text: 'Freeze within 2 days for best quality' },
              { do: false, text: 'Leave cake in a hot car or direct sun' },
              { do: false, text: 'Store near strong-smelling foods in the fridge' },
              { do: false, text: 'Use a short, thick knife for clean slices' },
              { do: false, text: 'Re-freeze cake that has already been thawed' },
              { do: false, text: 'Touch or wipe condensation on fondant cakes' },
              { do: false, text: 'Stack heavy items on top of the cake box' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-cream/50">
                {item.do ? (
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="text-[#6B6560] text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Cake Care FAQ
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
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Order Your Next Cake?</h2>
          <p className="text-white/80 text-lg mb-8">
            Now that you know how to care for it, let&apos;s create something delicious together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Order a Custom Cake
            </Link>
            <Link href="/flavors" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Explore Our Flavors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
