import { brand, promo } from '@/content/landing'

export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Balkonkraftwerk-Beratung und Montage',
    serviceType: 'Photovoltaik-Beratung & Installation',
    provider: { '@id': `${brand.url}#organization` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Norddeutschland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Mieter, Eigentümer, Vermieter',
    },
    description:
      'Beratung, Lieferung und Montage von Balkonkraftwerken bis 800 W — persönlich vor Ort durch Mölders mit 80 Jahren Erfahrung.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${brand.url}/#anfrage`,
      // 25 % Rabatt-Aktion auf Wechselrichter
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: `${promo.headline} (${promo.startDisplay} bis ${promo.endDisplay} 2026)`,
      },
      validFrom: promo.startDate,
      validThrough: promo.endDate,
      seller: { '@id': `${brand.url}#organization` },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
