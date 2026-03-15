import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Our Story | How Auntie Lu's Bakery Began",
  description: "Discover the story behind Auntie Lu's Bakery — from family recipes passed down through generations to becoming San Diego's favorite custom bakery. Learn what makes us different.",
  openGraph: {
    title: "Our Story | How Auntie Lu's Bakery Began",
    description: "Discover the story behind Auntie Lu's Bakery — from family recipes passed down through generations to becoming San Diego's favorite custom bakery.",
    images: [{ url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/our-story',
  },
}

const milestones = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Auntie Lu starts baking sourdough and cake pops from her home kitchen, sharing with friends and family. Word spreads fast.',
    image: 'https://images.unsplash.com/photo-1556217477-d325251ece38?w=600&h=400&fit=crop',
  },
  {
    year: '2023',
    title: 'Growing by Word of Mouth',
    description: 'Demand grows beyond the kitchen. Custom cake orders pour in for weddings, birthdays, and special events across San Diego.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
  },
  {
    year: '2024',
    title: 'Expanding Our Reach',
    description: 'We begin serving venues across San Diego County — from Hotel del Coronado to backyard celebrations in North Park. Our sourdough becomes a local staple.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
  },
  {
    year: '2025',
    title: 'A San Diego Favorite',
    description: 'Auntie Lu\'s becomes the go-to bakery for custom cakes, cake pops, and artisan sourdough. We continue growing while staying true to our roots.',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=400&fit=crop',
  },
]

const differentiators = [
  {
    title: 'Small-Batch, Never Mass-Produced',
    description: 'Every item is made in small batches to ensure quality. We\'d rather make less and make it perfect than cut corners to scale up.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: '24+ Hour Sourdough Ferment',
    description: 'Our sourdough undergoes a slow, 24-hour fermentation process. This creates depth of flavor, better texture, and easier digestibility that you can taste.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Truly Custom Designs',
    description: 'We don\'t do cookie-cutter designs. Every custom cake and cake pop order is a unique collaboration between you and our designers.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Family Recipes, Modern Techniques',
    description: 'We blend time-tested family recipes with modern baking science. The result is familiar flavors executed with professional precision.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
]

const coreValues = [
  { title: 'Authenticity', description: 'We stay true to our roots. No trends, no gimmicks — just honest, delicious baked goods.' },
  { title: 'Excellence', description: 'Good enough isn\'t good enough. We hold ourselves to the highest standard in every batch.' },
  { title: 'Connection', description: 'Food brings people together. We\'re honored to be part of your celebrations and everyday moments.' },
  { title: 'Sustainability', description: 'We minimize waste, source responsibly, and care for our impact on San Diego and beyond.' },
]

export default function OurStoryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Our Story', url: 'https://www.auntielusbakery.com/our-story' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1600&h=900&fit=crop"
            alt="The Auntie Lu's Bakery story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            From Family Kitchen to San Diego&apos;s Favorite Bakery
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            It all started with a grandmother&apos;s recipe, a bag of flour, and a whole lot of love.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&h=1000&fit=crop"
              alt="Auntie Lu baking in her kitchen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">How It Began</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              A Recipe Passed Down Through Generations
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Auntie Lu grew up in a kitchen filled with the warmth of baking bread and the laughter of family gathered around the table. Her grandmother taught her that the secret to great baking wasn&apos;t just technique &mdash; it was love, patience, and the best ingredients you could find.
              </p>
              <p>
                In 2022, after years of baking for friends and family &mdash; birthday cakes that became legendary, sourdough loaves that neighbors would trade favors for, and cake pops that disappeared within minutes &mdash; Lu decided to share her gift with all of San Diego.
              </p>
              <p>
                What started as a small operation from her home kitchen quickly became something bigger. Word spread through neighborhoods, from Pacific Beach to Coronado, from North Park to La Jolla. People weren&apos;t just buying baked goods &mdash; they were discovering something made with a level of care they hadn&apos;t tasted before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Growth & Evolution</h2>
          </div>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <span className="inline-block bg-wheat/10 text-wheat font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif text-2xl text-dark-crust mb-3">{milestone.title}</h3>
                  <p className="text-[#6B6560] leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">What Makes Us Different</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              In a world of mass-produced baked goods, we choose to do things the old-fashioned way &mdash; with patience, skill, and heart.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-blush/50">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-wheat/10 text-wheat mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{item.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-[4%] bg-dark-crust text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These aren&apos;t just words on a wall. They guide every decision we make, from the ingredients we choose to the way we treat our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wheat text-white font-serif text-xl font-semibold mb-5">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Testimonial */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="mx-auto mb-6 text-wheat/30" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl text-dark-crust mb-6 leading-relaxed italic">
            &ldquo;Every time someone takes a bite of something I&apos;ve made and their eyes light up &mdash; that&apos;s why I do this. That moment never gets old.&rdquo;
          </blockquote>
          <div>
            <p className="text-dark-crust font-semibold">Auntie Lu</p>
            <p className="text-[#6B6560] text-sm">Founder &amp; Head Baker</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">Be Part of Our Story</h2>
          <p className="text-[#6B6560] text-lg mb-8 max-w-2xl mx-auto">
            Whether it&apos;s your wedding day, a birthday celebration, or just a Tuesday that needs fresh sourdough &mdash; we&apos;d love to bake for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-dark-crust text-white px-8 py-4 rounded-full font-semibold hover:bg-crust transition-colors no-underline">
              Contact Us
            </Link>
            <Link href="/about" className="bg-transparent text-dark-crust px-8 py-4 rounded-full font-semibold hover:bg-dark-crust/5 transition-colors no-underline border-2 border-dark-crust">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
