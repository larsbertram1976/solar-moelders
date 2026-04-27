import { brand } from '@/content/landing'

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${brand.url}#website`,
    url: brand.url,
    name: 'Mölders Solar',
    inLanguage: 'de-DE',
    publisher: { '@id': `${brand.url}#organization` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
