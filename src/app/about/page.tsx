import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "About Us | Family-Owned San Diego Bakery",
  description: "Meet the family behind Auntie Lu's Bakery. We're a San Diego bakery passionate about quality ingredients, handcrafted baked goods, and serving our community with love.",
  openGraph: {
    title: "About Auntie Lu's Bakery | Family-Owned San Diego Bakery",
    description: "Meet the family behind Auntie Lu's Bakery. We're a San Diego bakery passionate about quality ingredients, handcrafted baked goods, and serving our community with love.",
    images: [{ url: 'https://images.unsplash.com/photo-1556217477-d325251ece38?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
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
    description: 'Every item is handcrafted with care and attention to detail, just like Auntie Lu taught us.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality Ingredients',
    description: 'We source premium, locally-sourced ingredients. No shortcuts, no preservatives, just real food.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community First',
    description: 'From school fundraisers to local events, we give back to the San Diego community that supports us.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Joy in Every Bite',
    description: 'We believe baked goods should make people smile. That joy drives everything we create.',
  },
]

const team = [
  {
    name: 'Auntie Lu',
    role: 'Founder & Head Baker',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop',
    bio: 'The heart and soul of the bakery. Lu brings decades of family recipes and a passion for perfection to every creation.',
  },
  {
    name: 'Maria Santos',
    role: 'Cake Designer',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    bio: 'An artist with fondant and buttercream, Maria transforms wedding and celebration cake visions into edible masterpieces.',
  },
  {
    name: 'James Chen',
    role: 'Sourdough Artisan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'James nurtures our sourdough starters daily, creating loaves with the perfect crust and open crumb structure.',
  },
  {
    name: 'Sofia Rivera',
    role: 'Cake Pop Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Creative and detail-oriented, Sofia hand-decorates each cake pop with stunning designs and vibrant colors.',
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
            src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=1600&h=900&fit=crop"
            alt="Inside Auntie Lu's Bakery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            A Family Bakery Built on Love & Flour
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            From our kitchen to your table, every recipe tells a story of family, tradition, and the joy of baking.
          </p>
        </div>
      </section>

      {/* Our Passion Section */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Our Passion</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Baking Is Our Love Language
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                At Auntie Lu&apos;s, baking isn&apos;t just what we do &mdash; it&apos;s who we are. Every morning before dawn, our ovens warm up and our kitchen fills with the intoxicating aroma of fresh sourdough, golden pastries, and carefully crafted cake pops.
              </p>
              <p>
                We believe that the best baked goods come from the best ingredients. That&apos;s why we source locally whenever possible, using premium flours, real butter, farm-fresh eggs, and seasonal fruits from San Diego&apos;s finest suppliers.
              </p>
              <p>
                From custom wedding cakes that take your breath away to our signature sourdough that keeps customers coming back week after week &mdash; every item leaves our kitchen with the same promise: it&apos;s made with love.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1000&fit=crop"
                alt="Freshly baked artisan bread at Auntie Lu's"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-wheat text-white rounded-2xl p-6 shadow-lg max-w-[200px]">
              <p className="font-serif text-3xl font-semibold">2022</p>
              <p className="text-sm text-white/90">Founded with love in San Diego</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Ingredients */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1586444248902-2367d0834971?w=400&h=400&fit=crop"
                alt="Fresh baking ingredients"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square mt-8">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=400&fit=crop"
                alt="Artisan sourdough bread"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop"
                alt="Decorated celebration cake"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-square mt-8">
              <Image
                src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=400&fit=crop"
                alt="Handcrafted cupcakes"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Quality First</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Ingredients That Make the Difference
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                We&apos;re picky about what goes into our baked goods &mdash; because you should be too. Every ingredient is carefully selected for quality, freshness, and flavor.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Locally-sourced flour</strong> from California mills for the perfect texture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Real butter & cream</strong> &mdash; never margarine or artificial substitutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Farm-fresh eggs</strong> from pasture-raised hens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wheat mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <span><strong className="text-dark-crust">Zero preservatives</strong> &mdash; everything is baked fresh to order</span>
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

      {/* Community */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              Proud to Serve San Diego
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                San Diego isn&apos;t just where we bake &mdash; it&apos;s home. We&apos;re proud to be part of this vibrant community and give back whenever we can.
              </p>
              <p>
                From donating baked goods to local shelters and schools, to participating in farmers&apos; markets across the county, to sponsoring little league teams and community events &mdash; we believe in being more than just a bakery.
              </p>
              <p>
                We&apos;ve had the honor of serving weddings at the Hotel del Coronado, birthday celebrations in La Jolla, corporate events downtown, and countless family gatherings across every San Diego neighborhood. Each one reminds us why we do what we do.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop"
              alt="Community baking event at Auntie Lu's"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The People</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Meet Our Team</h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Behind every delicious creation is a talented team member who pours their heart into their craft.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-1">{member.name}</h3>
                <p className="text-wheat font-medium text-sm mb-3">{member.role}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{member.bio}</p>
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
            Whether it&apos;s a custom cake for your special day or a loaf of our signature sourdough, we&apos;d love to bake for you.
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
