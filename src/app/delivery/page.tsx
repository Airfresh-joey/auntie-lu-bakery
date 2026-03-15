'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FAQList } from '@/components/FAQAccordion'

const zones = [
  {
    id: 1,
    name: 'Zone 1 — San Diego Core',
    areas: 'Downtown, Hillcrest, North Park, South Park, Mission Hills, Normal Heights, Kensington, University Heights, La Jolla, Pacific Beach, Ocean Beach, Point Loma, Coronado, Mission Valley, Kearny Mesa',
    fee: 'FREE delivery on orders over $200',
    feeNote: '$25 for orders under $200',
    color: 'bg-green-100 border-green-400',
    dotColor: 'bg-green-500',
    labelColor: 'text-green-700',
    radius: '~10 miles from San Diego',
  },
  {
    id: 2,
    name: 'Zone 2 — Greater San Diego',
    areas: 'Del Mar, Solana Beach, Encinitas, Carlsbad, Rancho Santa Fe, Poway, Santee, El Cajon, La Mesa, Chula Vista, National City, Imperial Beach, Bonita, Rancho Bernardo',
    fee: '$25–$50 delivery fee',
    feeNote: 'Based on exact distance',
    color: 'bg-blue-100 border-blue-400',
    dotColor: 'bg-blue-500',
    labelColor: 'text-blue-700',
    radius: '10–30 miles from San Diego',
  },
  {
    id: 3,
    name: 'Zone 3 — Extended Region',
    areas: 'Oceanside, Vista, San Marcos, Escondido, Fallbrook, Temecula, Murrieta, South Orange County (San Clemente, Dana Point, Laguna Niguel)',
    fee: '$50–$100 delivery fee',
    feeNote: 'Minimum order may apply',
    color: 'bg-amber-100 border-amber-400',
    dotColor: 'bg-amber-500',
    labelColor: 'text-amber-700',
    radius: '30–60 miles from San Diego',
  },
  {
    id: 4,
    name: 'Zone 4 — By Quote',
    areas: 'Palm Springs, Palm Desert, Los Angeles, Riverside, Irvine, Newport Beach, and beyond',
    fee: '$100+ delivery fee',
    feeNote: 'Custom quote based on location & order size',
    color: 'bg-purple-100 border-purple-400',
    dotColor: 'bg-purple-500',
    labelColor: 'text-purple-700',
    radius: '60+ miles from San Diego',
  },
]

const deliveryFaqs = [
  {
    question: 'How far in advance should I schedule delivery?',
    answer: 'We recommend scheduling delivery at least 7 days in advance for standard orders and 2-4 weeks for wedding cakes or large event orders. Last-minute delivery may be available — contact us to check availability.',
  },
  {
    question: 'Can you deliver to my wedding venue?',
    answer: 'Yes! We deliver and set up at wedding venues across Southern California. We regularly work with venues like Hotel del Coronado, The Lodge at Torrey Pines, Rancho Valencia, The Prado at Balboa Park, and many more. We coordinate directly with your venue\'s event team.',
  },
  {
    question: 'What does the setup service include?',
    answer: 'Our setup service ($75–$150 depending on complexity) includes safe transport of your cake to the venue, on-site assembly of multi-tier cakes, placement on your display table, adding fresh flowers or final decorations, and ensuring everything is picture-perfect. We recommend this for all wedding cakes.',
  },
  {
    question: 'What are your delivery hours?',
    answer: 'Standard delivery windows are 9 AM – 5 PM, Monday through Saturday. For weddings and events, we accommodate early morning or evening deliveries to match your event timeline. Sunday delivery is available for events with a $25 surcharge.',
  },
  {
    question: 'How do you keep cakes safe during transport?',
    answer: 'All cakes travel in temperature-controlled vehicles with custom supports and anti-slip mats. Multi-tier cakes are transported unassembled and carefully stacked on-site by our team. We\'ve successfully delivered thousands of cakes across Southern California.',
  },
  {
    question: 'Can I change my delivery address after ordering?',
    answer: 'Yes, you can update your delivery address up to 48 hours before your scheduled delivery. Address changes may affect the delivery fee if the new location is in a different zone. Contact us at hello@auntielusbakery.com to make changes.',
  },
  {
    question: 'Do you deliver cake pops and sourdough too?',
    answer: 'Absolutely! We deliver all of our products — custom cakes, cake pops, cupcakes, and artisan sourdough. Cake pops and cupcakes are packaged in secure carriers, and sourdough is wrapped to stay fresh. The same delivery zones and fees apply.',
  },
  {
    question: 'What happens if my cake is damaged during delivery?',
    answer: 'While extremely rare, we stand behind every delivery. If there\'s any issue, we will repair it on-site if possible, provide a partial or full refund, or rush a replacement depending on timing. We carry delivery insurance for your peace of mind.',
  },
  {
    question: 'Do you ship outside of Southern California?',
    answer: 'Currently we do not ship cakes. Our products are made fresh and are best enjoyed within 1-2 days. Cake pops travel well for up to 5 days at room temperature, so you can pick up and transport them yourself for distant events.',
  },
]

export default function DeliveryPage() {
  const [formData, setFormData] = useState({ zip: '', event: '', date: '' })
  const [result, setResult] = useState<{ zone: typeof zones[0]; message: string } | null>(null)
  const [notFound, setNotFound] = useState(false)

  const zipZoneMap: Record<string, number> = {
    // Zone 1 — San Diego core
    '92101': 1, '92102': 1, '92103': 1, '92104': 1, '92105': 1, '92106': 1, '92107': 1,
    '92108': 1, '92109': 1, '92110': 1, '92111': 1, '92113': 1, '92114': 1, '92115': 1,
    '92116': 1, '92117': 1, '92118': 1, '92119': 1, '92120': 1, '92121': 1, '92122': 1,
    '92123': 1, '92124': 1, '92126': 1, '92127': 1, '92128': 1, '92129': 1, '92130': 1,
    '92131': 1, '92134': 1, '92135': 1, '92136': 1, '92037': 1, '92038': 1,
    // Zone 2 — Greater San Diego
    '92014': 2, '92075': 2, '92024': 2, '92009': 2, '92008': 2, '92007': 2, '92010': 2,
    '92011': 2, '92067': 2, '92064': 2, '92071': 2, '92020': 2, '92021': 2, '92019': 2,
    '92041': 2, '92040': 2, '92042': 2, '91910': 2, '91911': 2, '91913': 2, '91914': 2,
    '91915': 2, '91932': 2, '91950': 2, '92132': 2, '92139': 2, '92154': 2, '92173': 2,
    '92078': 2, '92069': 2, '92065': 2, '92025': 2, '92026': 2, '92027': 2,
    // Zone 3 — Extended
    '92054': 3, '92055': 3, '92056': 3, '92057': 3, '92058': 3, '92083': 3, '92084': 3,
    '92081': 3, '92082': 3, '92028': 3, '92029': 3, '92536': 3, '92590': 3, '92591': 3,
    '92592': 3, '92593': 3, '92562': 3, '92563': 3, '92672': 3, '92673': 3, '92624': 3,
    '92629': 3, '92677': 3,
    // Zone 4 — By quote
    '92262': 4, '92264': 4, '92270': 4, '92260': 4, '90001': 4, '90002': 4, '90003': 4,
    '90004': 4, '90005': 4, '90006': 4, '90007': 4, '90012': 4, '90013': 4, '90015': 4,
    '92501': 4, '92502': 4, '92503': 4, '92504': 4, '92602': 4, '92603': 4, '92604': 4,
    '92606': 4, '92612': 4, '92614': 4, '92660': 4, '92661': 4, '92662': 4, '92663': 4,
  }

  function checkZone() {
    const zip = formData.zip.trim()
    if (zip.length !== 5) return

    const zoneId = zipZoneMap[zip]
    if (zoneId) {
      const zone = zones.find(z => z.id === zoneId)!
      setResult({ zone, message: `Your area is in ${zone.name}.` })
      setNotFound(false)
    } else {
      setResult(null)
      setNotFound(true)
    }
  }

  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Delivery Areas', href: '/delivery' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-4">Delivery &amp; Pickup</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            We Deliver Across Southern California
          </h1>
          <p className="text-lg md:text-xl text-soft-brown max-w-2xl mx-auto mb-8">
            From San Diego to LA, Palm Springs to Orange County — we bring fresh, handcrafted baked goods directly to your door or venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#check-zone" className="inline-flex items-center justify-center bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust transition-colors">
              Check Your Area
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center bg-transparent text-dark-crust border-2 border-dark-crust/20 px-8 py-4 rounded-full font-semibold no-underline hover:bg-cream transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Delivery Zone Map */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Delivery Zone Map</h2>
            <p className="text-soft-brown text-lg max-w-2xl mx-auto">Our delivery area spans across Southern California, organized into four zones based on distance from our San Diego bakery.</p>
          </div>

          {/* CSS Map Visual */}
          <div className="relative w-full max-w-2xl mx-auto aspect-square mb-12">
            {/* Zone rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-300 bg-purple-50/30 flex items-center justify-center">
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">Zone 4 — 60+ mi</span>
            </div>
            <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-amber-300 bg-amber-50/30 flex items-center justify-center">
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full whitespace-nowrap">Zone 3 — 30–60 mi</span>
            </div>
            <div className="absolute inset-[28%] rounded-full border-2 border-dashed border-blue-300 bg-blue-50/30 flex items-center justify-center">
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full whitespace-nowrap">Zone 2 — 10–30 mi</span>
            </div>
            <div className="absolute inset-[42%] rounded-full border-2 border-dashed border-green-400 bg-green-50/50 flex items-center justify-center">
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full whitespace-nowrap">Zone 1 — Core</span>
            </div>
            {/* Center pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-dark-crust rounded-full border-2 border-white shadow-lg" />
                <span className="mt-1 text-xs font-bold text-dark-crust bg-white/90 px-2 py-0.5 rounded shadow-sm">San Diego</span>
              </div>
            </div>
            {/* Landmark labels */}
            <span className="absolute top-[22%] right-[8%] text-[11px] text-purple-600 font-medium">Palm Springs</span>
            <span className="absolute top-[8%] left-[15%] text-[11px] text-purple-600 font-medium">Los Angeles</span>
            <span className="absolute top-[18%] left-[38%] text-[11px] text-amber-700 font-medium">Temecula</span>
            <span className="absolute top-[16%] right-[22%] text-[11px] text-amber-700 font-medium">Orange County</span>
            <span className="absolute top-[35%] left-[18%] text-[11px] text-blue-600 font-medium">Carlsbad</span>
            <span className="absolute bottom-[35%] left-[22%] text-[11px] text-blue-600 font-medium">Chula Vista</span>
            <span className="absolute bottom-[42%] right-[20%] text-[11px] text-blue-600 font-medium">Del Mar</span>
            <span className="absolute bottom-[28%] right-[14%] text-[11px] text-green-700 font-medium">La Jolla</span>
            <span className="absolute bottom-[22%] left-[30%] text-[11px] text-green-700 font-medium">Coronado</span>
          </div>
        </div>
      </section>

      {/* Zone Details */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">Delivery Zones &amp; Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zones.map((zone) => (
              <div key={zone.id} className={`rounded-2xl border-2 p-6 ${zone.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-4 h-4 rounded-full ${zone.dotColor}`} />
                  <h3 className={`font-serif text-xl m-0 ${zone.labelColor}`}>{zone.name}</h3>
                </div>
                <p className="text-charcoal font-semibold text-lg mb-1">{zone.fee}</p>
                <p className="text-soft-brown text-sm mb-3">{zone.feeNote}</p>
                <p className="text-sm text-charcoal/70 mb-1"><strong>Distance:</strong> {zone.radius}</p>
                <p className="text-sm text-charcoal/70"><strong>Areas:</strong> {zone.areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check Your Zone Form */}
      <section id="check-zone" className="py-16 px-[4%] bg-white scroll-mt-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Check Delivery to Your Area</h2>
            <p className="text-soft-brown">Enter your zip code to see your delivery zone and estimated fee.</p>
          </div>

          <div className="bg-cream rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-charcoal mb-1">Zip Code *</label>
                <input
                  id="zip"
                  type="text"
                  maxLength={5}
                  placeholder="e.g. 92101"
                  value={formData.zip}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '')
                    setFormData(prev => ({ ...prev, zip: val }))
                    setResult(null)
                    setNotFound(false)
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-blush bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-wheat"
                />
              </div>
              <div>
                <label htmlFor="event" className="block text-sm font-medium text-charcoal mb-1">Event Type (optional)</label>
                <select
                  id="event"
                  value={formData.event}
                  onChange={(e) => setFormData(prev => ({ ...prev, event: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-blush bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-wheat"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="quinceanera">Quinceañera</option>
                  <option value="personal">Personal / Home Delivery</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1">Event Date (optional)</label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-blush bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-wheat"
                />
              </div>
              <button
                onClick={checkZone}
                disabled={formData.zip.length !== 5}
                className="w-full bg-dark-crust text-white py-3 rounded-full font-semibold hover:bg-crust transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Check My Zone
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className={`mt-6 rounded-xl border-2 p-5 ${result.zone.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${result.zone.dotColor}`} />
                  <p className={`font-semibold ${result.zone.labelColor} m-0`}>{result.message}</p>
                </div>
                <p className="text-charcoal font-medium text-lg mb-1">{result.zone.fee}</p>
                <p className="text-soft-brown text-sm mb-4">{result.zone.feeNote}</p>
                <Link
                  href={`/contact${formData.event ? `?subject=Delivery+Quote+-+${formData.event}` : '?subject=Delivery+Quote'}`}
                  className="inline-flex items-center justify-center bg-dark-crust text-white px-6 py-2.5 rounded-full text-sm font-semibold no-underline hover:bg-crust transition-colors"
                >
                  Get an Exact Quote
                </Link>
              </div>
            )}

            {notFound && (
              <div className="mt-6 rounded-xl border-2 border-gray-200 bg-gray-50 p-5">
                <p className="font-semibold text-charcoal mb-1 m-0">We couldn&apos;t match your zip code automatically.</p>
                <p className="text-soft-brown text-sm mb-4 m-0">Don&apos;t worry — we may still deliver to your area! Contact us for a custom delivery quote.</p>
                <Link
                  href="/contact?subject=Delivery+Quote"
                  className="inline-flex items-center justify-center bg-dark-crust text-white px-6 py-2.5 rounded-full text-sm font-semibold no-underline hover:bg-crust transition-colors"
                >
                  Contact Us for a Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Setup Service */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-wheat font-semibold text-sm uppercase tracking-widest mb-3">For Weddings &amp; Events</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Professional Setup Service</h2>
              <p className="text-soft-brown mb-6 leading-relaxed">
                For weddings and large events, our team delivers your cake and sets it up at your venue, ensuring every tier is perfectly placed and every detail is exactly right.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wheat text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Safe Transport</p>
                    <p className="text-soft-brown text-sm m-0">Temperature-controlled vehicle with custom supports</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wheat text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal m-0">On-Site Assembly</p>
                    <p className="text-soft-brown text-sm m-0">Multi-tier cakes stacked and secured at your venue</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wheat text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Final Styling</p>
                    <p className="text-soft-brown text-sm m-0">Fresh flowers, decorations, and display placement</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wheat text-sm font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Venue Coordination</p>
                    <p className="text-soft-brown text-sm m-0">We work directly with your venue&apos;s event staff</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-xl p-4 border border-blush">
                <p className="text-charcoal font-medium m-0 mb-1">Setup Service Pricing</p>
                <p className="text-soft-brown text-sm m-0">Standard setup: <strong className="text-crust">$75</strong> &middot; Complex/multi-tier: <strong className="text-crust">$100–$150</strong></p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blush/50 to-cream rounded-2xl p-8 md:p-10">
              <h3 className="font-serif text-2xl text-charcoal mb-6">We Set Up At</h3>
              <ul className="space-y-3 list-none">
                {['Hotel del Coronado', 'The Lodge at Torrey Pines', 'Rancho Valencia Resort', 'The Prado at Balboa Park', 'La Jolla Shores Hotel', 'Scripps Seaside Forum', 'The Darlington House', 'Private estates & homes', 'Corporate event venues', 'Parks & outdoor spaces'].map(venue => (
                  <li key={venue} className="flex items-center gap-2 text-charcoal">
                    <svg className="w-4 h-4 text-wheat flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {venue}
                  </li>
                ))}
              </ul>
              <Link
                href="/venues"
                className="inline-flex items-center mt-6 text-crust font-semibold no-underline hover:text-dark-crust transition-colors"
              >
                View All Partner Venues →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Option */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-cream rounded-2xl p-8 md:p-10 border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Always Free
                </div>
                <h2 className="font-serif text-3xl text-charcoal mb-4">Pickup Option</h2>
                <p className="text-soft-brown mb-4 leading-relaxed">
                  Save on delivery fees by picking up your order from our San Diego location. We&apos;ll have everything fresh, packaged, and ready for you at your scheduled pickup time.
                </p>
                <ul className="space-y-2 list-none mb-0">
                  <li className="flex items-center gap-2 text-charcoal text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No delivery fee — ever
                  </li>
                  <li className="flex items-center gap-2 text-charcoal text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexible pickup windows
                  </li>
                  <li className="flex items-center gap-2 text-charcoal text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Handling instructions included
                  </li>
                  <li className="flex items-center gap-2 text-charcoal text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Someone else can pick up for you
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                  <p className="text-sm text-soft-brown mb-1 m-0">Pickup Location</p>
                  <p className="font-serif text-xl text-charcoal mb-1 m-0">San Diego, CA</p>
                  <p className="text-sm text-soft-brown mb-3 m-0">Exact address provided<br />upon order confirmation</p>
                  <p className="text-sm text-soft-brown mb-0 m-0"><strong>Hours:</strong> Mon–Sat, 9am–5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Scheduling + What to Expect */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">How Delivery Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scheduling */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-6">Scheduling Your Delivery</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-dark-crust text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">1</div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Place Your Order</p>
                    <p className="text-soft-brown text-sm m-0">Select your delivery date when ordering. We recommend 1-4 weeks lead time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-dark-crust text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">2</div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Confirm Details</p>
                    <p className="text-soft-brown text-sm m-0">48 hours before delivery, we confirm your delivery window and any venue requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-dark-crust text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">3</div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Delivery Day</p>
                    <p className="text-soft-brown text-sm m-0">We text you when we&apos;re on the way. Standard windows: 9am–5pm, Mon–Sat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-dark-crust text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">4</div>
                  <div>
                    <p className="font-medium text-charcoal m-0">Enjoy!</p>
                    <p className="text-soft-brown text-sm m-0">Your fresh baked goods arrive with handling instructions for best results.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-6">What to Expect on Delivery Day</h3>
              <ul className="space-y-4 list-none">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal m-0">Text notification</p>
                    <p className="text-soft-brown text-sm m-0">We&apos;ll text you 30 minutes before arrival with an ETA</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal m-0">Careful handoff</p>
                    <p className="text-soft-brown text-sm m-0">We bring your order to the door — no porch drops</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal m-0">Storage instructions</p>
                    <p className="text-soft-brown text-sm m-0">We include a card with storage and serving tips</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal m-0">Photo confirmation</p>
                    <p className="text-soft-brown text-sm m-0">For venue setups, we send a photo once everything is in place</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-wheat flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal m-0">Weather protected</p>
                    <p className="text-soft-brown text-sm m-0">Temperature-controlled transport regardless of weather</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-[4%] bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">Delivery FAQs</h2>
          <p className="text-soft-brown text-center mb-10">Everything you need to know about getting your order to you.</p>
          <FAQList faqs={deliveryFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-16 px-[4%] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Order?</h2>
        <p className="text-blush text-lg mb-8 max-w-xl mx-auto">
          Whether it&apos;s a wedding cake to Coronado or cake pops to Carlsbad, we&apos;ll get your order there fresh and on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Get a Delivery Quote
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold no-underline hover:bg-white/10 transition-colors">
            Browse Our Products
          </Link>
        </div>
      </section>
    </>
  )
}
