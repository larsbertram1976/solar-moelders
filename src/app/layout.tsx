import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { SkipLink } from '@/components/layout/skip-link'
import { PromoBar } from '@/components/landing/promo-bar'

export const metadata: Metadata = {
  title: 'Balkonkraftwerk vom Mölders-Spezialisten | Solar für Dein Zuhause',
  description:
    'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung, Lieferung und Montage in Norddeutschland. Jetzt kostenlos anfragen.',
  metadataBase: new URL('https://solar.moelders.de'),
  openGraph: {
    title: 'Balkonkraftwerk vom Mölders-Spezialisten',
    description:
      'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung in Norddeutschland.',
    locale: 'de_DE',
    type: 'website',
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
