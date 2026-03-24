import type { Metadata } from 'next'
import Link from 'next/link'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: "Customer Reviews | What San Diego Says About Us",
  description: "Read real reviews from Auntie Lu's Bakery customers. See why San Diego loves our wedding cakes, birthday cakes, cupcakes, and artisan breads. 5-star rated bakery.",
  openGraph: {
    title: "Customer Reviews | Auntie Lu's Bakery San Diego",
    description: "Read real reviews from Auntie Lu's Bakery customers. See why San Diego loves our wedding cakes, birthday cakes, cupcakes, and artisan breads.",
    images: [{ url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/reviews',
  },
}

const reviews = [
  {
    id: 1,
    name: 'Jennifer & Mark Wilson',
    location: 'La Jolla, CA',
    date: 'March 2025',
    rating: 5,
    category: 'Wedding Cake',
    title: 'Our Wedding Cake Was Absolutely Perfect',
    review: "From our first tasting to the delivery on our wedding day, Auntie Lu's exceeded every expectation. Our 4-tier wedding cake was not only stunning but the most delicious cake our guests had ever tasted. Maria designed exactly what we envisioned!",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'North Park, CA',
    date: 'February 2025',
    rating: 5,
    category: 'Sourdough',
    title: 'The Best Sourdough in San Diego',
    review: "I've tried sourdough from every bakery in town, and nothing compares to James's loaves at Auntie Lu's. The crust is perfectly crispy, the crumb is open and airy, and the flavor is incredible. I'm now a weekly subscriber!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    location: 'Hillcrest, CA',
    date: 'February 2025',
    rating: 5,
    category: 'Birthday Cake',
    title: 'Made My Daughter\'s 5th Birthday Magical',
    review: "The unicorn cake for my daughter's birthday was beyond magical! The attention to detail was incredible, and every child at the party couldn't stop talking about it. The vanilla buttercream was to die for.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    location: 'Downtown San Diego',
    date: 'January 2025',
    rating: 5,
    category: 'Corporate Order',
    title: 'Perfect for Our Company Event',
    review: "Ordered 200 cupcakes for our corporate event and they were a massive hit! Professional delivery, beautiful presentation, and incredible taste. Already planning our next order.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Sarah Kim',
    location: 'Mission Valley, CA',
    date: 'January 2025',
    rating: 5,
    category: 'Cupcakes',
    title: 'Cupcakes That Taste Like Heaven',
    review: "I get cupcakes here monthly for our office. The red velvet and salted caramel are staff favorites. They're always fresh, always beautiful, and always delicious!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'The Martinez Family',
    location: 'Chula Vista, CA',
    date: 'December 2024',
    rating: 5,
    category: 'Holiday Order',
    title: 'Made Our Holidays Special',
    review: "We've ordered our holiday pies and cookies from Auntie Lu's for three years now. The pumpkin pie is legendary in our family, and the decorated sugar cookies make perfect gifts. Can't imagine holidays without them!",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: 7,
    name: 'Emily Foster',
    location: 'Coronado, CA',
    date: 'December 2024',
    rating: 5,
    category: 'Cake Pops',
    title: 'Party Favors Everyone Loved',
    review: "Ordered 100 cake pops for my baby shower and they were adorable AND delicious. The packaging was beautiful and each one was perfectly decorated. So many compliments!",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
  },
  {
    id: 8,
    name: 'Robert & Lisa Park',
    location: 'Del Mar, CA',
    date: 'November 2024',
    rating: 5,
    category: 'Wedding Cake',
    title: 'Worth Every Penny',
    review: "We splurged on our dream wedding cake and it was worth every single penny. Five tiers of perfection with handmade sugar flowers that looked real. Our photographer got amazing shots. Thank you, Auntie Lu's team!",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&h=100&fit=crop',
  },
]

const stats = [
  { value: '4.9', label: 'Average Rating', icon: '⭐' },
  { value: '2,500+', label: 'Happy Customers', icon: '😊' },
  { value: '15+', label: 'Years Baking', icon: '🎂' },
  { value: '100%', label: 'Made Fresh Daily', icon: '🥖' },
]

const categories = ['All', 'Wedding Cake', 'Birthday Cake', 'Cupcakes', 'Sourdough', 'Cake Pops', 'Corporate Order', 'Holiday Order']

export default function ReviewsPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.auntielusbakery.com' },
          { name: 'Reviews', url: 'https://www.auntielusbakery.com/reviews' },
        ]}
      />

      <main className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-pink-100 to-cream-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-pink-600 font-medium tracking-wider uppercase mb-4">
              Customer Love
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Read what San Diego families, couples, 
              and businesses have to say about their Auntie Lu's experience.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-pink-600">{stat.value}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}</div>
                      <div className="text-sm text-gray-400">{review.date}</div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full mb-3">
                    {review.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {review.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Love Your Experience?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Leave us a review and help other San Diego 
              families discover the joy of Auntie Lu's.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://g.page/r/auntielusbakery/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Review on Google
              </a>
              <a
                href="https://www.yelp.com/biz/auntie-lus-bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-800 transition-colors"
              >
                Review on Yelp
              </a>
            </div>
          </div>
        </section>

        {/* Order CTA */}
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers who've made Auntie Lu's their go-to bakery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                Browse Our Menu
              </Link>
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Book a Tasting
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
