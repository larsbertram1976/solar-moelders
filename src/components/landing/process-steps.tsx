import { processSteps } from '@/content/landing'

export function ProcessSteps() {
  return (
    <section
      id="so-funktionierts"
      aria-labelledby="so-funktionierts-heading"
      className="bg-white"
    >
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="so-funktionierts-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            So kommst Du zu Deinem Balkonkraftwerk
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            In vier Schritten zum eigenen Sonnenstrom — wir begleiten Dich auf
            jeder Etappe.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-border bg-secondary/30 p-6"
            >
              <div
                aria-hidden
                className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md"
              >
                {index + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                <span className="sr-only">Schritt {index + 1}: </span>
                {step.title.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
