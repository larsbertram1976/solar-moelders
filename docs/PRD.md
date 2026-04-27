# Product Requirements Document

## Vision
Eine schlanke, conversion-orientierte Landingpage für Mölders zum Thema **Balkonkraftwerke (Solar für Mieter)**. Ziel ist die Generierung qualifizierter Leads über ein einfaches Beratungsanfrage-Formular. Look & Feel orientieren sich an der bestehenden Mölders-CI (Rot/Weiß, Du-Ansprache, "Alles für Dein Projekt. Alles aus einer Hand.").

## Target Users
**Primärzielgruppe:** Mieter und Wohnungseigentümer im norddeutschen Mölders-Einzugsgebiet (Hamburg, Lüneburg, Uelzen, Adendorf, Tangermünde + 11 hagebaumarkt-Standorte), die mit einem Balkonkraftwerk (bis 800 W) eigenen Strom erzeugen wollen.

**Bedürfnisse / Pain Points:**
- Unsicherheit, ob Balkonkraftwerk technisch/rechtlich erlaubt ist
- Auswahlproblem: Welches Set passt zu meinem Balkon?
- Wunsch nach lokalem, vertrauenswürdigem Ansprechpartner statt Online-Pure-Play
- Beratung in Du-Form, niedrige Kontaktschwelle

## Core Features (Roadmap)

| Priority | Feature | Status |
|----------|---------|--------|
| P0 (MVP) | PROJ-1: Solar-Landingpage (UI/Sektionen) | Planned |
| P0 (MVP) | PROJ-2: Beratungsanfrage-Formular mit E-Mail-Versand | Planned |
| P0 (MVP) | PROJ-3: Rechtspflichten (Impressum, Datenschutzerklärung) | Planned |

## Success Metrics
- **Conversion-Rate:** ≥ 3 % der Besucher senden eine Anfrage ab
- **Formular-Completion-Rate:** ≥ 60 % derer, die das Formular öffnen, schicken es ab
- **Page-Load (LCP):** < 2,5 s auf 4G mobil
- **Lead-Qualität:** Manuell durch Mölders-Vertrieb bewertet (Ziel: ≥ 70 % verwertbare Anfragen)

## Constraints
- **Branding:** Muss zur Mölders-CI passen (Rot, Du-Ansprache, lokal-norddeutscher Ton)
- **Tech-Stack:** Vorgegeben durch becoss-Framework (Next.js 16, Tailwind, shadcn/ui)
- **Deployment:** Vercel
- **Datenschutz:** DSGVO-konform, Lead-Daten gehen ausschließlich per E-Mail an Mölders (keine DB-Speicherung im MVP)
- **Logo:** `public/Moelders-logo.png` ist die einzige verbindliche Brand-Asset-Quelle

## Non-Goals
- Kein Online-Konfigurator mit Preisberechnung (kommt ggf. in V2)
- Keine vollumfängliche PV-Beratung (Aufdach, Speicher, Wallbox) — Fokus liegt strikt auf Balkonkraftwerk
- Keine Shop-Funktion / Direktkauf
- Keine Kunden-Login-Bereiche
- Kein Tracking-Stack (Analytics/Pixel) im MVP — daher kein Cookie-Banner nötig
- Keine CRM-Anbindung im MVP

---

Use `/requirements` to create detailed feature specifications for each item in the roadmap above.
