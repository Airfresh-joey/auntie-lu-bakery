import { GalleryImage } from '@/components/ProductGallery'
import { ProductGridImage } from '@/components/ProductImageGrid'

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    alt: 'Elegant Wedding Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec',
    alt: 'Decorated Cupcakes',
    category: 'Cupcakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d',
    alt: 'Beautifully Decorated Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
    alt: 'Birthday Celebration Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1519869325930-281384f7f584',
    alt: 'Assorted Decorated Cookies',
    category: 'Cookies',
  },
  {
    src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
    alt: 'Rich Chocolate Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713',
    alt: 'Elegant Tiered Cake',
    category: 'Tiered Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636',
    alt: 'Fresh Baked Pastries',
    category: 'Pastries',
  },
  {
    src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729',
    alt: 'Pink Celebration Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62',
    alt: 'Rustic Buttercream Cake',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b',
    alt: 'Fresh Cake Slice',
    category: 'Custom Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1557979619-445218f326b9',
    alt: 'Artisan Cupcake',
    category: 'Cupcakes',
  },
]

export function getGalleryByCategory(category: string): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category)
}

export const categoryGalleryMap: Record<string, GalleryImage[]> = {
  'custom-cakes': galleryImages.filter((img) =>
    img.category === 'Custom Cakes'
  ),
  cupcakes: galleryImages.filter((img) => img.category === 'Cupcakes'),
  cookies: galleryImages.filter((img) => img.category === 'Cookies'),
  pastries: galleryImages.filter((img) => img.category === 'Pastries'),
  'tiered-cakes': galleryImages.filter((img) => img.category === 'Tiered Cakes'),
}

// Pre-built image sets for different page types
export const cityPageImages: ProductGridImage[] = [
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587', alt: 'Elegant Wedding Cake', category: 'Wedding Cakes' },
  { src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec', alt: 'Colorful Cupcakes', category: 'Cupcakes' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce', alt: 'Chocolate Layer Cake', category: 'Custom Cakes' },
  { src: 'https://images.unsplash.com/photo-1519869325930-281384f7f584', alt: 'Decorated Cookies', category: 'Cookies' },
]

export const eventPageImages: ProductGridImage[] = [
  { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713', alt: 'Elegant Tiered Cake', category: 'Tiered Cakes' },
  { src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729', alt: 'Pink Celebration Cake', category: 'Celebration' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', alt: 'Birthday Cake with Candles', category: 'Birthday' },
  { src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62', alt: 'Rustic Buttercream Cake', category: 'Rustic' },
]

export const blogPostImages: ProductGridImage[] = [
  { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d', alt: 'Beautifully Decorated Cake', category: 'Custom Cakes' },
  { src: 'https://images.unsplash.com/photo-1557979619-445218f326b9', alt: 'Artisan Cupcake Close-Up', category: 'Cupcakes' },
  { src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b', alt: 'Fresh Cake Slice', category: 'Desserts' },
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636', alt: 'Fresh Baked Pastries', category: 'Pastries' },
]
