import {
  Sun,
  Truck,
  Wrench,
  HeadphonesIcon,
  MapPin,
  ShieldCheck,
  Clock,
  HandshakeIcon,
  type LucideIcon,
} from 'lucide-react'

export const brand = {
  name: 'Mölders',
  product: 'Solar fürs Zuhause',
  claim: 'Alles für Dein Projekt. Alles aus einer Hand. Alles Mölders.',
  region: 'Norddeutschland',
}

export const hero = {
  eyebrow: 'Balkonkraftwerk vom Mölders-Spezialisten',
  headline: 'Dein Balkonkraftwerk. Lokal beraten. Schnell installiert.',
  subline:
    'Bis zu 800 Watt eigener Sonnenstrom — ohne Bürokratie-Marathon. Wir beraten Dich persönlich, liefern direkt zu Dir und unterstützen bei der Montage.',
  ctaPrimary: 'Kostenlose Beratung anfragen',
  ctaSecondary: 'So funktioniert’s',
  image: '/Solar-Bild-Moelders.jpeg',
  imageAlt:
    'Familie auf dem Dach vor Solaranlage — Mölders bringt Sonnenstrom nach Hause',
  imageWidth: 600,
  imageHeight: 316,
}

export const promo = {
  badge: 'Aktion',
  headline: '25 % Rabatt auf Wechselrichter',
  subline:
    'Spar bei Deinem Balkonkraftwerk doppelt: Wir geben Dir 25 % Rabatt auf den Wechselrichter — das Herzstück Deiner Anlage.',
  // Heute = 2026-04-27 (Mo). Nächster Mittwoch = 2026-04-29. Aktion bis Ende August 2026.
  startDate: '2026-04-29',
  endDate: '2026-08-31',
  startDisplay: '29. April',
  endDisplay: '31. August',
  rangeShort: '29.04.–31.08.',
  ctaLabel: 'Jetzt Angebot sichern',
  legal:
    'Aktion gilt vom 29. April bis 31. August 2026, nur auf Wechselrichter, solange der Vorrat reicht. Nicht mit anderen Rabatten kombinierbar.',
}

export const usps: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Clock,
    title: '80 Jahre Mölders',
    text: 'Familienunternehmen seit 1946 — wir wissen, wie Bauen im Norden funktioniert.',
  },
  {
    icon: MapPin,
    title: 'Regional vor Ort',
    text: '16 Standorte in Norddeutschland. Dein Ansprechpartner ist nie weit entfernt.',
  },
  {
    icon: HandshakeIcon,
    title: 'Eigenes Montageteam',
    text: 'Keine fremden Subunternehmer. Unsere Profis montieren Deine Anlage selbst.',
  },
  {
    icon: ShieldCheck,
    title: 'Beratung kostenlos',
    text: 'Erst beraten, dann entscheiden. Ohne Verpflichtung, ohne Druck.',
  },
]

export const leistungen: Array<{
  icon: LucideIcon
  title: string
  text: string
}> = [
  {
    icon: Sun,
    title: 'Set-Beratung',
    text: 'Wir finden gemeinsam das Balkonkraftwerk, das zu Deinem Balkon, Deinem Stromverbrauch und Deinem Budget passt — von 300 W bis 800 W.',
  },
  {
    icon: Truck,
    title: 'Lieferung zu Dir',
    text: 'Komplett-Set bequem nach Hause oder zur Abholung in einem unserer Baucentren. Modul, Wechselrichter, Halterung — alles dabei.',
  },
  {
    icon: Wrench,
    title: 'Montage-Support',
    text: 'Unsere Profis kommen zu Dir oder unterstützen Dich telefonisch beim Selbstaufbau. Wie es für Dich am besten passt.',
  },
]

export const processSteps: Array<{ title: string; text: string }> = [
  {
    title: '1. Anfrage senden',
    text: 'Du füllst das kurze Formular unten aus — in unter einer Minute.',
  },
  {
    title: '2. Persönliche Beratung',
    text: 'Wir rufen Dich innerhalb von einem Werktag zurück und klären alle Fragen.',
  },
  {
    title: '3. Lieferung & Montage',
    text: 'Dein Balkonkraftwerk kommt zu Dir. Auf Wunsch übernimmt unser Team die komplette Montage.',
  },
  {
    title: '4. Strom selbst erzeugen',
    text: 'Anstecken, anmelden, sparen. Ab dem ersten Sonnenstrahl produzierst Du eigenen Strom.',
  },
]

export const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Brauche ich als Mieter eine Genehmigung vom Vermieter?',
    answer:
      'Seit 2024 hast Du als Mieter einen gesetzlichen Anspruch auf ein Balkonkraftwerk — der Vermieter darf es nur in Ausnahmefällen ablehnen. Wir helfen Dir gerne beim Schreiben an den Vermieter und bei allen rechtlichen Fragen.',
  },
  {
    question: 'Wie viel Watt darf mein Balkonkraftwerk haben?',
    answer:
      'In Deutschland sind seit Mai 2024 bis zu 800 Watt Wechselrichter-Leistung erlaubt. Die Solarmodule selbst dürfen sogar bis zu 2.000 Watt Peak haben. Welche Leistung für Dich sinnvoll ist, klären wir in der Beratung.',
  },
  {
    question: 'Reicht eine normale Schuko-Steckdose?',
    answer:
      'Ja. Du kannst Dein Balkonkraftwerk an eine ganz normale Schuko-Steckdose anschließen. Wichtig ist nur, dass der Stromkreis nicht überlastet wird — wir prüfen das vorab gemeinsam.',
  },
  {
    question: 'Muss ich mein Balkonkraftwerk anmelden?',
    answer:
      'Ja, aber es ist einfach geworden: Eine Anmeldung im Marktstammdatenregister der Bundesnetzagentur reicht. Dein Netzbetreiber wird automatisch informiert. Wir zeigen Dir Schritt für Schritt, wie es geht.',
  },
  {
    question: 'Was kostet ein Balkonkraftwerk bei Mölders?',
    answer:
      'Komplett-Sets starten bei rund 400 € (300 W) und gehen bis ca. 1.200 € (800 W mit hochwertigen Modulen). Dank reduzierter Mehrwertsteuer sparst Du seit 2023 nochmals deutlich. Genauen Preis bekommst Du nach kurzer Beratung.',
  },
  {
    question: 'Wie schnell amortisiert sich die Anlage?',
    answer:
      'Bei aktuellen Strompreisen rechnet sich ein Balkonkraftwerk meist nach 4 bis 6 Jahren — danach produzierst Du quasi kostenlos Strom. Die Module halten in der Regel 25 Jahre und länger.',
  },
]

export const supportContact = {
  // Service-Kontakt im Footer / als Notfall-Telefon im Formular-Fehlerfall
  phone: '+49 4131 30 30 0',
  phoneDisplay: '04131 / 30 30 0',
  email: 'solar@moelders.de',
  address: {
    company: 'Mölders Holding GmbH & Co. KG',
    street: 'Hamburger Straße 1',
    city: '21339 Lüneburg',
    note: '[Stammdaten vor Go-Live durch Mölders bestätigen]',
  },
}

export const supportContactIcon = HeadphonesIcon
