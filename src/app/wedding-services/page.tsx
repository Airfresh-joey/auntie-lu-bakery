'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const consultationSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Share your vision, wedding details, color palette, and theme. We\'ll discuss flavors, dietary needs, and your overall dessert plan.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Tasting Experience',
    description: 'Enjoy a complimentary tasting of up to 6 cake flavors, fillings, and frostings. Bring your partner, your planner, or your best friend!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Design & Mood Board',
    description: 'We create detailed sketches and mood boards based on your Pinterest inspiration, venue décor, florals, and wedding colors.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Finalize Details',
    description: 'Confirm your cake design, serving size, delivery logistics, and venue setup requirements. We handle every detail so you don\'t have to.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Delivery & Setup',
    description: 'Our team delivers and assembles your cake on-site at your venue, ensuring a flawless presentation for your big day.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
]

const packages = [
  {
    name: 'Silver',
    subtitle: 'Intimate Celebrations',
    price: 'From $650',
    guests: 'Up to 75 guests',
    featured: false,
    features: [
      'Two-tier custom wedding cake',
      'Choice of 2 flavors',
      'Buttercream or fondant finish',
      'Fresh flower accents',
      'Complimentary tasting for 2',
      'Delivery & basic setup',
      'Cake cutting knife set rental',
    ],
  },
  {
    name: 'Gold',
    subtitle: 'Most Popular',
    price: 'From $1,200',
    guests: 'Up to 150 guests',
    featured: true,
    features: [
      'Three-tier custom wedding cake',
      'Choice of 3 flavors',
      'Premium fondant or buttercream',
      'Sugar flowers or hand-painted details',
      'Complimentary tasting for 4',
      'Delivery, setup & styling',
      'Dessert table consultation',
      'Groom\'s cake (6" round)',
      'Cake topper coordination',
    ],
  },
  {
    name: 'Platinum',
    subtitle: 'Grand Affairs',
    price: 'From $2,500',
    guests: '150+ guests',
    featured: false,
    features: [
      'Four+ tier show-stopping cake',
      'Unlimited flavor combinations',
      'Elaborate sugar work & hand-painting',
      'Custom cake topper design',
      'Complimentary tasting for 6',
      'White-glove delivery & full setup',
      'Complete dessert table (cupcakes, cake pops, cookies)',
      'Groom\'s cake (custom design)',
      'Day-of cake cutting service',
      'Rehearsal dinner desserts',
    ],
  },
]

const dessertTableOptions = [
  {
    title: 'Cupcake Tower',
    description: 'Elegant tiered display of 48-200+ cupcakes in your wedding colors with a cutting cake on top.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=450&fit=crop&q=80',
    price: 'From $350',
  },
  {
    title: 'Cake Pop Display',
    description: 'Stunning arrangements of hand-dipped cake pops in custom colors to match your wedding palette.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop&q=80',
    price: 'From $200',
  },
  {
    title: 'Cookie Favors',
    description: 'Beautifully decorated sugar cookies as wedding favors, individually wrapped with custom tags.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384f7f584?w=600&h=450&fit=crop&q=80',
    price: 'From $3/cookie',
  },
  {
    title: 'Full Dessert Bar',
    description: 'A curated spread of mini pastries, macarons, brownies, cupcakes, and more. Complete with signage and styling.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&h=450&fit=crop&q=80',
    price: 'From $800',
  },
]

const venuePartners = [
  'Hotel del Coronado',
  'The Lodge at Torrey Pines',
  'Rancho Valencia Resort',
  'The Prado at Balboa Park',
  'Estancia La Jolla',
  'Scripps Seaside Forum',
  'Marina Village',
  'Bahia Resort Hotel',
  'The Westgate Hotel',
  'Fairbanks Ranch Country Club',
  'Stone Brewing World Bistro',
  'Del Mar Powerhouse',
  'Darlington House',
  'Green Gables Estate',
  'Twin Oaks Garden Estate',
  'Junipero Serra Museum',
]

const timeline = [
  { months: '12-18 months', task: 'Book your date & initial consultation' },
  { months: '10-12 months', task: 'Schedule your tasting experience' },
  { months: '8-10 months', task: 'Finalize cake design & mood boards' },
  { months: '6 months', task: 'Confirm dessert table selections' },
  { months: '3 months', task: 'Final details, guest count confirmation' },
  { months: '1 month', task: 'Delivery logistics & venue coordination' },
  { months: '1 week', task: 'Final walkthrough & last adjustments' },
  { months: 'Wedding day', task: 'Delivery, setup & cake cutting service' },
]

const testimonials = [
  {
    name: 'Jessica & Michael',
    venue: 'Hotel del Coronado',
    text: 'Auntie Lu\'s created the most breathtaking five-tier wedding cake we could have ever imagined. Every single guest commented on how incredible it tasted. The champagne raspberry filling was absolutely divine!',
    rating: 5,
  },
  {
    name: 'Sarah & David',
    venue: 'The Lodge at Torrey Pines',
    text: 'From our very first tasting to the moment they set up our cake at the venue, the entire experience was flawless. The cake was almost too beautiful to cut! The sugar flowers looked completely real.',
    rating: 5,
  },
  {
    name: 'Emily & Ryan',
    venue: 'Rancho Valencia Resort',
    text: 'We went with the Platinum package and the dessert table was the highlight of our reception. Our guests are still talking about the cake pops and macarons months later. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Amanda & Chris',
    venue: 'Darlington House',
    text: 'We wanted a rustic boho cake with fresh flowers and greenery. Auntie Lu\'s nailed our vision perfectly. The naked cake with lemon lavender layers was the perfect balance of beautiful and delicious.',
    rating: 5,
  },
  {
    name: 'Lisa & James',
    venue: 'The Prado at Balboa Park',
    text: 'Our wedding had a vintage garden theme and Auntie Lu\'s created a hand-painted cake that looked like it came straight from an art gallery. The team even coordinated the groom\'s cake as a surprise!',
    rating: 5,
  },
  {
    name: 'Priya & Arjun',
    venue: 'Fairbanks Ranch Country Club',
    text: 'We needed a cake that honored both of our cultural backgrounds. Auntie Lu\'s designed a stunning multi-tier cake with Indian-inspired henna patterns and classic American elegance. Absolutely perfect.',
    rating: 5,
  },
]

const weddingFaqs = [
  {
    question: 'How far in advance should I book my wedding cake?',
    answer: 'We recommend booking 6-12 months in advance, especially for peak wedding season (May-October). We only take a limited number of wedding orders per weekend to ensure every couple receives our full attention.',
  },
  {
    question: 'Do you offer complimentary tastings for wedding cakes?',
    answer: 'Yes! All wedding packages include a complimentary tasting session. You can sample up to 6 cake flavors, fillings, and frostings. Additional tasting sessions are available for $50, which is applied toward your final order.',
  },
  {
    question: 'Can you accommodate dietary restrictions for wedding cakes?',
    answer: 'Absolutely. We offer gluten-free, dairy-free, and vegan wedding cake options. We can also create nut-free cakes. Please note that all items are prepared in a shared kitchen that handles common allergens.',
  },
  {
    question: 'What flavors are available for wedding cakes?',
    answer: 'Our most popular wedding flavors include Vanilla Bean, Champagne, Lemon Lavender, Red Velvet, Chocolate Ganache, Almond Amaretto, Coconut, Strawberry Shortcake, and Salted Caramel. Each tier can be a different flavor!',
  },
  {
    question: 'Do you deliver and set up at the venue?',
    answer: 'Yes! Delivery and on-site setup is included in all wedding packages. We coordinate directly with your venue and wedding planner to ensure everything is picture-perfect. We arrive 2-3 hours before the reception.',
  },
  {
    question: 'What is your deposit and payment policy for weddings?',
    answer: 'We require a 30% non-refundable deposit to secure your date, with 50% due at the design finalization stage and the remaining 20% due two weeks before the wedding. We accept all major credit cards.',
  },
  {
    question: 'Can you match my wedding colors and theme?',
    answer: 'That\'s what we do best! Send us your color swatches, Pinterest boards, floral arrangements, and venue photos. We\'ll create a cake that seamlessly integrates with your wedding aesthetic.',
  },
  {
    question: 'Do you provide a cake cutting service?',
    answer: 'Our Platinum package includes a dedicated cake cutting attendant. For Silver and Gold packages, cake cutting service can be added for $150. Our attendant will cut and plate the cake for your guests.',
  },
  {
    question: 'What about the groom\'s cake?',
    answer: 'We love creating groom\'s cakes! These can be any theme — hobbies, sports teams, professions, or inside jokes. Groom\'s cakes start at $150 for a 6" round and are included in our Gold and Platinum packages.',
  },
  {
    question: 'What happens if there\'s an emergency on the wedding day?',
    answer: 'We always have a contingency plan. Our team carries emergency repair kits and backup decorations. In the rare event of transit damage, our on-site team can perform repairs before anyone notices. We also carry liability insurance.',
  },
]

export default function WeddingServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop"
            alt="Elegant wedding cake by Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16 max-w-4xl mx-auto">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Wedding Services</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Your Dream Wedding Cake Starts Here
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            From intimate elopements to grand celebrations, we craft unforgettable wedding cakes and dessert experiences tailored to your love story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Book a Consultation
            </Link>
            <Link href="/wedding-gallery" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View Wedding Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The Auntie Lu&apos;s Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              More Than a Cake &mdash; A Centerpiece for Your Love Story
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Your wedding cake is more than dessert &mdash; it&apos;s a work of art, a conversation piece, and a memory you&apos;ll cherish forever. At Auntie Lu&apos;s, we pour our hearts into every tier, every sugar flower, and every hand-piped detail.
              </p>
              <p>
                We&apos;ve had the honor of creating wedding cakes for celebrations at San Diego&apos;s most beautiful venues, from beachside ceremonies at the Hotel del Coronado to garden receptions at Rancho Valencia. Each cake is designed to complement your unique style and venue.
              </p>
              <p>
                Our process is deeply personal. We get to know you as a couple, understand your story, and translate that into a cake that feels unmistakably yours.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=1000&fit=crop"
                alt="Three-tier elegant wedding cake with floral decorations"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-wheat text-white rounded-2xl p-6 shadow-lg max-w-[200px]">
              <p className="font-serif text-3xl font-semibold">500+</p>
              <p className="text-sm text-white/90">Wedding cakes created with love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">From Vision to Reality</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Our five-step process ensures every detail is perfect, so all you have to do is enjoy your special day.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {consultationSteps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {i < consultationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-blush" />
                )}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wheat/10 text-wheat mb-5 group-hover:bg-wheat group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <p className="text-wheat text-xs font-semibold tracking-widest uppercase mb-2">Step {step.step}</p>
                <h3 className="font-serif text-lg text-dark-crust mb-3">{step.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Wedding Packages</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Choose Your Perfect Package</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Every package is fully customizable. These are starting points &mdash; we&apos;ll tailor everything to your vision and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-shadow ${
                  pkg.featured
                    ? 'bg-dark-crust text-white shadow-xl scale-[1.02]'
                    : 'bg-white shadow-sm hover:shadow-lg border border-blush'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wheat text-white text-xs font-semibold uppercase tracking-widest px-6 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`font-serif text-2xl mb-1 ${pkg.featured ? 'text-white' : 'text-dark-crust'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.featured ? 'text-white/70' : 'text-[#6B6560]'}`}>
                    {pkg.subtitle}
                  </p>
                  <p className={`font-serif text-3xl font-semibold ${pkg.featured ? 'text-wheat' : 'text-wheat'}`}>
                    {pkg.price}
                  </p>
                  <p className={`text-sm mt-1 ${pkg.featured ? 'text-white/60' : 'text-[#6B6560]'}`}>
                    {pkg.guests}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex-shrink-0 ${pkg.featured ? 'text-wheat' : 'text-wheat'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </span>
                      <span className={`text-sm ${pkg.featured ? 'text-white/90' : 'text-[#6B6560]'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3.5 rounded-full font-semibold no-underline transition-colors ${
                    pkg.featured
                      ? 'bg-wheat text-white hover:bg-wheat/90'
                      : 'bg-dark-crust text-white hover:bg-crust'
                  }`}
                >
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B6560] text-sm mt-8">
            All packages are fully customizable. Contact us for a personalized quote based on your specific needs.
          </p>
        </div>
      </section>

      {/* Dessert Table Options */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Beyond the Cake</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Dessert Table Options</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Complete your reception with a stunning dessert spread that will leave your guests in awe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dessertTableOptions.map((option) => (
              <div key={option.title} className="group bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-dark-crust mb-2">{option.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-3">{option.description}</p>
                  <p className="text-wheat font-semibold text-sm">{option.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groom's Cake */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&h=600&fit=crop"
              alt="Custom groom's cake with unique design"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Don&apos;t Forget</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              The Groom&apos;s Cake
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Give the groom a moment to shine with a custom cake that celebrates his personality. Whether it&apos;s shaped like a football, a guitar, a favorite video game, or a beloved pet &mdash; we bring any concept to life.
              </p>
              <p>
                Groom&apos;s cakes are a beloved Southern tradition that&apos;s become a fun addition to weddings everywhere. It&apos;s also a perfect opportunity for a surprise reveal at the rehearsal dinner or reception.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-wheat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </span>
                <span className="text-sm text-[#6B6560]">Custom shapes, themes & sculpted designs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-wheat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </span>
                <span className="text-sm text-[#6B6560]">Included in Gold &amp; Platinum packages</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-wheat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </span>
                <span className="text-sm text-[#6B6560]">Starting at $150 as a standalone add-on</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Planning Guide</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Wedding Cake Timeline</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Plan ahead for the perfect wedding dessert experience. Here&apos;s when to tackle each milestone.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-blush md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div key={item.months} className={`relative flex items-start gap-6 mb-8 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                  <p className="text-wheat font-semibold text-sm uppercase tracking-wide">{item.months}</p>
                  <p className="text-[#6B6560] text-sm mt-1">{item.task}</p>
                </div>
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-wheat text-white flex items-center justify-center text-sm font-semibold shadow-md">
                  {i + 1}
                </div>
                <div className={`flex-1 md:hidden`}>
                  <p className="text-wheat font-semibold text-sm uppercase tracking-wide">{item.months}</p>
                  <p className="text-[#6B6560] text-sm mt-1">{item.task}</p>
                </div>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'pl-10' : 'pr-10'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Partners */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Trusted Partners</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Venue Partnerships</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              We&apos;ve delivered and set up wedding cakes at San Diego&apos;s most sought-after venues. Our team knows the ins and outs of each location.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {venuePartners.map((venue) => (
              <div key={venue} className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-blush/50">
                <p className="text-dark-crust font-medium text-sm">{venue}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B6560] text-sm mt-8">
            Don&apos;t see your venue? We deliver to any location in San Diego County and beyond.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Love Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What Our Couples Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="bg-cream rounded-2xl p-6 md:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#D4A853">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6B6560] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-dark-crust font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-wheat text-xs">{testimonial.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Gallery Preview */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Inspiration</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Wedding Cake Gallery</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Browse our collection of wedding cakes, from classic elegance to modern masterpieces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', alt: 'Elegant tiered wedding cake' },
              { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d', alt: 'White floral wedding cake' },
              { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713', alt: 'Classic wedding cake with fondant' },
              { src: 'https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2', alt: 'Rustic wedding cake with flowers' },
            ].map((img) => (
              <div key={img.src} className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={`${img.src}?w=400&h=400&fit=crop&q=80`}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/wedding-gallery" className="inline-flex items-center gap-2 bg-dark-crust text-white px-8 py-4 rounded-full font-semibold hover:bg-crust transition-colors no-underline">
              View Full Wedding Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding FAQ */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Questions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Wedding Cake FAQ</h2>
          </div>
          <div className="space-y-0">
            {weddingFaqs.map((faq, i) => (
              <div key={i} className="border-b border-blush">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left bg-transparent border-0 cursor-pointer group"
                >
                  <span className="font-medium text-dark-crust group-hover:text-crust transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 text-wheat transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-8">
                    <p className="text-[#6B6560] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Start Planning Your Wedding Cake?</h2>
          <p className="text-white/80 text-lg mb-8">
            Book your complimentary consultation today. We&apos;d love to hear about your wedding vision and create something truly unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Book a Consultation
            </Link>
            <Link href="/wedding-gallery" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Wedding Gallery
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-6">
            Or call us at (619) 555-CAKE &bull; hello@auntielusbakery.com
          </p>
        </div>
      </section>
    </>
  )
}
