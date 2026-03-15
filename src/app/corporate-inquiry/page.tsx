'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const SERVICE_TYPES = [
  'Corporate Catering',
  'Office Celebrations (Birthdays, Anniversaries)',
  'Company Event / Party',
  'Client Appreciation Gifts',
  'Holiday Corporate Gifting',
  'Logo Cakes / Branded Desserts',
  'Bulk Order',
  'Monthly Office Treats Subscription',
  'Other',
]

const BUDGET_RANGES = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Not sure yet',
]

const QUANTITY_RANGES = [
  'Under 50',
  '50 - 100',
  '100 - 250',
  '250 - 500',
  '500+',
  'Not sure yet',
]

const INDUSTRIES = [
  'Technology',
  'Legal',
  'Healthcare',
  'Hospitality',
  'Finance',
  'Real Estate',
  'Education',
  'Nonprofit',
  'Other',
]

export default function CorporateInquiryPage() {
  const [formSent, setFormSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    try {
      const res = await fetch('https://formspree.io/f/PLACEHOLDER_ID', {
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
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Corporate', href: '/corporate' },
        { name: 'Inquiry', href: '/corporate-inquiry' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Corporate Inquiry</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Let&apos;s Plan Your Corporate Order
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and event needs. We&apos;ll respond within one business day with a custom proposal and pricing.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-crust mb-6">Why Work With Us</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-wheat mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <strong className="text-dark-crust text-sm">Volume discounts</strong>
                    <p className="text-[#6B6560] text-xs">Up to 20% off for bulk orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-wheat mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <strong className="text-dark-crust text-sm">Net 30 payment terms</strong>
                    <p className="text-[#6B6560] text-xs">Available for approved businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-wheat mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <strong className="text-dark-crust text-sm">Dedicated account manager</strong>
                    <p className="text-[#6B6560] text-xs">Single point of contact for all orders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-wheat mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <strong className="text-dark-crust text-sm">On-site delivery & setup</strong>
                    <p className="text-[#6B6560] text-xs">Throughout San Diego county</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-wheat mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                  <div>
                    <strong className="text-dark-crust text-sm">Custom branding</strong>
                    <p className="text-[#6B6560] text-xs">Logo cakes, branded packaging & more</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-dark-crust mb-3">Prefer to Call or Email?</h3>
              <p className="text-[#6B6560] text-sm mb-4">
                We&apos;re happy to discuss your needs directly.
              </p>
              <div className="space-y-2">
                <a href="mailto:hello@auntielusbakery.com" className="text-crust hover:text-dark-crust transition-colors no-underline font-medium text-sm block">
                  hello@auntielusbakery.com
                </a>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-dark-crust mb-3">Quick Turnaround</h3>
              <p className="text-[#6B6560] text-sm">
                Standard lead time is 5-7 business days. Rush orders available for an additional fee. Holiday orders should be placed at least 2 weeks in advance.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {formSent ? (
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wheat to-crust flex items-center justify-center text-4xl text-white mx-auto mb-6">&check;</div>
                  <h3 className="font-serif text-2xl text-dark-crust mb-2">Inquiry Received!</h3>
                  <p className="text-[#6B6560] mb-4">Thanks for your interest! We&apos;ll review your needs and respond within one business day with a custom proposal.</p>
                  <Link href="/corporate" className="text-crust hover:text-dark-crust transition-colors font-medium no-underline">
                    &larr; Back to Corporate Services
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="hidden" name="_subject" value="New Corporate Inquiry from Auntie Lu's Website" />

                  {/* Company Info */}
                  <div className="sm:col-span-2">
                    <p className="font-serif text-lg text-dark-crust mb-4">Company Information</p>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Company Name *</label>
                    <input type="text" name="company_name" required placeholder="Acme Corp" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Industry</label>
                    <select name="industry" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                      <option value="">Select industry...</option>
                      {INDUSTRIES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Contact Name *</label>
                    <input type="text" name="contact_name" required placeholder="Jane Smith" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Job Title</label>
                    <input type="text" name="job_title" placeholder="Office Manager" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Email Address *</label>
                    <input type="email" name="email" required placeholder="jane@acmecorp.com" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="(619) 555-1234" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  {/* Event Details */}
                  <div className="sm:col-span-2 mt-4">
                    <p className="font-serif text-lg text-dark-crust mb-4">Event Details</p>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Service Type *</label>
                    <select name="service_type" required className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                      <option value="">Select service...</option>
                      {SERVICE_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Event Date</label>
                    <input type="date" name="event_date" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all" />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Estimated Quantity</label>
                    <select name="quantity" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                      <option value="">Select quantity range...</option>
                      {QUANTITY_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Budget Range</label>
                    <select name="budget" className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all">
                      <option value="">Select budget range...</option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-sm font-semibold text-dark-crust mb-1.5">Tell Us About Your Needs *</label>
                    <textarea name="message" rows={5} required placeholder="Describe your event, any branding requirements, dietary restrictions, preferred products (cakes, cake pops, sourdough, cookies), delivery needs, or any questions you have." className="px-4 py-3 border-2 border-blush rounded-xl bg-cream focus:border-wheat focus:bg-white focus:outline-none transition-all resize-y min-h-[140px]" />
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="net30_interest" value="yes" className="mt-1 accent-crust" />
                      <span className="text-sm text-[#6B6560]">
                        I&apos;m interested in <strong className="text-dark-crust">Net 30 payment terms</strong> for our business account
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:col-span-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="subscription_interest" value="yes" className="mt-1 accent-crust" />
                      <span className="text-sm text-[#6B6560]">
                        I&apos;m interested in the <strong className="text-dark-crust">Monthly Office Treats Subscription</strong>
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="sm:col-span-2 bg-dark-crust text-white py-4 rounded-full font-semibold cursor-pointer hover:bg-crust transition-colors border-none text-base">
                    Submit Corporate Inquiry
                  </button>

                  <p className="sm:col-span-2 text-xs text-[#6B6560] text-center">
                    We respond to all corporate inquiries within one business day.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Not Sure Where to Start?</h2>
          <p className="text-white/80 text-lg mb-8">
            Browse our corporate services page for ideas, or reach out directly &mdash; we love helping businesses find the perfect treats for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/corporate" className="bg-wheat text-white px-8 py-4 rounded-full font-semibold hover:bg-wheat/90 transition-colors no-underline">
              View Corporate Services
            </Link>
            <Link href="/products" className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors no-underline border border-white/20">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
