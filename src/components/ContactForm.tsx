'use client'

import { useState, useRef } from 'react'

const EVENT_TYPES = [
  'Wedding',
  'Birthday',
  'Quinceañera',
  'Corporate',
  'Baby Shower',
  'Other',
]

export default function ContactForm() {
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    try {
      const res = await fetch('https://formspree.io/f/myznknaa', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setFormSent(true)
      else throw new Error()
    } catch {
      alert('Something went wrong. Please email hello@auntielusbakery.com directly.')
    }
  }

  if (formSent) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wheat to-crust flex items-center justify-center text-4xl text-white mx-auto mb-6">&check;</div>
          <h3 className="font-serif text-2xl text-dark-crust mb-2">Message Sent!</h3>
          <p className="text-[#6B6560]">Thanks for reaching out! I&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input type="hidden" name="_subject" value="[AUNTIE LU'S BAKERY] New Order Inquiry" />
        <input type="hidden" name="_page_url" value={typeof window !== 'undefined' ? window.location.href : ''} />

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Your Name *</label>
          <input type="text" name="name" required placeholder="Jane Smith" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Email Address *</label>
          <input type="email" name="email" required placeholder="jane@example.com" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Phone Number *</label>
          <input type="tel" name="phone" required placeholder="(619) 555-1234" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Event Type</label>
          <select name="event_type" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
            <option value="">Select event type...</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Event Date</label>
          <input type="date" name="event_date" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Number of Guests</label>
          <input type="number" name="guests" min="1" placeholder="50" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label className="text-sm font-semibold text-dark-crust mb-1.5">Message / Order Details *</label>
          <textarea name="message" rows={4} required placeholder="Tell us about your event, flavors you love, design ideas, or any questions!" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all resize-y min-h-[120px]" />
        </div>

        <button type="submit" className="sm:col-span-2 bg-dark-crust text-white py-4 rounded-full font-semibold cursor-pointer hover:bg-crust transition-colors border-none text-base">
          Send Message
        </button>
      </form>
    </div>
  )
}

export function ContactFormCTA({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="py-16 md:py-20 px-[4%] bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            {title || 'Get a Free Quote'}
          </h2>
          <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
            {description || 'Tell us about your event and we\'ll create something special. Custom cakes, cake pops, and sourdough made with love in San Diego.'}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
