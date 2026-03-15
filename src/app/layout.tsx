import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import CartSidebar from '@/components/CartSidebar'
import { LocalBusinessSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.auntielusbakery.com'),
  title: {
    default: "Auntie Lu's Bakery | Custom Cakes, Sourdough & Cake Pops - San Diego, CA",
    template: "%s | Auntie Lu's Bakery San Diego",
  },
  description: 'San Diego\'s favorite custom bakery for wedding cakes, birthday cakes, artisan sourdough, and handcrafted cake pops. Serving La Jolla, Coronado, Del Mar & all San Diego neighborhoods.',
  keywords: ['custom cakes San Diego', 'bakery San Diego', 'wedding cakes San Diego', 'birthday cakes San Diego', 'cupcakes San Diego', 'best bakery San Diego', 'cake pops San Diego', 'quinceañera cakes San Diego', 'beach wedding cakes San Diego', 'gluten free cakes San Diego'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.auntielusbakery.com',
    siteName: "Auntie Lu's Bakery",
    title: "Auntie Lu's Bakery | Custom Cakes & Sourdough - San Diego, CA",
    description: 'San Diego\'s favorite custom bakery for wedding cakes, birthday cakes, artisan sourdough, and handcrafted cake pops. Serving all San Diego neighborhoods.',
    images: [{ url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Auntie Lu's Bakery | Custom Cakes & Sourdough - San Diego, CA",
    description: 'San Diego\'s favorite custom bakery for wedding cakes, birthday cakes, artisan sourdough, and handcrafted cake pops.',
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-AUNTIELUS" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-AUNTIELUS');
            `,
          }}
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
