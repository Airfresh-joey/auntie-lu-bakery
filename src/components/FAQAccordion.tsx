'use client'

import { useState } from 'react'

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-blush">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 bg-transparent border-none cursor-pointer text-left gap-4">
        <h3 className="text-base md:text-lg font-medium text-charcoal m-0">{question}</h3>
        <span className={`text-crust text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-soft-brown leading-relaxed m-0">{answer}</p>
      </div>
    </div>
  )
}

export function FAQList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div>
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}
