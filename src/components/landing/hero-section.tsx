import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { hero } from '@/content/landing'
import { Sun, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-white">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sun className="h-4 w-4" />
            {hero.eyebrow}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.subline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <a href="#anfrage">
                {hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <a href="#so-funktionierts">{hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={hero.imageWidth}
              height={hero.imageHeight}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl ring-1 ring-border md:-bottom-6 md:-left-6">
            <div className="text-3xl font-bold text-primary">800 W</div>
            <div className="text-xs text-muted-foreground">
              max. Wechselrichter-Leistung seit 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
