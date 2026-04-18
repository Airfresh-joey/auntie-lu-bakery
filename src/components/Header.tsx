'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from './CartProvider'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cart, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navLinkClass = "text-[#6B6560] no-underline text-[0.9rem] font-medium tracking-wide hover:text-dark-crust transition-colors"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-400 ${scrolled ? 'bg-cream/95 backdrop-blur-xl py-3 px-[4%] shadow-[0_2px_20px_rgba(0,0,0,0.05)]' : 'py-5 px-[4%]'}`}>
      <Link href="/" className="font-serif text-[1.75rem] font-semibold text-dark-crust no-underline tracking-tight">
        Auntie Lu&apos;s
      </Link>
      <ul className={`flex gap-8 list-none items-center max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen max-md:w-[280px] max-md:bg-cream max-md:flex-col max-md:items-start max-md:pt-24 max-md:px-8 max-md:gap-6 max-md:shadow-[-5px_0_30px_rgba(0,0,0,0.1)] max-md:transition-transform max-md:duration-300 max-md:overflow-y-auto ${mobileOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'} max-md:z-[1001]`}>
        <li><Link href="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>About</Link></li>
        <li><Link href="/#products" className={navLinkClass} onClick={() => setMobileOpen(false)}>Products</Link></li>
        <li><Link href="/gallery" className={navLinkClass} onClick={() => setMobileOpen(false)}>Gallery</Link></li>
        <li><Link href="/faq" className={navLinkClass} onClick={() => setMobileOpen(false)}>FAQ</Link></li>
        <li><Link href="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>Contact</Link></li>
        <li><Link href="/contact" className="bg-dark-crust text-white px-6 py-3 rounded-full text-[0.9rem] font-semibold no-underline hover:bg-crust hover:-translate-y-0.5 transition-all" onClick={() => setMobileOpen(false)}>Order Now</Link></li>
      </ul>
      <div className="flex items-center gap-3">
        <button onClick={toggleCart} className="bg-crust text-white border-none rounded-full px-4 py-2 text-base cursor-pointer flex items-center gap-1.5 hover:bg-dark-crust transition-colors" aria-label="Shopping cart">
          <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">{totalItems}</span>
        </button>
        <button className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2.5 bg-transparent border-none z-[1002]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-dark-crust transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-crust transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-dark-crust transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>
      {mobileOpen && <div className="fixed inset-0 bg-black/30 z-[1000] md:hidden" onClick={() => setMobileOpen(false)} />}
    </nav>
  )
}
