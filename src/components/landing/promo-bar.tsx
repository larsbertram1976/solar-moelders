import { Sparkles } from 'lucide-react'
import { promo } from '@/content/landing'

export function PromoBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-center gap-1 px-4 py-2 text-center text-sm sm:flex-row sm:gap-3 md:px-6">
        <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wide">
          <Sparkles className="h-4 w-4" aria-hidden />
          {promo.badge}
        </span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span>
          <span className="font-semibold">25 % Rabatt auf Wechselrichter</span>
          <span className="ml-2 opacity-90">{promo.rangeShort}</span>
        </span>
        <a
          href="#aktion"
          className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium underline-offset-2 hover:bg-white/25 hover:underline"
        >
          mehr erfahren
        </a>
      </div>
    </div>
  )
}
