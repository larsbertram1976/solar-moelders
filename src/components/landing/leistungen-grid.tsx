import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { leistungen } from '@/content/landing'

export function LeistungenGrid() {
  return (
    <section id="leistungen" className="bg-secondary/40">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Dein Komplett-Paket bei Mölders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Beratung, Lieferung, Montage — alles aus einer Hand. Du musst Dich um
            nichts kümmern.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leistungen.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
