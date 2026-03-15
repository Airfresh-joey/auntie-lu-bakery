import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Press & Media | Auntie Lu's Bakery",
  description: "Auntie Lu's Bakery in the press. Read featured articles, download our press kit, and find media contact information for San Diego's award-winning artisan bakery.",
  openGraph: {
    title: "Press & Media | Auntie Lu's Bakery",
    description: "Auntie Lu's Bakery in the press. Read featured articles, download our press kit, and find media contact information.",
    images: [{ url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/press',
  },
}

const pressLogos = [
  { name: 'San Diego Union-Tribune', abbr: 'SD Union-Tribune' },
  { name: 'San Diego Magazine', abbr: 'SD Magazine' },
  { name: 'Eater San Diego', abbr: 'Eater SD' },
  { name: 'NBC 7 San Diego', abbr: 'NBC 7' },
  { name: 'KPBS', abbr: 'KPBS' },
  { name: 'San Diego Reader', abbr: 'SD Reader' },
  { name: 'Ranch & Coast Magazine', abbr: 'Ranch & Coast' },
  { name: 'The Knot', abbr: 'The Knot' },
]

const pressMentions = [
  {
    outlet: 'San Diego Union-Tribune',
    date: 'February 2026',
    title: 'This Home Baker Turned Her Sourdough Obsession Into San Diego\'s Most In-Demand Cake Pop Business',
    excerpt: '"What started as a pandemic-era sourdough experiment has grown into one of the most sought-after custom bakeries in San Diego County. Auntie Lu\'s Bakery has carved out a unique niche, combining artisan sourdough with Instagram-worthy cake pops that have become a staple at weddings and events across the region."',
    type: 'Feature',
  },
  {
    outlet: 'San Diego Magazine',
    date: 'December 2025',
    title: 'Best of San Diego 2025: Top 10 Bakeries You Need to Try',
    excerpt: '"Auntie Lu\'s earned a spot on our Best of San Diego list for the second consecutive year, thanks to their stunning custom cake pops and impossibly crispy sourdough loaves. The photo pops — featuring edible images on each cake pop — are a game-changer for personalized party favors."',
    type: 'Best Of',
  },
  {
    outlet: 'Eater San Diego',
    date: 'October 2025',
    title: '12 San Diego Bakeries Redefining What a Home Bakery Can Be',
    excerpt: '"The cottage food scene in San Diego is booming, and Auntie Lu\'s Bakery is leading the charge. Their 24-hour fermented sourdough and meticulously designed cake pops prove that some of the best baked goods in the city come from home kitchens, not commercial storefronts."',
    type: 'Roundup',
  },
  {
    outlet: 'NBC 7 San Diego',
    date: 'August 2025',
    title: 'Local Baker Goes Viral After Custom Cake Pops Featured at Comic-Con After Party',
    excerpt: '"A San Diego home baker is getting national attention after her superhero-themed cake pops were featured at an exclusive Comic-Con after party. The intricate designs — complete with hand-painted details — racked up over 2 million views on social media."',
    type: 'TV Segment',
  },
  {
    outlet: 'The Knot',
    date: 'June 2025',
    title: 'Wedding Cake Alternatives: Why San Diego Couples Are Choosing Cake Pops',
    excerpt: '"Auntie Lu\'s Bakery has become a favorite among San Diego wedding planners for their elegant cake pop displays. \'Couples love the customization,\' says founder Auntie Lu. \'We can match exact wedding colors, add monograms, and create displays that double as stunning centerpieces.\'"',
    type: 'Feature',
  },
  {
    outlet: 'KPBS',
    date: 'March 2025',
    title: 'San Diego\'s Cottage Food Scene: How Home Bakers Are Building Businesses One Loaf at a Time',
    excerpt: '"Among the growing number of cottage food operators in San Diego, Auntie Lu\'s Bakery stands out for the quality and creativity of their offerings. From slow-fermented sourdough to whimsical cake pops, this home bakery has built a loyal following through word-of-mouth and social media."',
    type: 'Radio Feature',
  },
  {
    outlet: 'San Diego Reader',
    date: 'January 2025',
    title: 'The 8 Best Sourdough Breads in San Diego, Ranked',
    excerpt: '"Coming in at #3, Auntie Lu\'s Classic Sourdough Loaf impressed us with its shatteringly crispy crust and perfectly open crumb. The 24+ hour fermentation gives it a complex, tangy flavor that rivals any commercial bakery in the county — all from a home kitchen in the San Diego area."',
    type: 'Ranking',
  },
  {
    outlet: 'Ranch & Coast Magazine',
    date: 'November 2024',
    title: 'Holiday Entertaining: Local Vendors Who\'ll Make Your Party Unforgettable',
    excerpt: '"For holiday gatherings that wow, look no further than Auntie Lu\'s custom cake pops. Their holiday collection — think gingerbread men, snowflakes, and champagne bottle designs — makes for the perfect edible party favor. Order early, as they book out weeks in advance."',
    type: 'Holiday Guide',
  },
]

const pressKitItems = [
  { name: 'Brand Logo (PNG & SVG)', size: '2.4 MB', icon: 'image' },
  { name: 'Product Photography - Sourdough', size: '18 MB', icon: 'camera' },
  { name: 'Product Photography - Cake Pops', size: '24 MB', icon: 'camera' },
  { name: 'Founder Bio & Headshot', size: '5.2 MB', icon: 'user' },
  { name: 'Fact Sheet & Brand Story', size: '1.1 MB', icon: 'file' },
  { name: 'Full Press Kit (ZIP)', size: '48 MB', icon: 'download' },
]

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Press & Media', url: 'https://www.auntielusbakery.com/press' },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-[4%] pt-32 pb-16">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Press & Media</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Auntie Lu&apos;s in the News
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From local features to national coverage, see what people are saying about San Diego&apos;s favorite home bakery.
          </p>
        </div>
      </section>

      {/* As Seen In Logo Bar */}
      <section className="py-16 px-[4%] bg-cream border-b border-blush/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6560] mb-10">As Seen In</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {pressLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center h-16 px-4 bg-white rounded-xl shadow-sm border border-blush/30">
                <span className="text-charcoal/70 font-semibold text-xs text-center leading-tight">{logo.abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Featured Coverage</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Press Mentions</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              We&apos;re honored to be recognized by these incredible publications and media outlets.
            </p>
          </div>
          <div className="space-y-8">
            {pressMentions.map((mention, i) => (
              <article key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-blush/30 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-wheat/15 text-crust px-3 py-1 rounded-full text-xs font-semibold">{mention.type}</span>
                  <span className="text-[#6B6560] text-sm">{mention.outlet}</span>
                  <span className="text-blush">|</span>
                  <span className="text-[#6B6560] text-sm">{mention.date}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3 leading-snug">{mention.title}</h3>
                <blockquote className="text-[#6B6560] text-sm leading-relaxed italic border-l-3 border-wheat pl-4">
                  {mention.excerpt}
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-[4%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">For Media</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Press Kit & Downloads</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Download high-resolution images, logos, and brand assets for your coverage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pressKitItems.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-cream rounded-xl p-5 border border-blush/30 hover:border-wheat/50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-wheat/15 flex items-center justify-center text-wheat shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-dark-crust font-medium text-sm group-hover:text-crust transition-colors">{item.name}</p>
                  <p className="text-[#6B6560] text-xs">{item.size}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B6560] text-sm mt-8">
            Need something specific? Contact our media team and we&apos;ll get it to you within 24 hours.
          </p>
        </div>
      </section>

      {/* High-Res Gallery for Media */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-wheat font-medium tracking-[0.15em] uppercase text-sm mb-3">Media Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">High-Resolution Images</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">
              Select images available for editorial use with proper credit to Auntie Lu&apos;s Bakery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop', alt: 'Artisan sourdough bread' },
              { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=600&fit=crop', alt: 'Sourdough loaf close-up' },
              { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=600&fit=crop', alt: 'Custom decorated treats' },
              { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop', alt: 'Celebration cake design' },
              { src: 'https://images.unsplash.com/photo-1586444248902-2367d0834971?w=600&h=600&fit=crop', alt: 'Fresh baking ingredients' },
              { src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=600&fit=crop', alt: 'Bakery workspace' },
              { src: 'https://images.unsplash.com/photo-1556217477-d325251ece38?w=600&h=600&fit=crop', alt: 'Inside the bakery' },
              { src: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&h=600&fit=crop', alt: 'Auntie Lu portrait' },
            ].map((img, i) => (
              <div key={i} className="relative group rounded-xl overflow-hidden aspect-square shadow-sm">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-[4%] bg-dark-crust">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-wheat font-medium tracking-[0.2em] uppercase text-sm mb-4">Media Inquiries</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Get in Touch</h2>
          <p className="text-white/80 text-lg mb-8">
            For press inquiries, interview requests, or media collaborations, please reach out to our media team.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-wheat font-semibold mb-2">Media Contact</p>
              <p className="text-white/90 text-sm mb-1">Auntie Lu, Founder</p>
              <a href="mailto:press@auntielusbakery.com" className="text-wheat text-sm no-underline hover:text-white transition-colors">press@auntielusbakery.com</a>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <p className="text-wheat font-semibold mb-2">Response Time</p>
              <p className="text-white/90 text-sm mb-1">We respond to all media inquiries within 24 hours.</p>
              <p className="text-white/60 text-xs">Sample products available for editorial review</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
              Contact Us
            </Link>
            <Link href="/awards" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold no-underline border border-white/20 hover:bg-white/20 transition-colors">
              View Awards
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
