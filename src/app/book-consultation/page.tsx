import type { Metadata } from 'next'
import BookConsultationClient from './BookConsultationClient'
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Book a Consultation | Auntie Lu\'s Bakery - San Diego Custom Cakes',
  description: 'Schedule a free consultation with Auntie Lu to discuss your custom cake, cake pops, or sourdough order. Serving the San Diego area.',
  openGraph: {
    title: 'Book a Consultation | Auntie Lu\'s Bakery',
    description: 'Schedule a free consultation to discuss your custom cake, cake pops, or sourdough order.',
    url: 'https://www.auntielusbakery.com/book-consultation',
  },
}

export default function BookConsultationPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.auntielusbakery.com' },
        { name: 'Book a Consultation', url: 'https://www.auntielusbakery.com/book-consultation' },
      ]} />
      <BookConsultationClient />
    </>
  )
}
