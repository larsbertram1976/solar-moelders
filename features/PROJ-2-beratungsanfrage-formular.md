# PROJ-2: Beratungsanfrage-Formular mit E-Mail-Versand

## Status: Planned
**Created:** 2026-04-27
**Last Updated:** 2026-04-27

## Dependencies
- Requires: PROJ-1 (Solar-Landingpage) — Formular wird in die Page eingebettet
- Requires: PROJ-3 (Datenschutzerklärung) — Link wird im Consent-Checkbox-Label benötigt

## User Stories
- Als **interessierter Mieter** möchte ich in unter 60 Sekunden eine kostenlose Beratung anfragen, ohne mich registrieren oder lange Formulare ausfüllen zu müssen.
- Als **Datenschutz-bewusster Nutzer** möchte ich klar sehen, welche Daten gespeichert werden und der Verarbeitung explizit zustimmen, bevor mein Formular abgeschickt wird.
- Als **Mölders-Vertrieb** möchte ich pro Lead eine strukturierte E-Mail mit allen relevanten Feldern bekommen, damit ich direkt zurückrufen kann.
- Als **Anfragender** möchte ich nach dem Absenden eine Bestätigungs-E-Mail erhalten, damit ich weiß, dass meine Anfrage angekommen ist.
- Als **mobiler Nutzer** möchte ich passende Tastaturen sehen (Tel-Pad bei Telefonnummer, E-Mail-Pad bei Adresse), damit das Tippen schnell geht.

## Acceptance Criteria

### Felder
- [ ] **Name** (Pflicht, Text, min. 2 Zeichen)
- [ ] **E-Mail** (Pflicht, valide E-Mail-Syntax)
- [ ] **Telefon** (optional, nur Ziffern/+/Leerzeichen)
- [ ] **PLZ** (Pflicht, exakt 5 Ziffern, deutsche PLZ)
- [ ] **Wohnsituation** (Pflicht, Select: "Mieter", "Eigentümer", "Vermieter", "Sonstige")
- [ ] **Nachricht** (optional, Textarea, max. 1000 Zeichen)
- [ ] **DSGVO-Consent-Checkbox** (Pflicht, Label mit Link zur Datenschutzerklärung)

### Validierung & UX
- [ ] Validierung mit `zod` + `react-hook-form` + shadcn `Form`-Komponente
- [ ] Inline-Fehlermeldungen unter dem jeweiligen Feld nach Blur oder Submit
- [ ] Submit-Button ist disabled, solange Pflichtfelder leer/invalid sind
- [ ] Loading-State auf Button während des Versands (Spinner + Text "Sende …")
- [ ] Erfolg: Toast-Notification (sonner) + Inline Success-Message + Formular wird zurückgesetzt
- [ ] Fehler: Toast-Notification mit klarer Anweisung ("Bitte versuche es erneut oder ruf uns an unter …")
- [ ] Mobile: passende `inputMode` + `autocomplete`-Attribute pro Feld

### E-Mail-Versand (Backend)
- [ ] API-Route `POST /api/leads/solar` validiert Input nochmals server-seitig mit demselben zod-Schema
- [ ] Versand via Resend (oder vergleichbarer Provider — finale Wahl in /architecture)
- [ ] **Lead-E-Mail an Mölders** mit allen Feldern, klarer Betreffzeile (`Neue Solar-Anfrage von [Name] – [PLZ]`)
- [ ] **Bestätigungs-E-Mail an Anfragenden** mit Mölders-Branding (Logo, Du-Ansprache, Hinweis "Wir melden uns innerhalb von 1 Werktag")
- [ ] Empfänger-Adresse für Mölders ist via ENV-Variable konfigurierbar (`MOELDERS_LEAD_EMAIL`)
- [ ] Anfragen werden NICHT in einer Datenbank gespeichert (DSGVO-Minimierung im MVP)

### Sicherheit & Anti-Spam
- [ ] Honeypot-Feld (verstecktes Input, das Bots ausfüllen, Menschen nicht)
- [ ] Rate-Limiting: max. 3 Anfragen pro IP pro 10 Minuten
- [ ] CSRF-Schutz durch Same-Origin-Check oder Next.js Server Action
- [ ] Input-Sanitization: kein unescaped HTML in der E-Mail (XSS-Schutz)
- [ ] Server liefert generische Fehlermeldungen, keine Stacktraces

## Edge Cases
- **E-Mail-Provider down:** Server speichert Anfrage temporär (Logs) und antwortet mit Fehler-Toast inkl. Telefonnummer als Alternative
- **Doppel-Submit (User klickt 2× schnell):** Button-State + Server-side Idempotenz verhindern doppelte E-Mails
- **Bot füllt Honeypot:** Server antwortet mit 200 OK, sendet aber keine E-Mail (Bot merkt nichts)
- **Rate-Limit überschritten:** Klare Meldung "Zu viele Anfragen — bitte später erneut versuchen oder anrufen"
- **Ungültiges PLZ-Format (z.B. AT 1010):** Inline-Fehler "Bitte gib eine 5-stellige deutsche PLZ ein"
- **JS deaktiviert:** Formular ist als HTML-Form mit Server Action funktionsfähig (Progressive Enhancement)
- **Sehr lange Nachricht (> 1000 Zeichen):** Live-Counter, Submit blockiert
- **Bestätigungs-Mail bounct:** Lead-Mail an Mölders geht trotzdem raus (Bestätigung ist Best-Effort)

## Technical Requirements
- **Validierung:** `zod` Schema, geteilt zwischen Client und Server
- **Form-Lib:** `react-hook-form` + `@hookform/resolvers/zod`
- **UI:** shadcn `Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `Button`, `Toast`/`sonner`
- **API:** Next.js Route Handler `src/app/api/leads/solar/route.ts` ODER Server Action (Entscheidung in /architecture)
- **E-Mail-Provider:** Resend (Empfehlung, finale Wahl in /architecture)
- **ENV-Variablen:** `RESEND_API_KEY`, `MOELDERS_LEAD_EMAIL`, `LEAD_FROM_EMAIL`
- **Performance:** Form-Submit-Response < 2 s (P95)
- **Logging:** Erfolg/Fehler in Server-Logs, KEINE personenbezogenen Daten in Logs (nur PLZ + Status)

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)

### Komponenten-Struktur (visuell)

```
LeadFormSection (Server Component, in PROJ-1 Landingpage eingebettet)
+-- LeadForm (Client Component)
    +-- Form (shadcn) – Validation-Wrapper
    |   +-- FormField (Name)
    |   +-- FormField (E-Mail)
    |   +-- FormField (Telefon, optional)
    |   +-- FormField (PLZ)
    |   +-- FormField (Wohnsituation – Select)
    |   +-- FormField (Nachricht – Textarea)
    |   +-- FormField (DSGVO-Checkbox mit Datenschutz-Link)
    |   +-- HoneypotInput (versteckt, CSS off-screen)
    |   +-- SubmitButton (Loading-State)
    +-- Toaster (sonner – globale Error/Success-Notifications)
```

### Daten-Fluss (vom Klick zur E-Mail)

```
Browser              Server (Next.js)         Resend (E-Mail-Provider)
  |                       |                          |
  |  Submit (Server       |                          |
  |  Action mit FormData) |                          |
  |---------------------->|                          |
  |                       | 1. Honeypot-Check        |
  |                       | 2. Rate-Limit-Check (IP) |
  |                       | 3. zod-Schema validieren |
  |                       | 4. E-Mail an Mölders     |
  |                       |------------------------->|
  |                       | 5. Bestätigung an User   |
  |                       |------------------------->|
  |                       |                          |
  |  Success / Error      |                          |
  |<----------------------|                          |
```

### Daten-Modell (Klartext)
- **Keine persistente Datenbank im MVP.** Die Anfrage existiert nur als E-Mail in zwei Postfächern (Mölders + Anfragender) sowie kurzzeitig im Server-Log.
- **Pro Anfrage werden im RAM verarbeitet:**
  - Name (Text, ≤ 80 Zeichen)
  - E-Mail (validiert)
  - Telefon (optional, normalisiert)
  - PLZ (5 Ziffern, deutsche Vorwahl)
  - Wohnsituation (1 von 4 Werten: Mieter, Eigentümer, Vermieter, Sonstige)
  - Nachricht (optional, ≤ 1000 Zeichen)
  - DSGVO-Consent (boolean, muss true sein)
- **Server-Logs** halten 7 Tage nur: Timestamp, IP-Hash, PLZ, Status (Erfolg/Fehler) — keine Klarnamen oder E-Mails. Zweck: Rate-Limit-Auswertung und Fehlersuche.

### Tech-Entscheidungen (mit Begründung)

| Entscheidung | Warum |
|--------------|-------|
| **Next.js Server Action statt API-Route** | Native Progressive Enhancement: Formular funktioniert auch ohne JS. Weniger Boilerplate, automatischer CSRF-Schutz. Empfohlene Default-Praxis in Next.js 16. |
| **zod-Schema geteilt zwischen Client & Server** | Eine Quelle der Wahrheit für Validierungsregeln. Verhindert Drift zwischen Frontend-Hinweisen und Backend-Prüfungen. |
| **react-hook-form mit zodResolver** | Branchenstandard. Bereits installiert. Geringe Re-Renders, gute UX bei größeren Formularen. |
| **Resend als E-Mail-Provider** | Moderne API, einfache Vercel-Integration, deutsche/EU-Server verfügbar (DSGVO-relevant), großzügige Free-Tier (3.000 Mails/Monat), schöne HTML-E-Mail-Builder. Alternative wäre SMTP via SendGrid/Mailgun — komplexer in der DSGVO-Doku. |
| **Honeypot-Feld + Rate-Limit-Kombination** | Honeypot fängt 95 % der Bots geräuschlos ab. Rate-Limit deckelt gezielten Missbrauch. Beides ohne externe CAPTCHAs (würde UX und Datenschutz verschlechtern). |
| **Upstash Ratelimit (Redis-basiert)** | Vercel-First, Edge-fähig, Free-Tier ausreichend für MVP. Stateful (im Gegensatz zu In-Memory-Maps, die in serverless Functions nicht zuverlässig funktionieren). Falls bei Setup Aufwand zu hoch: Fallback auf reines Honeypot — wird als bewusste Risiko-Akzeptanz dokumentiert. |
| **Bestätigungs-E-Mail über React Email Templates** | HTML-E-Mail mit Mölders-Logo und Du-Ansprache. Templates leben als JSX in `src/emails/`, werden zur Send-Zeit gerendert. Branding-Konsistenz mit Landingpage. |
| **IP-Hashing statt IP-Klartext im Log** | DSGVO-Datenminimierung. Hash erlaubt Rate-Limit, ohne identifizierbare Daten. |
| **Keine DB-Speicherung im MVP** | Niedrigere DSGVO-Hürden, keine zusätzliche Infrastruktur. Wenn Mölders später CRM-Anbindung will, ist das ein klar abgegrenztes Folge-Projekt. |

### Abhängigkeiten (neu zu installieren)

| Paket | Zweck |
|-------|-------|
| `resend` | E-Mail-Versand-API |
| `@react-email/components` | Komponenten für die HTML-E-Mail-Templates (Branding) |
| `@upstash/ratelimit` | Rate-Limit-Logik |
| `@upstash/redis` | Storage-Backend für Rate-Limit |

**Bereits installiert (werden genutzt):** `zod`, `react-hook-form`, `@hookform/resolvers`, `sonner`, alle Radix-/shadcn-Form-Komponenten.

### ENV-Variablen
- `RESEND_API_KEY` — Resend API-Schlüssel
- `MOELDERS_LEAD_EMAIL` — Empfänger für Lead-Mails (z.B. solar@moelders.de)
- `LEAD_FROM_EMAIL` — Absender (verifizierte Resend-Domain, z.B. solar-anfrage@moelders.de)
- `UPSTASH_REDIS_REST_URL` — Upstash-Endpoint
- `UPSTASH_REDIS_REST_TOKEN` — Upstash-Token

`.env.local` für Dev, Vercel-Project-Settings für Prod. Keine Secrets im Repo.

### Risiken & Annahmen
- **Annahme:** Mölders kann eine E-Mail-Domain bei Resend verifizieren (DNS-Records setzen) — sonst kommen Mails mit `*.resend.dev` als Absender, was unprofessionell wirkt
- **Annahme:** Empfänger-Adresse ist im Mölders-Postfach-System eingerichtet (z.B. solar@moelders.de) und wird aktiv abgerufen
- **Risiko:** Resend-Free-Tier (3k/Monat) reicht ggf. nicht bei stark beworbenen Kampagnen — Monitoring + frühe Eskalation auf Pro-Tier
- **Risiko:** Upstash-Setup verzögert MVP. **Mitigation:** zur Not Honeypot-only ausliefern, Rate-Limit als Hotfix nachziehen — kein Blocker für Go-Live

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
