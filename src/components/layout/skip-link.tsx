/**
 * Versteckter Link, der per Tab als erstes Element fokussiert wird.
 * Erlaubt Tastatur- und Screenreader-Nutzern, die Promo- und Header-Bereiche
 * zu überspringen und direkt zum Hauptinhalt zu springen.
 */
export function SkipLink() {
  return (
    <a
      href="#hauptinhalt"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Zum Hauptinhalt springen
    </a>
  )
}
