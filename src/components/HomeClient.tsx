'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCart } from './CartProvider'
import TestimonialsSlider from './Testimonials'

const PRODUCTS = {
  breads: [
    {
      id: 'sourdough-dinner-rolls',
      name: 'Sourdough Dinner Rolls',
      fullName: 'Sourdough Dinner Rolls (12 count)',
      price: 18,
      unit: '/ dozen',
      badge: 'Popular',
      image: 'https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/33726d89-bfff-4c5c-b6bf-0da5fa1352f4/IMG_3460.jpeg',
      description: 'Perfect for gatherings. 12 pillowy, golden-crusted dinner rolls with that signature sourdough tang.',
      shortDesc: '12 pillowy, golden-crusted dinner rolls with signature sourdough tang.',
    },
    {
      id: 'classic-sourdough-loaf',
      name: 'Classic Sourdough Loaf',
      fullName: 'Classic Sourdough Loaf',
      price: 16,
      unit: '',
      badge: '',
      image: 'https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/438f87db-b703-4b98-82d1-2accac5bc4a7/att.tYonkehb9wXzpXxWpyGNjO7XYd49FYVw5TiwTq7EEwo.jpeg',
      description: 'Our signature country loaf. Crispy crust, open crumb, 24+ hours of slow fermentation.',
      shortDesc: 'Our signature country loaf. Crispy crust, open crumb, 24+ hours of slow fermentation.',
    },
  ],
  cakePops: [
    {
      id: 'classic-cake-pops',
      name: 'Classic Cake Pops',
      price: 40,
      unit: '/ dozen',
      badge: 'Best Seller',
      image: 'https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/b671392c-1b28-4631-8814-cdadba725ada/Gemini_Generated_Image_bv2d9abv2d9abv2d.png',
      description: 'Beautifully designed, perfectly dipped. Choose your colors and flavors for any celebration.',
      minQty: 1,
    },
    {
      id: 'custom-design-pops',
      name: 'Custom Design Pops',
      price: 50,
      unit: '/ dozen',
      badge: '',
      image: 'https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/8c59bd0d-2b34-435c-aa26-11e911f08b5a/Gemini_Generated_Image_13nub213nub213nu.png',
      description: 'Themed designs, character shapes, holiday specials - bring your vision to life!',
      minQty: 1,
    },
    {
      id: 'photo-pops',
      name: 'Photo Pops',
      price: 60,
      unit: '/ dozen',
      badge: 'Premium',
      image: 'https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/1aa7d1d4-49d6-4a9c-be15-3c7c691d8286/Gemini_Generated_Image_m2rqdom2rqdom2rq.png',
      description: 'Edible images of your photo, logo, or custom design on each pop. Minimum 2 dozen order.',
      minQty: 2,
    },
  ],
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-blush">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 bg-transparent border-none cursor-pointer text-left">
        <h4 className="text-base md:text-lg font-medium text-charcoal">{question}</h4>
        <span className="text-2xl text-crust transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : '' }}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-[#6B6560] text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function HomeClient() {
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [customModal, setCustomModal] = useState<null | typeof PRODUCTS.cakePops[0]>(null)
  const [customForm, setCustomForm] = useState({ quantity: '1', flavor: 'vanilla', colors: '', theme: '', instructions: '' })
  const [feedback, setFeedback] = useState<Record<string, boolean>>({})
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('success')) {
      alert('Order placed successfully! Auntie Lu will contact you about pickup.')
      window.history.replaceState({}, '', window.location.pathname)
    }
    if (params.get('canceled')) {
      alert('Order was canceled. Your cart is still saved.')
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in-el').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function changeQty(id: string, delta: number) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] || 1) + delta) }))
  }

  function handleAddBread(product: typeof PRODUCTS.breads[0]) {
    const qty = quantities[product.id] || 1
    addToCart({ id: product.id, name: product.fullName, price: product.price, image: product.image, description: product.shortDesc, quantity: qty })
    setQuantities(prev => ({ ...prev, [product.id]: 1 }))
    setFeedback(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setFeedback(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  function handleCustomSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!customModal) return
    const qty = parseInt(customForm.quantity)
    const totalPrice = customModal.price * qty
    const customization = `${qty} doz \u2022 ${customForm.flavor} \u2022 ${customForm.colors}${customForm.theme ? ' \u2022 ' + customForm.theme : ''}`
    addToCart({
      id: customModal.id + '-' + Date.now(),
      name: customModal.name,
      price: totalPrice,
      image: customModal.image,
      description: `Flavor: ${customForm.flavor}, Colors: ${customForm.colors}, Theme: ${customForm.theme || 'N/A'}, Instructions: ${customForm.instructions || 'None'}`,
      customization,
      quantity: 1,
    })
    setCustomModal(null)
    setCustomForm({ quantity: '1', flavor: 'vanilla', colors: '', theme: '', instructions: '' })
  }

  async function handleContact(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    try {
      const res = await fetch('https://formspree.io/f/xwpvqrpz', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (res.ok) setFormSent(true)
      else throw new Error()
    } catch {
      alert('Something went wrong. Please email hello@auntielusbakery.com directly.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 px-[4%] overflow-hidden">
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-wheat/15 text-crust px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              San Diego Home Bakery
            </div>
            <h1 className="text-[clamp(3rem,6vw,5rem)] leading-[1.1] text-dark-crust mb-6">
              Sourdough &amp; Sweets
              <span className="block italic font-normal text-soft-brown">Made with Love</span>
            </h1>
            <p className="text-lg text-[#6B6560] max-w-[500px] mb-8 leading-relaxed">
              From slow-fermented artisan sourdough to playful custom cake pops,
              Auntie Lu&apos;s Bakery brings homemade goodness to your celebrations
              and everyday moments. Serving the San Diego area.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#products" className="inline-flex items-center gap-2 bg-dark-crust text-white px-8 py-4 rounded-full font-semibold no-underline hover:bg-crust hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(92,61,34,0.3)] transition-all">
                Browse &amp; Order
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-wheat/80 transition-all">
                Book a Consultation
              </Link>
            </div>
          </div>
          <div className="animate-fade-left relative">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=900&fit=crop" alt="Fresh baked sourdough bread" className="w-full max-w-[600px] rounded-2xl object-cover" />
            <div className="absolute -top-5 -right-5 w-full h-full border-[3px] border-wheat rounded-2xl -z-10 opacity-50 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-12 px-[4%]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '2022', label: 'Founded' },
            { num: '24h+', label: 'Slow Fermented' },
            { num: '100%', label: 'Homemade' },
            { num: '\u221E', label: 'Love in Every Bite' },
          ].map(s => (
            <div key={s.label} className="fade-in-el opacity-0 translate-y-8 transition-all duration-700">
              <div className="text-wheat text-3xl md:text-4xl font-serif font-bold">{s.num}</div>
              <div className="text-gray-400 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-14 px-[4%] bg-cream border-b border-blush/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6560] mb-8">As Featured In</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center mb-10">
            {['SD Union-Tribune', 'SD Magazine', 'Eater SD', 'NBC 7', 'KPBS', 'The Knot', 'WeddingWire', 'SD Reader'].map((name) => (
              <div key={name} className="flex items-center justify-center h-14 px-3 bg-white rounded-xl shadow-sm border border-blush/30">
                <span className="text-charcoal/60 font-semibold text-[10px] text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/awards" className="inline-flex items-center gap-2 bg-white text-dark-crust px-5 py-2.5 rounded-full text-xs font-semibold no-underline border border-blush shadow-sm hover:shadow-md transition-shadow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              4.9 Stars &middot; 200+ Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-[4%]" id="story">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/222915f7-cf76-488a-96e2-c93b498db43c/IMG_9426crop.jpg" alt="Auntie Lu" className="w-[80%] rounded-2xl shadow-xl" />
            <img src="https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/041d0de9-0a10-47fb-8a3f-08c60ce90e30/Gemini_Generated_Image_f0enk4f0enk4f0en.png" alt="Colorful cake pops" className="absolute bottom-[-30px] right-0 w-[55%] rounded-2xl shadow-xl border-4 border-cream" />
          </div>
          <div className="fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Story</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-6">Welcome to Auntie Lu&apos;s Kitchen!</h2>
            <p className="text-[#6B6560] mb-4 leading-relaxed">Like many great ideas, Auntie Lu&apos;s Bakery started in my home kitchen. In 2022, I discovered the ancient, meditative process of sourdough baking. The science, the patience, and the incredibly rewarding crust and crumb of a perfectly proofed loaf immediately captured my heart.</p>
            <p className="text-[#6B6560] mb-4 leading-relaxed">Baking sourdough quickly evolved from a hobby into a much-needed creative outlet - a way to step away from the daily grind and create something truly nourishing.</p>
            <p className="text-[#6B6560] mb-8 leading-relaxed">While the sourdough feeds the soul, the cake pops feed the party! I found a different kind of joy in transforming simple cake into beautifully designed, perfectly dipped pop art that brings instant smiles to any gathering.</p>
            <div>
              <div className="font-serif text-xl text-dark-crust italic">Auntie Lu</div>
              <div className="text-[#6B6560] text-sm">Founder &amp; Head Baker</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-24 px-[4%] bg-blush/30">
        <div className="max-w-6xl mx-auto text-center mb-16 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
          <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Make</div>
          <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">From Hearth to Handle</h2>
          <p className="text-[#6B6560] max-w-xl mx-auto">Two passions, one bakery. Rustic sourdough for the soul, playful cake pops for the celebration.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <img src="https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/438f87db-b703-4b98-82d1-2accac5bc4a7/att.tYonkehb9wXzpXxWpyGNjO7XYd49FYVw5TiwTq7EEwo.jpeg" alt="Artisan Sourdough" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl text-dark-crust mb-3">Artisan Sourdough</h3>
              <p className="text-[#6B6560] mb-4">Slow-fermented with wild yeast, hand-shaped, and baked to golden perfection. Our sourdough is the real deal - no shortcuts, no compromises.</p>
              <span className="text-crust font-semibold">Starting at $16</span>
              <br /><br />
              <a href="#bread-section" className="inline-flex items-center gap-2 bg-dark-crust text-white px-6 py-3 rounded-full font-semibold no-underline hover:bg-crust transition-colors">Order Bread</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <img src="https://images.squarespace-cdn.com/content/v1/69306f1e46242d1060eb0280/562913cf-b7a6-44ad-b2b3-1f06a6f676af/Gemini_Generated_Image_ev0xnlev0xnlev0x.png" alt="Custom Cake Pops" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl text-dark-crust mb-3">Custom Cake Pops</h3>
              <p className="text-[#6B6560] mb-4">Perfectly dipped pop art for any occasion. From classic designs to photo pops with your custom image - if you can picture it, we can popify it!</p>
              <span className="text-crust font-semibold">$40-60 per dozen</span>
              <br /><br />
              <a href="#cakepop-section" className="inline-flex items-center gap-2 bg-dark-crust text-white px-6 py-3 rounded-full font-semibold no-underline hover:bg-crust transition-colors">Order Cake Pops</a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-[4%]" id="products">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Order</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">Fresh From the Oven</h2>
            <p className="text-[#6B6560]">Everything is made to order - as fresh as it gets. Pickup in the San Diego area.</p>
          </div>

          {/* Breads */}
          <div id="bread-section" className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl text-dark-crust">Sourdough Breads</h3>
              <span className="bg-wheat/20 text-crust px-3 py-1 rounded-full text-xs font-semibold">Wild Fermented</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PRODUCTS.breads.map(product => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow fade-in-el opacity-0 translate-y-8 transition-all duration-700">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    {product.badge && <span className="absolute top-4 left-4 bg-dark-crust text-white px-3 py-1 rounded-full text-xs font-semibold">{product.badge}</span>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-dark-crust mb-2 font-serif">{product.name}</h3>
                    <p className="text-[#6B6560] text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xl font-semibold text-dark-crust">${product.price} <small className="text-sm font-normal text-[#6B6560]">{product.unit}</small></span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => changeQty(product.id, -1)} className="w-8 h-8 border-2 border-blush bg-white rounded-lg flex items-center justify-center cursor-pointer text-lg hover:border-crust hover:bg-cream transition-all">&minus;</button>
                        <span className="w-8 text-center font-semibold">{quantities[product.id] || 1}</span>
                        <button onClick={() => changeQty(product.id, 1)} className="w-8 h-8 border-2 border-blush bg-white rounded-lg flex items-center justify-center cursor-pointer text-lg hover:border-crust hover:bg-cream transition-all">+</button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddBread(product)}
                      className={`w-full py-3 rounded-lg font-medium cursor-pointer transition-all border-none text-white ${feedback[product.id] ? 'bg-green-600' : 'bg-crust hover:bg-dark-crust'}`}
                    >
                      {feedback[product.id] ? `\u2713 Added ${quantities[product.id] || 1}!` : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cake Pops */}
          <div id="cakepop-section">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl text-dark-crust">Cake Pops</h3>
              <span className="bg-wheat/20 text-crust px-3 py-1 rounded-full text-xs font-semibold">Custom Designs</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.cakePops.map(product => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow fade-in-el opacity-0 translate-y-8 transition-all duration-700">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                    {product.badge && <span className="absolute top-4 left-4 bg-dark-crust text-white px-3 py-1 rounded-full text-xs font-semibold">{product.badge}</span>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-dark-crust mb-2 font-serif">{product.name}</h3>
                    <p className="text-[#6B6560] text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xl font-semibold text-dark-crust">${product.price} <small className="text-sm font-normal text-[#6B6560]">{product.unit}</small></span>
                    </div>
                    <button onClick={() => { setCustomModal(product); setCustomForm(f => ({ ...f, quantity: String(product.minQty) })) }} className="w-full py-3 bg-crust text-white rounded-lg font-medium cursor-pointer hover:bg-dark-crust transition-colors border-none">
                      Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-[4%] bg-blush/30" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">How It Works</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">From Order to Pickup</h2>
            <p className="text-[#6B6560]">Simple process, delicious results. Made fresh just for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Contact Us', desc: 'Use our Contact form to reach out. We\'ll send you a detailed order form to customize your request.' },
              { num: '2', title: 'Confirm & Pay', desc: 'Once we finalize your order details, you\'ll receive an invoice with payment options.' },
              { num: '3', title: 'We Bake Fresh', desc: 'Your order is made from scratch with love. Sourdough gets 24+ hours of fermentation.' },
              { num: '4', title: 'Pickup in San Diego', desc: 'Grab your fresh goodies at our San Diego metro pickup location. Address sent in your confirmation email.' },
            ].map(step => (
              <div key={step.num} className="text-center fade-in-el opacity-0 translate-y-8 transition-all duration-700">
                <div className="w-16 h-16 rounded-full bg-wheat/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-wheat text-2xl font-serif font-bold">{step.num}</span>
                </div>
                <h3 className="text-lg text-dark-crust mb-2">{step.title}</h3>
                <p className="text-[#6B6560] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-[4%]" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Questions</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust">Frequently Asked</h2>
          </div>
          <FAQItem question="Do you deliver or ship?" answer="Auntie Lu's Bakery is pickup only at this time! We're located in the San Diego area and serve customers across the Front Range." />
          <FAQItem question="Where is the pickup location?" answer="Pickups are in the San Diego area. The exact address will be provided in your confirmation email once your order is placed." />
          <FAQItem question="How do cake pops come packaged?" answer="Cake pops are individually wrapped with allergy info noted on the back, and packaged laying flat in a windowed pastry box by default. You can upgrade to a display stand carrier for an additional fee." />
          <FAQItem question="Do cake pops need to be refrigerated?" answer="Cake pops can be stored at room temperature for up to 5 days, refrigerated for up to 2 weeks, or frozen for up to 3 months." />
          <FAQItem question="Do you cater to allergies?" answer="Unfortunately, we're unable to accommodate specific food allergies. All items are made in a kitchen that handles gluten, dairy, nuts, and eggs." />
          <FAQItem question="How does payment work?" answer="Full payment is required upfront to secure your order date. We'll email you an invoice with multiple payment options." />
          <FAQItem question="How far in advance should I order?" answer="Sourdough bread requires 3-5 days lead time. Cake pops need 5-7 days. For large events, we recommend ordering 2-3 weeks ahead." />
          <FAQItem question="Do you do large event orders?" answer="Yes! We love catering weddings, corporate events, baby showers, and more. Contact us for custom quotes on large orders." />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* Contact */}
      <section className="py-24 px-[4%] bg-blush/20" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-6">Ready to Order?</h2>
            <p className="text-[#6B6560] mb-8 leading-relaxed">Fill out the form and I&apos;ll get back to you within 24 hours with a detailed order form to customize your request.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div><strong className="text-dark-crust">Pickup Location</strong><p className="text-[#6B6560] text-sm">San Diego, CO</p></div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div><strong className="text-dark-crust">Email</strong><p className="text-sm"><a href="mailto:hello@auntielusbakery.com" className="text-crust no-underline hover:underline">hello@auntielusbakery.com</a></p></div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div><strong className="text-dark-crust">Order Lead Time</strong><p className="text-[#6B6560] text-sm">Sourdough: 3-5 days | Cake Pops: 5-7 days</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] fade-in-el opacity-0 translate-y-8 transition-all duration-700">
            {formSent ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wheat to-crust flex items-center justify-center text-4xl text-white mx-auto mb-6">&check;</div>
                <h3 className="text-2xl text-dark-crust mb-2">Message Sent!</h3>
                <p className="text-[#6B6560]">Thanks for reaching out! I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleContact} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">Your Name *</label>
                  <input type="text" name="name" required placeholder="Jane Smith" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">Email Address *</label>
                  <input type="email" name="email" required placeholder="jane@example.com" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" placeholder="(720) 555-1234" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">Interested In *</label>
                  <select name="interest" required className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                    <option value="">Select...</option>
                    <option value="sourdough">Sourdough Bread</option>
                    <option value="cake-pops">Cake Pops</option>
                    <option value="both">Both!</option>
                    <option value="corporate">Corporate / Large Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">When do you need it?</label>
                  <input type="date" name="date" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-semibold text-dark-crust mb-1.5">Tell me about your order *</label>
                  <textarea name="message" rows={4} required placeholder="What are you celebrating? How many people?" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all resize-y min-h-[120px]" />
                </div>
                <input type="hidden" name="_subject" value="New Order Inquiry from Auntie Lu's Website" />
                <button type="submit" className="sm:col-span-2 bg-dark-crust text-white py-4 rounded-full font-semibold cursor-pointer hover:bg-crust transition-colors border-none text-base">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">Have a Special Event?</h2>
        <p className="text-blush text-lg mb-8">Book a free consultation to discuss custom cakes, cake pops, or sourdough for your celebration!</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full font-semibold no-underline hover:bg-white transition-colors">
            Book a Consultation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/tastings" className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold no-underline border-2 border-white/30 hover:bg-white/10 transition-colors">
            Cake Tastings
          </Link>
        </div>
      </section>

      {/* Customize Modal */}
      {customModal && (
        <>
          <div className="fixed inset-0 bg-black/60 z-[2999]" onClick={() => setCustomModal(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] max-h-[90vh] bg-white rounded-2xl shadow-2xl z-[3000] overflow-y-auto">
            <div className="p-8">
              <button onClick={() => setCustomModal(null)} className="absolute top-4 right-5 bg-transparent border-none text-3xl cursor-pointer text-gray-400 hover:text-gray-600">&times;</button>
              <h2 className="font-serif text-2xl text-crust mb-5">Customize Your Cake Pops</h2>
              <div className="flex gap-4 p-4 bg-cream rounded-xl mb-5">
                <img src={customModal.image} alt={customModal.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <strong className="text-dark-crust">{customModal.name}</strong>
                  <div className="text-sm text-[#6B6560]">Starting at ${customModal.price.toFixed(2)} / dozen</div>
                </div>
              </div>
              <form onSubmit={handleCustomSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold text-charcoal mb-1.5 text-sm">Quantity (dozens)</label>
                  <select value={customForm.quantity} onChange={e => setCustomForm(f => ({ ...f, quantity: e.target.value }))} className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-crust">
                    {customModal.minQty === 2 ? (
                      <>
                        <option value="2">2 dozen (24 pops) - Minimum</option>
                        <option value="3">3 dozen (36 pops)</option>
                        <option value="4">4 dozen (48 pops)</option>
                        <option value="5">5+ dozen (contact for pricing)</option>
                      </>
                    ) : (
                      <>
                        <option value="1">1 dozen (12 pops)</option>
                        <option value="2">2 dozen (24 pops)</option>
                        <option value="3">3 dozen (36 pops)</option>
                        <option value="4">4 dozen (48 pops)</option>
                        <option value="5">5+ dozen (contact for pricing)</option>
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-charcoal mb-1.5 text-sm">Flavor</label>
                  <select value={customForm.flavor} onChange={e => setCustomForm(f => ({ ...f, flavor: e.target.value }))} className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-crust">
                    <option value="vanilla">Vanilla</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="red-velvet">Red Velvet</option>
                    <option value="funfetti">Funfetti</option>
                    <option value="lemon">Lemon</option>
                    <option value="mixed">Mixed Flavors</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-charcoal mb-1.5 text-sm">Colors</label>
                  <input type="text" value={customForm.colors} onChange={e => setCustomForm(f => ({ ...f, colors: e.target.value }))} required placeholder="e.g., Pink and gold" className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-crust" />
                </div>
                <div>
                  <label className="block font-semibold text-charcoal mb-1.5 text-sm">Theme / Occasion</label>
                  <input type="text" value={customForm.theme} onChange={e => setCustomForm(f => ({ ...f, theme: e.target.value }))} placeholder="e.g., Baby shower, Birthday" className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-crust" />
                </div>
                <div>
                  <label className="block font-semibold text-charcoal mb-1.5 text-sm">Special Instructions</label>
                  <textarea value={customForm.instructions} onChange={e => setCustomForm(f => ({ ...f, instructions: e.target.value }))} rows={3} placeholder="Any special requests..." className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-crust resize-y" />
                </div>
                <div className="flex justify-between items-center pt-5 border-t border-gray-100">
                  <div className="text-xl font-semibold">
                    Subtotal: <span className="text-crust">${(customModal.price * parseInt(customForm.quantity || '1')).toFixed(2)}</span>
                  </div>
                  <button type="submit" className="bg-crust text-white px-7 py-3.5 rounded-lg font-semibold cursor-pointer hover:bg-dark-crust transition-colors border-none">Add to Cart</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}
