export interface ProductPage {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  description: string
  variants: { name: string; price: string; description: string }[]
  customizationOptions: string[]
  orderInfo: string
  faqQuestion: string
  faqAnswer: string
  relatedProducts: string[]
}

export const products: ProductPage[] = [
  {
    slug: "custom-cakes",
    name: "Custom Cakes",
    title: "Custom Cakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order stunning custom cakes in San Diego from Auntie Lu's Bakery. Handcrafted designs for weddings, birthdays, and special occasions with pickup across the San Diego area.",
    h1: "Custom Cakes Made Fresh in San Diego",
    intro:
      "At Auntie Lu's Bakery, every custom cake is a one-of-a-kind creation designed to match your vision. Whether you're celebrating a milestone birthday, a bridal shower, or just want something unforgettable for your next gathering, we bring your ideas to life. Our cakes are baked from scratch using quality ingredients and decorated with meticulous attention to detail.",
    description:
      "Our custom cakes start with your imagination and end with a showstopping centerpiece for your event. We work with you on flavor combinations, fillings, frostings, and decorative elements to create exactly what you're envisioning. From elegant buttercream finishes to sculpted fondant designs, Auntie Lu handles it all. Every cake is baked fresh to order and available for pickup at convenient locations throughout the San Diego area.",
    variants: [
      {
        name: '6" Round Custom Cake',
        price: "From $55",
        description:
          "Serves 8-10 guests. Perfect for intimate celebrations and small gatherings.",
      },
      {
        name: '8" Round Custom Cake',
        price: "From $75",
        description:
          "Serves 14-18 guests. A popular choice for birthday parties and family events.",
      },
      {
        name: '10" Round Custom Cake',
        price: "From $95",
        description:
          "Serves 24-30 guests. Ideal for larger parties and office celebrations.",
      },
      {
        name: "Custom Sculpted Cake",
        price: "From $150",
        description:
          "Fully sculpted 3D designs tailored to your theme. Price varies by complexity.",
      },
    ],
    customizationOptions: [
      "Choice of cake flavor: vanilla, chocolate, red velvet, lemon, marble, or funfetti",
      "Filling options: buttercream, cream cheese, fruit preserves, ganache, or mousse",
      "Frosting style: smooth buttercream, textured buttercream, fondant, or naked cake",
      "Custom color palette and decorative theme to match your event",
      "Edible image toppers, fondant figures, or fresh flower arrangements",
    ],
    orderInfo:
      "Custom cakes require a minimum of 5 business days' notice for standard designs and 2 weeks for elaborate sculpted creations. Place your order online or contact us directly to discuss your vision. Pickup is available at our San Diego location or select metro-area drop points.",
    faqQuestion: "How far in advance should I order a custom cake?",
    faqAnswer:
      "We recommend placing your order at least 5-7 business days before your event for standard custom cakes. For highly detailed, sculpted, or tiered designs, please reach out at least 2-3 weeks ahead. During peak wedding season (May through October), we suggest booking even earlier to secure your preferred date.",
    relatedProducts: ["tiered-cakes", "photo-cakes", "cupcakes", "sheet-cakes"],
  },
  {
    slug: "cupcakes",
    name: "Cupcakes",
    title: "Custom Cupcakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order custom cupcakes in San Diego from Auntie Lu's Bakery. Perfect for birthdays, corporate events, and celebrations with flavors and designs to match any theme.",
    h1: "Custom Cupcakes for Every San Diego Celebration",
    intro:
      "Cupcakes from Auntie Lu's Bakery are individually crafted treats that bring joy to any occasion. Available in a wide range of flavors and topped with gorgeous swirled buttercream or fondant decorations, our cupcakes are as beautiful as they are delicious. They're the perfect portion-controlled option for parties, office events, and dessert tables.",
    description:
      "Each cupcake is baked in small batches to ensure maximum freshness and flavor. We offer classic favorites like rich chocolate and vanilla bean alongside seasonal specials and unique combinations you won't find anywhere else. Our decorating team can match cupcakes to any color scheme or theme, from elegant gold-dusted designs for weddings to playful character toppers for kids' birthdays. Cupcake towers and displays are available as stunning alternatives to traditional cakes.",
    variants: [
      {
        name: "Standard Cupcakes (Dozen)",
        price: "From $36",
        description:
          "Classic-sized cupcakes with buttercream frosting in your choice of flavor.",
      },
      {
        name: "Mini Cupcakes (Two Dozen)",
        price: "From $30",
        description:
          "Bite-sized cupcakes perfect for sampling stations and dessert spreads.",
      },
      {
        name: "Decorated Cupcakes (Dozen)",
        price: "From $48",
        description:
          "Cupcakes with custom fondant toppers, themed decorations, or detailed piping.",
      },
      {
        name: "Cupcake Tower (3 Dozen)",
        price: "From $110",
        description:
          "An assortment displayed on a tiered stand. A beautiful centerpiece alternative.",
      },
    ],
    customizationOptions: [
      "Flavor selection: chocolate, vanilla, strawberry, lemon, salted caramel, or seasonal options",
      "Frosting type: classic buttercream, cream cheese, whipped ganache, or meringue",
      "Custom colors and sprinkle blends to match your event palette",
      "Fondant toppers shaped to your theme: flowers, animals, logos, or monograms",
      "Cupcake wrappers and display stands available for an upgraded presentation",
    ],
    orderInfo:
      "Standard cupcake orders require 3 business days' notice. Decorated cupcakes with custom fondant toppers need at least 5 business days. Place your order online and select your preferred pickup location in the San Diego area.",
    faqQuestion: "Can I order a mix of cupcake flavors in one order?",
    faqAnswer:
      "Absolutely! We encourage mixing and matching flavors. You can select up to four different flavors per dozen, and we'll label each one so your guests know exactly what they're enjoying. If you need more variety, just let us know and we'll work out a custom assortment for your event.",
    relatedProducts: ["custom-cakes", "cookies", "pastries", "gluten-free"],
  },
  {
    slug: "cookies",
    name: "Cookies",
    title: "Custom Cookies in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order custom decorated cookies in San Diego from Auntie Lu's Bakery. Sugar cookies, chocolate chip, and specialty cookies for events, gifts, and favors.",
    h1: "Custom Cookies Baked Fresh in San Diego",
    intro:
      "Auntie Lu's cookies are baked from scratch using real butter, farm-fresh eggs, and premium ingredients. From beautifully decorated sugar cookies to chunky chocolate chip classics, our cookies are crafted with care and perfect for any occasion. They make wonderful party favors, corporate gifts, and dessert table additions.",
    description:
      "Our decorated sugar cookies are hand-cut and iced with royal icing in any shape, color, and design you can imagine. Whether you need branded cookies for a corporate launch, themed shapes for a baby shower, or elegant monogrammed favors for a wedding, our decorating team brings precision and artistry to every cookie. We also offer drop cookies like chocolate chip, oatmeal raisin, and snickerdoodle by the dozen for when you want a homestyle treat without the fuss.",
    variants: [
      {
        name: "Decorated Sugar Cookies (Dozen)",
        price: "From $42",
        description:
          "Hand-decorated royal icing cookies in custom shapes and colors.",
      },
      {
        name: "Classic Drop Cookies (Dozen)",
        price: "From $24",
        description:
          "Chocolate chip, oatmeal raisin, snickerdoodle, or peanut butter.",
      },
      {
        name: "Cookie Gift Box (Assorted)",
        price: "From $35",
        description:
          "A curated box of 8 decorated cookies packaged for gifting.",
      },
      {
        name: "Cookie Favors (Individually Wrapped)",
        price: "From $4 each",
        description:
          "Single decorated cookies wrapped with ribbon or in cellophane bags.",
      },
    ],
    customizationOptions: [
      "Custom cookie shapes cut to your design or chosen from our extensive library",
      "Royal icing color palette matched to your event theme or brand colors",
      "Edible ink printing for logos, photos, or detailed artwork on cookies",
      "Packaging options: cellophane bags, ribbon-tied boxes, or branded labels",
      "Flavor variations: classic vanilla sugar, chocolate sugar, or almond sugar cookie base",
    ],
    orderInfo:
      "Decorated cookie orders require 7 business days for custom designs and 3 business days for drop cookies. We recommend ordering early for holiday seasons as slots fill quickly. All cookies are available for pickup across the San Diego area.",
    faqQuestion: "How long do decorated cookies stay fresh?",
    faqAnswer:
      "Our decorated sugar cookies with royal icing stay fresh for up to 2 weeks when stored in an airtight container at room temperature. This makes them excellent for events where you need to prepare ahead of time, such as wedding favors or gift bags. Drop cookies are best enjoyed within 5-7 days of baking.",
    relatedProducts: ["cupcakes", "pastries", "gluten-free", "sugar-free"],
  },
  {
    slug: "pastries",
    name: "Pastries",
    title: "Fresh Pastries in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order fresh pastries in San Diego from Auntie Lu's Bakery. Artisan croissants, danishes, scones, and specialty pastries baked daily with premium ingredients.",
    h1: "Artisan Pastries Baked Fresh in San Diego",
    intro:
      "Auntie Lu's pastries are crafted using traditional techniques and the finest ingredients, including our signature sourdough starter that adds depth and complexity to every bite. From flaky croissants to buttery scones, our pastry selection brings a touch of European-style baking to the San Diego area. Perfect for brunch spreads, breakfast meetings, or a well-deserved personal treat.",
    description:
      "Our pastry menu rotates seasonally, featuring classics alongside creative new flavors inspired by Colorado's local produce and culinary scene. Every croissant is laminated by hand for dozens of delicate, buttery layers. Our danishes are filled with house-made fruit compotes and rich custards. Scones are tender and crumbly with just the right amount of sweetness. For catering orders, we offer assorted pastry platters that make any morning event feel special.",
    variants: [
      {
        name: "Butter Croissants (Half Dozen)",
        price: "From $24",
        description:
          "Classic hand-laminated croissants with a golden, flaky exterior.",
      },
      {
        name: "Fruit Danishes (Half Dozen)",
        price: "From $27",
        description:
          "Flaky pastry filled with seasonal fruit compote and cream cheese.",
      },
      {
        name: "Scones (Half Dozen)",
        price: "From $21",
        description:
          "Tender scones in flavors like blueberry lemon, cranberry orange, or cheddar herb.",
      },
      {
        name: "Pastry Platter (Assorted Dozen)",
        price: "From $48",
        description:
          "A curated assortment of croissants, danishes, muffins, and scones.",
      },
    ],
    customizationOptions: [
      "Seasonal flavor selections based on locally available ingredients",
      "Savory options including ham and cheese croissants and herb scones",
      "Custom pastry platters arranged for corporate meetings or brunch events",
      "Dietary labels provided for each item to accommodate guest needs",
      "Advance scheduling for recurring weekly or monthly orders",
    ],
    orderInfo:
      "Pastry orders require 2 business days' notice for standard selections. Custom platters for corporate events or large gatherings need 4 business days. Early morning pickup is available so your pastries arrive fresh for breakfast or brunch.",
    faqQuestion: "Do you offer savory pastries for corporate breakfast catering?",
    faqAnswer:
      "Yes! Our savory pastry options are very popular for corporate breakfasts and brunch catering. We offer ham and gruyere croissants, spinach and feta hand pies, cheddar herb scones, and seasonal savory danishes. We can create custom platters mixing sweet and savory options, and we provide serving utensils and labels for easy self-service.",
    relatedProducts: ["cookies", "cupcakes", "gluten-free", "vegan-cakes"],
  },
  {
    slug: "gluten-free",
    name: "Gluten-Free Baked Goods",
    title: "Gluten-Free Baked Goods in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order delicious gluten-free cakes, cupcakes, and baked goods in San Diego. Auntie Lu's Bakery crafts gluten-free treats that taste incredible without compromise.",
    h1: "Gluten-Free Baked Goods in San Diego That Taste Amazing",
    intro:
      "At Auntie Lu's Bakery, we believe that gluten-free should never mean flavor-free. Our gluten-free baked goods are developed with the same care and creativity as our traditional offerings, using premium almond flour, oat flour, and other high-quality alternatives. San Diego-area customers with celiac disease or gluten sensitivities can enjoy beautiful, delicious baked goods without worry.",
    description:
      "We've spent years perfecting our gluten-free recipes so that texture, moisture, and taste meet the high standards our customers expect. Our gluten-free chocolate cake is rich and fudgy, our vanilla cupcakes are light and tender, and our cookies have that perfect chewy center. We take cross-contamination seriously and follow strict protocols when preparing gluten-free orders. Every gluten-free item is clearly labeled and packaged separately for your peace of mind.",
    variants: [
      {
        name: "Gluten-Free Custom Cake",
        price: "From $70",
        description:
          "A fully customizable gluten-free cake in your choice of size and flavor.",
      },
      {
        name: "Gluten-Free Cupcakes (Dozen)",
        price: "From $42",
        description:
          "Light, moist cupcakes with buttercream frosting, all gluten-free.",
      },
      {
        name: "Gluten-Free Cookie Box",
        price: "From $30",
        description:
          "An assortment of gluten-free cookies including chocolate chip and almond.",
      },
      {
        name: "Gluten-Free Brownies (Dozen)",
        price: "From $36",
        description:
          "Rich, fudgy brownies made with almond flour and premium cocoa.",
      },
    ],
    customizationOptions: [
      "Cake flavors: chocolate, vanilla, lemon, carrot, or seasonal options in gluten-free formulas",
      "Frosting choices: buttercream, cream cheese, or whipped coconut cream (dairy-free option)",
      "Custom decorations including fondant work on gluten-free cakes",
      "Mixed boxes combining gluten-free and traditional items for events with varied dietary needs",
      "Allergen information cards provided with every order for guest safety",
    ],
    orderInfo:
      "Gluten-free orders require 5 business days' notice to ensure proper preparation and ingredient sourcing. We batch our gluten-free baking separately to minimize cross-contamination risk. Pickup is available across the San Diego area.",
    faqQuestion: "Are your gluten-free products made in a dedicated gluten-free facility?",
    faqAnswer:
      "While we are not a 100% gluten-free facility, we follow rigorous protocols to prevent cross-contamination. Gluten-free items are prepared using dedicated equipment, separate mixing bowls, and cleaned surfaces. We batch all gluten-free baking at the start of the day before any wheat flour is used. Our products are suitable for customers with gluten sensitivity, though those with severe celiac disease should be aware of our shared-facility status.",
    relatedProducts: ["vegan-cakes", "sugar-free", "custom-cakes", "cupcakes"],
  },
  {
    slug: "vegan-cakes",
    name: "Vegan Cakes",
    title: "Vegan Cakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order delicious vegan cakes and cupcakes in San Diego from Auntie Lu's Bakery. Plant-based baked goods that everyone will love, with San Diego metro pickup available.",
    h1: "Vegan Cakes That Everyone Loves in San Diego",
    intro:
      "Auntie Lu's vegan cakes prove that plant-based baking can be absolutely extraordinary. Using carefully selected dairy-free and egg-free ingredients, we create cakes that are moist, flavorful, and visually stunning. Whether you're vegan, have dairy allergies, or simply want to offer inclusive options at your event, our vegan cakes are a crowd-pleaser.",
    description:
      "Our vegan baking program uses aquafaba, flax eggs, coconut cream, and high-quality plant-based butter to achieve the same rich textures and deep flavors as traditional cakes. Our vegan chocolate cake has earned a following among non-vegans and vegans alike for its incredibly moist crumb and decadent frosting. We offer full custom design capabilities on all vegan cakes, so you never have to sacrifice aesthetics for dietary preferences. From simple birthday cakes to elaborate tiered wedding cakes, we bring the same artistry to every vegan creation.",
    variants: [
      {
        name: "Vegan Custom Cake",
        price: "From $70",
        description:
          "A fully decorated vegan cake in your choice of size, flavor, and design.",
      },
      {
        name: "Vegan Cupcakes (Dozen)",
        price: "From $42",
        description:
          "Plant-based cupcakes with vegan buttercream in your chosen flavors.",
      },
      {
        name: "Vegan Cookie Box",
        price: "From $28",
        description:
          "A dozen assorted vegan cookies including chocolate chip and oatmeal.",
      },
      {
        name: "Vegan Tiered Cake",
        price: "From $200",
        description:
          "Multi-tier vegan cake for weddings and large celebrations with full custom design.",
      },
    ],
    customizationOptions: [
      "Cake flavors: chocolate, vanilla, lemon, coconut, strawberry, or seasonal specials",
      "Vegan frosting options: plant-based buttercream, coconut whip, or vegan ganache",
      "Full fondant work and custom decorations using vegan-friendly materials",
      "Option to combine vegan and non-vegan tiers for mixed-preference events",
      "Allergen-specific adjustments: nut-free, soy-free, or gluten-free vegan options available",
    ],
    orderInfo:
      "Vegan cake orders require 5-7 business days to allow for specialty ingredient sourcing and preparation. We clearly label all vegan items and can provide full ingredient lists upon request. Pickup available at all San Diego metro locations.",
    faqQuestion: "Can you make a wedding cake that is fully vegan?",
    faqAnswer:
      "Absolutely! We create stunning multi-tiered vegan wedding cakes that look and taste just as incredible as traditional ones. Our vegan fondant and buttercream allow for the same range of decorative techniques, from delicate sugar flowers to smooth marble finishes. We also offer tasting sessions for vegan cakes so you can choose your perfect flavor combination before your big day.",
    relatedProducts: ["gluten-free", "sugar-free", "custom-cakes", "tiered-cakes"],
  },
  {
    slug: "sugar-free",
    name: "Sugar-Free Options",
    title: "Sugar-Free Cakes & Baked Goods in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order sugar-free cakes, cupcakes, and treats in San Diego from Auntie Lu's Bakery. Delicious baked goods sweetened with natural alternatives for healthier celebrations.",
    h1: "Sugar-Free Baked Goods in San Diego",
    intro:
      "Auntie Lu's sugar-free baked goods let you enjoy celebration-worthy treats without the added sugar. We use natural sweeteners like monk fruit, stevia blends, and sugar alcohols to create cakes, cupcakes, and cookies that satisfy your sweet tooth while supporting your dietary goals. Perfect for diabetic-friendly celebrations and health-conscious customers in the San Diego area.",
    description:
      "Our sugar-free recipes have been refined to deliver genuine sweetness and satisfying texture without cane sugar. We understand that sugar-free doesn't mean taste-free, and we've invested significant time developing formulas that even sugar-loving guests will enjoy. Our sugar-free chocolate cake uses a combination of monk fruit sweetener and dark cocoa to create a rich, deeply flavored dessert. Every sugar-free item includes detailed nutritional information so you can make informed choices for yourself and your guests.",
    variants: [
      {
        name: "Sugar-Free Custom Cake",
        price: "From $75",
        description:
          "A custom-decorated cake sweetened with natural sugar alternatives.",
      },
      {
        name: "Sugar-Free Cupcakes (Dozen)",
        price: "From $45",
        description:
          "Cupcakes sweetened without cane sugar, available in popular flavors.",
      },
      {
        name: "Sugar-Free Cookie Assortment",
        price: "From $32",
        description:
          "A dozen cookies made with natural sweeteners and premium ingredients.",
      },
      {
        name: "Sugar-Free Cheesecake",
        price: "From $55",
        description:
          "Creamy cheesecake with a nut-based crust, sweetened with monk fruit.",
      },
    ],
    customizationOptions: [
      "Sweetener preference: monk fruit, stevia blend, erythritol, or allulose",
      "Cake flavors: chocolate, vanilla, lemon, strawberry, or carrot",
      "Low-carb frosting options using cream cheese or whipped cream bases",
      "Custom decorations and themes applied to all sugar-free cakes",
      "Nutritional information and carb counts provided with every order",
    ],
    orderInfo:
      "Sugar-free orders require 5 business days' notice. We recommend a tasting consultation if this is your first sugar-free order so you can select the sweetener and flavor profile that works best for you. Pickup available throughout the San Diego area.",
    faqQuestion: "What sweeteners do you use in your sugar-free baked goods?",
    faqAnswer:
      "We primarily use monk fruit extract, stevia blends, and erythritol as our sugar alternatives. These sweeteners provide natural sweetness without spiking blood sugar levels. We can also work with allulose for customers who prefer it. During your consultation, we'll discuss which sweetener works best for your taste preferences and dietary needs, and we're always transparent about the specific ingredients in each product.",
    relatedProducts: ["gluten-free", "vegan-cakes", "custom-cakes", "cupcakes"],
  },
  {
    slug: "photo-cakes",
    name: "Photo Cakes",
    title: "Photo Cakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order custom photo cakes in San Diego from Auntie Lu's Bakery. High-quality edible image printing on delicious cakes for birthdays, graduations, and celebrations.",
    h1: "Custom Photo Cakes in San Diego",
    intro:
      "Auntie Lu's photo cakes combine the personal touch of your favorite photographs with our scratch-baked cakes. Using high-resolution edible ink printing, we transfer your images onto cakes with vivid color and sharp detail. Photo cakes are a beloved choice for birthdays, graduations, retirements, and milestone celebrations across the San Diego area.",
    description:
      "Our edible image process uses FDA-approved inks and frosting sheets to reproduce your photos with exceptional clarity. Simply upload your image when you place your order, and our team will optimize it for printing and apply it seamlessly to your cake. We can print full-cake images, bordered designs, or combine photos with traditional cake decorating for a blended look. The edible image is virtually undetectable in taste, so every slice looks and tastes wonderful.",
    variants: [
      {
        name: '8" Round Photo Cake',
        price: "From $65",
        description:
          "A single-layer photo cake with your image printed edge-to-edge or bordered.",
      },
      {
        name: '10" Round Photo Cake',
        price: "From $85",
        description:
          "A larger photo cake with enhanced detail and room for additional decoration.",
      },
      {
        name: "Quarter Sheet Photo Cake",
        price: "From $75",
        description:
          "A rectangular photo cake ideal for group photos and landscape images.",
      },
      {
        name: "Photo Cupcakes (Dozen)",
        price: "From $54",
        description:
          "Individual cupcakes each topped with a mini version of your photo.",
      },
    ],
    customizationOptions: [
      "Upload any high-resolution photo, illustration, or logo for printing",
      "Image layout options: full-bleed, bordered, collage, or partial overlay",
      "Cake flavor and frosting selections from our full custom cake menu",
      "Text and messaging added around or below the photo image",
      "Multiple images on a single cake for collage-style designs",
    ],
    orderInfo:
      "Photo cake orders require 4 business days and a high-resolution image (at least 300 DPI for best results). Upload your image during the order process or email it directly to us. We'll send a digital proof for your approval before printing. Pickup available across the San Diego area.",
    faqQuestion: "What image quality do I need for a photo cake?",
    faqAnswer:
      "For the best results, we recommend images that are at least 300 DPI and in JPEG or PNG format. Smartphone photos taken in good lighting typically work great. We'll review your image after submission and let you know if we have any concerns about print quality. If needed, our team can adjust brightness, contrast, and cropping to optimize your image before printing.",
    relatedProducts: ["custom-cakes", "sheet-cakes", "cupcakes", "tiered-cakes"],
  },
  {
    slug: "tiered-cakes",
    name: "Tiered Cakes",
    title: "Tiered Cakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order stunning tiered cakes in San Diego from Auntie Lu's Bakery. Custom multi-tier designs for weddings, quinceañeras, and grand celebrations with San Diego metro pickup.",
    h1: "Tiered Cakes for San Diego's Grand Celebrations",
    intro:
      "Auntie Lu's tiered cakes are showstopping centerpieces designed for life's most important celebrations. From elegant two-tier birthday cakes to grand five-tier wedding creations, each tiered cake is structurally engineered and artistically decorated to make a lasting impression. We serve brides, event planners, and families throughout the San Diego area.",
    description:
      "Creating a beautiful tiered cake is both an art and a science, and Auntie Lu's team excels at both. Each tier is individually baked, filled, and frosted before being carefully assembled with internal support structures for stability and safety. We offer mix-and-match flavors across tiers so every guest finds something they love. Our decorative capabilities range from classic smooth buttercream to elaborate fondant work featuring sugar flowers, hand-painted details, metallic accents, and more.",
    variants: [
      {
        name: "Two-Tier Cake",
        price: "From $150",
        description:
          "A two-tier design serving 30-40 guests, perfect for milestone birthdays and showers.",
      },
      {
        name: "Three-Tier Cake",
        price: "From $250",
        description:
          "A three-tier creation serving 50-75 guests, a popular wedding cake option.",
      },
      {
        name: "Four-Tier Cake",
        price: "From $375",
        description:
          "A grand four-tier cake serving 100-125 guests with extensive custom decoration.",
      },
      {
        name: "Five-Tier Cake",
        price: "From $500",
        description:
          "A dramatic five-tier masterpiece for large weddings and galas, serving 150+ guests.",
      },
    ],
    customizationOptions: [
      "Mix-and-match flavors and fillings for each individual tier",
      "Decorative styles: buttercream, fondant, naked, semi-naked, or combination finishes",
      "Sugar flowers, fresh flower placement, metallic leaf, or hand-painted designs",
      "Custom cake topper coordination and structural accommodations",
      "Tasting sessions available for weddings and large event orders",
    ],
    orderInfo:
      "Tiered cakes require a minimum of 3 weeks' notice for standard designs and 6 weeks for elaborate wedding cakes. We offer complimentary tasting consultations for wedding cake orders. A 50% deposit is required to secure your date. Pickup and careful transport guidance provided for all tiered cake orders.",
    faqQuestion: "Do you deliver tiered cakes or is it pickup only?",
    faqAnswer:
      "Tiered cakes are available for pickup at our San Diego location, and we provide detailed transport instructions along with a stabilized cake box to keep your cake safe during the drive. For wedding cakes, we strongly recommend having a member of your event team pick up the cake the morning of the event. We can also recommend trusted delivery partners in the San Diego area who specialize in cake transport if you prefer professional delivery.",
    relatedProducts: ["custom-cakes", "sheet-cakes", "photo-cakes", "vegan-cakes"],
  },
  {
    slug: "sheet-cakes",
    name: "Sheet Cakes",
    title: "Sheet Cakes in San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order custom sheet cakes in San Diego from Auntie Lu's Bakery. Perfect for office parties, school events, and large gatherings with easy serving and beautiful designs.",
    h1: "Custom Sheet Cakes for San Diego Events",
    intro:
      "Auntie Lu's sheet cakes are the practical and delicious choice for feeding a crowd without sacrificing quality or presentation. Unlike grocery store sheet cakes, ours are baked from scratch with premium ingredients and decorated with the same care we put into our custom cakes. They're ideal for office celebrations, school events, church gatherings, and neighborhood parties across the San Diego area.",
    description:
      "Our sheet cakes come in three sizes to fit any event, from a small office birthday to a large community gathering. Each cake features two layers of moist cake with your choice of filling, covered in smooth buttercream frosting. We can decorate with custom messages, themed designs, edible images, or simple elegant borders. Sheet cakes are easy to transport, simple to serve, and consistently crowd-pleasing. They're also our most budget-friendly option for feeding large groups without compromising on flavor.",
    variants: [
      {
        name: "Quarter Sheet Cake",
        price: "From $45",
        description:
          "Serves 12-16 guests. Great for small office parties and family dinners.",
      },
      {
        name: "Half Sheet Cake",
        price: "From $65",
        description:
          "Serves 24-36 guests. Popular for birthday parties and team celebrations.",
      },
      {
        name: "Full Sheet Cake",
        price: "From $95",
        description:
          "Serves 48-60 guests. Perfect for school events, church socials, and large parties.",
      },
      {
        name: "Sheet Cake with Photo",
        price: "From $80",
        description:
          "A half-sheet cake with a custom edible image printed on top.",
      },
    ],
    customizationOptions: [
      "Cake flavors: white, chocolate, marble, yellow, red velvet, or confetti",
      "Filling options: buttercream, chocolate mousse, strawberry, or bavarian cream",
      "Custom inscription and messaging in your choice of colors",
      "Themed border designs, rosettes, and decorative piping styles",
      "Edible image printing available on all sheet cake sizes",
    ],
    orderInfo:
      "Sheet cakes require 3 business days' notice for standard designs and 5 business days for photo or custom-decorated sheet cakes. Our sheet cakes are packaged in sturdy, easy-to-carry boxes. Pickup available at all San Diego metro locations.",
    faqQuestion: "How many people does a full sheet cake serve?",
    faqAnswer:
      "A full sheet cake serves approximately 48-60 guests with standard-sized slices. A half sheet serves 24-36, and a quarter sheet serves 12-16. If you're serving the cake as the primary dessert, plan for larger slices and use the lower end of the serving range. If it's part of a dessert table with other options, you'll be fine using the higher end. We're happy to help you calculate the right size for your event.",
    relatedProducts: ["custom-cakes", "photo-cakes", "cupcakes", "tiered-cakes"],
  },
  {
    slug: "sourdough",
    name: "Artisan Sourdough",
    title: "Artisan Sourdough Bread San Diego | Auntie Lu's Bakery",
    metaDescription:
      "Order fresh artisan sourdough bread in San Diego from Auntie Lu's Bakery. Small-batch, naturally leavened with 24+ hour fermentation. Classic loaves, focaccia, and specialty flavors.",
    h1: "Artisan Sourdough Bread in San Diego",
    intro:
      "Auntie Lu's sourdough is where it all began. Our naturally leavened breads are crafted using a 24+ hour fermentation process that develops deep, complex flavors and a perfect chewy-crisp crust. Each loaf is shaped by hand and baked in small batches, ensuring the quality and care that made us a San Diego favorite.",
    description:
      "Our sourdough program uses a heritage starter that's been nurtured for years, fed daily with organic flour to maintain its unique character. The slow fermentation process breaks down gluten and phytic acid, making our bread easier to digest than conventional loaves. We offer classic country sourdough with its signature tangy crumb, as well as specialty flavors like rosemary olive oil, jalapeño cheddar, everything seasoning, and seasonal variations. Our focaccia is pillowy-soft with a crisp bottom and topped with whatever's fresh from local San Diego farmers.",
    variants: [
      {
        name: "Classic Country Sourdough",
        price: "$12",
        description:
          "Our signature loaf. Golden crust, open crumb, perfect tang. Approximately 1.5 lbs.",
      },
      {
        name: "Rosemary Olive Oil Sourdough",
        price: "$14",
        description:
          "Infused with fresh rosemary and extra virgin olive oil. Savory and aromatic.",
      },
      {
        name: "Jalapeño Cheddar Sourdough",
        price: "$14",
        description:
          "Sharp cheddar and diced jalapeños baked right into the dough. A San Diego favorite.",
      },
      {
        name: "Everything Sourdough",
        price: "$14",
        description:
          "Topped with our house everything blend: sesame, poppy, garlic, onion, and salt.",
      },
      {
        name: "Sourdough Focaccia",
        price: "From $16",
        description:
          "Thick, pillowy focaccia with olive oil, flaky salt, and seasonal toppings.",
      },
      {
        name: "Sourdough Loaf Subscription",
        price: "From $40/month",
        description:
          "Weekly fresh loaf delivered or ready for pickup. Never run out of great bread.",
      },
    ],
    customizationOptions: [
      "Choose your preferred bake level: lighter or darker crust",
      "Seasonal specialty flavors based on local San Diego ingredients",
      "Sliced or unsliced (unsliced stays fresh longer)",
      "Subscription options: weekly, bi-weekly, or monthly delivery",
      "Bulk orders for restaurants, cafes, and events (minimum 6 loaves)",
    ],
    orderInfo:
      "Sourdough orders require 3-5 days' notice to accommodate our long fermentation process. Orders are baked fresh on your pickup day — we never sell day-old bread. Pickup is available at our San Diego location, or add delivery to your order. Subscription customers get priority baking slots and never miss a loaf.",
    faqQuestion: "Why does your sourdough require 3-5 days' notice?",
    faqAnswer:
      "Real sourdough can't be rushed. Our bread undergoes a minimum 24-hour fermentation, plus time for shaping, proofing, and baking. By ordering ahead, you're guaranteed a loaf baked fresh on your pickup day — not bread that's been sitting on a shelf. This slow process is what gives our sourdough its signature flavor, texture, and digestibility. Trust us, it's worth the wait.",
    relatedProducts: ["pastries", "cookies", "custom-cakes", "cupcakes"],
  },
]
