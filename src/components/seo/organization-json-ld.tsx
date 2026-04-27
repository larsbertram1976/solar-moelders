import { brand, supportContact } from '@/content/landing'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${brand.url}#organization`,
    name: brand.name,
    legalName: brand.legalName,
    url: brand.url,
    logo: brand.logoUrl,
    foundingDate: brand.founded,
    slogan: brand.claim,
    description:
      'Mölders ist Dein Spezialist für Bauen und Wohnen im Norden — mit eigenem Solar- und Photovoltaik-Service inkl. Beratung, Lieferung und Montage von Balkonkraftwerken.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Norddeutschland',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: supportContact.phone,
      email: supportContact.email,
      contactType: 'customer service',
      availableLanguage: ['de'],
      areaServed: 'DE',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: supportContact.address.street,
      addressLocality: 'Lüneburg',
      postalCode: '21339',
      addressCountry: 'DE',
    },
    sameAs: brand.sameAs,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
