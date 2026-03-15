import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/data/blog/posts-1'
import { posts1 } from '@/data/blog/posts-1'
import { posts2 } from '@/data/blog/posts-2'
import { posts3 } from '@/data/blog/posts-3'
import { posts4 } from '@/data/blog/posts-4'
import { posts5 } from '@/data/blog/posts-5'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog - Baking Tips, Wedding Cake Ideas & San Diego Guides',
  description:
    "Explore Auntie Lu's Bakery blog for baking tips, wedding cake inspiration, San Diego event guides, and behind-the-scenes stories from our San Diego bakery.",
  openGraph: {
    title: "Blog - Baking Tips, Wedding Cake Ideas & San Diego Guides | Auntie Lu's Bakery",
    description:
      "Explore Auntie Lu's Bakery blog for baking tips, wedding cake inspiration, San Diego event guides, and behind-the-scenes stories from our San Diego bakery.",
    url: 'https://www.auntielusbakery.com/blog',
    siteName: "Auntie Lu's Bakery",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://www.auntielusbakery.com/blog',
  },
}

const allPosts: BlogPost[] = [...posts1, ...posts2, ...posts3, ...posts4, ...posts5]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndexPage() {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 px-[4%] bg-gradient-to-b from-dark-crust to-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-wheat font-medium text-sm tracking-widest uppercase mb-4">
            From Our Kitchen
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Baking Tips &amp; Inspiration
          </h1>
          <p className="text-lg md:text-xl text-blush leading-relaxed max-w-2xl mx-auto">
            Recipes, decorating ideas, wedding cake guides, and stories from San
            Diego&apos;s favorite neighborhood bakery.
          </p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 px-[4%] bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Card Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <span className="inline-block self-start bg-cream text-crust text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-xl text-dark-crust mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="no-underline text-dark-crust hover:text-crust transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#6B6560] text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer: Date + Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <time
                      dateTime={post.datePublished}
                      className="text-xs text-gray-400"
                    >
                      {formatDate(post.datePublished)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-crust text-sm font-medium no-underline hover:text-dark-crust transition-colors"
                    >
                      Read More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
