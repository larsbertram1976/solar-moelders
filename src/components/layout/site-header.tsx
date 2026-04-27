import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:h-28 md:px-6">
        <Link
          href="/"
          aria-label="Mölders – zur Startseite"
          className="flex items-center"
        >
          <Image
            src="/Moelders-logo.png"
            alt="Mölders"
            width={320}
            height={241}
            priority
            className="h-14 w-auto md:h-20"
          />
        </Link>

        <Button asChild size="sm" className="md:size-default">
          <a href="#anfrage">Beratung anfragen</a>
        </Button>
      </div>
    </header>
  )
}
