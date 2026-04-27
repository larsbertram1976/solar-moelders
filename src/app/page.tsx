import type { Metadata } from 'next'
import { HeroSection } from '@/components/landing/hero-section'
import { UspBar } from '@/components/landing/usp-bar'
import { PromoCallout } from '@/components/landing/promo-callout'
import { LeistungenGrid } from '@/components/landing/leistungen-grid'
import { ProcessSteps } from '@/components/landing/process-steps'
import { FaqAccordion } from '@/components/landing/faq-accordion'
import { LeadFormSection } from '@/components/landing/lead-form-section'
import { ServiceJsonLd } from '@/components/seo/service-json-ld'

export const metadata: Metadata = {
  title: {
    absolute:
      'Balkonkraftwerk vom Mölders-Spezialisten | Solar für Dein Zuhause',
  },
  description:
    'Bis 800 W eigener Sonnenstrom mit dem Balkonkraftwerk von Mölders. Persönliche Beratung, Lieferung und Montage in Norddeutschland. Jetzt 25 % Rabatt auf Wechselrichter sichern.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <ServiceJsonLd />
      <HeroSection />
      <UspBar />
      <PromoCallout />
      <LeistungenGrid />
      <ProcessSteps />
      <FaqAccordion />
      <LeadFormSection />
    </>
  )
}
