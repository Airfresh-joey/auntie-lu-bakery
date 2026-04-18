import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Our Story | How Auntie Lu's Bakery Began",
  description: "From sourdough experiments in a home kitchen to San Diego's go-to bakery for artisan bread and cake pops. This is the story of Auntie Lu's Bakery.",
  openGraph: {
    title: "Our Story | How Auntie Lu's Bakery Began",
    description: "From sourdough experiments in a home kitchen to San Diego's go-to bakery for artisan bread and cake pops.",
    images: [{ url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/our-story',
  },
}

const milestones = [
  {
    year: '2022',
    title: 'The Sourdough Bug',
    description: 'Lindsay catches the sourdough bug. What starts as a pandemic hobby becomes an obsession with wild yeast, long ferments, and the perfect crust. Friends and family can\'t get enough.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
  },
  {
    year: '2023',
    title: 'Enter the Cake Pops',
    description: 'Looking for a creative complement to sourdough, Lindsay discovers the joy of cake pops. Perfectly dipped, beautifully decorated little treats that bring instant smiles. A second passion is born.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  },
  {
    year: '2024',
    title: 'Word Spreads',
    description: 'Orders start coming in from across San Diego. Birthday parties, baby showers, corporate events. What was a hobby is now a real business, still run from the home kitchen with the same care.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=400&fit=crop',
  },
  {
    year: '2025',
    title: 'Auntie Lu\'s Today',
    description: 'Sourdough and cake pops, made to order for the San Diego community. Still small, still handmade, still baked with love. That\'s the whole point.',
    image: 'https://images.unsplash.com/photo-1586444248902-2367d0834971?w=600&h=400&fit=crop',
  },
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
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&h=900&fit=crop"
            alt="Artisan sourdough bread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto leading-tight">
            From Home Kitchen to Your Table
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            It started with a sourdough starter and a lot of curiosity.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1549931319-a545753467c8?w=800&h=1000&fit=crop"
              alt="Sourdough bread close-up"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">How It Began</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-6">
              A Hobby That Became a Bakery
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                I&apos;m Lindsay, and Auntie Lu&apos;s started the way a lot of good things do &mdash; accidentally. In 2022, I started experimenting with sourdough at home. I was fascinated by the fermentation process, the way wild yeast could transform flour and water into something incredible with just patience and time.
              </p>
              <p>
                Pretty soon I was baking more than my family could eat. Friends started requesting loaves. Then their friends did too. Somewhere along the way, I started making cake pops as a creative outlet &mdash; something colorful and fun to balance the rustic bread baking.
              </p>
              <p>
                Today, Auntie Lu&apos;s Bakery is still just me, working out of my home kitchen in San Diego, making sourdough and cake pops to order. No storefront, no employees, no corporate backstory. Just good ingredients, careful technique, and a genuine love for baking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">The Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">How We Got Here</h2>
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

      {/* Quote */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="mx-auto mb-6 text-wheat/30" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl text-dark-crust mb-6 leading-relaxed italic">
            &ldquo;Every time someone takes a bite of something I&apos;ve made and their eyes light up &mdash; that&apos;s why I do this. That moment never gets old.&rdquo;
          </blockquote>
          <div>
            <p className="text-dark-crust font-semibold">Lindsay</p>
            <p className="text-[#6B6560] text-sm">Founder &amp; Baker, Auntie Lu&apos;s</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Want to Try It?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a loaf of sourdough or a dozen cake pops for your next event, I&apos;d love to bake for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Contact Us
            </Link>
            <Link href="/about" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              About Lindsay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
