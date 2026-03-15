import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Custom Cake Design Process | FAQ - Auntie Lu's Bakery San Diego",
  description: 'Learn about the custom cake design process at Auntie Lu\'s Bakery. Consultations, tastings, matching designs from photos, flavors, and how to bring your cake vision to life.',
  openGraph: {
    title: "Custom Cake Design FAQ | Auntie Lu's Bakery San Diego",
    description: 'Everything about designing your dream cake — consultations, tastings, photo matching, flavors, and the creative process.',
    url: 'https://www.auntielusbakery.com/faq/custom-cakes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/custom-cakes',
  },
}

const faqs = [
  {
    question: 'Can you match a design from a photo?',
    answer: 'Absolutely! We love bringing inspiration photos to life. Send us images from Pinterest, Instagram, magazines, or even hand-drawn sketches. While every cake is handmade and will have its own unique character, we\'ll work closely with you to capture the style, colors, textures, and overall feel of your vision. We\'ll let you know upfront if any elements need to be adapted.',
  },
  {
    question: 'What is the custom cake design process?',
    answer: 'Our process is simple: 1) Contact us with your event date, guest count, and inspiration. 2) We\'ll schedule a consultation (in-person or virtual) to discuss your vision. 3) You\'ll receive a detailed quote and design sketch. 4) Once approved and deposit received, we\'ll confirm your order. 5) For wedding cakes, you can schedule a tasting. 6) We create your cake and deliver or prep for pickup. The whole process from first contact to design approval typically takes 1-2 weeks.',
  },
  {
    question: 'Do you offer tastings?',
    answer: 'Yes! For wedding cake orders over $500, we offer complimentary in-person tastings where you can sample up to 6 flavors. For other custom cake orders, we offer tasting boxes for $35 that include samples of our most popular flavors. The tasting box cost is credited toward your final order if you book with us. Tasting appointments should be scheduled at least 1 week in advance.',
  },
  {
    question: 'What cake flavors do you offer?',
    answer: 'Our most popular flavors include: Classic Vanilla, Rich Chocolate, Red Velvet, Lemon, Strawberry, Funfetti, Cookies & Cream, Salted Caramel, Coconut, Carrot Cake, Marble, and seasonal specials. We also offer premium flavors like Matcha, Earl Grey Lavender, Pistachio, and Champagne. Each flavor can be paired with various frostings and fillings.',
  },
  {
    question: 'What frosting and filling options do you have?',
    answer: 'Frostings include: American Buttercream, Swiss Meringue Buttercream, Cream Cheese, Whipped Cream, Fondant, and Ganache. Fillings include: Fresh fruit, fruit preserves, Nutella, caramel, lemon curd, cookie butter, mousse, and ganache. We can also create custom filling combinations.',
  },
  {
    question: 'Can you do fondant cakes?',
    answer: 'Yes! We work with both buttercream and fondant. Fondant is ideal for achieving clean, sharp edges, smooth surfaces, and intricate sculpted details. Buttercream is great for a more organic, rustic, or modern textured look. We\'ll recommend the best finish based on your design. Note that fondant designs are priced higher due to the additional labor involved.',
  },
  {
    question: 'How many people will my cake serve?',
    answer: 'Serving sizes depend on how the cake is cut: 6-inch round serves 8-12, 8-inch round serves 15-20, 10-inch round serves 25-35, 12-inch round serves 40-55. For tiered cakes, we add the servings from each tier. A standard 3-tier wedding cake (6/8/10 inch) serves approximately 60-80 guests. We\'ll help you choose the right size for your event.',
  },
  {
    question: 'Can you make 3D or sculpted cakes?',
    answer: 'Yes, we create sculpted and 3D cakes for special occasions! These include shaped cakes (numbers, letters, animals, objects), carved cakes, and gravity-defying designs. 3D cakes require additional structural engineering and fondant work, so they are priced on a case-by-case basis. Please provide as much detail as possible when requesting a quote.',
  },
  {
    question: 'Do you provide cake toppers?',
    answer: 'We can create edible cake toppers including fondant figures, sugar flowers, chocolate decorations, and edible image prints. For non-edible toppers (acrylic, wood, etc.), we recommend providing your own and we\'ll incorporate it into the design. We\'re happy to recommend local topper vendors as well.',
  },
  {
    question: 'Can I request a specific color scheme?',
    answer: 'Of course! We color-match to Pantone swatches, fabric samples, invitation suites, or any reference you provide. Just send us your color palette and we\'ll ensure the cake perfectly complements your event\'s aesthetic. We can also match specific flowers or decor elements.',
  },
  {
    question: 'What about fresh flowers on the cake?',
    answer: 'We love incorporating fresh flowers! We can work with your florist to select food-safe blooms that complement the cake design. All fresh flowers are placed with protective barriers to keep the cake food-safe. We can also create realistic sugar flowers as an alternative if you prefer everything edible.',
  },
  {
    question: 'How should I store my cake before the event?',
    answer: 'Buttercream cakes should be stored in a cool area (65-70°F) away from direct sunlight. Do not refrigerate unless the filling requires it, as condensation can damage decorations. Fondant cakes should never be refrigerated. We provide detailed storage instructions with every order and recommend consuming the cake within 2 days of delivery for the best taste and freshness.',
  },
]

export default function CustomCakesFAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Custom Cakes', href: '/faq/custom-cakes' },
      ]} />

      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Custom Cake Design</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            From your first idea to the final slice — here&apos;s everything about our custom cake design process.
          </p>
        </div>
      </section>

      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Design Process Steps */}
          <div className="bg-cream rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-6">Our Design Process</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Share Your Vision', desc: 'Send us your inspiration, event details, and guest count' },
                { step: '2', title: 'Consultation', desc: 'Free consultation to discuss design, flavors, and budget' },
                { step: '3', title: 'Quote & Sketch', desc: 'Receive a detailed quote with a design concept' },
                { step: '4', title: 'Tasting', desc: 'Sample flavors (complimentary for wedding cakes over $500)' },
                { step: '5', title: 'Confirm & Deposit', desc: 'Approve the design and secure your date with a deposit' },
                { step: '6', title: 'Enjoy!', desc: 'We create, deliver, and set up your masterpiece' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-wheat text-dark-crust flex items-center justify-center font-semibold text-sm flex-shrink-0">{item.step}</span>
                  <div>
                    <p className="text-charcoal font-medium m-0">{item.title}</p>
                    <p className="text-soft-brown text-sm m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FAQList faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">Related Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/faq/pricing" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Pricing Guide</h3>
              <p className="text-soft-brown text-sm m-0">How much custom cakes cost</p>
            </Link>
            <Link href="/faq/dietary" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Dietary & Allergens</h3>
              <p className="text-soft-brown text-sm m-0">Gluten-free, vegan, and allergy info</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Design Your Dream Cake?</h2>
        <p className="text-blush text-lg mb-8">Share your vision and let&apos;s create something beautiful together.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Start Your Design
          </Link>
          <Link href="/custom-cakes" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold no-underline hover:bg-white/10 transition-colors">
            View Our Work
          </Link>
        </div>
      </section>
    </>
  )
}
