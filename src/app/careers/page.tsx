import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Careers | Join Auntie Lu's Bakery Team in San Diego",
  description: "Join the Auntie Lu's Bakery family! We're hiring cake decorators, bakers, delivery drivers, and customer service team members in San Diego. Apply today.",
  openGraph: {
    title: "Careers | Join Auntie Lu's Bakery Team",
    description: "Join the Auntie Lu's Bakery family! We're hiring cake decorators, bakers, delivery drivers, and customer service team members in San Diego.",
    url: 'https://www.auntielusbakery.com/careers',
    type: 'website',
  },
  alternates: { canonical: 'https://www.auntielusbakery.com/careers' },
}

const whyWorkWithUs = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Family Culture',
    description: 'We treat every team member like family. You\'ll feel the warmth and support from day one — this isn\'t just a job, it\'s a kitchen you belong in.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Room to Grow',
    description: 'Whether you\'re just starting out or a seasoned pro, we invest in your growth with hands-on training, mentorship, and opportunities to level up your craft.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Creative Freedom',
    description: 'We encourage our team to experiment, innovate, and bring their own flair. Your ideas matter here — some of our best-sellers started as team experiments.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'San Diego Vibes',
    description: 'Work in sunny San Diego with a team that loves good food, good laughs, and good surf. We bring the SoCal spirit into everything we do.',
  },
]

const openPositions = [
  {
    title: 'Cake Decorator',
    type: 'Full-Time',
    description: 'Bring celebrations to life with stunning custom cake designs. You\'ll work with buttercream, fondant, and edible art to create show-stopping wedding cakes, birthday cakes, and specialty orders.',
    responsibilities: [
      'Design and execute custom cake decorations for weddings, birthdays, and events',
      'Work closely with clients to bring their vision to life',
      'Maintain high quality standards and attention to detail',
      'Manage decoration inventory and tools',
    ],
    requirements: [
      '2+ years of professional cake decorating experience',
      'Portfolio of past cake work',
      'Knowledge of fondant, buttercream, and piping techniques',
      'Ability to lift 30+ lbs and stand for extended periods',
    ],
  },
  {
    title: 'Baker',
    type: 'Part-Time / Full-Time',
    description: 'Join our kitchen team baking artisan sourdough, cupcakes, cookies, and cake bases from scratch. Early mornings, fresh ingredients, and the satisfaction of feeding San Diego\'s sweet tooth.',
    responsibilities: [
      'Prepare doughs, batters, and fillings following Auntie Lu\'s recipes',
      'Operate commercial ovens and bakery equipment',
      'Maintain a clean, organized, and food-safe workspace',
      'Assist with inventory tracking and ingredient prep',
    ],
    requirements: [
      '1+ years of bakery or commercial kitchen experience',
      'Food Handler\'s certification (or willingness to obtain)',
      'Comfortable with early morning shifts (starting 4-5 AM)',
      'Passion for baking with quality ingredients',
    ],
  },
  {
    title: 'Delivery Driver',
    type: 'Part-Time',
    description: 'Be the final touch in our customer experience — delivering beautiful cakes and baked goods safely across San Diego. Perfect for someone who loves driving around America\'s Finest City.',
    responsibilities: [
      'Safely transport cakes and baked goods to customers and venues',
      'Handle delicate items with care during loading and delivery',
      'Communicate with customers about delivery times',
      'Maintain a clean and reliable delivery vehicle',
    ],
    requirements: [
      'Valid California driver\'s license with clean driving record',
      'Reliable personal vehicle with insurance',
      'Knowledge of San Diego neighborhoods and routes',
      'Strong time management and communication skills',
    ],
  },
  {
    title: 'Customer Service',
    type: 'Part-Time',
    description: 'Be the friendly voice and face of Auntie Lu\'s. Help customers place orders, answer questions, and make sure every interaction feels personal and warm.',
    responsibilities: [
      'Respond to customer inquiries via email, phone, and social media',
      'Process orders and coordinate with the bakery team',
      'Help customers select flavors, sizes, and designs',
      'Manage the order calendar and scheduling',
    ],
    requirements: [
      'Excellent communication and people skills',
      'Organized, detail-oriented, and reliable',
      'Comfortable with basic computer tools and order systems',
      'Genuine enthusiasm for baked goods and customer happiness',
    ],
  },
]

const benefits = [
  { label: 'Free Baked Goods', detail: 'Daily treats and employee discounts on all products' },
  { label: 'Flexible Scheduling', detail: 'We work around your life, not the other way around' },
  { label: 'Skill Development', detail: 'Paid training and workshops to grow your craft' },
  { label: 'Paid Time Off', detail: 'Because everyone needs a beach day (full-time roles)' },
  { label: 'Team Events', detail: 'Monthly team outings, tastings, and celebrations' },
  { label: 'Competitive Pay', detail: 'Fair wages that reflect your talent and dedication' },
]

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Careers', href: '/careers' },
      ]} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-[4%] bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-crust font-medium text-sm tracking-widest uppercase mb-4">Careers</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-crust mb-6 leading-tight">
            Join Auntie Lu&apos;s Team
          </h1>
          <p className="text-lg md:text-xl text-[#6B6560] leading-relaxed max-w-2xl mx-auto">
            We&apos;re a family-owned San Diego bakery looking for passionate people who love baking, creativity, and making others smile. Come be part of something sweet.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-[4%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-3">Why Auntie Lu&apos;s?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">More Than Just a Bakery Job</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-5 text-wheat">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-crust mb-3">{item.title}</h3>
                <p className="text-[#6B6560] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-[4%] bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-3">Open Positions</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Find Your Perfect Role</h2>
            <p className="text-[#6B6560] text-lg max-w-xl mx-auto">
              We&apos;re growing and looking for talented people to join our San Diego team. Check out our current openings below.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <details key={position.title} className="bg-white rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-dark-crust">{position.title}</h3>
                    <span className="inline-block mt-2 text-sm font-medium text-crust bg-cream px-3 py-1 rounded-full">{position.type}</span>
                  </div>
                  <svg className="w-5 h-5 text-crust transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8 border-t border-cream">
                  <p className="text-[#6B6560] leading-relaxed mt-6 mb-6">{position.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-dark-crust mb-3">What You&apos;ll Do</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((item, i) => (
                          <li key={i} className="text-[#6B6560] text-sm flex items-start gap-2">
                            <span className="text-wheat mt-1 shrink-0">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-crust mb-3">What We&apos;re Looking For</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((item, i) => (
                          <li key={i} className="text-[#6B6560] text-sm flex items-start gap-2">
                            <span className="text-wheat mt-1 shrink-0">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a href="#apply" className="inline-block mt-6 bg-dark-crust text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-crust transition-colors no-underline">
                    Apply for This Role
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-[4%]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-3">Benefits &amp; Perks</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust">The Sweet Stuff</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-start gap-4 bg-cream rounded-2xl p-6">
                <span className="w-8 h-8 rounded-full bg-wheat/50 shrink-0"></span>
                <div>
                  <h3 className="font-semibold text-dark-crust mb-1">{benefit.label}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-[4%] bg-cream">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-crust font-medium text-sm tracking-widest uppercase mb-3">Apply Now</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-4">Ready to Join the Family?</h2>
            <p className="text-[#6B6560] leading-relaxed">
              Fill out the form below and we&apos;ll be in touch. We can&apos;t wait to hear from you!
            </p>
          </div>
          <form className="bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-crust mb-2">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-blush bg-cream/50 text-dark-crust placeholder:text-[#B5AFA9] focus:outline-none focus:ring-2 focus:ring-wheat/50 focus:border-wheat transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-crust mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl border border-blush bg-cream/50 text-dark-crust placeholder:text-[#B5AFA9] focus:outline-none focus:ring-2 focus:ring-wheat/50 focus:border-wheat transition-colors"
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-dark-crust mb-2">Position You&apos;re Applying For *</label>
              <select
                id="position"
                name="position"
                required
                className="w-full px-4 py-3 rounded-xl border border-blush bg-cream/50 text-dark-crust focus:outline-none focus:ring-2 focus:ring-wheat/50 focus:border-wheat transition-colors appearance-none"
              >
                <option value="">Select a position...</option>
                <option value="cake-decorator">Cake Decorator (Full-Time)</option>
                <option value="baker">Baker (Part-Time / Full-Time)</option>
                <option value="delivery-driver">Delivery Driver (Part-Time)</option>
                <option value="customer-service">Customer Service (Part-Time)</option>
              </select>
            </div>
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-dark-crust mb-2">Resume / Portfolio</label>
              <div className="w-full px-4 py-8 rounded-xl border-2 border-dashed border-blush bg-cream/30 text-center">
                <svg className="w-8 h-8 mx-auto mb-3 text-[#B5AFA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                <p className="text-sm text-[#6B6560] mb-1">Drag &amp; drop your resume here, or</p>
                <label htmlFor="resume" className="text-sm font-medium text-crust hover:text-dark-crust cursor-pointer transition-colors underline">browse files</label>
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" className="hidden" />
                <p className="text-xs text-[#B5AFA9] mt-2">PDF, DOC, or DOCX (max 5MB)</p>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-crust mb-2">Tell Us About Yourself</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What excites you about joining Auntie Lu's? Any relevant experience?"
                className="w-full px-4 py-3 rounded-xl border border-blush bg-cream/50 text-dark-crust placeholder:text-[#B5AFA9] focus:outline-none focus:ring-2 focus:ring-wheat/50 focus:border-wheat transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dark-crust text-white py-4 rounded-full font-medium text-base hover:bg-crust transition-colors"
            >
              Submit Application
            </button>
            <p className="text-xs text-[#B5AFA9] text-center">
              By submitting, you agree to our privacy policy. We&apos;ll only use your info for hiring purposes.
            </p>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[4%] bg-dark-crust text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Don&apos;t See Your Perfect Role?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            We&apos;re always looking for talented people in the San Diego area. Send us your info and we&apos;ll keep you in mind for future openings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@auntielusbakery.com" className="bg-wheat text-dark-crust px-8 py-4 rounded-full font-medium hover:bg-amber-400 transition-colors no-underline">
              Email Us Your Resume
            </a>
            <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
