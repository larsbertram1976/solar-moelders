import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/content/landing'

export function FaqAccordion() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-secondary/40"
    >
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Häufige Fragen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Was Du zum Thema Balkonkraftwerk wissen solltest. Wenn Deine Frage
            hier nicht dabei ist — frag uns einfach direkt.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
