'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import DatePicker from '@/components/DatePicker'
import Breadcrumbs from '@/components/Breadcrumbs'

const EVENT_TYPES = [
  'Wedding Cake',
  'Birthday Cake',
  'Quinceañera Cake',
  'Baby Shower',
  'Corporate Event',
  'Graduation',
  'Anniversary',
  'Custom Cake Pops',
  'Sourdough Order',
  'Other',
]

const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
]

const GUEST_RANGES = [
  '1-25 guests',
  '25-50 guests',
  '50-100 guests',
  '100-200 guests',
  '200+ guests',
]

export default function BookConsultationClient() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-[4%] bg-gradient-to-b from-blush/40 to-cream">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[
            { name: 'Home', href: '/' },
            { name: 'Book a Consultation', href: '/book-consultation' },
          ]} />
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-wheat/15 text-crust px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Free Consultation
            </div>
            <h1 className="text-4xl md:text-5xl text-dark-crust mb-4">Book a Consultation</h1>
            <p className="text-lg text-[#6B6560] max-w-2xl mx-auto">
              Let&apos;s chat about your vision! Schedule a free consultation to discuss your custom cake,
              cake pops, or sourdough order for your special event.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">The Process</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">What to Expect</h2>
            <p className="text-[#6B6560] max-w-xl mx-auto">Your consultation is all about bringing your vision to life. Here&apos;s how it works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                ),
                title: 'Share Your Vision',
                desc: 'Tell us about your event, theme, colors, and any design ideas. Bring photos, Pinterest boards, or fabric swatches for inspiration!',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                ),
                title: 'Design Together',
                desc: 'We\'ll collaborate on flavors, sizes, and designs. For cake tastings, we can schedule a separate tasting session ($50, credited to your order).',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ),
                title: 'Get Your Quote',
                desc: 'Within 48 hours, you\'ll receive a detailed quote with pricing, timeline, and next steps. No obligation, no pressure!',
              },
            ].map(step => (
              <div key={step.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 rounded-full bg-wheat/15 flex items-center justify-center mx-auto mb-5 text-crust">
                  {step.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{step.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-[4%] bg-blush/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Schedule</div>
            <h2 className="text-3xl md:text-4xl text-dark-crust mb-4">Pick a Date &amp; Time</h2>
            <p className="text-[#6B6560]">Select your preferred consultation date and time. We&apos;ll confirm via email within 24 hours.</p>
          </div>

          {formSent ? (
            <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wheat to-crust flex items-center justify-center text-4xl text-white mx-auto mb-6">&check;</div>
              <h3 className="font-serif text-2xl text-dark-crust mb-3">Consultation Request Sent!</h3>
              <p className="text-[#6B6560] mb-2">Thanks for booking! I&apos;ll confirm your consultation via email within 24 hours.</p>
              <p className="text-sm text-[#6B6560]">
                {selectedDate && <>Selected date: <strong className="text-dark-crust">{new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</strong></>}
                {selectedTime && <> at <strong className="text-dark-crust">{selectedTime}</strong></>}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="[Auntie Lu Consultation] New Consultation Request" />
              <input type="hidden" name="form_type" value="consultation_booking" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Date + Time */}
                <div className="space-y-6">
                  <DatePicker
                    label="Preferred Consultation Date *"
                    selectedDate={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                  />
                  <input type="hidden" name="consultation_date" value={selectedDate} />

                  {/* Time Slots */}
                  <div>
                    <label className="text-sm font-semibold text-dark-crust mb-2 block">Preferred Time *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIME_SLOTS.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'border-wheat bg-wheat text-white shadow-md'
                              : 'border-blush bg-white text-charcoal hover:border-wheat/50 hover:bg-wheat/5'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="consultation_time" value={selectedTime} />
                  </div>

                  <p className="text-xs text-[#6B6560] bg-cream/70 rounded-xl p-3">
                    Consultations are held Monday&ndash;Saturday. Sundays are unavailable.
                    We&apos;ll confirm your exact date and time via email.
                  </p>
                </div>

                {/* Right: Contact + Event Details */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                  <h3 className="font-serif text-xl text-dark-crust mb-6">Your Details</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm font-semibold text-dark-crust mb-1.5">Your Name *</label>
                        <input type="text" name="name" required placeholder="Jane Smith" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-semibold text-dark-crust mb-1.5">Phone *</label>
                        <input type="tel" name="phone" required placeholder="(720) 555-1234" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-dark-crust mb-1.5">Email *</label>
                      <input type="email" name="email" required placeholder="jane@example.com" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-dark-crust mb-1.5">Event Type *</label>
                      <select name="event_type" required className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                        <option value="">Select event type...</option>
                        {EVENT_TYPES.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm font-semibold text-dark-crust mb-1.5">Event Date</label>
                        <input type="date" name="event_date" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-semibold text-dark-crust mb-1.5">Guest Count</label>
                        <select name="guest_count" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                          <option value="">Select range...</option>
                          {GUEST_RANGES.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-dark-crust mb-1.5">Tell Us About Your Vision *</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Describe your dream cake! Include colors, themes, flavors, and any inspiration photos you have..."
                        className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all resize-y min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-start gap-2 bg-wheat/10 rounded-xl p-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crust mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <p className="text-xs text-crust">
                        Interested in a cake tasting? Mention it in your message!
                        Tastings are $50 (credited toward your order).{' '}
                        <Link href="/tastings" className="underline font-semibold hover:text-dark-crust">Learn more</Link>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedTime}
                      className="w-full bg-dark-crust text-white py-4 rounded-full font-semibold cursor-pointer hover:bg-crust transition-colors border-none text-base disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {!selectedDate || !selectedTime ? 'Select a Date & Time to Continue' : 'Request Consultation'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-[4%]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-2xl text-dark-crust mb-4">Consultation FAQ</h3>
              <div className="space-y-4">
                {[
                  { q: 'How long is a consultation?', a: 'Most consultations last 20-30 minutes. We want to make sure we understand your vision completely!' },
                  { q: 'Is the consultation free?', a: 'Yes! Consultations are completely free with no obligation. It\'s simply a chance for us to chat about your event.' },
                  { q: 'Can I do a virtual consultation?', a: 'Absolutely! We offer phone and video consultations in addition to in-person meetings.' },
                  { q: 'What should I bring?', a: 'Any inspiration photos, color swatches, or Pinterest boards that capture your vision. The more details, the better!' },
                ].map(faq => (
                  <div key={faq.q} className="bg-cream/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-dark-crust mb-1">{faq.q}</h4>
                    <p className="text-sm text-[#6B6560]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-dark-crust mb-4">Prefer to Reach Out Directly?</h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-wheat/15 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crust"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <strong className="text-dark-crust text-sm">Email</strong>
                      <p className="text-sm"><a href="mailto:hello@auntielusbakery.com" className="text-crust no-underline hover:underline">hello@auntielusbakery.com</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-wheat/15 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crust"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <strong className="text-dark-crust text-sm">Location</strong>
                      <p className="text-sm text-[#6B6560]">San Diego, CA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-wheat/15 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crust"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <strong className="text-dark-crust text-sm">Response Time</strong>
                      <p className="text-sm text-[#6B6560]">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blush/50">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-crust font-semibold text-sm hover:text-dark-crust transition-colors no-underline">
                    Or use our contact form
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-crust py-20 px-[4%] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Ready to Taste?</h2>
          <p className="text-blush text-lg mb-8">Book a cake tasting session and discover your perfect flavors. $50 tasting fee is credited toward your order!</p>
          <Link href="/tastings" className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white transition-colors">
            Learn About Tastings
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
