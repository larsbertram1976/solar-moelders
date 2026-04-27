import { ArrowRight, CalendarDays, Sparkles, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { promo } from '@/content/landing'

export function PromoCallout() {
  return (
    <section
      id="aktion"
      aria-labelledby="aktion-heading"
      className="bg-white"
    >
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(353_100%_36%)] px-6 py-12 text-primary-foreground shadow-xl md:px-12 md:py-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold uppercase tracking-wide">
                <Sparkles className="h-4 w-4" aria-hidden />
                {promo.badge}
              </div>

              <h2
                id="aktion-heading"
                className="mt-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              >
                {promo.headline}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                {promo.subline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/90">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  Vom {promo.startDisplay} bis {promo.endDisplay} 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tag className="h-4 w-4" aria-hidden />
                  Nur auf Wechselrichter
                </span>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-base font-semibold text-primary hover:bg-white focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <a href="#anfrage">
                    {promo.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>

            <div
              aria-hidden
              className="relative hidden h-44 w-44 flex-shrink-0 items-center justify-center md:flex lg:h-56 lg:w-56"
            >
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div className="absolute inset-3 rounded-full bg-white/15" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-primary shadow-2xl">
                <div className="text-center leading-none">
                  <div className="text-5xl font-black tracking-tighter lg:text-6xl">
                    25%
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest">
                    Rabatt
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="relative mt-8 max-w-3xl text-xs leading-relaxed text-primary-foreground/70">
            {promo.legal}
          </p>
        </div>
      </div>
    </section>
  )
}
