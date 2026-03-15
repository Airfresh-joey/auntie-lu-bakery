export interface Testimonial {
  id: number
  name: string
  location: string
  rating: 5
  text: string
  eventType: string
  venue?: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'La Jolla',
    rating: 5,
    text: 'Our wedding cake at Hotel del Coronado was absolutely stunning. Auntie Lu\'s team delivered a five-tier buttercream masterpiece with cascading sugar flowers that matched our blush and ivory palette perfectly. Every guest commented on how delicious it was - the champagne cake with strawberry filling was heavenly!',
    eventType: 'wedding-cakes',
    venue: 'Hotel del Coronado',
    date: '2025-09',
  },
  {
    id: 2,
    name: 'Maria G.',
    location: 'Chula Vista',
    rating: 5,
    text: 'The quinceañera cake exceeded our expectations. The attention to detail was incredible! A gorgeous rose gold and burgundy three-tier cake with a fondant tiara topper. Auntie Lu even made matching cake pops in our color scheme for the sweet table. Our guests at Villa del Mar couldn\'t stop raving.',
    eventType: 'quinceanera-cakes',
    venue: 'Villa del Mar',
    date: '2025-11',
  },
  {
    id: 3,
    name: 'Jennifer & David K.',
    location: 'Del Mar',
    rating: 5,
    text: 'We hired Auntie Lu\'s for our beach wedding at The Lodge at Torrey Pines. The naked cake with fresh flowers was rustic perfection - exactly what we envisioned for our coastal ceremony. The lemon lavender flavor was an absolute hit. Setup and delivery were flawless.',
    eventType: 'beach-wedding-cakes',
    venue: 'The Lodge at Torrey Pines',
    date: '2025-06',
  },
  {
    id: 4,
    name: 'Ashley R.',
    location: 'North Park',
    rating: 5,
    text: 'My daughter\'s unicorn birthday cake was pure magic! The pastel rainbow layers inside were such a fun surprise when we cut into it. All the kids at the party went wild. Auntie Lu made it exactly how my 6-year-old described her dream cake. We\'ve already booked for next year!',
    eventType: 'birthday-cakes',
    date: '2025-10',
  },
  {
    id: 5,
    name: 'Robert T.',
    location: 'Coronado',
    rating: 5,
    text: 'Our company holiday party at the Hilton San Diego Bayfront featured a stunning dessert table by Auntie Lu\'s. The variety of cake pops, cupcakes, and a centerpiece cake with our logo was incredibly impressive. Professional, punctual, and absolutely delicious. We\'ve already signed up for our next quarterly event.',
    eventType: 'corporate-events',
    venue: 'Hilton San Diego Bayfront',
    date: '2025-12',
  },
  {
    id: 6,
    name: 'Priya S.',
    location: 'Rancho Santa Fe',
    rating: 5,
    text: 'Auntie Lu created the most beautiful engagement party cake for us at The Inn at Rancho Santa Fe. A two-tier marble fondant cake with gold leaf accents and sugar peonies. It looked like it came straight out of a bridal magazine. The dark chocolate ganache filling was to die for.',
    eventType: 'engagement-party-cakes',
    venue: 'The Inn at Rancho Santa Fe',
    date: '2025-08',
  },
  {
    id: 7,
    name: 'Lisa & Tom W.',
    location: 'Pacific Beach',
    rating: 5,
    text: 'We ordered four dozen custom cake pops for our baby shower and they were the star of the party! Perfectly dipped in baby blue and white with tiny fondant booties on each one. Almost too cute to eat. The vanilla cake with cream cheese filling inside was amazing.',
    eventType: 'baby-shower-cakes',
    date: '2026-01',
  },
  {
    id: 8,
    name: 'Michael C.',
    location: 'Hillcrest',
    rating: 5,
    text: 'Ordered Auntie Lu\'s sourdough dinner rolls for our Thanksgiving gathering and they were hands down the best rolls I\'ve ever had. Crispy on the outside, perfectly soft inside, with that real sourdough tang. We ordered three dozen and wished we\'d gotten six. Will never go back to store-bought!',
    eventType: 'sourdough',
    date: '2025-11',
  },
  {
    id: 9,
    name: 'Diana L.',
    location: 'Encinitas',
    rating: 5,
    text: 'For my son\'s high school graduation party we ordered a custom cake with his school colors and a cap-and-gown fondant topper. It fed 80 guests easily and everyone loved the red velvet flavor. Auntie Lu also made photo pops with his senior portrait - such a unique keepsake!',
    eventType: 'graduation-cakes',
    date: '2025-06',
  },
  {
    id: 10,
    name: 'Carlos & Ana P.',
    location: 'National City',
    rating: 5,
    text: 'We celebrated our 25th wedding anniversary with a gorgeous silver and white tiered cake from Auntie Lu\'s. She recreated elements from our original wedding cake but with a modern twist. The salted caramel flavor was incredible. Our family was so impressed - it was the perfect centerpiece for the evening.',
    eventType: 'anniversary-cakes',
    date: '2025-07',
  },
  {
    id: 11,
    name: 'Rachel & Ben H.',
    location: 'Carlsbad',
    rating: 5,
    text: 'Our gender reveal cake was the highlight of the party! When we cut into the beautiful white buttercream cake and saw the pink filling inside, the whole backyard erupted. Auntie Lu also made "Team Boy" and "Team Girl" cake pops for guests. Everything was delicious and the secret was kept perfectly!',
    eventType: 'gender-reveal-cakes',
    date: '2025-05',
  },
  {
    id: 12,
    name: 'Stephanie N.',
    location: 'Mission Valley',
    rating: 5,
    text: 'I ordered a custom sourdough loaf and cake pops for my bridal shower brunch at Estancia La Jolla. The sourdough was perfect for our avocado toast station, and the rose gold cake pops matched our decor beautifully. Auntie Lu went above and beyond to make everything cohesive with our theme.',
    eventType: 'bridal-shower-cakes',
    venue: 'Estancia La Jolla',
    date: '2025-04',
  },
  {
    id: 13,
    name: 'Commander James F.',
    location: 'Imperial Beach',
    rating: 5,
    text: 'We ordered a military homecoming cake for my unit\'s return celebration at Naval Base San Diego. The attention to detail on the patriotic design was outstanding - the American flag fondant work was incredibly precise. Fed over 100 people and every slice was moist and flavorful. True craftsmanship.',
    eventType: 'military-celebration-cakes',
    venue: 'Naval Base San Diego',
    date: '2025-09',
  },
  {
    id: 14,
    name: 'Hannah & Josh M.',
    location: 'Gaslamp Quarter',
    rating: 5,
    text: 'We wanted something different for our wedding at The Prado in Balboa Park, so we did a dessert table instead of a traditional cake. Auntie Lu created an incredible spread - mini cakes, cake pops, decorated cookies, and a small cutting cake. It was gorgeous and our guests loved having options!',
    eventType: 'dessert-tables',
    venue: 'The Prado at Balboa Park',
    date: '2025-10',
  },
  {
    id: 15,
    name: 'Tanya V.',
    location: 'Temecula',
    rating: 5,
    text: 'Found Auntie Lu\'s online while planning my 40th birthday at a Temecula winery. She drove all the way out to deliver the most elegant wine-themed cake I\'ve ever seen - complete with fondant grape clusters and a gold "Cheers to 40" topper. The champagne cake flavor was absolutely perfect for the setting.',
    eventType: 'birthday-cakes',
    date: '2025-08',
  },
  {
    id: 16,
    name: 'The Goldstein Family',
    location: 'La Jolla',
    rating: 5,
    text: 'Auntie Lu created an incredible Bar Mitzvah cake for our son\'s celebration at the Sheraton La Jolla. The three-tier design incorporated his Torah portion theme beautifully with navy blue and silver accents. She also made 100 custom cake pops as party favors. Every detail was thoughtful and delicious.',
    eventType: 'bar-mitzvah-bat-mitzvah-cakes',
    venue: 'Sheraton La Jolla',
    date: '2025-03',
  },
  {
    id: 17,
    name: 'Patricia D.',
    location: 'Escondido',
    rating: 5,
    text: 'We threw my mom a surprise retirement party and the cake from Auntie Lu\'s was the showstopper. It was designed to look like a stack of books (she\'s a librarian!) with edible gold reading glasses on top. The funfetti flavor was her favorite. Such creativity and artistry - worth every penny.',
    eventType: 'retirement-cakes',
    date: '2025-02',
  },
  {
    id: 18,
    name: 'Olivia & Marcus J.',
    location: 'Oceanside',
    rating: 5,
    text: 'We ordered three dozen photo cake pops with our engagement photos for our rehearsal dinner. Guests were amazed that each pop had a tiny, perfectly printed photo! The quality was unbelievable. We also got a classic sourdough loaf as a thank-you gift for our wedding planner - she loved it.',
    eventType: 'cake-pops',
    date: '2025-07',
  },
]

export function getTestimonialsByEvent(eventSlug: string): Testimonial[] {
  return testimonials.filter(t => t.eventType === eventSlug)
}

export function getFeaturedTestimonials(count: number = 6): Testimonial[] {
  return testimonials.slice(0, count)
}
