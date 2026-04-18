import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "About Us | Auntie Lu's Bakery - San Diego Sourdough & Cake Pops",
  description: "Meet Lindsay, the baker behind Auntie Lu's Bakery. Handmade sourdough bread and custom cake pops, baked with love from her home kitchen in San Diego.",
  openGraph: {
    title: "About Auntie Lu's Bakery | San Diego Sourdough & Cake Pops",
    description: "Meet Lindsay, the baker behind Auntie Lu's Bakery. Handmade sourdough bread and custom cake pops, baked with love from her home kitchen in San Diego.",
    images: [{ url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/about',
  },
}

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Made with Love',
    description: 'Every loaf and every cake pop is handcrafted with care from my home kitchen.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality Ingredients',
    description: 'Real butter, premium flour, farm-fresh eggs. No shortcuts, no preservatives.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Slow Fermented',
    description: 'Our sourdough gets 24+ hours of natural fermentation for incredible flavor and texture.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Joy in Every Bite',
    description: 'Whether it\'s a crusty loaf or a decorated cake pop, the goal is always to make someone smile.',
  },
]

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'About Us', url: 'https://www.auntielusbakery.com/about' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&h=900&fit=crop"
            alt="Fresh baked sourdough bread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            One Baker, Two Passions
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Sourdough for the soul. Cake pops for the party. Everything made by hand in San Diego.
          </p>
        </div>
      </section>

      {/* Lindsay's Story */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Meet Lindsay</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              The Baker Behind Auntie Lu&apos;s
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Hi, I&apos;m Lindsay! In 2022, I discovered the ancient, meditative process of sourdough baking. The science, the patience, and the incredibly rewarding crust and crumb of a perfectly proofed loaf immediately captured my heart.
              </p>
              <p>
                What started as a hobby quickly became a creative outlet &mdash; a way to step away from the daily grind and create something truly nourishing. I fell in love with the slow fermentation process, the way wild yeast transforms simple flour and water into something magical.
              </p>
              <p>
                Then came the cake pops. I found a completely different kind of joy in transforming simple cake into beautifully designed, perfectly dipped little works of art that bring instant smiles to any gathering. Two very different baked goods, one shared philosophy: make it by hand, make it with love.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=800&h=1000&fit=crop"
                alt="Freshly baked artisan sourdough"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-wheat text-white rounded-2xl p-6 shadow-lg max-w-[200px]">
              <p className="font-serif text-3xl font-semibold">2022</p>
              <p className="text-sm text-white/90">Started baking in San Diego</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1586444248902-2367d0834971?w=400&h=400&fit=crop"
                alt="Sourdough bread basket"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square mt-8">
              <Image
                src="https://images.unsplash.com/photo-1549931319-a545753467c8?w=400&h=400&fit=crop"
                alt="Golden sourdough rolls"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop"
                alt="Assorted cake pops"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square mt-8">
              <Image
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop"
                alt="Decorated cake pops"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">What We Make</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Sourdough &amp; Cake Pops
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Everything at Auntie Lu&apos;s is made by hand from my home kitchen. I keep things simple and focused &mdash; just two products, done really well.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Artisan sourdough</strong> &mdash; slow-fermented 24+ hours with wild yeast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Custom cake pops</strong> &mdash; classic, themed, or photo designs for any occasion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Real ingredients</strong> &mdash; premium flour, real butter, farm-fresh eggs, zero preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Made to order</strong> &mdash; everything baked fresh, never sitting on a shelf</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">What Drives Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wheat/10 text-wheat mb-5">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{value.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Taste the Difference?</h2>
          <p className="text-white/80 text-lg mb-8">
            Whether it&apos;s a loaf of slow-fermented sourdough or a dozen custom cake pops for your next celebration, I&apos;d love to bake for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Get in Touch
            </Link>
            <Link href="/gallery" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
