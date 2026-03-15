import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { TestimonialsCompact } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: "Contact Us | Auntie Lu's Bakery - San Diego Custom Cakes & Sourdough",
  description: 'Get in touch with Auntie Lu\'s Bakery for custom cakes, cake pops, and sourdough in San Diego. Request a free quote for your next event.',
  openGraph: {
    title: "Contact Us | Auntie Lu's Bakery",
    description: 'Get in touch with Auntie Lu\'s Bakery for custom cakes, cake pops, and sourdough in San Diego.',
    url: 'https://www.auntielusbakery.com/contact',
    type: 'website',
  },
  alternates: { canonical: 'https://www.auntielusbakery.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Let&apos;s Create Something Sweet
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            Ready to order custom cakes, cake pops, or sourdough? Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 px-[4%]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-crust mb-6">Contact Info</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <strong className="text-dark-crust">Email</strong>
                    <p className="text-sm"><a href="mailto:hello@auntielusbakery.com" className="text-crust no-underline hover:underline">hello@auntielusbakery.com</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <strong className="text-dark-crust">Location</strong>
                    <p className="text-[#6B6560] text-sm">San Diego, California</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <strong className="text-dark-crust">Order Lead Time</strong>
                    <p className="text-[#6B6560] text-sm">Sourdough: 3-5 days<br />Cake Pops: 5-7 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-serif text-lg text-dark-crust mb-3">Follow Along</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/auntielusbakery" target="_blank" rel="noopener noreferrer" className="text-crust hover:text-dark-crust transition-colors no-underline font-medium text-sm">
                  Instagram
                </a>
                <a href="https://facebook.com/auntielusbakery" target="_blank" rel="noopener noreferrer" className="text-crust hover:text-dark-crust transition-colors no-underline font-medium text-sm">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCompact />
    </>
  )
}
