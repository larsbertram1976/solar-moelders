import { HeroSection } from '@/components/landing/hero-section'
import { UspBar } from '@/components/landing/usp-bar'
import { LeistungenGrid } from '@/components/landing/leistungen-grid'
import { ProcessSteps } from '@/components/landing/process-steps'
import { FaqAccordion } from '@/components/landing/faq-accordion'
import { LeadFormSection } from '@/components/landing/lead-form-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <UspBar />
      <LeistungenGrid />
      <ProcessSteps />
      <FaqAccordion />
      <LeadFormSection />
    </>
  )
}
