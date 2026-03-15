import Link from 'next/link'
import { BreadcrumbSchema } from './SchemaMarkup'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map(item => ({
    name: item.name,
    url: `https://www.auntielusbakery.com${item.href}`,
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav className="py-4 px-[4%] max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 list-none text-sm text-gray-500">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300">/</span>}
              {i === items.length - 1 ? (
                <span className="text-crust font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-gray-500 no-underline hover:text-dark-crust transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
