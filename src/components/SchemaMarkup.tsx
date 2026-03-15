export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: "Auntie Lu's Bakery",
    description: 'San Diego\'s favorite custom bakery for wedding cakes, birthday cakes, artisan sourdough bread, and handcrafted cake pops. Serving La Jolla, Coronado, Del Mar & all San Diego neighborhoods.',
    url: 'https://www.auntielusbakery.com',
    telephone: '',
    email: 'hello@auntielusbakery.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7157,
      longitude: -117.1611,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 32.7157, longitude: -117.1611 },
      geoRadius: '80000',
    },
    priceRange: '$$',
    servesCuisine: ['Bakery', 'Sourdough', 'Cake Pops', 'Custom Cakes'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
    foundingDate: '2022',
    founder: { '@type': 'Person', name: 'Auntie Lu' },
    sameAs: [
      'https://instagram.com/auntielusbakery',
      'https://facebook.com/auntielusbakery',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({ name, description, price, image, url }: {
  name: string
  description: string
  price: string
  image: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    brand: { '@type': 'Brand', name: "Auntie Lu's Bakery" },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: "Auntie Lu's Bakery" },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema({ reviews }: { reviews: { name: string; text: string; rating: number; date: string; location: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Auntie Lu's Bakery",
    url: 'https://www.auntielusbakery.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(reviews.length),
      bestRating: '5',
      worstRating: '5',
    },
    review: reviews.map(r => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BlogPostSchema({ title, description, datePublished, author, image, url }: {
  title: string
  description: string
  datePublished: string
  author: string
  image: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: "Auntie Lu's Bakery", url: 'https://www.auntielusbakery.com' },
    image,
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
