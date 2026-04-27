import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { supportContact } from '@/content/landing'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3 md:px-6 md:py-16">
        <div>
          <Image
            src="/Moelders-logo.png"
            alt="Mölders"
            width={240}
            height={181}
            className="h-12 w-auto md:h-14"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Dein Spezialist für Bauen und Wohnen im Norden.
            <br />
            Alles für Dein Projekt. Alles aus einer Hand. Alles Mölders.
          </p>
        </div>

        <section aria-labelledby="footer-kontakt-heading">
          <h2
            id="footer-kontakt-heading"
            className="text-sm font-semibold uppercase tracking-wide text-foreground"
          >
            Kontakt
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                aria-hidden
              />
              <a
                href={`tel:${supportContact.phone.replace(/\s/g, '')}`}
                aria-label={`Mölders anrufen unter ${supportContact.phoneDisplay}`}
                className="rounded-sm hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {supportContact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                aria-hidden
              />
              <a
                href={`mailto:${supportContact.email}`}
                aria-label={`E-Mail an Mölders an ${supportContact.email}`}
                className="rounded-sm hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {supportContact.email}
              </a>
            </li>
            <li className="pt-2 text-xs leading-relaxed">
              <address className="not-italic">
                {supportContact.address.company}
                <br />
                {supportContact.address.street}
                <br />
                {supportContact.address.city}
              </address>
            </li>
          </ul>
        </section>

        <nav aria-label="Rechtliches">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Rechtliches
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/impressum"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border bg-secondary/60">
        <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} Mölders Holding GmbH & Co. KG. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  )
}
