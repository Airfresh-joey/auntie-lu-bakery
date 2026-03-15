export interface VenuePage {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  description: string
  benefits: string[]
  offerings: string[]
  process: string
  faqQuestion: string
  faqAnswer: string
}

export const venues: VenuePage[] = [
  {
    slug: "wedding-venues-denver",
    name: "Wedding Venues in San Diego",
    title: "Wedding Cakes & Cake Pops for San Diego Wedding Venues | Auntie Lu's Bakery",
    metaDescription:
      "Auntie Lu's Bakery partners with San Diego wedding venues to deliver artisan sourdough bread, custom wedding cakes, and handcrafted cake pops. Serving the greater San Diego area.",
    h1: "Custom Wedding Cakes & Cake Pops for San Diego Wedding Venues",
    intro:
      "San Diego's wedding scene is as vibrant as the city itself, from historic ballrooms in LoDo to garden estates in Cherry Hills Village. Auntie Lu's Bakery collaborates directly with San Diego wedding venues to provide stunning custom cakes, artisan sourdough bread for reception dinners, and beautifully decorated cake pops for every guest to enjoy.",
    description:
      "We understand that every San Diego wedding venue has its own personality and logistical needs. Our team coordinates delivery schedules, setup requirements, and tastings with venue coordinators to ensure a seamless experience. Whether your celebration calls for a five-tier buttercream masterpiece or two hundred individually wrapped cake pops as favors, we tailor every order to complement the venue's style. From The Manor House to Moss San Diego, we have worked with dozens of Front Range locations and know how to make your dessert table shine.",
    benefits: [
      "Direct coordination with your venue's event manager for stress-free delivery and setup",
      "Custom flavor and design consultations to match your wedding theme and color palette",
      "Tiered pricing options that work within a range of wedding budgets",
      "Experience delivering to 50+ San Diego-area wedding venues with on-time reliability",
      "Complimentary tasting sessions for booked couples at our San Diego kitchen",
    ],
    offerings: [
      "Multi-tier custom wedding cakes in flavors from classic vanilla bean to lavender honey",
      "Wedding cake pop displays with custom colors and monogram packaging",
      "Artisan sourdough bread baskets for reception dinner tables",
      "Dessert bar setups featuring an assortment of cake pops, mini cakes, and sourdough crostini",
      "Late-night snack trays with savory sourdough bites and sweet cake pop assortments",
      "Custom cake topper coordination and floral cake styling",
    ],
    process:
      "Start by reaching out for a free consultation where we discuss your venue, guest count, and vision. We then schedule a private tasting at our San Diego kitchen, finalize your design and flavors, and coordinate all delivery logistics directly with your venue team so you can focus on your big day.",
    faqQuestion: "How far in advance should I book Auntie Lu's for my San Diego wedding venue?",
    faqAnswer:
      "We recommend booking at least three to four months before your wedding date, especially for peak season (May through October). This gives us time to schedule your tasting, finalize designs, and coordinate with your venue. For last-minute needs, reach out and we will do our best to accommodate.",
  },
  {
    slug: "corporate-catering-denver",
    name: "Corporate Catering San Diego",
    title: "Corporate Catering in San Diego | Artisan Bread & Cake Pops | Auntie Lu's Bakery",
    metaDescription:
      "Elevate your corporate events in San Diego with Auntie Lu's artisan sourdough bread, custom cake pops, and professional catering. Perfect for meetings, retreats, and client events.",
    h1: "Corporate Catering in San Diego: Artisan Bread & Custom Cake Pops",
    intro:
      "From board meetings in the San Diego Tech Center to team celebrations downtown, Auntie Lu's Bakery brings a personal, artisan touch to corporate catering. Our handcrafted sourdough bread and custom-branded cake pops turn routine office events into memorable experiences that impress clients and energize teams.",
    description:
      "Corporate catering demands reliability, professionalism, and quality that reflects well on your brand. We offer recurring delivery programs for offices that want fresh sourdough bread every week, as well as one-time orders for product launches, holiday parties, and milestone celebrations. Our cake pops can be customized with your company colors and logo for a polished presentation. We handle everything from order placement to on-site setup so your team can stay focused on business.",
    benefits: [
      "Company-branded cake pops featuring your logo, colors, and custom packaging",
      "Recurring weekly or monthly delivery programs for office kitchens and breakrooms",
      "Bulk pricing and corporate account options for frequent orders",
      "Reliable on-time delivery throughout the San Diego metro, including DTC and RiNo",
      "Dietary accommodation including gluten-aware options and vegan cake pops",
    ],
    offerings: [
      "Artisan sourdough bread platters with butter and seasonal spreads",
      "Custom logo cake pops in individually wrapped corporate packaging",
      "Breakfast meeting spreads with sourdough toast, jams, and pastries",
      "Client appreciation gift boxes with assorted cake pops and sourdough loaves",
      "Holiday party dessert tables with seasonal flavors and themed decorations",
    ],
    process:
      "Contact us with your event date, guest count, and branding preferences. We will send you a detailed proposal within 48 hours, including a proof of any custom logo cake pops. After approval, we handle production, packaging, and delivery directly to your San Diego office or event space.",
    faqQuestion: "Can you deliver to multiple San Diego office locations on the same day?",
    faqAnswer:
      "Yes, we routinely handle multi-location deliveries across the San Diego area, including downtown, the Tech Center, Boulder, and Aurora. Just let us know each address and preferred delivery window when you place your order, and we will coordinate the logistics.",
  },
  {
    slug: "hotel-catering-denver",
    name: "Hotel Catering San Diego",
    title: "Hotel Catering & Custom Desserts in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Auntie Lu's Bakery provides San Diego hotels with artisan sourdough bread service, custom cake pops for events, and bespoke dessert programs. Reliable hotel-grade quality.",
    h1: "Hotel Catering & Bespoke Desserts for San Diego Hotels",
    intro:
      "San Diego's hospitality industry demands consistency, elegance, and the kind of artisan quality that guests remember. Auntie Lu's Bakery partners with San Diego hotels to supply fresh sourdough bread for restaurant service, custom cake pops for banquet events, and curated dessert programs that elevate the guest experience.",
    description:
      "We work with hotel banquet managers and executive chefs to develop dessert menus that align with the property's brand and seasonal programming. Our sourdough bread is baked fresh and delivered on schedule to meet the demands of hotel dining rooms and room service. For conferences and galas hosted at San Diego hotels, we provide stunning cake pop displays and tiered cakes that match event themes. Our food-safety certifications and commercial kitchen meet the standards required by hotel procurement teams.",
    benefits: [
      "Consistent daily or weekly bread delivery schedules tailored to hotel dining operations",
      "Food-safety certified commercial kitchen that meets hotel vendor requirements",
      "Custom dessert menu development in collaboration with your culinary team",
      "Scalable production for events ranging from intimate dinners to 500-guest galas",
      "Dedicated account manager for streamlined ordering and communication",
    ],
    offerings: [
      "Daily fresh sourdough bread service for hotel restaurants and room service",
      "Banquet dessert programs with custom cake pops and plated desserts",
      "Welcome amenity packages featuring mini sourdough loaves and cake pop boxes",
      "Conference break service with artisan bread, spreads, and sweet bites",
      "Holiday and seasonal dessert menus for hotel restaurants and events",
      "Wedding cake and dessert service for hotel-hosted receptions",
    ],
    process:
      "We begin with a meeting with your food and beverage team to understand volume requirements, brand standards, and scheduling needs. After a tasting session and menu alignment, we establish a delivery calendar and assign a dedicated account manager to handle ongoing orders and communication.",
    faqQuestion: "Do you meet the vendor insurance and food-safety requirements for San Diego hotels?",
    faqAnswer:
      "Absolutely. Our commercial kitchen holds all required health department certifications, and we carry comprehensive general liability and product liability insurance. We are happy to provide certificates of insurance and complete any vendor onboarding paperwork your hotel requires.",
  },
  {
    slug: "restaurant-dessert-partner",
    name: "Restaurant Dessert Partner",
    title: "Restaurant Dessert Partnerships in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Partner with Auntie Lu's Bakery for your San Diego restaurant's dessert program. Wholesale artisan sourdough bread, custom cake pops, and white-label dessert solutions.",
    h1: "Restaurant Dessert Partnerships: Wholesale Bread & Custom Desserts",
    intro:
      "Running a restaurant kitchen is demanding enough without building a dessert program from scratch. Auntie Lu's Bakery partners with San Diego-area restaurants to supply wholesale artisan sourdough bread, house-branded cake pops, and custom desserts that your guests will love, without adding complexity to your kitchen operations.",
    description:
      "We offer flexible wholesale arrangements designed for the rhythm of restaurant service. Whether you need daily sourdough loaves for your bread course, a rotating selection of cake pops for your dessert menu, or seasonal specials to feature on social media, we produce everything in our commercial kitchen and deliver on your schedule. Our white-label option means your restaurant can present our products as your own house-made desserts. We work with restaurants across San Diego, from farm-to-table spots in LoHi to neighborhood bistros in Wash Park.",
    benefits: [
      "Wholesale pricing with flexible minimum order quantities suited to restaurant volumes",
      "White-label dessert options that carry your restaurant's branding",
      "Menu development support to create desserts that complement your cuisine",
      "Reliable delivery schedule that aligns with your prep and service times",
      "Seasonal and limited-edition flavors to keep your dessert menu fresh and exciting",
    ],
    offerings: [
      "Wholesale artisan sourdough bread in boule, batard, and custom shapes",
      "White-label cake pops in restaurant-branded packaging",
      "Seasonal dessert specials developed in collaboration with your chef",
      "Bread service packages with house-made butter and accompaniments",
      "Brunch-specific items including sourdough pancake batter and cinnamon rolls",
    ],
    process:
      "Reach out to set up a wholesale consultation. We will visit your restaurant, discuss your menu and volume needs, conduct a tasting, and build a delivery schedule that fits your operation. Most partnerships launch within two weeks of the initial meeting.",
    faqQuestion: "What are your minimum order requirements for restaurant partnerships?",
    faqAnswer:
      "Our minimums are intentionally flexible to accommodate restaurants of all sizes. For sourdough bread, the minimum is six loaves per delivery. For cake pops, the minimum is 48 pieces per order. We can adjust frequency and quantities as your needs evolve, and there are no long-term contracts required.",
  },
  {
    slug: "country-club-cakes",
    name: "Country Club Cakes",
    title: "Custom Cakes & Desserts for San Diego Country Clubs | Auntie Lu's Bakery",
    metaDescription:
      "Auntie Lu's Bakery creates elegant custom cakes, cake pops, and artisan bread for San Diego-area country clubs. Perfect for member events, galas, and private celebrations.",
    h1: "Elegant Custom Cakes & Desserts for San Diego Country Clubs",
    intro:
      "San Diego's country clubs set a high standard for dining and events, and the dessert program should be no exception. Auntie Lu's Bakery works with country clubs across the Front Range to deliver refined custom cakes, sophisticated cake pop displays, and artisan sourdough bread that matches the caliber members expect.",
    description:
      "From member appreciation dinners at Cherry Hills Country Club to holiday galas at Castle Pines, our baked goods are crafted to meet the exacting standards of club dining. We collaborate with club chefs and event directors to develop seasonal dessert menus, create custom cakes for member celebrations, and provide elegant cake pop favors for tournaments and social events. Our presentation style emphasizes clean lines, premium ingredients, and flavors that appeal to a discerning palate.",
    benefits: [
      "Sophisticated presentation and packaging that meets country club standards",
      "Collaboration with club chefs and event directors for seamless integration",
      "Seasonal dessert menu rotation to keep the dining experience fresh for members",
      "Experience serving prestigious Front Range clubs with white-glove delivery",
      "Flexible ordering for events ranging from intimate dinners to large-scale galas",
    ],
    offerings: [
      "Custom celebration cakes for member birthdays, anniversaries, and milestones",
      "Elegant cake pop displays for golf tournaments and social mixers",
      "Artisan sourdough bread service for club dining rooms",
      "Holiday gala dessert tables with seasonal flavors and decorations",
      "Private party dessert packages for club-hosted receptions and dinners",
      "Branded cake pop favors for member gift bags and tournament prizes",
    ],
    process:
      "Contact us to schedule an introductory meeting with your club's food and beverage director. We will tour the facility, discuss event calendars and member preferences, and arrange a private tasting. From there we establish a recurring or event-based order system with direct communication to your events team.",
    faqQuestion: "Can you create desserts that match our country club's branding and seasonal themes?",
    faqAnswer:
      "Yes, that is one of our specialties. We regularly create cake pops and cakes in club colors, with logos and monograms, and we develop seasonal flavor profiles that align with your quarterly event themes. We are also happy to coordinate with your florist or event designer to ensure a cohesive aesthetic.",
  },
  {
    slug: "event-venue-catering",
    name: "Event Venue Catering",
    title: "Event Venue Catering & Custom Desserts in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Auntie Lu's Bakery provides event venue catering throughout San Diego. Custom cakes, cake pops, and artisan sourdough for galas, fundraisers, and private events.",
    h1: "Event Venue Catering: Custom Desserts for San Diego Events",
    intro:
      "Whether it is a fundraising gala at the San Diego Art Museum, a product launch in a RiNo warehouse, or a private celebration at a Lakewood event center, Auntie Lu's Bakery delivers desserts that make an impression. We work with event venues of every style and size across the San Diego metro to provide custom cakes, cake pops, and artisan bread service.",
    description:
      "Event venues require vendors who can adapt to different spaces, timelines, and guest counts on short notice. We have the production capacity and delivery logistics to serve events from 20 to 2,000 guests, and we coordinate directly with venue managers to handle load-in schedules, setup requirements, and breakdown timelines. Our offerings range from towering tiered cakes as centerpieces to individually packaged cake pops for grab-and-go events. We also provide artisan sourdough bread for sit-down dinners and cocktail-hour crostini stations.",
    benefits: [
      "Scalable production to accommodate events from intimate gatherings to large galas",
      "Direct coordination with venue staff for load-in, setup, and breakdown logistics",
      "Versatile product range from grab-and-go cake pops to elaborate tiered cakes",
      "Experience working with diverse San Diego venues including galleries, lofts, and ballrooms",
      "Complimentary consultation to align desserts with your event theme and vision",
    ],
    offerings: [
      "Statement tiered cakes for galas, fundraisers, and milestone celebrations",
      "Bulk cake pop orders with event-themed colors, packaging, and display stands",
      "Artisan sourdough crostini stations for cocktail hours and receptions",
      "Dessert bar setups with a curated mix of sweets and savory sourdough bites",
      "Individually packaged cake pop favors for guests to take home",
    ],
    process:
      "Start with a consultation call where we learn about your event, venue, and vision. We visit the venue if needed, create a detailed proposal with pricing and setup plans, and manage all production and delivery logistics. On event day, our team handles setup so you can focus on your guests.",
    faqQuestion: "What is the largest event you have catered in San Diego?",
    faqAnswer:
      "We have provided desserts for events with over 1,500 guests, including corporate galas and charity fundraisers at major San Diego venues. Our commercial kitchen and experienced team allow us to scale up without sacrificing quality. We recommend booking at least six weeks in advance for events over 500 guests.",
  },
  {
    slug: "brewery-wedding-cakes",
    name: "Brewery Wedding Cakes",
    title: "Brewery Wedding Cakes & Cake Pops in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Custom brewery wedding cakes and cake pops from Auntie Lu's Bakery. Craft beer-inspired flavors perfect for San Diego's thriving brewery wedding scene.",
    h1: "Brewery Wedding Cakes & Cake Pops for San Diego Craft Beer Celebrations",
    intro:
      "San Diego is the craft beer capital of the country, and brewery weddings have become one of the most popular ways to celebrate in the Front Range. Auntie Lu's Bakery creates custom wedding cakes and cake pops that embrace the brewery vibe with craft beer-inspired flavors, rustic-industrial styling, and creative presentation that pairs perfectly with pints.",
    description:
      "A brewery wedding calls for desserts that feel relaxed, creative, and authentically Colorado. We develop flavors like chocolate stout cake, IPA citrus buttercream, and honey wheat sourdough that complement the craft beer on tap. Our cakes can be styled to match the industrial-chic aesthetic of venues like Ratio Beerworks, Station 26, or Odell Brewing. For couples who want something less formal than a traditional tiered cake, our craft beer-themed cake pop displays are a huge hit, letting guests grab a sweet bite between rounds.",
    benefits: [
      "Craft beer-inspired cake flavors developed to pair with popular beer styles",
      "Rustic and industrial-chic styling that complements brewery aesthetics",
      "Experience delivering to San Diego-area brewery venues with unique logistics",
      "Casual and fun presentation options like cake pop flights and dessert boards",
      "Sourdough bread pairings for brewery reception food stations",
    ],
    offerings: [
      "Craft beer-infused wedding cakes in flavors like chocolate stout and citrus IPA",
      "Brewery-themed cake pop displays on custom wooden flight boards",
      "Spent grain sourdough bread for reception charcuterie and sandwich stations",
      "Dessert and beer pairing menus created in collaboration with the brewery",
      "Growler-shaped cake toppers and hop-inspired sugar decorations",
    ],
    process:
      "Book a tasting at our kitchen where we will sample craft beer-inspired flavors and discuss your brewery venue's layout and style. We can coordinate with the brewery's event team to plan delivery, setup, and even a custom beer-and-dessert pairing menu for your guests.",
    faqQuestion: "Can you actually bake with craft beer in the cakes?",
    faqAnswer:
      "Yes, we incorporate real craft beer into our batters and buttercreams. Stouts and porters work beautifully in chocolate cakes, while wheat beers and IPAs add citrus and floral notes to lighter flavors. The alcohol bakes off during the process, so the cakes are safe for all guests. We can even use a specific beer from your brewery venue if you would like.",
  },
  {
    slug: "rooftop-event-cakes",
    name: "Rooftop Event Cakes",
    title: "Rooftop Event Cakes & Desserts in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Stunning custom cakes and cake pops designed for San Diego rooftop events. Weather-smart designs and mountain-view-worthy presentation from Auntie Lu's Bakery.",
    h1: "Rooftop Event Cakes & Desserts with San Diego Skyline Views",
    intro:
      "San Diego's rooftop venues offer breathtaking views of the skyline and the Rocky Mountains, creating a dramatic backdrop for celebrations. Auntie Lu's Bakery specializes in cakes and desserts engineered for the unique demands of rooftop events, from wind-resistant designs to sun-smart buttercream formulations that hold up under Colorado's intense sunshine.",
    description:
      "Rooftop events in San Diego come with specific challenges that most bakeries overlook. Temperature swings, wind exposure, and elevator-only access require careful planning. We use stabilized buttercream and structural supports that keep cakes looking flawless in warm weather, and we design cake pop displays with weighted bases that will not tip in a breeze. Our delivery team is experienced with freight elevator logistics and rooftop setup at venues like Halcyon, The Rally Hotel, and ViewHouse. The result is a dessert presentation that looks stunning against the Colorado sky.",
    benefits: [
      "Weather-smart cake construction with stabilized buttercream for outdoor conditions",
      "Wind-resistant cake pop displays and dessert setups designed for rooftop exposure",
      "Experience navigating freight elevators and rooftop load-in logistics at San Diego venues",
      "Design aesthetic that complements skyline and mountain views rather than competing with them",
      "Flexible timing for sunset events and late-evening celebrations",
    ],
    offerings: [
      "Stabilized buttercream cakes designed to withstand San Diego's sun and temperature swings",
      "Weighted-base cake pop displays that stay secure in rooftop winds",
      "Skyline-themed cake designs with San Diego cityscape and mountain silhouettes",
      "Sunset cocktail hour dessert boards with sourdough crostini and cake pop assortments",
      "Late-night sweet stations for after-dark rooftop celebrations",
    ],
    process:
      "We start with a venue walk-through to assess rooftop conditions, elevator access, and setup space. Based on the season and expected weather, we recommend design choices that ensure your desserts look and taste perfect. On event day, we handle all logistics from load-in to final styling.",
    faqQuestion: "Will the cake hold up in the heat on a San Diego rooftop in the summer?",
    faqAnswer:
      "Absolutely. We use stabilized Swiss meringue buttercream and internal structural supports specifically for outdoor and rooftop events. Our formulations hold their shape in temperatures up to 95 degrees Fahrenheit. For extreme heat days, we also bring insulated transport equipment and recommend shaded placement on the rooftop. We have never had a rooftop cake fail on us.",
  },
  {
    slug: "mountain-wedding-cakes",
    name: "Mountain Wedding Cakes",
    title: "Mountain Wedding Cakes in Colorado | Auntie Lu's Bakery San Diego",
    metaDescription:
      "Custom mountain wedding cakes and cake pops from Auntie Lu's Bakery. We deliver to Colorado mountain venues in Estes Park, Breckenridge, Vail, and beyond.",
    h1: "Colorado Mountain Wedding Cakes & Custom Cake Pops",
    intro:
      "A mountain wedding in Colorado is a once-in-a-lifetime experience, and the cake should be just as unforgettable. Auntie Lu's Bakery creates custom wedding cakes and cake pops designed for the altitude, temperature, and stunning natural beauty of Colorado's mountain venues, from Estes Park to Breckenridge and everywhere in between.",
    description:
      "Baking for altitude is a science, and we have mastered it. Our recipes are adjusted for elevations above 7,000 feet to ensure cakes rise properly and maintain the perfect texture. We use insulated transport systems for mountain delivery runs and schedule arrivals to account for winding roads and seasonal conditions. Our mountain wedding designs draw inspiration from the landscape: think wildflower cascades, aspen bark textures, pine and lavender flavors, and earthy color palettes that echo the Rockies. Whether your venue is a lodge in Keystone or a meadow near Telluride, we deliver with care.",
    benefits: [
      "High-altitude baking expertise with recipes adjusted for elevations above 7,000 feet",
      "Insulated and climate-controlled transport for mountain highway deliveries",
      "Nature-inspired designs featuring wildflowers, aspen bark, and mountain motifs",
      "Delivery to mountain venues across the Front Range, Summit County, and beyond",
      "Familiarity with remote venue logistics including unpaved roads and limited access",
    ],
    offerings: [
      "Altitude-adjusted wedding cakes with reliable rise and texture at any elevation",
      "Wildflower and botanical cake designs inspired by Colorado mountain meadows",
      "Mountain-themed cake pop displays with pine, lavender, and honey flavors",
      "Artisan sourdough bread for rustic mountain reception dinners",
      "Elopement packages for intimate mountain ceremonies with a small custom cake and cake pops",
      "Day-after brunch sourdough spreads for mountain weekend weddings",
    ],
    process:
      "Book a tasting at our San Diego kitchen and tell us about your mountain venue. We will review elevation, access logistics, and seasonal considerations, then build a delivery plan. For remote venues, we schedule a dry-run delivery before the wedding to ensure everything goes smoothly on the day.",
    faqQuestion: "How far into the mountains will you deliver?",
    faqAnswer:
      "We regularly deliver to venues in Estes Park, Breckenridge, Vail, Keystone, Beaver Creek, Aspen, and Steamboat Springs. For venues further afield, like Telluride or Crested Butte, we evaluate on a case-by-case basis and may apply a delivery surcharge. We recommend booking early for peak mountain wedding season, June through September.",
  },
  {
    slug: "ranch-wedding-cakes",
    name: "Ranch Wedding Cakes",
    title: "Ranch Wedding Cakes & Desserts in Colorado | Auntie Lu's Bakery",
    metaDescription:
      "Rustic ranch wedding cakes and cake pops from Auntie Lu's Bakery in San Diego. Handcrafted desserts for Colorado ranch celebrations with farm-to-table charm.",
    h1: "Ranch Wedding Cakes & Rustic Desserts for Colorado Celebrations",
    intro:
      "Colorado ranch weddings blend wide-open spaces, farm-to-table charm, and a laid-back elegance that is uniquely Western. Auntie Lu's Bakery creates rustic wedding cakes, cake pops, and artisan sourdough bread that feel right at home in a barn, under a tent, or beside a corral with the Rockies in the background.",
    description:
      "Ranch venues like Spruce Mountain Ranch, Deer Creek Valley Ranch, and Chatfield Farms call for desserts with warmth and character. We specialize in rustic finishes like naked cakes, semi-naked buttercream, and textured fondant that evoke the natural beauty of a ranch setting. Our flavors lean into the farm-to-table ethos with options like wildflower honey, fresh berry compote, and brown butter vanilla. For outdoor ranch receptions, we build sturdy cake structures that handle uneven terrain and variable temperatures, and our cake pop displays are styled on reclaimed wood, barrel tops, and hay bale stations.",
    benefits: [
      "Rustic design expertise with naked cakes, semi-naked styles, and farmhouse aesthetics",
      "Farm-to-table inspired flavors using local honey, seasonal berries, and artisan ingredients",
      "Sturdy construction for outdoor setups on uneven terrain and in variable weather",
      "Creative display styling using rustic props like barrels, crates, and reclaimed wood",
      "Delivery experience with Colorado ranch venues, including unpaved and gravel roads",
    ],
    offerings: [
      "Rustic naked and semi-naked wedding cakes with fresh flowers and berry accents",
      "Farmhouse-styled cake pop displays on reclaimed wood and barrel-top stands",
      "Artisan sourdough bread for ranch-style family dinner receptions",
      "Pie and cake pop combo stations for a relaxed dessert experience",
      "S'mores-inspired cake pops for outdoor bonfire receptions",
      "Day-after ranch brunch packages with sourdough, pastries, and cake pop boxes",
    ],
    process:
      "Start with a consultation to share your ranch venue details and wedding vision. We will discuss rustic design options, flavors that complement a farm-to-table menu, and logistics for outdoor delivery and setup. For ranch venues with limited access, we plan our delivery route and setup timeline in advance to ensure everything arrives picture-perfect.",
    faqQuestion: "Can your cakes handle being outdoors on a Colorado ranch in the summer?",
    faqAnswer:
      "Yes. We build ranch wedding cakes with reinforced internal structures and use stabilized buttercream that performs well in warm weather. For peak summer months, we recommend placing the cake in a shaded area or under a tent, and we time our delivery close to the reception to minimize sun exposure. We have successfully delivered to dozens of outdoor ranch weddings without any issues.",
  },
]
