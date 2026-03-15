import HomeClient from '@/components/HomeClient'
import { ReviewSchema } from '@/components/SchemaMarkup'
import { testimonials } from '@/data/testimonials'

export default function HomePage() {
  const reviewData = testimonials.map(t => ({
    name: t.name,
    text: t.text,
    rating: t.rating,
    date: t.date,
    location: t.location,
  }))

  return (
    <>
      <ReviewSchema reviews={reviewData} />
      <HomeClient />
    </>
  )
}
