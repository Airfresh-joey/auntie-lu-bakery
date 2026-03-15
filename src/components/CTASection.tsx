import Link from 'next/link'

export default function CTASection({ title, description, buttonText, buttonHref }: {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}) {
  return (
    <section className="bg-dark-crust py-20 px-[4%] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white mb-4">{title || 'Ready to Order?'}</h2>
        <p className="text-blush text-lg mb-8">{description || 'Contact us today to place your custom order. Made fresh with love in San Diego.'}</p>
        <Link href={buttonHref || '/#contact'} className="inline-flex items-center gap-2 bg-wheat text-dark-crust px-8 py-4 rounded-full text-base font-semibold no-underline hover:bg-white transition-colors">
          {buttonText || 'Order Now'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
