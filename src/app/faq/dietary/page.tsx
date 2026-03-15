import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'
import { FAQSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Dietary & Allergen Info | FAQ - Auntie Lu's Bakery San Diego",
  description: 'Gluten-free, vegan, dairy-free, nut-free, and allergen information for Auntie Lu\'s Bakery in San Diego. Learn about our dietary accommodations and ingredient transparency.',
  openGraph: {
    title: "Dietary & Allergen FAQ | Auntie Lu's Bakery San Diego",
    description: 'Everything about our dietary options including gluten-free, vegan, dairy-free alternatives and allergen information.',
    url: 'https://www.auntielusbakery.com/faq/dietary',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/faq/dietary',
  },
}

const faqs = [
  {
    question: 'What dietary options do you offer?',
    answer: 'We offer several dietary alternatives: Gluten-free cakes and cupcakes made with certified gluten-free flour blends. Dairy-free options using plant-based butter and milk alternatives. Vegan cakes (no eggs, dairy, or animal products). Reduced-sugar options for select products. We\'re always expanding our offerings — let us know your needs and we\'ll do our best to accommodate.',
  },
  {
    question: 'Are your gluten-free products made in a dedicated facility?',
    answer: 'No. All of our products are made in a shared kitchen that processes wheat/gluten, dairy, eggs, tree nuts, peanuts, and soy. While we take precautions to prevent cross-contamination (separate equipment, thorough cleaning), we cannot guarantee a completely allergen-free environment. Our gluten-free products are not suitable for individuals with celiac disease.',
  },
  {
    question: 'Do you offer vegan cakes?',
    answer: 'Yes! Our vegan cakes use plant-based ingredients — no eggs, dairy, butter, or animal-derived products. Popular vegan flavors include Chocolate, Vanilla, Lemon, and Carrot Cake. Vegan frosting options include dairy-free buttercream and coconut whipped cream. Vegan cakes start at $85 for a 6-inch round.',
  },
  {
    question: 'Can you make nut-free products?',
    answer: 'We can make products without nut-based ingredients. However, our kitchen handles tree nuts (almonds, pecans, walnuts) and peanuts regularly. While we follow strict cleaning protocols between orders, we cannot guarantee zero cross-contamination. If you have a severe nut allergy (anaphylaxis risk), we recommend consulting with your allergist before ordering.',
  },
  {
    question: 'Do you use artificial food coloring?',
    answer: 'We use a mix of natural and professional-grade food colorings. For standard orders, we use FDA-approved gel food colors. Upon request, we can use natural food colorings derived from plants, fruits, and vegetables (beet juice, turmeric, spirulina, etc.) for an additional charge. Natural colors may produce slightly different shades than synthetic alternatives.',
  },
  {
    question: 'What are the common allergens in your products?',
    answer: 'Most of our standard products contain: Wheat/Gluten, Eggs, Dairy (butter, milk, cream), and Sugar. Some products also contain: Tree nuts (almonds, pecans, walnuts), Soy (in chocolate products), and Coconut. We list key allergens for each product on our website. For a complete ingredient list for any specific product, please contact us.',
  },
  {
    question: 'Can you make a cake for someone with multiple allergies?',
    answer: 'We\'ll do our best! For orders with multiple dietary restrictions, we recommend scheduling a consultation so we can discuss what\'s possible. We can accommodate many combinations (e.g., gluten-free AND dairy-free, or vegan AND nut-free), though flavor and design options may be more limited. Please always disclose all allergies upfront.',
  },
  {
    question: 'Do your cake pops contain allergens?',
    answer: 'Standard cake pops contain wheat, eggs, dairy, and sugar. The chocolate coating may contain soy. We currently offer gluten-free cake pop options but not vegan cake pops. Each cake pop is individually wrapped with allergen information noted on the packaging.',
  },
  {
    question: 'Is your sourdough bread vegan?',
    answer: 'Our classic sourdough bread is naturally vegan — made with just flour, water, salt, and our sourdough starter. However, some specialty sourdough varieties (like jalapeño cheddar) contain dairy. Check individual product descriptions for specific ingredients. All sourdough is made with wheat flour and is not gluten-free.',
  },
  {
    question: 'Do you offer sugar-free options?',
    answer: 'We offer reduced-sugar options where we use less sugar than standard recipes, but we don\'t currently offer completely sugar-free products. Sugar plays a critical role in the structure, moisture, and shelf life of baked goods. For diabetic-friendly options, we can recommend portion-appropriate serving sizes and lower-sugar flavor combinations.',
  },
  {
    question: 'Can you provide ingredient lists for custom orders?',
    answer: 'Yes! We\'re happy to provide a complete ingredient list for any order upon request. For custom cakes, we\'ll include the ingredient list with your quote. We believe in full transparency about what goes into our products. Just ask, and we\'ll make sure you have all the information you need.',
  },
  {
    question: 'Do you use organic ingredients?',
    answer: 'We use high-quality ingredients from trusted suppliers, but not all ingredients are certified organic. We do use organic flour and organic eggs whenever available. If a fully organic cake is important to you, let us know and we can source organic ingredients for your order — additional costs may apply for premium organic substitutions.',
  },
]

export default function DietaryFAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Dietary & Allergens', href: '/faq/dietary' },
      ]} />

      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Dietary & Allergen Info</h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto">
            Your safety matters. Here&apos;s everything you need to know about our ingredients, allergens, and dietary accommodations.
          </p>
        </div>
      </section>

      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-3">Important Allergen Notice</h2>
            <p className="text-soft-brown leading-relaxed m-0">
              All products are made in a shared kitchen that processes <strong className="text-charcoal">wheat, gluten, dairy, eggs, tree nuts, peanuts, and soy</strong>. While we take precautions to prevent cross-contamination, we cannot guarantee an allergen-free environment. Our gluten-free products are not suitable for individuals with celiac disease. If you have severe allergies, please consult your allergist before ordering.
            </p>
          </div>

          {/* Dietary Options Overview */}
          <div className="bg-cream rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-6">Available Dietary Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="text-charcoal font-medium m-0">Gluten-Free</p>
                  <p className="text-soft-brown text-sm m-0">Cakes & cupcakes available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="text-charcoal font-medium m-0">Vegan</p>
                  <p className="text-soft-brown text-sm m-0">Cakes, cupcakes & sourdough</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="text-charcoal font-medium m-0">Dairy-Free</p>
                  <p className="text-soft-brown text-sm m-0">Plant-based alternatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="text-charcoal font-medium m-0">Reduced Sugar</p>
                  <p className="text-soft-brown text-sm m-0">Select products available</p>
                </div>
              </div>
            </div>
          </div>

          <FAQList faqs={faqs} />
        </div>
      </section>

      <section className="py-16 px-[4%]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-charcoal text-center mb-8">Related Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/faq/custom-cakes" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Custom Cake Design</h3>
              <p className="text-soft-brown text-sm m-0">Flavors, frostings, and design options</p>
            </Link>
            <Link href="/faq/ordering" className="no-underline bg-white rounded-2xl p-5 border border-blush hover:shadow-md transition-all group">
              <h3 className="font-serif text-lg text-charcoal group-hover:text-crust transition-colors mb-1">Ordering & Lead Times</h3>
              <p className="text-soft-brown text-sm m-0">How to place special dietary orders</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Have Specific Dietary Needs?</h2>
        <p className="text-blush text-lg mb-8">Reach out and we&apos;ll work with you to find the perfect solution.</p>
        <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
          Contact Us
        </Link>
      </section>
    </>
  )
}
