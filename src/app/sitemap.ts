import { MetadataRoute } from 'next'
import { allCities } from '@/data/cities'
import { getAllEventSlugs } from '@/data/events'
import { products } from '@/data/products'

const BASE_URL = 'https://www.auntielusbakery.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const eventSlugs = getAllEventSlugs()
  const today = new Date().toISOString().split('T')[0]

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
      url: `${BASE_URL}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/our-story`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const eventServicePages: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/${product.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...eventServicePages, ...cityPages, ...productPages]
}
