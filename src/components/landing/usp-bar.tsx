import { usps } from '@/content/landing'

export function UspBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 md:px-6 md:py-12">
        {usps.map((usp) => {
          const Icon = usp.icon
          return (
            <div key={usp.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{usp.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {usp.text}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
