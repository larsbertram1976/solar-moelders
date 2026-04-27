import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { SkipLink } from '@/components/layout/skip-link'
import { PromoBar } from '@/components/landing/promo-bar'
import { OrganizationJsonLd } from '@/components/seo/organization-json-ld'
import { WebsiteJsonLd } from '@/components/seo/website-json-ld'
import { brand } from '@/content/landing'

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: 'Balkonkraftwerk vom Mölders-Spezialisten | Solar für Dein Zuhause',
    template: '%s | Mölders Solar',
  },
  description:
    'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung, Lieferung und Montage in Norddeutschland. Jetzt kostenlos anfragen.',
  applicationName: 'Mölders Solar',
  authors: [{ name: brand.legalName, url: brand.parentUrl }],
  creator: brand.legalName,
  publisher: brand.legalName,
  keywords: [
    'Balkonkraftwerk',
    'Solaranlage Mieter',
    'Photovoltaik',
    'Mölders',
    'Solar Norddeutschland',
    'Wechselrichter',
    'Stecker-Solargerät',
    'Balkon-PV',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Mölders Solar',
    title: 'Balkonkraftwerk vom Mölders-Spezialisten',
    description:
      'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung in Norddeutschland.',
    url: '/',
    images: [
      {
        url: '/Solar-Bild-Moelders.jpeg',
        width: 600,
        height: 316,
        alt: 'Familie auf dem Dach vor Solaranlage — Mölders bringt Sonnenstrom nach Hause',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balkonkraftwerk vom Mölders-Spezialisten',
    description:
      'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung in Norddeutschland.',
    images: ['/Solar-Bild-Moelders.jpeg'],
  },
  icons: {
    icon: '/Moelders-logo.png',
    apple: '/Moelders-logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#E2001A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col antialiased">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SkipLink />
        <PromoBar />
        <SiteHeader />
        <main id="hauptinhalt" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
