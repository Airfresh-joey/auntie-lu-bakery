import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/data/blog/posts-1'
import { posts1 } from '@/data/blog/posts-1'
import { posts2 } from '@/data/blog/posts-2'
import { posts3 } from '@/data/blog/posts-3'
import { posts4 } from '@/data/blog/posts-4'
import { posts5 } from '@/data/blog/posts-5'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import { BlogPostSchema } from '@/components/SchemaMarkup'
import ProductImageGrid from '@/components/ProductImageGrid'
import { blogPostImages } from '@/data/gallery'

const allPosts: BlogPost[] = [...posts1, ...posts2, ...posts3, ...posts4, ...posts5]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.auntielusbakery.com/blog/${post.slug}`,
      siteName: "Auntie Lu's Bakery",
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://www.auntielusbakery.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = post.relatedSlugs
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3) as BlogPost[]

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.metaDescription}
        datePublished={post.datePublished}
        author="Auntie Lu"
        image={post.image}
        url={`https://www.auntielusbakery.com/blog/${post.slug}`}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article */}
      <article className="py-12 px-[4%]">
        <div className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          {/* Category Badge */}
          <span className="inline-block bg-cream text-crust text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-crust leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#6B6560] mb-10 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-1.5">
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Auntie Lu
            </span>
          </div>

          {/* Blog Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Blog Content Styles */}
          <style>{`
            .blog-content h2 {
              font-family: 'Playfair Display', Georgia, serif;
              font-size: 1.5rem;
              font-weight: 700;
              color: #2D2A26;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              line-height: 1.3;
            }
            .blog-content h3 {
              font-family: 'Playfair Display', Georgia, serif;
              font-size: 1.25rem;
              font-weight: 600;
              color: #5C3D22;
              margin-top: 2rem;
              margin-bottom: 0.75rem;
              line-height: 1.4;
            }
            .blog-content p {
              color: #374151;
              line-height: 1.75;
              margin-bottom: 1rem;
            }
            .blog-content ul {
              list-style-type: disc;
              padding-left: 1.5rem;
              margin-bottom: 1rem;
            }
            .blog-content ol {
              list-style-type: decimal;
              padding-left: 1.5rem;
              margin-bottom: 1rem;
            }
            .blog-content ul > li,
            .blog-content ol > li {
              color: #374151;
              margin-bottom: 0.5rem;
              line-height: 1.75;
            }
            .blog-content a {
              color: #8B5E34;
              text-decoration: underline;
              transition: color 0.2s;
            }
            .blog-content a:hover {
              color: #5C3D22;
            }
            .blog-content strong {
              font-weight: 600;
              color: #2D2A26;
            }
            .blog-content blockquote {
              border-left: 4px solid #D4A853;
              padding-left: 1.25rem;
              margin: 1.5rem 0;
              font-style: italic;
              color: #6B6560;
            }
            .blog-content img {
              border-radius: 0.75rem;
              margin: 1.5rem 0;
              width: 100%;
              height: auto;
            }
          `}</style>
        </div>
      </article>

      {/* Product Showcase */}
      <ProductImageGrid
        title="Explore Our Creations"
        subtitle="See what we can create for your next celebration"
        images={blogPostImages}
        columns={4}
        background="cream"
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-[4%] bg-cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-dark-crust mb-8 text-center">
              You Might Also Enjoy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <Link
                    href={`/blog/${related.slug}`}
                    className="block relative aspect-[16/10] overflow-hidden"
                  >
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      unoptimized
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block self-start bg-cream text-crust text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-2">
                      {related.category}
                    </span>
                    <h3 className="font-serif text-lg text-dark-crust mb-2 leading-snug">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="no-underline text-dark-crust hover:text-crust transition-colors"
                      >
                        {related.title}
                      </Link>
                    </h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed mb-3 flex-1">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <time
                        dateTime={related.datePublished}
                        className="text-xs text-gray-400"
                      >
                        {formatDate(related.datePublished)}
                      </time>
                      <Link
                        href={`/blog/${related.slug}`}
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
      )}

      <CTASection
        title="Inspired? Let's Create Something Sweet"
        description="Whether it's a custom wedding cake, birthday treats, or artisan sourdough, Auntie Lu's Bakery brings your vision to life. Order today in San Diego!"
        buttonText="Start Your Order"
        buttonHref="/#products"
      />
    </>
  )
}
