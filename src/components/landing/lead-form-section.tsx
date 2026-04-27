import { Card, CardContent } from '@/components/ui/card'
import { Sun } from 'lucide-react'
import { supportContact } from '@/content/landing'

/**
 * Container für das Beratungsanfrage-Formular.
 * Die eigentliche Formular-Logik wird in PROJ-2 implementiert.
 */
export function LeadFormSection() {
  return (
    <section id="anfrage" className="bg-white">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Sun className="h-4 w-4" />
              Kostenlose Beratung
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Bereit für eigenen Sonnenstrom?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schreib uns kurz, wir melden uns innerhalb von einem Werktag bei
              Dir — telefonisch oder per E-Mail, wie Du magst.
            </p>
          </div>

          <Card className="mt-10 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Hier wird das Beratungsanfrage-Formular eingesetzt
                  (PROJ-2).
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Solange kannst Du uns direkt anrufen unter{' '}
                  <a
                    href={`tel:${supportContact.phone.replace(/\s/g, '')}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {supportContact.phoneDisplay}
                  </a>{' '}
                  oder schreiben an{' '}
                  <a
                    href={`mailto:${supportContact.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {supportContact.email}
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
