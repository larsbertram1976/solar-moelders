import { Sparkles } from 'lucide-react'
import { promo } from '@/content/landing'

export function PromoBar() {
  return (
    <aside
      aria-label="Aktuelle Aktion"
      className="bg-primary text-primary-foreground"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-2.5 text-center text-sm sm:flex-row sm:gap-3 md:px-6">
        <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wide">
          <Sparkles className="h-4 w-4" aria-hidden />
          {promo.badge}
        </span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span>
          <span className="font-semibold">25 % Rabatt auf Wechselrichter</span>
          <span className="ml-2">
            <span className="sr-only">Aktionszeitraum: </span>
            {promo.rangeShort}
          </span>
        </span>
        <a
          href="#aktion"
          className="inline-flex min-h-[36px] items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary outline-offset-2 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Mehr erfahren
        </a>
      </div>
    </aside>
  )
}
