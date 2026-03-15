export interface VenuePartner {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  tagline: string
  heroImage: string
  description: string
  whyWeLoveIt: string[]
  venueStyle: string
  capacity: string
  setting: string
  cakeRecommendations: {
    title: string
    description: string
  }[]
  gallery: {
    src: string
    alt: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const venuePartners: VenuePartner[] = [
  {
    slug: 'hotel-del-coronado',
    name: 'Hotel del Coronado',
    title: 'Wedding Cakes for Hotel del Coronado | Auntie Lu\'s Bakery',
    metaDescription: 'Auntie Lu\'s Bakery creates stunning custom wedding cakes for Hotel del Coronado celebrations. Elegant designs that complement the Del\'s iconic oceanfront setting in Coronado, CA.',
    h1: 'Wedding Cakes for Hotel del Coronado',
    tagline: 'Iconic oceanfront elegance deserves an unforgettable cake',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&h=700&fit=crop',
    description: 'The Hotel del Coronado is one of the most iconic wedding venues on the West Coast. With its Victorian architecture, sweeping ocean views, and legendary charm, the Del sets the stage for celebrations that are nothing short of magical. Auntie Lu\'s Bakery is proud to partner with this landmark property to create custom wedding cakes and desserts that match the grandeur of every event held on its grounds. From intimate ceremonies on the Windsor Lawn to grand ballroom receptions in the Crown Room, we design cakes that honor the setting while reflecting each couple\'s unique story.',
    whyWeLoveIt: [
      'The Del\'s event team is incredibly professional and makes vendor coordination seamless',
      'The oceanfront ceremony locations create stunning backdrops that inspire our cake designs',
      'Multiple venue spaces mean we can tailor cake scale and style to each room\'s personality',
      'The hotel\'s rich history and Victorian architecture provide endless design inspiration',
      'Coronado Island\'s mild coastal climate is ideal for buttercream and fondant work year-round',
    ],
    venueStyle: 'Grand Victorian oceanfront resort',
    capacity: '20–500 guests',
    setting: 'Beachfront & ballroom',
    cakeRecommendations: [
      {
        title: 'Classic White Tiered Cake with Sugar Flowers',
        description: 'A five-tier white buttercream cake adorned with hand-crafted sugar peonies and roses. The clean elegance pairs perfectly with the Del\'s timeless architecture and ocean backdrop.',
      },
      {
        title: 'Coastal-Inspired Ombré Cake',
        description: 'Soft blue-to-white ombré buttercream tiers with edible gold leaf accents and fresh tropical blooms. Inspired by the Pacific Ocean views from the venue\'s terrace.',
      },
      {
        title: 'Vintage Victorian Fondant Cake',
        description: 'Intricate fondant lace patterns with antique gold piping and fresh garden roses. A nod to the Del\'s 1888 heritage and Victorian grandeur.',
      },
      {
        title: 'Cake Pop Display Tower',
        description: 'An elegant tower of 200+ white chocolate cake pops with gold drizzle and custom monogram packaging. Perfect for cocktail hour on the Sun Deck.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Elegant tiered wedding cake at oceanfront venue' },
      { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop', alt: 'Beach wedding ceremony setup with floral arch' },
      { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', alt: 'Grand ballroom wedding reception' },
      { src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop', alt: 'White wedding cake with sugar flowers' },
      { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=400&fit=crop', alt: 'Couple at sunset on the beach' },
      { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', alt: 'Elegant dessert table with cake pops' },
    ],
    faqs: [
      {
        question: 'Can you deliver cakes directly to Hotel del Coronado?',
        answer: 'Yes. We coordinate directly with the Del\'s events team for delivery timing, loading dock access, and in-room setup. We handle all logistics so you can focus on enjoying your celebration.',
      },
      {
        question: 'Do you offer tastings for couples planning a wedding at the Del?',
        answer: 'Absolutely. We offer complimentary tasting sessions at our San Diego kitchen for couples who have booked the Hotel del Coronado. We typically schedule tastings 4-6 months before the wedding date.',
      },
      {
        question: 'What size cake do you recommend for a Hotel del Coronado wedding?',
        answer: 'For Crown Room receptions, we recommend a 4-5 tier statement cake. For more intimate settings like the Garden Patio, a 3-tier cake with a supplemental cake pop display works beautifully. We customize recommendations based on your guest count and venue space.',
      },
    ],
  },
  {
    slug: 'la-jolla-shores',
    name: 'La Jolla Shores',
    title: 'Wedding Cakes for La Jolla Shores Events | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes and desserts for La Jolla Shores celebrations. Auntie Lu\'s Bakery creates coastal-inspired cakes perfect for beachside weddings in La Jolla, San Diego.',
    h1: 'Wedding Cakes for La Jolla Shores',
    tagline: 'Coastal sophistication meets San Diego\'s most beautiful shoreline',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=700&fit=crop',
    description: 'La Jolla Shores offers some of the most breathtaking beachside wedding settings in all of Southern California. With its golden sand, gentle waves, and panoramic views stretching from the Scripps Pier to the La Jolla cliffs, this venue captures the essence of California coastal romance. Auntie Lu\'s Bakery creates custom cakes and desserts specifically designed for the La Jolla Shores experience, taking into account the ocean breeze, natural lighting, and relaxed elegance that defines celebrations here. Whether you are hosting a barefoot ceremony at sunset or an upscale reception at a nearby La Jolla estate, our cakes bring the sweetness your day deserves.',
    whyWeLoveIt: [
      'The natural beauty of La Jolla Shores provides an effortlessly stunning backdrop for cake displays',
      'The relaxed coastal setting inspires our most creative and nature-driven cake designs',
      'Proximity to our San Diego kitchen means fresh delivery with perfect timing',
      'The La Jolla community is close-knit and the local vendors collaborate beautifully',
      'Sunset celebrations here create unforgettable photo opportunities with our cakes',
    ],
    venueStyle: 'Beachside coastal',
    capacity: '20–200 guests',
    setting: 'Beach & oceanfront',
    cakeRecommendations: [
      {
        title: 'Barefoot Beach Semi-Naked Cake',
        description: 'A rustic three-tier semi-naked cake with vanilla bean buttercream, fresh berries, and eucalyptus greenery. Perfect for a relaxed beachside ceremony.',
      },
      {
        title: 'Sea Glass Watercolor Cake',
        description: 'Hand-painted watercolor tiers in soft aqua, seafoam, and sand tones with edible sea glass candy and shell details. Inspired by the La Jolla tide pools.',
      },
      {
        title: 'Tropical Bloom Buttercream Cake',
        description: 'Textured buttercream in warm ivory with cascading tropical flowers: proteas, orchids, and monstera leaves for a California-luxe feel.',
      },
      {
        title: 'Coastal Cake Pop Display',
        description: 'Sandy-gold and ocean-blue cake pops arranged on driftwood boards with starfish accents. A grab-and-go treat perfect for outdoor beach receptions.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=400&fit=crop', alt: 'Beach wedding cake with floral details' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop', alt: 'Sunset beach ceremony in La Jolla' },
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', alt: 'Coastal wedding reception setup' },
      { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop', alt: 'Semi-naked wedding cake with flowers' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', alt: 'Floral wedding details' },
      { src: 'https://images.unsplash.com/photo-1470290449668-02dd93d9420a?w=600&h=400&fit=crop', alt: 'Ocean sunset at La Jolla Shores' },
    ],
    faqs: [
      {
        question: 'How do your cakes hold up in the La Jolla coastal heat?',
        answer: 'We use stabilized Swiss meringue buttercream and climate-smart construction for all outdoor beach events. We time our delivery close to the reception and recommend shaded cake placement. Our cakes are specifically formulated for San Diego\'s coastal conditions.',
      },
      {
        question: 'Can you set up a dessert display on the beach?',
        answer: 'Yes. We offer weather-resistant cake pop displays and dessert boards designed for outdoor use. We coordinate with your event planner on placement, shade structures, and wind protection to ensure everything stays beautiful throughout your celebration.',
      },
      {
        question: 'What is the lead time for a La Jolla Shores wedding cake?',
        answer: 'We recommend booking 3-5 months in advance for wedding cakes, especially during peak season (May through October). Contact us for a free consultation and tasting.',
      },
    ],
  },
  {
    slug: 'lodge-torrey-pines',
    name: 'The Lodge at Torrey Pines',
    title: 'Wedding Cakes for The Lodge at Torrey Pines | Auntie Lu\'s Bakery',
    metaDescription: 'Auntie Lu\'s Bakery creates luxury wedding cakes for The Lodge at Torrey Pines. Craftsman-inspired designs for one of San Diego\'s most prestigious wedding venues.',
    h1: 'Wedding Cakes for The Lodge at Torrey Pines',
    tagline: 'Craftsman luxury amid coastal pines and ocean bluffs',
    heroImage: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=1400&h=700&fit=crop',
    description: 'The Lodge at Torrey Pines is San Diego\'s premier luxury resort and one of the most prestigious wedding venues in Southern California. Nestled above the Torrey Pines State Natural Reserve with commanding views of the Pacific, the Lodge blends Craftsman architecture with world-class hospitality. Auntie Lu\'s Bakery partners with The Lodge to create wedding cakes that honor the venue\'s refined aesthetic: clean lines, natural textures, warm wood tones, and an understated elegance that lets the coastal landscape speak for itself. Every cake we create for Lodge weddings is designed to feel like it belongs in this extraordinary setting.',
    whyWeLoveIt: [
      'The Lodge\'s Craftsman architecture and warm wood interiors inspire sophisticated cake designs',
      'Their culinary team is exceptional and collaborating with them elevates our dessert presentations',
      'The bluff-top setting above Torrey Pines offers a unique blend of natural beauty and luxury',
      'The Lodge maintains impeccable standards that push us to deliver our absolute best work',
      'Multiple ceremony sites, from the Arroyo Terrace to the croquet lawn, offer diverse styling opportunities',
    ],
    venueStyle: 'Luxury Craftsman resort',
    capacity: '30–300 guests',
    setting: 'Coastal bluffs & resort grounds',
    cakeRecommendations: [
      {
        title: 'Craftsman-Inspired Textured Buttercream',
        description: 'A four-tier cake with hand-textured buttercream in warm ivory, accented with pressed botanical elements and matte gold leaf. Echoes the Lodge\'s Craftsman woodwork and earthy palette.',
      },
      {
        title: 'Garden Terrace Floral Cascade',
        description: 'Elegant fondant tiers with a dramatic cascade of seasonal garden flowers in blush, mauve, and sage. Designed to complement Arroyo Terrace celebrations.',
      },
      {
        title: 'Torrey Pine Needle Fondant Cake',
        description: 'Unique fondant work featuring subtle pine needle textures and sage green accents, paying homage to the rare Torrey Pines that surround the property.',
      },
      {
        title: 'Luxury Cake Pop Tasting Board',
        description: 'An artisan tasting board of premium cake pops in sophisticated flavors: lavender earl grey, salted caramel, champagne vanilla, and dark chocolate truffle.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&h=400&fit=crop', alt: 'Luxury tiered wedding cake with botanical details' },
      { src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&h=400&fit=crop', alt: 'Elegant garden terrace wedding ceremony' },
      { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', alt: 'Luxury wedding reception with warm lighting' },
      { src: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&h=400&fit=crop', alt: 'Wedding cake with delicate floral details' },
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', alt: 'Coastal bluff ceremony at sunset' },
      { src: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=400&fit=crop', alt: 'Cake pop dessert display at wedding' },
    ],
    faqs: [
      {
        question: 'Does the Lodge at Torrey Pines allow outside bakery vendors?',
        answer: 'Yes. The Lodge welcomes preferred outside bakery vendors, and Auntie Lu\'s Bakery has an established working relationship with their events team. We coordinate all delivery, setup, and timing directly with Lodge staff.',
      },
      {
        question: 'What cake style works best at The Lodge?',
        answer: 'We recommend designs that echo the Lodge\'s Craftsman aesthetic: warm tones, natural textures, pressed botanicals, and understated elegance. Clean lines and high-quality finishes complement the venue\'s refined atmosphere better than overly ornate designs.',
      },
      {
        question: 'How far ahead should I book for a Lodge wedding?',
        answer: 'Lodge weddings tend to be planned well in advance. We recommend booking your cake consultation 5-6 months before your wedding date to ensure availability and allow time for design development and tastings.',
      },
    ],
  },
  {
    slug: 'rancho-valencia',
    name: 'Rancho Valencia Resort & Spa',
    title: 'Wedding Cakes for Rancho Valencia Resort | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes for Rancho Valencia Resort & Spa in Rancho Santa Fe. Auntie Lu\'s Bakery creates luxury Mediterranean-inspired cakes for this exclusive venue.',
    h1: 'Wedding Cakes for Rancho Valencia Resort & Spa',
    tagline: 'Mediterranean luxury in the heart of Rancho Santa Fe',
    heroImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&h=700&fit=crop',
    description: 'Rancho Valencia Resort & Spa is one of Southern California\'s most exclusive wedding destinations. Tucked into the rolling hills of Rancho Santa Fe, this five-star resort offers lush gardens, Spanish Colonial architecture, and an intimate atmosphere that feels worlds away from the city. Auntie Lu\'s Bakery creates custom wedding cakes and desserts that embody the resort\'s Mediterranean elegance: think citrus groves, terracotta warmth, olive branches, and the kind of refined simplicity that makes Rancho Valencia truly special. Every design we create for this venue is crafted to harmonize with the resort\'s warm color palette and relaxed luxury.',
    whyWeLoveIt: [
      'The resort\'s lush gardens and citrus groves provide extraordinary natural backdrops for cake photography',
      'Rancho Valencia\'s Mediterranean architecture inspires warm, sun-kissed cake color palettes',
      'The intimate scale of the resort allows for highly personalized cake experiences',
      'Their culinary team appreciates artisan quality and collaborates closely with us on presentation',
      'The Rancho Santa Fe setting brings a quiet sophistication that pairs perfectly with our design style',
    ],
    venueStyle: 'Mediterranean luxury resort',
    capacity: '20–200 guests',
    setting: 'Garden estate & resort',
    cakeRecommendations: [
      {
        title: 'Mediterranean Citrus Cake',
        description: 'Lemon and olive oil cake tiers with mascarpone buttercream, decorated with candied citrus slices, fresh rosemary, and olive branch accents. A taste of the Rancho Valencia landscape.',
      },
      {
        title: 'Spanish Colonial Fondant Design',
        description: 'Ivory fondant with hand-painted terracotta tile patterns and gold leaf detail. Inspired by the resort\'s Spanish Colonial architecture and warm earth tones.',
      },
      {
        title: 'Garden Romance Naked Cake',
        description: 'A lightly frosted naked cake with layers visible, adorned with garden roses, lavender sprigs, and trailing greenery. Perfect for outdoor garden ceremonies.',
      },
      {
        title: 'Olive & Gold Cake Pop Collection',
        description: 'Sage green and gold cake pops with olive branch details, displayed on terracotta platters. A refined take on the Mediterranean aesthetic.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop', alt: 'Mediterranean garden wedding setup' },
      { src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=400&fit=crop', alt: 'Elegant wedding cake with floral accents' },
      { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop', alt: 'Intimate garden wedding ceremony' },
      { src: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?w=600&h=400&fit=crop', alt: 'Naked wedding cake with fresh flowers' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', alt: 'Romantic floral arrangement details' },
      { src: 'https://images.unsplash.com/photo-1470290449668-02dd93d9420a?w=600&h=400&fit=crop', alt: 'Golden sunset over resort gardens' },
    ],
    faqs: [
      {
        question: 'Do you deliver to Rancho Valencia in Rancho Santa Fe?',
        answer: 'Yes. Rancho Santa Fe is within our standard San Diego delivery area. We coordinate delivery timing with the resort\'s events team and handle all setup on-site.',
      },
      {
        question: 'What flavors pair well with a Mediterranean-themed wedding at Rancho Valencia?',
        answer: 'We love lemon and olive oil cake, blood orange buttercream, pistachio, honey lavender, and fig and mascarpone for Mediterranean-inspired celebrations. These flavors complement the resort\'s garden setting beautifully.',
      },
      {
        question: 'Can you coordinate with Rancho Valencia\'s catering team?',
        answer: 'Absolutely. We have a great working relationship with the Rancho Valencia culinary team. We coordinate dessert timing, presentation style, and dietary requirements to ensure a seamless dining experience.',
      },
    ],
  },
  {
    slug: 'the-prado-balboa-park',
    name: 'The Prado at Balboa Park',
    title: 'Wedding Cakes for The Prado at Balboa Park | Auntie Lu\'s Bakery',
    metaDescription: 'Auntie Lu\'s Bakery creates custom wedding cakes for The Prado at Balboa Park in San Diego. Spanish Colonial-inspired designs for this iconic cultural venue.',
    h1: 'Wedding Cakes for The Prado at Balboa Park',
    tagline: 'San Diego\'s cultural heart meets culinary artistry',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&h=700&fit=crop',
    description: 'The Prado at Balboa Park is one of San Diego\'s most beloved wedding venues, set within the historic House of Hospitality in the heart of Balboa Park. With its Spanish Colonial Revival architecture, hand-painted ceilings, wrought-iron details, and lush courtyard surrounded by the park\'s famous gardens, The Prado offers a uniquely romantic setting that blends culture, history, and natural beauty. Auntie Lu\'s Bakery creates wedding cakes and desserts that honor this extraordinary venue: designs inspired by the park\'s botanical gardens, the building\'s ornate tile work, and the warm, festive spirit of San Diego\'s most iconic public space.',
    whyWeLoveIt: [
      'The Spanish Colonial architecture provides the richest design inspiration of any San Diego venue',
      'Balboa Park\'s gardens and courtyards offer extraordinary ceremony and reception backdrops',
      'The Prado\'s event team is among the most experienced and supportive in San Diego',
      'The venue\'s cultural significance adds depth and meaning to every celebration held there',
      'Indoor-outdoor flow between the dining room and courtyard creates versatile cake display options',
    ],
    venueStyle: 'Spanish Colonial Revival',
    capacity: '50–300 guests',
    setting: 'Historic park & courtyard',
    cakeRecommendations: [
      {
        title: 'Hand-Painted Talavera Cake',
        description: 'Fondant tiers with hand-painted blue and white Talavera tile patterns inspired by The Prado\'s ceramic details. Gold accents and fresh marigolds complete the look.',
      },
      {
        title: 'Botanical Garden Buttercream Cake',
        description: 'Textured buttercream in soft sage and ivory with pressed edible flowers and trailing fern accents. Inspired by the park\'s world-famous Botanical Building.',
      },
      {
        title: 'Courtyard Romance Floral Cake',
        description: 'Classic fondant tiers with cascading fresh roses, peonies, and jasmine, designed to complement The Prado\'s romantic courtyard setting.',
      },
      {
        title: 'Fiesta-Style Cake Pop Display',
        description: 'Vibrant cake pops in warm oranges, reds, and golds displayed on hand-painted ceramic stands. A festive option that celebrates the venue\'s Spanish heritage.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Elegant tiered wedding cake' },
      { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop', alt: 'Spanish Colonial courtyard ceremony' },
      { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', alt: 'Historic ballroom reception' },
      { src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop', alt: 'Decorated wedding cake detail' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', alt: 'Wedding dinner reception setting' },
      { src: 'https://images.unsplash.com/photo-1525258946800-98cbbe049571?w=600&h=400&fit=crop', alt: 'Cake pop and dessert display' },
    ],
    faqs: [
      {
        question: 'Is Auntie Lu\'s Bakery on The Prado\'s preferred vendor list?',
        answer: 'We have a strong working relationship with The Prado\'s events team and have delivered cakes for numerous celebrations there. Contact us and we can share examples of our work at this venue.',
      },
      {
        question: 'Can the cake be displayed in the courtyard?',
        answer: 'Yes. We design cakes and displays specifically for both indoor and outdoor placement at The Prado. For courtyard receptions, we use stabilized buttercream and recommend shaded placement near the fountain area for the best presentation.',
      },
      {
        question: 'What design style works best at The Prado?',
        answer: 'Designs that draw on Spanish Colonial elements, warm earth tones, and botanical motifs work beautifully at The Prado. We love incorporating Talavera-inspired patterns, rich gold accents, and fresh garden flowers that echo the venue\'s character.',
      },
    ],
  },
  {
    slug: 'bernardo-winery',
    name: 'Bernardo Winery',
    title: 'Wedding Cakes for Bernardo Winery | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes for Bernardo Winery in San Diego. Auntie Lu\'s Bakery creates rustic, vineyard-inspired cakes perfect for this historic wine country venue.',
    h1: 'Wedding Cakes for Bernardo Winery',
    tagline: 'Rustic wine country charm in the heart of San Diego',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=700&fit=crop',
    description: 'Bernardo Winery is San Diego\'s oldest operating winery and one of the most charming wedding venues in the county. With its vine-covered courtyards, rustic barrel rooms, and relaxed wine country atmosphere, Bernardo Winery creates a setting that feels like a Tuscan estate nestled in the Rancho Bernardo hills. Auntie Lu\'s Bakery crafts wedding cakes and desserts that embrace the winery\'s rustic elegance: think grape vine motifs, wine-infused flavors, natural textures, and displays styled on wine barrels and reclaimed wood. Every cake we create for Bernardo Winery celebrates the marriage of artisan baking and artisan winemaking.',
    whyWeLoveIt: [
      'The winery\'s rustic courtyards and barrel rooms create a warm, intimate atmosphere we adore',
      'Wine-inspired cake flavors like cabernet chocolate and champagne vanilla pair perfectly with the setting',
      'The venue\'s artisan village feel aligns beautifully with our handcrafted baking philosophy',
      'Bernardo Winery\'s team embraces creativity and gives vendors room to create something special',
      'The relaxed, unpretentious atmosphere lets couples and their cakes truly shine',
    ],
    venueStyle: 'Rustic vineyard & winery',
    capacity: '50–250 guests',
    setting: 'Wine country courtyard',
    cakeRecommendations: [
      {
        title: 'Wine Barrel Naked Cake',
        description: 'A rustic naked cake with exposed layers of red velvet and cream cheese frosting, decorated with fresh grapes, figs, and rosemary. Displayed on a repurposed wine barrel top.',
      },
      {
        title: 'Cabernet Chocolate Drip Cake',
        description: 'Rich chocolate cake infused with cabernet sauvignon, topped with a dark chocolate ganache drip and fresh berries. A sophisticated nod to the winery\'s craft.',
      },
      {
        title: 'Vineyard Buttercream Cake',
        description: 'Textured ivory buttercream with hand-piped grape vine details in sage green and burgundy. Fresh eucalyptus and wine-colored roses complete the vineyard aesthetic.',
      },
      {
        title: 'Wine & Cheese Cake Pop Pairing',
        description: 'Cake pops in wine-inspired flavors (cabernet, champagne, rosé) displayed alongside artisan cheese boards. A unique dessert experience for wine country weddings.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop', alt: 'Rustic vineyard wedding setup' },
      { src: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?w=600&h=400&fit=crop', alt: 'Naked wedding cake with berries' },
      { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop', alt: 'Winery courtyard with grapevines' },
      { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=400&fit=crop', alt: 'Wedding ceremony in vineyard setting' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', alt: 'Rustic wedding reception dinner' },
      { src: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&h=400&fit=crop', alt: 'Dessert display at winery wedding' },
    ],
    faqs: [
      {
        question: 'Can you make cakes with real wine from Bernardo Winery?',
        answer: 'Yes! We love incorporating wines from Bernardo Winery into our cake flavors. Cabernet sauvignon works beautifully in chocolate cakes, and their sparkling wine adds a lovely brightness to champagne buttercream. The alcohol bakes off, keeping the flavor without the buzz.',
      },
      {
        question: 'What display style works best at Bernardo Winery?',
        answer: 'We recommend rustic display elements: wine barrel tops, reclaimed wood cake stands, and natural greenery. The winery\'s courtyard setting calls for designs that feel organic and handcrafted rather than overly formal.',
      },
      {
        question: 'Do you serve the Rancho Bernardo area regularly?',
        answer: 'Absolutely. Rancho Bernardo is within our standard delivery area and we have delivered to Bernardo Winery many times. We know the venue layout and coordinate easily with their events team.',
      },
    ],
  },
  {
    slug: 'mt-woodson-castle',
    name: 'Mt. Woodson Castle',
    title: 'Wedding Cakes for Mt. Woodson Castle | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes for Mt. Woodson Castle in Ramona, San Diego County. Auntie Lu\'s Bakery creates fairy-tale castle cakes for this magical hilltop venue.',
    h1: 'Wedding Cakes for Mt. Woodson Castle',
    tagline: 'Fairy-tale celebrations on a hilltop castle estate',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&h=700&fit=crop',
    description: 'Mt. Woodson Castle is one of San Diego County\'s most magical wedding venues. Perched atop a hill in Ramona with sweeping views of the surrounding countryside, this stone castle offers a fairy-tale setting complete with turrets, a grand hall, and a dramatic outdoor ceremony site framed by ancient oaks and boulder formations. Auntie Lu\'s Bakery creates wedding cakes that match the enchantment of this extraordinary venue: towering designs with castle-inspired details, whimsical fondant work, and romantic elements that make every couple feel like royalty on their wedding day.',
    whyWeLoveIt: [
      'The castle setting is genuinely magical and inspires our most dramatic cake designs',
      'The hilltop location and sweeping views create a fairy-tale atmosphere unmatched in San Diego',
      'Stone walls and ancient oaks provide a timeless backdrop for cake photography',
      'The venue\'s intimate scale means every detail, including the cake, receives full attention',
      'Mt. Woodson Castle couples tend to embrace bold, creative cake designs which we love',
    ],
    venueStyle: 'Stone castle estate',
    capacity: '50–200 guests',
    setting: 'Hilltop castle & grounds',
    cakeRecommendations: [
      {
        title: 'Enchanted Castle Tower Cake',
        description: 'A dramatic five-tier cake with stone-textured fondant, sugar flower climbing vines, and a fairy-tale castle topper. A showstopper that matches the venue\'s grandeur.',
      },
      {
        title: 'Romantic Garden Buttercream Cake',
        description: 'Soft blush and ivory buttercream tiers with cascading sugar roses and pearl details. Designed to complement the castle\'s romantic garden ceremony setting.',
      },
      {
        title: 'Woodland Whimsy Cake',
        description: 'Rustic bark-textured buttercream with fondant mushrooms, ferns, and moss accents. Inspired by the oak groves and natural landscape surrounding the castle.',
      },
      {
        title: 'Royal Cake Pop Tower',
        description: 'A tiered tower of gold-dusted cake pops with edible jewel accents. Each pop is individually decorated to resemble a precious gem. Fit for castle royalty.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Fairy-tale wedding cake with floral cascade' },
      { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', alt: 'Castle wedding reception with warm lighting' },
      { src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=400&fit=crop', alt: 'Couple at hilltop ceremony site' },
      { src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop', alt: 'Detailed wedding cake with sugar flowers' },
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', alt: 'Outdoor ceremony with mountain views' },
      { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', alt: 'Elegant dessert table setup' },
    ],
    faqs: [
      {
        question: 'Can you deliver to Mt. Woodson Castle in Ramona?',
        answer: 'Yes. While Ramona is in the eastern part of San Diego County, it is within our delivery range. We are experienced with the winding roads leading up to the castle and plan our delivery route and timing carefully to ensure perfect cake condition on arrival.',
      },
      {
        question: 'How do you handle the hillside logistics for cake delivery?',
        answer: 'We use specialized transport equipment for hillside venues and arrive early to allow careful unloading and setup. Our team has delivered to Mt. Woodson Castle multiple times and knows the property layout, parking, and setup areas well.',
      },
      {
        question: 'What size cake makes the biggest impact at the castle?',
        answer: 'The castle\'s grand hall calls for a statement piece. We recommend at least a four-tier cake for parties of 100+. For smaller gatherings, a three-tier cake with dramatic height and a bold topper makes a strong impression against the stone walls.',
      },
    ],
  },
  {
    slug: 'stone-brewing-gardens',
    name: 'Stone Brewing World Bistro & Gardens',
    title: 'Wedding Cakes for Stone Brewing Gardens | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes for Stone Brewing World Bistro & Gardens in Escondido. Auntie Lu\'s Bakery creates craft-inspired cakes for this unique San Diego venue.',
    h1: 'Wedding Cakes for Stone Brewing World Bistro & Gardens',
    tagline: 'Craft beer culture meets artisan cake in a stunning garden setting',
    heroImage: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1400&h=700&fit=crop',
    description: 'Stone Brewing World Bistro & Gardens in Escondido is one of San Diego\'s most unique wedding venues. Set within one of the world\'s leading craft brewery campuses, the venue features a stunning acre of lush gardens, waterfalls, koi ponds, and tropical plants that create an unexpectedly romantic atmosphere. Auntie Lu\'s Bakery crafts wedding cakes and desserts that embrace the venue\'s creative energy: craft beer-infused flavors, industrial-chic styling, and garden-inspired designs that feel both elevated and approachable. For couples who want their wedding to be as unique as they are, Stone Brewing and Auntie Lu\'s make a perfect pairing.',
    whyWeLoveIt: [
      'The gardens at Stone Brewing are unexpectedly lush and romantic, perfect for cake displays',
      'Craft beer-infused cake flavors create a truly unique tasting experience guests remember',
      'The venue\'s creative, nontraditional vibe encourages bold and innovative cake designs',
      'Stone Brewing\'s commitment to quality and craft mirrors our own artisan baking philosophy',
      'Indoor-outdoor spaces give us versatile options for cake placement and dessert stations',
    ],
    venueStyle: 'Craft brewery gardens',
    capacity: '50–300 guests',
    setting: 'Tropical gardens & bistro',
    cakeRecommendations: [
      {
        title: 'Craft Stout Chocolate Cake',
        description: 'Rich chocolate cake made with Stone\'s signature stout, topped with espresso buttercream and a dark chocolate ganache drip. Hops and malt decorations in fondant complete the craft beer tribute.',
      },
      {
        title: 'Garden Waterfall Buttercream Cake',
        description: 'Flowing green and ivory buttercream tiers with fresh tropical flowers and trailing greenery. Inspired by the venue\'s koi ponds and waterfall gardens.',
      },
      {
        title: 'Industrial Chic Geometric Cake',
        description: 'Modern hexagonal fondant panels in matte black and gold with concrete-textured buttercream. A nod to the brewery\'s industrial aesthetic with refined elegance.',
      },
      {
        title: 'Beer Flight Cake Pop Board',
        description: 'Cake pops in four beer-inspired flavors served on a custom wooden flight board: IPA citrus, stout chocolate, wheat honey, and amber caramel. A crowd-favorite conversation starter.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop', alt: 'Garden wedding ceremony with lush greenery' },
      { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=600&h=400&fit=crop', alt: 'Modern styled wedding cake' },
      { src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop', alt: 'Tropical garden venue setting' },
      { src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&h=400&fit=crop', alt: 'Chocolate drip wedding cake' },
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', alt: 'Outdoor wedding reception' },
      { src: 'https://images.unsplash.com/photo-1525258946800-98cbbe049571?w=600&h=400&fit=crop', alt: 'Creative dessert display' },
    ],
    faqs: [
      {
        question: 'Can you bake with Stone Brewing beer in the cakes?',
        answer: 'Yes! We love using craft beer in our baking. Stone\'s stouts and porters add incredible depth to chocolate cakes, while their IPAs bring citrus and floral notes to lighter flavors. All alcohol bakes off during the process, leaving only the complex flavors behind.',
      },
      {
        question: 'Do you deliver to Escondido?',
        answer: 'Absolutely. Escondido is within our standard delivery area. We coordinate with Stone Brewing\'s events team on delivery timing and garden setup logistics.',
      },
      {
        question: 'What if our guests are not beer drinkers?',
        answer: 'No problem at all. While beer-infused flavors are a fun option for this venue, we offer our full range of classic and specialty flavors. Many Stone Brewing couples choose a mix: one beer-inspired tier for fun and traditional flavors for the rest.',
      },
    ],
  },
  {
    slug: 'grand-tradition-estate',
    name: 'Grand Tradition Estate & Gardens',
    title: 'Wedding Cakes for Grand Tradition Estate | Auntie Lu\'s Bakery',
    metaDescription: 'Auntie Lu\'s Bakery creates stunning wedding cakes for Grand Tradition Estate & Gardens in Fallbrook. Grand estate-style cakes for this premier San Diego venue.',
    h1: 'Wedding Cakes for Grand Tradition Estate & Gardens',
    tagline: 'Grand estate elegance in a lush garden paradise',
    heroImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400&h=700&fit=crop',
    description: 'Grand Tradition Estate & Gardens in Fallbrook is one of San Diego County\'s most spectacular wedding venues. Spread across acres of manicured gardens, this grand estate features a stunning glass-walled Arbor Terrace, the romantic Beverly Mansion, and expansive lawns bordered by flowering gardens, fountains, and century-old trees. Auntie Lu\'s Bakery creates wedding cakes and desserts that rise to the occasion of this extraordinary setting: grand multi-tier designs, lush floral arrangements, and elegant presentations that complement the estate\'s sophisticated garden atmosphere. A Grand Tradition wedding deserves a grand cake, and that is exactly what we deliver.',
    whyWeLoveIt: [
      'The estate\'s manicured gardens and grand architecture call for our most impressive cake designs',
      'Multiple ceremony and reception spaces allow for creative cake placement and styling',
      'Grand Tradition\'s events team runs seamless operations that make vendor coordination effortless',
      'The Arbor Terrace\'s glass walls flood the space with natural light, making cakes photograph beautifully',
      'The sheer scale of the property allows for dramatic dessert presentations',
    ],
    venueStyle: 'Grand garden estate',
    capacity: '100–500 guests',
    setting: 'Estate gardens & mansion',
    cakeRecommendations: [
      {
        title: 'Grand Estate Five-Tier Showpiece',
        description: 'A towering five-tier cake with smooth fondant, hand-piped lace details, fresh cascading flowers, and crystal-clear sugar shards. Designed to command attention in the Arbor Terrace.',
      },
      {
        title: 'Garden Pavilion Buttercream Cake',
        description: 'Romantic blush and ivory buttercream tiers with a profusion of fresh garden roses, peonies, and trailing jasmine. Perfect for lawn receptions under the trees.',
      },
      {
        title: 'Beverly Mansion Classic Fondant',
        description: 'Timeless white fondant with intricate sugar flower work and champagne gold accents. A formal, elegant design befitting the Beverly Mansion\'s refined interior.',
      },
      {
        title: 'Garden Party Cake Pop Station',
        description: 'An elaborate cake pop garden featuring pops in pastel colors displayed among live miniature plants and fresh flowers. A whimsical addition to the estate\'s garden setting.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: 'Grand multi-tiered wedding cake' },
      { src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&h=400&fit=crop', alt: 'Garden ceremony with arch and flowers' },
      { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', alt: 'Estate wedding reception' },
      { src: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&h=400&fit=crop', alt: 'Wedding cake with sugar flowers' },
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop', alt: 'Outdoor garden wedding ceremony' },
      { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop', alt: 'Lush garden estate setting' },
    ],
    faqs: [
      {
        question: 'Do you deliver to Fallbrook?',
        answer: 'Yes. Fallbrook is within our delivery range for San Diego County. We plan our delivery route to Grand Tradition Estate in advance and arrive with ample time for setup, especially for large multi-tier cakes.',
      },
      {
        question: 'What size cake do you recommend for a Grand Tradition wedding?',
        answer: 'Given the scale of the estate venues, we recommend a minimum of four tiers for the Arbor Terrace and Beverly Mansion. For larger guest counts (200+), a five-tier cake with supplemental sheet cakes for serving ensures everyone gets a generous slice.',
      },
      {
        question: 'Can you accommodate outdoor cake placement in the gardens?',
        answer: 'Absolutely. We use stabilized buttercream and climate-smart construction for outdoor garden placements. We recommend placing the cake under a shaded canopy or tree and coordinate with the events team on the best location for both beauty and protection.',
      },
    ],
  },
  {
    slug: 'scripps-seaside-forum',
    name: 'Martin Johnson House / Scripps Seaside Forum',
    title: 'Wedding Cakes for Scripps Seaside Forum | Auntie Lu\'s Bakery',
    metaDescription: 'Custom wedding cakes for Martin Johnson House and Scripps Seaside Forum in La Jolla. Auntie Lu\'s Bakery creates ocean-inspired cakes for this cliffside venue.',
    h1: 'Wedding Cakes for Scripps Seaside Forum',
    tagline: 'Cliffside ocean views and scientific elegance in La Jolla',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=700&fit=crop',
    description: 'The Martin Johnson House and Scripps Seaside Forum, perched on the cliffs above the Pacific at the Scripps Institution of Oceanography in La Jolla, offer one of the most breathtaking wedding settings in all of California. With panoramic ocean views, crashing waves below, and the iconic Scripps Pier stretching into the sea, this venue combines the drama of the California coastline with the intellectual elegance of a world-renowned research institution. Auntie Lu\'s Bakery creates wedding cakes and desserts that capture the essence of this remarkable location: ocean-inspired designs, clean modern lines, and a sophistication that matches the venue\'s unique character.',
    whyWeLoveIt: [
      'The unobstructed Pacific Ocean views from the cliffs create the most dramatic setting in San Diego',
      'Scripps Pier in the background is an iconic backdrop that inspires stunning cake designs',
      'The venue\'s clean, modern lines pair beautifully with elegant, minimalist cake aesthetics',
      'The La Jolla oceanside location is close to our kitchen, ensuring the freshest possible delivery',
      'Sunset ceremonies here are legendary and our cakes become part of that golden-hour magic',
    ],
    venueStyle: 'Oceanfront cliffside',
    capacity: '40–250 guests',
    setting: 'Coastal cliffs & forum',
    cakeRecommendations: [
      {
        title: 'Pacific Horizon Ombré Cake',
        description: 'Smooth buttercream tiers transitioning from deep ocean blue at the base to seafoam and white at the top, finished with edible gold leaf and sugar coral accents. A tribute to the Pacific views.',
      },
      {
        title: 'Modern Minimalist Fondant Cake',
        description: 'Clean white fondant with architectural lines and a single dramatic sugar flower arrangement. Mirrors the Seaside Forum\'s modern architectural style and uncluttered elegance.',
      },
      {
        title: 'Seaside Garden Buttercream Cake',
        description: 'Textured ivory buttercream with coastal garden flowers: succulents, sea lavender, and white anemones. A natural design that connects the building to its coastal landscape.',
      },
      {
        title: 'Ocean Breeze Cake Pop Display',
        description: 'White and ocean-blue cake pops with sea salt caramel and coconut lime flavors, displayed on a tiered acrylic stand overlooking the ocean. Designed for the venue\'s cocktail hour.',
      },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=400&fit=crop', alt: 'Oceanfront wedding cake display' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop', alt: 'Cliffside ceremony with ocean views' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', alt: 'Floral wedding details by the sea' },
      { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop', alt: 'Modern wedding cake with clean lines' },
      { src: 'https://images.unsplash.com/photo-1470290449668-02dd93d9420a?w=600&h=400&fit=crop', alt: 'Pacific sunset at Scripps Pier' },
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', alt: 'Coastal wedding reception setup' },
    ],
    faqs: [
      {
        question: 'How do you handle wind and ocean spray at Scripps Seaside Forum?',
        answer: 'We use stabilized buttercream and secure structural supports for all cliffside venue deliveries. We recommend indoor cake placement in the Forum\'s enclosed spaces and design outdoor displays with weighted bases and protective elements to handle coastal winds.',
      },
      {
        question: 'What flavors pair well with an oceanfront wedding?',
        answer: 'We love tropical and coastal-inspired flavors for Scripps: coconut lime, Meyer lemon, passion fruit, sea salt caramel, and vanilla bean with fresh berries. These light, bright flavors complement the ocean setting beautifully.',
      },
      {
        question: 'Can you set up during the cocktail hour?',
        answer: 'Yes. We typically arrive during the ceremony or early cocktail hour to set up the cake display. We coordinate timing with the venue\'s events coordinator to ensure a seamless transition and have the cake perfectly presented before guests enter the reception space.',
      },
    ],
  },
]
