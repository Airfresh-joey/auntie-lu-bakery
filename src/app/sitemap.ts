import { MetadataRoute } from 'next'
import { allCities } from '@/data/cities'
import { getAllEventSlugs } from '@/data/events'
import { products } from '@/data/products'
import { posts1 } from '@/data/blog/posts-1'
import { posts2 } from '@/data/blog/posts-2'
import { posts3 } from '@/data/blog/posts-3'
import { posts4 } from '@/data/blog/posts-4'
import { posts5 } from '@/data/blog/posts-5'

const BASE_URL = 'https://www.auntielusbakery.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const allBlogPosts = [...posts1, ...posts2, ...posts3, ...posts4, ...posts5]
  const eventSlugs = getAllEventSlugs()
  const today = new Date().toISOString().split('T')[0]

  // Homepage
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Event & service pages (27 pages)
  const eventServicePages: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // City pages (56 pages)
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts (15 posts)
  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified || post.datePublished,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Product pages (11 pages)
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/${product.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...eventServicePages, ...cityPages, ...productPages, ...blogPages]
}
