'use client'

import { useState, useEffect, useCallback } from 'react'
import { Testimonial, testimonials, getTestimonialsByEvent, getFeaturedTestimonials } from '@/data/testimonials'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <StarRating />
      <blockquote className="text-[#6B6560] leading-relaxed mt-4 mb-6 flex-1 text-[15px]">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="border-t border-blush pt-4 mt-auto">
        <div className="font-semibold text-dark-crust">{testimonial.name}</div>
        <div className="text-sm text-crust">{testimonial.location}</div>
        {testimonial.venue && (
          <div className="text-xs text-[#6B6560] mt-1">{testimonial.venue}</div>
        )}
      </div>
    </div>
  )
}

// ─── Homepage Testimonial Slider ───

export default function TestimonialsSlider() {
  const featured = getFeaturedTestimonials(9)
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, featured.length - visibleCount)

  const next = useCallback(() => {
    setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const visible = featured.slice(current, current + visibleCount)
  // Wrap around if needed
  const cards = visible.length < visibleCount
    ? [...visible, ...featured.slice(0, visibleCount - visible.length)]
    : visible

  return (
    <section className="py-24 px-[4%] bg-cream/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-crust text-xs font-semibold uppercase tracking-[0.2em] mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl text-dark-crust mb-4 font-serif">What Our Customers Say</h2>
          <p className="text-[#6B6560] max-w-xl mx-auto">Real reviews from real celebrations across San Diego</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-dark-crust font-semibold">5.0</span>
            <span className="text-[#6B6560] text-sm">({testimonials.length} reviews)</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className={`grid gap-6 ${visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {cards.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-cream transition-colors border border-blush"
            aria-label="Previous testimonials"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C3D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-cream transition-colors border border-blush"
            aria-label="Next testimonials"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C3D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all border-none cursor-pointer ${
                i === current ? 'bg-crust w-6' : 'bg-blush hover:bg-soft-brown'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Event-specific Testimonials (for event pages) ───

export function EventTestimonials({ eventSlug }: { eventSlug: string }) {
  const eventReviews = getTestimonialsByEvent(eventSlug)
  if (eventReviews.length === 0) return null

  return (
    <section className="py-16 px-[4%] bg-cream/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventReviews.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Compact Testimonials for Contact Page ───

export function TestimonialsCompact() {
  const featured = getFeaturedTestimonials(3)

  return (
    <section className="py-16 px-[4%] bg-cream/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-3">Trusted by San Diego Families</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4A853" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-dark-crust font-semibold text-sm">5.0 from {testimonials.length} reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
