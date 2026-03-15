'use client'

import { useState, useEffect } from 'react'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem('newsletter_dismissed')
    const subscribed = localStorage.getItem('newsletter_subscribed')
    
    if (dismissed || subscribed) return

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Using Formspree for simplicity - replace with your form ID
      const res = await fetch('https://formspree.io/f/myznknaa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Newsletter Signup' })
      })

      if (res.ok) {
        setStatus('success')
        localStorage.setItem('newsletter_subscribed', 'true')
        setTimeout(() => setIsOpen(false), 2000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleDismiss = () => {
    setIsOpen(false)
    localStorage.setItem('newsletter_dismissed', Date.now().toString())
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🧁</div>
            <h3 className="text-2xl font-serif text-[#5C3D22] mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-600">Watch your inbox for sweet updates.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🍞✨</div>
              <h3 className="text-2xl font-serif text-[#5C3D22] mb-2">
                Get 10% Off Your First Order
              </h3>
              <p className="text-gray-600">
                Join our newsletter for exclusive deals, new flavors, and baking tips!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A853] focus:border-transparent outline-none"
              />
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#5C3D22] text-white py-3 rounded-lg font-semibold hover:bg-[#4a3119] transition disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Get My 10% Off'}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
