import Link from 'next/link'

const cityLinks = [
  { href: '/san-diego-custom-cakes', label: 'San Diego' },
  { href: '/la-jolla-cakes', label: 'La Jolla' },
  { href: '/coronado-cakes', label: 'Coronado' },
  { href: '/del-mar-cakes', label: 'Del Mar' },
  { href: '/pacific-beach-cakes', label: 'Pacific Beach' },
  { href: '/north-park-cakes', label: 'North Park' },
  { href: '/hillcrest-cakes', label: 'Hillcrest' },
  { href: '/carlsbad-cakes', label: 'Carlsbad' },
  { href: '/encinitas-cakes', label: 'Encinitas' },
  { href: '/chula-vista-cakes', label: 'Chula Vista' },
]

const serviceLinks = [
  { href: '/wedding-cakes', label: 'Wedding Cakes' },
  { href: '/birthday-cakes', label: 'Birthday Cakes' },
  { href: '/quinceanera-cakes', label: 'Quinceañera Cakes' },
  { href: '/corporate-events', label: 'Corporate Events' },
  { href: '/custom-cakes', label: 'Custom Cakes' },
  { href: '/cupcakes', label: 'Cupcakes' },
  { href: '/flavors', label: 'Cake Flavors' },
  { href: '/cake-sizes', label: 'Sizes & Pricing' },
  { href: '/order-process', label: 'How to Order' },
  { href: '/book-consultation', label: 'Book a Consultation' },
  { href: '/tastings', label: 'Cake Tastings' },
  { href: '/gluten-free-cakes', label: 'Gluten-Free' },
  { href: '/beach-wedding-cakes', label: 'Beach Weddings' },
]

const venueLinks = [
  { href: '/venues/hotel-del-coronado', label: 'Hotel del Coronado' },
  { href: '/venues/la-jolla-shores', label: 'La Jolla Shores' },
  { href: '/venues/lodge-torrey-pines', label: 'Lodge at Torrey Pines' },
  { href: '/venues/the-prado-balboa-park', label: 'The Prado' },
  { href: '/venues/rancho-valencia', label: 'Rancho Valencia' },
  { href: '/venues', label: 'All Venues →' },
]

const seasonalLinks = [
  { href: '/valentines-day-cakes', label: "Valentine's Day" },
  { href: '/easter-cakes', label: 'Easter' },
  { href: '/mothers-day-cakes', label: "Mother's Day" },
  { href: '/fourth-of-july-cakes', label: '4th of July' },
  { href: '/halloween-cakes', label: 'Halloween' },
  { href: '/thanksgiving-desserts', label: 'Thanksgiving' },
  { href: '/christmas-cakes', label: 'Christmas' },
  { href: '/new-years-cakes', label: "New Year's Eve" },
  { href: '/holiday-cakes', label: 'All Holidays' },
]

const faqLinks = [
  { href: '/faq', label: 'All FAQs' },
  { href: '/faq/ordering', label: 'Ordering & Lead Times' },
  { href: '/faq/pricing', label: 'Pricing Guide' },
  { href: '/faq/delivery', label: 'Delivery & Pickup' },
  { href: '/faq/custom-cakes', label: 'Custom Cake Design' },
  { href: '/faq/dietary', label: 'Dietary & Allergens' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-[4%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold text-white no-underline block mb-4">Auntie Lu&apos;s</Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">San Diego&apos;s favorite custom bakery for wedding cakes, birthday cakes, artisan sourdough, and handcrafted cake pops. Serving all San Diego neighborhoods.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/auntielusbakery" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-wheat transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/auntielusbakery" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-wheat transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">Areas We Serve</h4>
            <ul className="list-none space-y-2">
              {cityLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">Our Services</h4>
            <ul className="list-none space-y-2">
              {serviceLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">Popular Venues</h4>
            <ul className="list-none space-y-2">
              {venueLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">Occasions</h4>
            <ul className="list-none space-y-2">
              {seasonalLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">FAQs</h4>
            <ul className="list-none space-y-2">
              {faqLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="text-gray-400 text-sm no-underline hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-wheat">Contact</h4>
            <ul className="list-none space-y-3 text-gray-400 text-sm">
              <li>San Diego, California</li>
              <li><a href="mailto:hello@auntielusbakery.com" className="text-gray-400 no-underline hover:text-white transition-colors">hello@auntielusbakery.com</a></li>
              <li>Custom Cakes: 5-7 days lead</li>
              <li>Cake Pops: 5-7 days lead</li>
              <li>Sourdough: 3-5 days lead</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2026 Auntie Lu&apos;s Bakery. All rights reserved. Made with flour, love &amp; San Diego sunshine.</p>
          <div className="flex gap-6">
            <Link href="/about" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">About</Link>
            <Link href="/our-story" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Our Story</Link>
            <Link href="/gallery" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Gallery</Link>
            <Link href="/blog" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Blog</Link>
            <Link href="/faq" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">FAQ</Link>
            <Link href="/press" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Press</Link>
            <Link href="/awards" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Awards</Link>
            <Link href="/careers" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Careers</Link>
            <Link href="/privacy" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm no-underline hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
