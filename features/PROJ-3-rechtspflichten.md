# PROJ-3: Rechtspflichten (Impressum & Datenschutzerklärung)

## Status: Planned
**Created:** 2026-04-27
**Last Updated:** 2026-04-27

## Dependencies
- None (kann parallel zu PROJ-1/PROJ-2 entstehen, muss aber vor Go-Live fertig sein)

## User Stories
- Als **Besucher der Landingpage** möchte ich Impressum und Datenschutzerklärung jederzeit aus dem Footer erreichen, damit ich die Anbieterkennung schnell finden kann.
- Als **datenschutzbewusster Nutzer** möchte ich vor dem Absenden des Formulars verstehen, was mit meinen Daten passiert, damit ich eine informierte Einwilligung geben kann.
- Als **Mölders-Compliance-Verantwortlicher** möchte ich, dass die Pflichtseiten den TMG/DDG- und DSGVO-Anforderungen genügen, damit kein Abmahnrisiko entsteht.

## Acceptance Criteria

### Impressum (`/impressum`)
- [ ] Eigene Route `src/app/impressum/page.tsx`
- [ ] Anbieter: Mölders Holding (Firmenname, Rechtsform, Adresse, Vertretungsberechtigte) — exakte Daten werden vor Deployment vom Auftraggeber bestätigt
- [ ] Kontakt: Telefon, E-Mail
- [ ] Registereintrag (Handelsregister + Nummer)
- [ ] USt-IdNr.
- [ ] Inhaltlich Verantwortlicher nach § 18 Abs. 2 MStV
- [ ] Optional: EU-Streitschlichtungs-Hinweis

### Datenschutzerklärung (`/datenschutz`)
- [ ] Eigene Route `src/app/datenschutz/page.tsx`
- [ ] Verantwortlicher (gleiche Adresse wie Impressum)
- [ ] Hosting-Hinweis (Vercel als Auftragsverarbeiter, USA/EU-Server)
- [ ] **Speziell für Formular (PROJ-2):** Welche Daten (Name, E-Mail, Tel, PLZ, Wohnsituation, Nachricht), Zweck (Beratungsanfrage), Rechtsgrundlage (Art. 6 Abs. 1 lit. b DSGVO + Einwilligung), Speicherdauer (E-Mail-Postfach-Aufbewahrung Mölders, keine Web-DB-Speicherung)
- [ ] E-Mail-Versand-Provider (Resend o.ä.) als Auftragsverarbeiter benannt
- [ ] Betroffenenrechte (Auskunft, Berichtigung, Löschung, Beschwerde bei Aufsichtsbehörde)
- [ ] Server-Logs / IP-Speicherung beim Formular-Submit (Rate-Limit-Zwecke, max. 7 Tage)
- [ ] Keine Cookies / kein Tracking → entsprechender Hinweis ("Diese Website setzt keine Tracking-Cookies ein")

### Footer-Verlinkung (übergreifend)
- [ ] Im Footer (PROJ-1) erscheinen Links: "Impressum" und "Datenschutz"
- [ ] Im DSGVO-Consent-Checkbox-Label des Formulars (PROJ-2) wird "Datenschutzerklärung" verlinkt

### Branding & UX
- [ ] Beide Seiten nutzen dasselbe Layout wie die Landingpage (Header mit Logo, Footer)
- [ ] Lesbare Typografie, keine Wand aus Text — sinnvolle H2/H3-Gliederung
- [ ] Mobile-First responsive
- [ ] `noindex` Meta-Tag NICHT setzen (rechtliche Seiten sollen indexierbar sein)

## Edge Cases
- **Mölders liefert finale Stammdaten erst kurz vor Deployment:** Platzhalter `[TODO: ergänzen vor Go-Live]` markiert kritische Lücken klar im Code
- **Resend wird durch anderen E-Mail-Provider ersetzt:** Datenschutz-Text muss aktualisiert werden — gut sichtbarer Kommentar im Code
- **Späteres Hinzufügen von Tracking (z.B. Analytics):** Datenschutzerklärung muss erweitert + Cookie-Banner ergänzt werden — als Risk-Note dokumentiert
- **Direkter Aufruf von `/datenschutz` ohne Header-Navigation:** Seite zeigt trotzdem vollen Layout-Rahmen mit Logo und Zurück-Link

## Technical Requirements
- **Routes:** Standard Next.js App Router Pages (statisch gerendert, keine API-Calls)
- **Layout:** wiederverwendbarer Header/Footer (gemeinsam mit PROJ-1, ggf. via `app/layout.tsx`)
- **A11y:** Semantische H1/H2/H3-Hierarchie, ausreichend Kontrast
- **SEO:** Sinnvolle `<title>` und `<meta description>` (z.B. "Impressum – Mölders Solar")
- **Content-Quelle:** Mölders liefert finale Texte oder bestätigt KI-Vorschläge vor Go-Live

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)

### Komponenten-Struktur (visuell)

```
app/layout.tsx (Root-Layout — gemeinsam mit PROJ-1)
+-- SiteHeader        (gemeinsam genutzt)
+-- {children}        (Slot)
+-- SiteFooter        (Links zu Impressum/Datenschutz aktiv)

app/impressum/page.tsx
+-- LegalPageLayout   (Container mit Typografie-Defaults)
    +-- ImpressumContent (statischer Inhalt mit H2/H3-Gliederung)

app/datenschutz/page.tsx
+-- LegalPageLayout
    +-- DatenschutzContent
```

### Daten-Modell (Klartext)
- **Komplett statische Seiten.** Kein State, keine API-Calls, keine Datenbank.
- **Inhalts-Quelle:** Direkt im JSX der jeweiligen Page (keine externe CMS-Anbindung im MVP)
- Inhalts-Updates erfolgen via Code-Änderung + Deployment

### Tech-Entscheidungen (mit Begründung)

| Entscheidung | Warum |
|--------------|-------|
| **Statische RSC ohne Client-JS** | Rechtliche Pflichtseiten brauchen keine Interaktion. Schnellste Auslieferung. Voll Print- und A11y-tauglich. |
| **Eigene Routes statt einer langen Page mit Sprungmarken** | Saubere URLs (`/impressum`, `/datenschutz`) sind Standard-Erwartung von Behörden, Suchmaschinen und Nutzern. |
| **Gemeinsamer LegalPageLayout-Wrapper** | Konsistente Typografie (max-width, prose-Styling) ohne Duplizierung. Eine Stelle anpassen → beide Seiten profitieren. |
| **Inhalt direkt im JSX** | Bei zwei Seiten mit selten ändernden Texten ist eine externe Content-Lösung Overkill. Bei späterem Bedarf einfach in `src/content/legal/` auslagerbar. |
| **Kein Cookie-Banner** | MVP nutzt keine Tracking-Tools. Datenschutzerklärung benennt das ausdrücklich. Sobald Analytics/Pixel ergänzt werden, ist Cookie-Banner als Folge-Feature einzuplanen. |
| **Resend als Auftragsverarbeiter dokumentiert** | DSGVO-Pflicht: jeder Dienstleister, der personenbezogene Daten verarbeitet, muss in der Datenschutzerklärung benannt werden — inkl. Vercel als Hoster. |

### Abhängigkeiten
**Keine neuen Pakete nötig.** Nutzt nur die im Framework vorhandenen Layout- und Typografie-Tools.

### Risiken & Annahmen
- **Risiko:** Finale Stammdaten (HRB-Nummer, USt-IdNr., Vertretungsberechtigte) liegen aktuell nicht vor → Platzhalter `[TODO: ergänzen vor Go-Live]` werden klar markiert. Deploy-Checkliste blockt Live-Gang, solange diese existieren.
- **Risiko:** Bei späterer Tracking-Integration ist die Datenschutzerklärung zu erweitern und ein Cookie-Banner-Feature anzulegen — aktuell als Non-Goal dokumentiert.
- **Annahme:** Mölders gibt finale Texte frei oder akzeptiert KI-Vorschläge nach juristischer Sichtprüfung.

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
