# PROJ-1: Solar-Landingpage (UI / Sektionen)

## Status: In Progress
**Created:** 2026-04-27
**Last Updated:** 2026-04-27

## Implementation Notes (Frontend)

**Implementiert:**
- Theme: Mölders-Rot als CSS-Variable (`--primary: 353 100% 44%`) in `src/app/globals.css`
- Inhalts-Quelle: `src/content/landing.ts` (Hero, USPs, Leistungen, Process, FAQs, Kontakt)
- Layout-Komponenten: `src/components/layout/site-header.tsx`, `site-footer.tsx`
- Section-Komponenten in `src/components/landing/`: `hero-section`, `usp-bar`, `leistungen-grid`, `process-steps`, `faq-accordion`, `lead-form-section` (Container für PROJ-2)
- `src/app/layout.tsx`: Deutsche Sprache (`lang="de"`), Mölders-Metadaten (Title, Description, Open Graph, Theme-Color), Header + Footer im Root-Layout
- `src/app/page.tsx`: Komposition aller Sections in der spezifizierten Reihenfolge

**Dev-Server-Hinweis:**
- `dev`-Script wurde von `next dev` auf `next dev --webpack` umgestellt — Turbopack panickt aktuell wegen des Umlauts im Projektpfad ("Mölders Holding"). Production-Build (`next build`) ist davon nicht betroffen, weil Vercel ohne Umlaut-Pfad deployt.

**Abweichungen vom Spec:**
- Hero-Bild: bisher CSS-Platzhalter (Solarmodul-Grid mit Sonne). Echtes Foto wird bei Bereitstellung durch Mölders ergänzt — die Komponente ist dafür vorbereitet.
- Komplett-Pakete und Stromspeicher-Sektion bewusst weggelassen (Fokus auf Balkonkraftwerk laut PRD-Non-Goals)

**Offen für PROJ-2:**
- `LeadFormSection` ist nur Container — die eigentliche Formular-Komponente liefert PROJ-2 und wird in `lead-form-section.tsx` eingehängt

## Dependencies
- None (PROJ-2 hängt von dieser Page ab — sie liefert den Container für das Formular)

## User Stories
- Als **Mieter mit Süd-Balkon** möchte ich auf der Startseite sofort verstehen, ob Mölders Balkonkraftwerke anbietet und für mich passt, damit ich nicht weitersuchen muss.
- Als **Skeptiker** möchte ich die Vorteile (regional, Beratung, Montage-Hilfe) klar sehen, damit ich Mölders gegenüber Online-Pure-Playern vertraue.
- Als **technisch unsicherer Nutzer** möchte ich in einem "So funktioniert's"-Abschnitt verstehen, was nach meiner Anfrage passiert (Beratung → Angebot → Lieferung), damit ich die Hürde zum Anfragen senke.
- Als **mobiler Besucher** möchte ich die Page flüssig auf dem Handy lesen können, weil ich vom Balkon aus recherchiere.
- Als **Interessent mit Detailfragen** möchte ich häufige Fragen (Genehmigung, Vermieter, Steckdose, Leistung) im FAQ beantwortet bekommen, damit ich nicht erst anrufen muss.

## Acceptance Criteria

### Page-Aufbau (in dieser Reihenfolge)
- [ ] **Header**: Mölders-Logo (`/Moelders-logo.png`) links, sticky on scroll, optionaler "Anfragen"-CTA rechts (scrollt zum Formular)
- [ ] **Hero**: Headline ("Dein Balkonkraftwerk. Lokal beraten. Schnell installiert."), Sub-Headline mit USP, primärer CTA-Button "Kostenlose Beratung anfragen" (scrollt zu PROJ-2-Formular), Hero-Bild (Balkonkraftwerk-Visual)
- [ ] **USP-Bar**: 3–4 Trust-Punkte als Icons + Kurztext (z.B. "80 Jahre Mölders", "Regional in Norddeutschland", "Eigenes Montageteam", "Beratung kostenlos")
- [ ] **Leistungen**: 3 Cards (Set-Beratung, Lieferung, Montage-Support) mit Mölders-Bezug
- [ ] **So funktioniert's**: 4-Schritt-Prozess (Anfragen → Beratung → Lieferung → Strom erzeugen) als horizontale Steps
- [ ] **FAQ**: shadcn Accordion mit min. 5 Fragen (Genehmigung, Vermieter, Stromzähler, Wieviel Watt, Was kostet das)
- [ ] **Beratungsanfrage** (Formular-Container — eigentliche Logik in PROJ-2)
- [ ] **Footer**: Logo, Adresse Mölders-Hauptsitz, Links zu Impressum & Datenschutz (PROJ-3), Copyright

### Branding & UX
- [ ] Primärfarbe = Mölders-Rot (Hex wird in /architecture finalisiert, Richtwert: `#E2001A` / hagebau-Rot)
- [ ] Du-Ansprache durchgehend
- [ ] Slogan-Anlehnung: "Alles für Dein Projekt. Alles aus einer Hand. Alles Mölders."
- [ ] Sans-Serif Schrift (Default Tailwind / Inter o.ä.)
- [ ] Mobile-First responsive (Breakpoints: sm 640px, md 768px, lg 1024px)
- [ ] Sticky Header bleibt mobil schmal (Logo + CTA-Icon)

### Tech / Performance
- [ ] LCP < 2,5 s auf 4G (Vercel Analytics-Messung)
- [ ] Hero-Bild via `next/image` mit `priority`
- [ ] Logo via `next/image` (PNG aus `/public`, `priority`, definierte Width/Height)
- [ ] Keine Layout-Shifts (CLS < 0,1)
- [ ] Smooth-Scroll vom Hero-CTA zum Formular

## Edge Cases
- **JavaScript deaktiviert:** Page zeigt statisch alle Sektionen, Anker-Links zum Formular funktionieren nativ
- **Sehr alter Browser (kein CSS Grid):** Layout fällt auf Single-Column zurück
- **Text-Zoom > 200 %:** Keine abgeschnittenen Inhalte, alle CTAs erreichbar
- **Slow Connection:** Hero-Bild lädt mit Blur-Placeholder, Page bleibt nutzbar
- **Print:** Druck-Stylesheet versteckt Header/Footer/Formular, zeigt nur Inhalte
- **Reduced Motion (`prefers-reduced-motion`):** Smooth-Scroll und Animationen werden deaktiviert

## Technical Requirements
- **Framework:** Next.js 16 App Router (`src/app/page.tsx`)
- **Komponenten:** shadcn/ui (`Accordion`, `Button`, `Card`) — keine Custom-Reimplementierungen
- **Styling:** Tailwind CSS, Mölders-Theme-Variablen in `globals.css`
- **Bilder:** Lokal in `/public/images/` (keine Hotlinks zu moelders.de)
- **A11y:** WCAG 2.1 AA — semantische Landmarks (`header`, `main`, `section`, `footer`), Alt-Texte, Tab-Reihenfolge, Kontrast ≥ 4,5:1
- **SEO:** Title/Meta-Description (PROJ-1 setzt Basis, finale Optimierung in `/seo`)

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)

### Komponenten-Struktur (visuell)

```
app/layout.tsx (Root-Layout — gemeinsamer Rahmen mit PROJ-3)
+-- SiteHeader        (Logo + Anker-CTA "Anfragen", sticky, mobil-optimiert)
+-- {children}        (Slot für Page-Inhalt)
+-- SiteFooter        (Logo, Adresse, Links zu Impressum/Datenschutz)

app/page.tsx (die Landingpage)
+-- HeroSection        (Headline, Subline, CTA-Button, Hero-Bild)
+-- UspBar             (4 Trust-Punkte mit Icons aus lucide-react)
+-- LeistungenGrid     (3 Cards: Beratung, Lieferung, Montage-Support)
+-- ProcessSteps       (4-Schritt-Prozess: Anfragen → Beratung → Lieferung → Strom)
+-- FaqAccordion       (shadcn Accordion mit min. 5 Fragen)
+-- LeadFormSection    (Container — Inhalt liefert PROJ-2)
```

**Komponenten-Aufteilung:** Alle Sections sind eigene Dateien unter `src/components/landing/` (z.B. `hero-section.tsx`). Header/Footer liegen unter `src/components/layout/`. Inhalts-Texte (Headlines, USPs, FAQs) werden zentral als deutsche Konstanten in `src/content/landing.ts` gepflegt — so kann Mölders Texte später anpassen, ohne JSX zu öffnen.

**Server vs. Client:** Alle Sections sind **Server Components** (statisch gerendert, schnell). Nur `LeadForm` (PROJ-2) ist Client Component, weil es Formular-State und Validation braucht. Smooth-Scroll auf den CTA-Button ist eine kleine Client-Insel.

### Daten-Modell (Klartext)
- **Keine Datenbank.** Diese Page rendert ausschließlich statische Inhalte.
- **Inhalts-Quelle:** TypeScript-Datei `src/content/landing.ts` exportiert ein Objekt mit allen Texten (Hero, USPs, FAQ-Q&A, Schritte). Das erlaubt schnelle Text-Updates ohne Komponenten-Anpassungen.
- **Bilder:** Lokal abgelegt unter `public/images/` (Hero-Bild, Prozess-Icons). Logo bleibt als `public/Moelders-logo.png` im Root des public-Ordners.

### Tech-Entscheidungen (mit Begründung)

| Entscheidung | Warum |
|--------------|-------|
| **Server Components als Default** | Page lädt ohne JS → schneller LCP, besseres SEO, niedrigere Bundle-Size. Mobile-first Performance ist explizites Erfolgskriterium (LCP < 2,5 s). |
| **Inhalte in `src/content/landing.ts`** | Trennung von Inhalt und Markup. Mölders kann Texte später ändern, ohne JSX-Kenntnisse — und ohne Risiko, das Layout zu beschädigen. |
| **shadcn/ui Accordion + Card + Button** | Bereits im Projekt, bewährt, barrierefrei (Radix-Primitives). Kein Eigenbau, der Wartungsaufwand erzeugt. |
| **Mölders-Rot als CSS-Variable in `globals.css`** | Erweitert das vorhandene shadcn-Theme um ein Mölders-Brand-Token. Einheitliche Verwendung über `bg-primary` etc. — keine Hex-Codes verstreut im Code. Richtwert: `hsl(354, 99%, 44%)` ≈ `#E2001A`. Finale Farbe wird beim Build gegen das Logo geprüft. |
| **next/image für Hero & Logo** | Automatische Größen-Optimierung, Lazy-Loading, AVIF/WebP-Auslieferung. Direkt-Effekt auf LCP. |
| **Sticky-Header via Tailwind `sticky top-0`** | Keine extra-Library nötig. Verhalten ist nativ und barrierefrei. |
| **Anker-Links statt JS-Scroll** | Browser-nativ, funktioniert auch ohne JS. Smooth-Scroll wird via CSS `scroll-behavior: smooth` aktiviert (respektiert `prefers-reduced-motion`). |
| **Hell-Mode-only im MVP** | Mölders-CI ist hell. Dark-Mode-Theme bleibt in `globals.css` erhalten, wird aber nicht aktiv getoggelt. |

### Abhängigkeiten (bereits installiert)
- `next` (16) – Framework
- `react`, `react-dom` (19)
- `tailwindcss` – Styling
- `lucide-react` – Icons (USP-Bar, Process-Steps)
- `@radix-ui/react-accordion` – via shadcn Accordion (FAQ)
- `class-variance-authority`, `clsx`, `tailwind-merge` – Styling-Utilities

**Keine neuen Pakete für PROJ-1 nötig.**

### Risiken & Annahmen
- **Annahme:** Logo-Datei `public/Moelders-logo.png` ist freigegeben für externe Verwendung
- **Annahme:** Hero-Bild kann von Mölders bereitgestellt oder lizenzfrei (Unsplash/Pexels mit Balkonkraftwerk-Motiv) verwendet werden — Fallback: KI-generiertes Stockbild mit klar dokumentierter Quelle
- **Risiko:** Mölders-Rot-Hex ist Schätzwert aus Webseiten-Analyse — vor Go-Live mit Brand-Manual abgleichen

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
