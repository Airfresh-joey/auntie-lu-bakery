import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Cake Design Inspiration & Ideas | Auntie Lu's Bakery San Diego",
  description: "Browse stunning cake design ideas, trending styles, and color palettes. Get inspired for your wedding, birthday, or special event cake at Auntie Lu's Bakery in San Diego.",
  keywords: ['cake design ideas', 'cake inspiration', 'wedding cake trends', 'birthday cake ideas', 'cake color palettes', 'custom cake designs', 'San Diego cake designer'],
  openGraph: {
    title: "Cake Design Inspiration | Auntie Lu's Bakery San Diego",
    description: "Stunning cake design ideas, trending styles, and color palettes to inspire your next custom creation.",
    images: [{ url: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/design-inspiration',
  },
}

const trendingStyles = [
  {
    title: 'Minimalist Elegance',
    description: 'Clean lines, smooth finishes, and understated beauty. Less is more with single-color palettes, subtle textures, and geometric accents.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=750&fit=crop&q=80',
    tags: ['Modern', 'Sophisticated', 'Clean'],
  },
  {
    title: 'Textured Buttercream',
    description: 'Organic, hand-crafted texture using palette knives, combs, and swirl techniques. Creates a beautiful artisanal look that feels warm and inviting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=750&fit=crop&q=80',
    tags: ['Rustic', 'Artisan', 'Warm'],
  },
  {
    title: 'Pressed Florals',
    description: 'Real edible flowers or buttercream botanicals pressed into the cake surface. A garden-inspired look that brings nature to your celebration.',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=750&fit=crop&q=80',
    tags: ['Botanical', 'Natural', 'Romantic'],
  },
  {
    title: 'Painted Cakes',
    description: 'Hand-painted designs using food-safe colors create one-of-a-kind edible art. From watercolor washes to detailed illustrations.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=750&fit=crop&q=80',
    tags: ['Artistic', 'Unique', 'Colorful'],
  },
  {
    title: 'Semi-Naked & Naked',
    description: 'Exposed cake layers with just a thin veil of frosting. The natural look showcases your cake layers and pairs beautifully with fresh fruit and flowers.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=750&fit=crop&q=80',
    tags: ['Organic', 'Casual', 'Fresh'],
  },
  {
    title: 'Sculptural & 3D',
    description: 'Architectural details, dramatic sugar flowers, isomalt sails, and gravity-defying designs that make a bold statement.',
    image: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=600&h=750&fit=crop&q=80',
    tags: ['Dramatic', 'Bold', 'Showstopping'],
  },
]

const colorPalettes = [
  {
    name: 'Blush Romance',
    occasion: 'Weddings & Anniversaries',
    colors: ['#F8E8E0', '#E8C4B8', '#D4A59A', '#C9917F', '#8B5E34'],
    description: 'Soft pinks and warm neutrals create an effortlessly romantic atmosphere.',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Garden Party',
    occasion: 'Spring & Summer Events',
    colors: ['#E8F5E9', '#A8D5BA', '#7CB893', '#F9E4B7', '#E6A57E'],
    description: 'Fresh greens with warm accents evoke a lush garden on a sunny day.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Midnight Luxe',
    occasion: 'Galas & Formal Events',
    colors: ['#1A1A2E', '#16213E', '#0F3460', '#D4A853', '#F5F5F5'],
    description: 'Deep navy and midnight blues paired with gold for timeless elegance.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Citrus Burst',
    occasion: 'Birthdays & Celebrations',
    colors: ['#FFF3E0', '#FFB74D', '#FF9800', '#E65100', '#F44336'],
    description: 'Vibrant oranges and warm tones that radiate joy and energy.',
    image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Lavender Dreams',
    occasion: 'Baby Showers & Bridal Events',
    colors: ['#F3E5F5', '#CE93D8', '#AB47BC', '#7B1FA2', '#E8D5C4'],
    description: 'Gentle purples and lavenders create a dreamy, whimsical feel.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=400&fit=crop&q=80',
  },
  {
    name: 'Earthy Neutrals',
    occasion: 'Rustic & Boho Events',
    colors: ['#FDF8F3', '#D4A853', '#A67C52', '#8B5E34', '#5C3D22'],
    description: 'Warm browns, tans, and golds inspired by nature and craftsmanship.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=400&fit=crop&q=80',
  },
]

const designIdeas = [
  {
    category: 'Wedding Cakes',
    ideas: [
      { title: 'Classic White Tiered', description: 'Timeless multi-tier white cake with delicate piping and fresh flowers.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&h=500&fit=crop&q=80' },
      { title: 'Ombré Elegance', description: 'Gradient color that flows beautifully from light to dark across tiers.', image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&h=500&fit=crop&q=80' },
      { title: 'Geometric Modern', description: 'Clean hexagonal or marble tiers with metallic accents.', image: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=500&h=500&fit=crop&q=80' },
    ],
  },
  {
    category: 'Birthday Cakes',
    ideas: [
      { title: 'Drip Cake', description: 'Colorful ganache drips cascading over smooth buttercream with fun toppings.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop&q=80' },
      { title: 'Number & Letter Cakes', description: 'Shaped cakes adorned with macarons, meringues, and fresh flowers.', image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?w=500&h=500&fit=crop&q=80' },
      { title: 'Character & Theme', description: 'Sculpted or printed designs featuring your favorite characters or hobbies.', image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500&h=500&fit=crop&q=80' },
    ],
  },
  {
    category: 'Special Occasions',
    ideas: [
      { title: 'Baby Shower Pastels', description: 'Soft, whimsical designs with fondant figurines and gentle colors.', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=500&fit=crop&q=80' },
      { title: 'Holiday Themed', description: 'Seasonal designs from elegant Christmas gold to spooky Halloween creations.', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&h=500&fit=crop&q=80' },
      { title: 'Corporate & Branded', description: 'Professional designs featuring company logos and brand colors.', image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&h=500&fit=crop&q=80' },
    ],
  },
]

const communicationTips = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    title: 'Share Reference Photos',
    description: 'Send us photos of cakes you love from Pinterest, Instagram, or magazines. We\'ll use them as a starting point and customize to your taste.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    title: 'Describe the Feeling',
    description: 'Words like "elegant," "whimsical," "rustic," or "modern" help us understand your vibe. Even sharing your event theme or venue helps.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Share Your Colors',
    description: 'Bring fabric swatches, Pantone numbers, or photos of your decor. We can color-match frosting and fondant to your exact palette.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Be Open & Honest',
    description: 'Share your budget, guest count, and any dietary needs upfront. This helps us design something beautiful that fits your reality.',
  },
]

export default function DesignInspirationPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Design Inspiration', url: 'https://www.auntielusbakery.com/design-inspiration' },
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1600&h=900&fit=crop&q=80"
            alt="Beautifully designed tiered cake for inspiration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-crust/60 via-dark-crust/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Design Inspiration
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Find Your Dream Cake Design
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse trending styles, explore color palettes, and discover ideas to bring your cake vision to life.
          </p>
        </div>
      </section>

      {/* Cake Design Ideas by Category */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Browse by Occasion
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Cake Design Ideas
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Every occasion deserves a cake that matches. Explore designs curated for the moments that matter most.
            </p>
          </div>
          {designIdeas.map((category) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h3 className="font-serif text-2xl text-dark-crust mb-8 text-center">{category.category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.ideas.map((idea) => (
                  <div key={idea.title} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={idea.image}
                        alt={`${idea.title} cake design idea`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif text-xl text-dark-crust mb-2">{idea.title}</h4>
                      <p className="text-[#6B6560] text-sm leading-relaxed">{idea.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Styles */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              What&apos;s Popular Now
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Trending Cake Styles
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Stay ahead of the curve with the latest cake design trends we love creating at Auntie Lu&apos;s.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingStyles.map((style) => (
              <div key={style.title} className="group bg-cream rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.title} cake style trend`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-dark-crust mb-2">{style.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-3">{style.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {style.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-wheat bg-wheat/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Suggestions */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Color Inspiration
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Color Palette Suggestions
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Not sure what colors to choose? These curated palettes pair beautifully with our cake designs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {colorPalettes.map((palette) => (
              <div key={palette.name} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={palette.image}
                    alt={`${palette.name} cake color palette`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-1.5 mb-4">
                    {palette.colors.map((color) => (
                      <div
                        key={color}
                        className="w-10 h-10 rounded-full border border-blush/30 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <h3 className="font-serif text-xl text-dark-crust mb-1">{palette.name}</h3>
                  <p className="text-wheat text-xs font-medium tracking-wide uppercase mb-2">{palette.occasion}</p>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{palette.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Visual Inspiration
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              Inspiration Gallery
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              A curated collection of designs we love. Save your favorites and share them with us during your consultation.
            </p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=600&fit=crop&q=80', alt: 'Elegant white tiered wedding cake', h: 'aspect-[2/3]' },
              { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&q=80', alt: 'Rich chocolate cake with berries', h: 'aspect-square' },
              { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=500&fit=crop&q=80', alt: 'Floral decorated celebration cake', h: 'aspect-[4/5]' },
              { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=350&fit=crop&q=80', alt: 'Colorful layered birthday cake', h: 'aspect-[8/7]' },
              { src: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=400&h=550&fit=crop&q=80', alt: 'Geometric modern cake design', h: 'aspect-[4/5.5]' },
              { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&h=400&fit=crop&q=80', alt: 'Artistic fondant cake', h: 'aspect-square' },
              { src: 'https://images.unsplash.com/photo-1557979619-445218f326b9?w=400&h=500&fit=crop&q=80', alt: 'Vibrant celebration cake with decorations', h: 'aspect-[4/5]' },
              { src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=450&fit=crop&q=80', alt: 'Naked cake with fresh fruit', h: 'aspect-[8/9]' },
              { src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=550&fit=crop&q=80', alt: 'Pastel baby shower cake', h: 'aspect-[4/5.5]' },
              { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop&q=80', alt: 'Gold accent luxury cake', h: 'aspect-square' },
              { src: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400&h=600&fit=crop&q=80', alt: 'Rustic semi-naked wedding cake', h: 'aspect-[2/3]' },
              { src: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=350&fit=crop&q=80', alt: 'Minimalist modern cake', h: 'aspect-[8/7]' },
            ].map((item) => (
              <div key={item.src} className="break-inside-avoid">
                <div className={`relative ${item.h} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Communicate Your Vision */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Working Together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">
              How to Communicate Your Vision
            </h2>
            <p className="text-[#6B6560] max-w-2xl mx-auto">
              Not a designer? No problem. Here&apos;s how to help us understand exactly what you&apos;re dreaming of.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {communicationTips.map((tip) => (
              <div key={tip.title} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wheat/10 text-wheat mb-5">
                  {tip.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{tip.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-cream rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop&q=80"
                    alt="Baker decorating a custom cake during consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-serif text-2xl text-dark-crust mb-4">Your Consultation Checklist</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Event date and venue',
                    'Guest count for sizing',
                    'Flavor preferences',
                    'Dietary restrictions or allergies',
                    'Color scheme or theme',
                    'Reference photos (3–5 is ideal)',
                    'Budget range',
                    'Delivery or pickup preference',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-wheat flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-[#6B6560] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-white/80 text-lg mb-8">
            Share your inspiration with us and let&apos;s design something unforgettable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              Start Your Consultation
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
