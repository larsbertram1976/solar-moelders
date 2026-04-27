**Deutsch** · [English](README.en.md)

# becoss Coding Framework

> Produktionsreife Web-Apps schneller bauen — mit KI-gestützten Skills für Anforderungen, Architektur, Entwicklung, QA, SEO/GEO und Deployment.

Dieses Template nutzt [Claude Code](https://docs.anthropic.com/en/docs/claude-code) mit modernen Skills, Rules und Sub-Agents für einen kompletten KI-gestützten Entwicklungs-Workflow.

> **Du willst eine neue App auf Basis dieses Frameworks bauen?** Dieses Repo ist ein **GitHub Template Repository**. Klick oben auf der Repo-Seite den grünen Button **„Use this template"** → **Create a new repository**, um ein eigenes, unabhängiges Projekt anzulegen (frische Git-History, dein eigener Account/deine Org). Folge dann der **Voraussetzungen & Setup**-Sektion unten — aber klone in Schritt 4 *dein neues Repo*, nicht dieses hier.

## Voraussetzungen & Setup

Diese Sektion listet **alles** auf, was du installieren und welche Accounts du anlegen musst — gegliedert in „erforderlich, um das Framework laufen zu lassen", „erforderlich für den KI-Workflow" und „optional je nach Use Case".

### 1. Systemanforderungen

Vor allem anderen lokal installieren:

| Tool | Version | Installation über | Verifizieren |
|------|---------|-------------------|--------------|
| **Node.js** | 20.x oder 22.x (LTS) | [nodejs.org](https://nodejs.org) oder [`nvm`](https://github.com/nvm-sh/nvm) | `node --version` |
| **npm** | 10+ (kommt mit Node) | mit Node enthalten | `npm --version` |
| **Git** | 2.x | [git-scm.com](https://git-scm.com) | `git --version` |
| **Code-Editor** | aktuelle Version | [VS Code](https://code.visualstudio.com) empfohlen | — |

> **Warum VS Code?** Die Claude-Code-Extension integriert sich direkt in den Editor (Datei-Diffs, Inline-Tool-Ausführung, IDE-Selection-Context). Das Framework funktioniert auch mit der Standalone-Desktop-App oder der CLI.

### 2. Claude Code (der KI-Treiber)

Ohne Claude Code existieren die Workflows `/requirements`, `/architecture`, `/frontend`, `/backend`, `/qa`, `/deploy` nicht. Wähle **eine** Installationsart:

| Variante | Wann verwenden | Installation |
|----------|----------------|--------------|
| **VS Code Extension** | empfohlen für dieses Framework | im VS Code Marketplace nach „Claude Code" suchen und installieren |
| **Desktop App** (macOS / Windows) | Standalone-GUI | von [claude.ai/download](https://claude.ai/download) laden |
| **CLI** | nur Terminal / CI | `npm install -g @anthropic-ai/claude-code`, dann `claude` ausführen |

Vollständige Install-Doku: [docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code).

### 3. Anthropic-Account (Auth für Claude Code)

Claude Code authentifiziert sich beim ersten Start gegen deinen Anthropic-Account. Zwei Optionen:

- **Claude Pro / Max Subscription** ([claude.ai](https://claude.ai)) — Login über den OAuth-Flow, den Claude Code beim ersten Start zeigt. Für Einzelpersonen empfohlen.
- **Anthropic API-Key** ([console.anthropic.com](https://console.anthropic.com)) — Pay-as-you-go-Credits. Erforderlich für Team-/CI-Nutzung.

Eines reicht. Beide geben dir Zugriff auf den vollen Skill-Workflow.

### 4. Klonen & Installieren

**Wenn du „Use this template" verwendet hast** (empfohlen für neue Apps): klone *dein neues Repo* — die URL entsprechend ersetzen:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git my-project
cd my-project
npm install
npx playwright install chromium   # einmalig, ~300 MB, für E2E-Tests benötigt
```

**Wenn du das Framework selbst inspizieren oder daran mitarbeiten willst:**

```bash
git clone https://github.com/larsbertram1976/becoss-coding-framework.git
cd becoss-coding-framework
npm install
npx playwright install chromium
```

### 5. Optionale Service-Accounts

Diese brauchst du nur, wenn ein Feature den jeweiligen Service tatsächlich verwendet. Melde dich nicht vorab überall an — warte, bis der Workflow danach fragt.

| Service | Wann nötig | Free Tier | Was in `.env.local` kommt |
|---------|-----------|-----------|---------------------------|
| [Supabase](https://supabase.com) | Feature braucht Datenbank, Auth oder Storage | ja | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| [Vercel](https://vercel.com) | App deployen | ja (Hobby) | — (Env-Vars im Vercel Dashboard) |
| [GitHub](https://github.com) | Versionskontrolle + Vercel-Auto-Deploy | ja | — |
| [Sentry](https://sentry.io) | Production-Fehler-Tracking | ja | `SENTRY_DSN`, `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_AUTH_TOKEN` |
| [Upstash](https://upstash.com) | Rate Limiting auf öffentlichen APIs | 10k Req/Tag | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` |

Setup-Anleitungen für die Production-Services liegen in [docs/production/](docs/production/) und werden vom `/deploy`-Skill beim ersten Deployment automatisch durchgegangen.

### 6. Supabase einrichten (nur wenn du ein Backend brauchst)

1. Projekt auf [supabase.com](https://supabase.com) anlegen
2. Projekt-URL + Anon-Key aus **Project Settings → API** kopieren
3. `cp .env.local.example .env.local`, beide Werte einfügen
4. Den Client in [src/lib/supabase.ts](src/lib/supabase.ts) auskommentieren (steht aktuell hinter einem Platzhalter-Export)

Komplett überspringbar bei reinen Frontend-Projekten (Landingpages, Portfolios, Broschüren-Seiten).

### 7. Environment Variables — eine Quelle der Wahrheit

Die Vorlage [.env.local.example](.env.local.example) listet, was nötig ist. Vollständige Referenz (`.env.local` ist gitignored — niemals Secrets committen):

```bash
# --- Supabase (nur wenn Backend genutzt wird) ---
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# --- Sentry (Production-Fehler-Tracking) ---
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# --- Upstash (Production Rate Limiting, optional) ---
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Für Production jede Variable zusätzlich im **Vercel Dashboard → Project → Settings → Environment Variables** anlegen.

### 8. Setup-Reihenfolge (TL;DR)

Linearer Walk-through — copy-paste-fähig für eine frische Maschine:

```bash
# 1. System-Tools (einmalig, maschinenweit)
#    Node 20+, Git, VS Code via die Links in Schritt 1 oben installieren

# 2. Claude Code (einmalig, maschinenweit)
#    Installation via VS Code Marketplace, Desktop App oder:
npm install -g @anthropic-ai/claude-code
claude   # beim ersten Start dem Auth-Flow folgen

# 3. Projekt (pro Projekt)
#    Erst eigenes Repo via "Use this template" auf GitHub anlegen, dann:
git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git my-project
cd my-project
npm install
npx playwright install chromium

# 4. (Optional) Backend
cp .env.local.example .env.local        # dann Supabase-Keys eintragen

# 5. Starten
npm run dev                              # http://localhost:3000
```

Springe jetzt zu **Erste Inbetriebnahme** unten, um dein Projekt mit dem KI-Workflow zu initialisieren.

---

## Erste Inbetriebnahme

Nachdem das Setup erledigt ist, so nutzt du das Framework tatsächlich.

### Projekt initialisieren

Öffne Claude Code in diesem Repo und beschreibe, was du bauen willst. Der `/requirements`-Skill erkennt automatisch ein frisches Projekt und wechselt in den **Init-Modus**:

```
/requirements Ich möchte ein Projektmanagement-Tool für kleine Teams bauen,
mit dem Nutzer Projekte anlegen, Aufgaben zuweisen und den Fortschritt verfolgen können.
```

Der Skill wird:
1. Interaktiv Fragen zu Vision, Zielgruppe und MVP-Scope stellen
2. Dein **Product Requirements Document** erstellen ([docs/PRD.md](docs/PRD.md))
3. Das Projekt in einzelne Features aufteilen (Single Responsibility)
4. Alle **Feature-Specs** anlegen (`features/PROJ-1.md`, `PROJ-2.md`, …)
5. Das **Feature-Tracking** aktualisieren ([features/INDEX.md](features/INDEX.md))
6. Empfehlen, welches Feature zuerst gebaut werden sollte

Eine kurze Beschreibung reicht — der Skill stellt interaktiv Folgefragen.

### Features bauen

Features eins nach dem anderen über die Skill-Kette bauen:

```
/architecture    Tech-Ansatz für features/PROJ-1-user-auth.md entwerfen
/frontend        UI bauen
/backend         API bauen (falls nötig)
/qa              Gegen Acceptance Criteria + Security-Audit testen
/seo             Für Suchmaschinen (SEO) und KI-/LLM-Crawler (GEO) optimieren
/deploy          Auf Vercel deployen
```

Jeder Skill schlägt am Ende den nächsten Schritt vor. Übergaben werden immer vom Nutzer initiiert.

Um später weitere Features zu ergänzen, einfach `/requirements` erneut ausführen — er erkennt das bestehende PRD und fügt ein einzelnes Feature hinzu.

### Weitere shadcn/ui-Komponenten hinzufügen

Über 35 Komponenten sind unter [src/components/ui/](src/components/ui/) vorinstalliert. Bei Bedarf weitere ergänzen:

```bash
npx shadcn@latest add [component-name]
```

---

## Verfügbare Skills

| Skill | Befehl | Was er macht |
|-------|--------|--------------|
| Requirements Engineer | `/requirements` | Erstellt Feature-Specs mit User Stories, Acceptance Criteria, Edge Cases |
| Solution Architect | `/architecture` | Entwirft PM-freundliche Tech-Architektur (kein Code, nur High-Level-Design) |
| Frontend Developer | `/frontend` | Baut UI mit React, Tailwind CSS und shadcn/ui |
| Backend Developer | `/backend` | Baut APIs, Datenbank-Schemata, RLS-Policies mit Supabase |
| QA Engineer | `/qa` | Testet Features gegen Acceptance Criteria + Security-Audit |
| SEO Engineer | `/seo` | Optimiert für Suchmaschinen (SEO) und KI-/LLM-Crawler (GEO) — Metadaten, JSON-LD, Sitemap, robots.txt, llms.txt |
| DevOps | `/deploy` | Deployt auf Vercel mit Production-Ready-Checks |
| Help | `/help` | Kontextabhängiger Guide: zeigt, wo du gerade stehst und was als Nächstes kommt |

### Wie Skills funktionieren

- **Skills** liegen in `.claude/skills/` und werden von Claude Code automatisch erkannt
- **Rules** in `.claude/rules/` werden automatisch je nach Datei-Kontext angewendet (kein manuelles Laden)
- **Sub-Agents** führen schwere Aufgaben (Frontend, Backend, QA, SEO) in isolierten Contexts aus, um Kosten zu sparen
- **CLAUDE.md** liefert Projektkontext automatisch bei jedem Session-Start

---

## Entwicklungs-Workflow

```
1. Definieren  /requirements  -->  Feature-Spec in features/PROJ-X.md
2. Designen    /architecture  -->  Tech-Design ergänzt im Feature-Spec
3. Bauen       /frontend      -->  UI-Komponenten implementiert
               /backend       -->  APIs + Datenbank (falls nötig)
4. Testen      /qa            -->  Test-Ergebnisse im Feature-Spec
5. Optimieren  /seo           -->  SEO + GEO Sektion (überspringbar bei rein internen Features)
6. Ausliefern  /deploy        -->  Deployed auf Vercel
```

### Feature-Tracking

Features werden in `features/INDEX.md` getrackt:

| ID | Feature | Status | Spec |
|----|---------|--------|------|
| PROJ-1 | User Login | Deployed | [Spec](features/PROJ-1-user-login.md) |
| PROJ-2 | Dashboard | In Progress | [Spec](features/PROJ-2-dashboard.md) |

Jeder Skill liest diese Datei zu Beginn und aktualisiert sie nach getaner Arbeit — verhindert doppelte Arbeit.

---

## Tech-Stack

| Kategorie | Tool | Warum? |
|-----------|------|--------|
| **Framework** | Next.js 16 | React + Server Components + App Router |
| **Sprache** | TypeScript | Typsicherheit |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **UI-Library** | shadcn/ui | Copy-paste, anpassbare Komponenten |
| **Backend** | Supabase (optional) | PostgreSQL + Auth + Storage + Realtime |
| **Deployment** | Vercel | Zero-Config Next.js Hosting |
| **Validation** | Zod | Runtime-Typvalidierung |

---

## Projektstruktur

```
becoss-coding-framework/
+-- CLAUDE.md                        <-- Auto-geladener Projekt-Context
+-- .claude/
|   +-- settings.json                <-- Team-Permissions (committed)
|   +-- settings.local.json          <-- Persönliche Overrides (gitignored)
|   +-- rules/                       <-- Auto-angewandte Coding-Rules
|   |   +-- general.md                   Git-Workflow, Feature-Tracking
|   |   +-- frontend.md                  shadcn/ui, Komponenten-Standards
|   |   +-- backend.md                   RLS, Validation, Queries
|   |   +-- security.md                  Secrets, Headers, Auth
|   +-- skills/                      <-- Aufrufbare Workflows (/command)
|   |   +-- requirements/SKILL.md        /requirements
|   |   +-- architecture/SKILL.md        /architecture
|   |   +-- frontend/SKILL.md            /frontend (läuft als Sub-Agent)
|   |   +-- backend/SKILL.md             /backend (läuft als Sub-Agent)
|   |   +-- qa/SKILL.md                  /qa (läuft als Sub-Agent)
|   |   +-- seo/SKILL.md                 /seo (läuft als Sub-Agent)
|   |   +-- deploy/SKILL.md              /deploy
|   |   +-- help/SKILL.md                /help
|   +-- agents/                      <-- Sub-Agent-Configs
|       +-- frontend-dev.md              Modell, Tools, Limits
|       +-- backend-dev.md
|       +-- qa-engineer.md
|       +-- seo-engineer.md
+-- features/                        <-- Feature-Specifications
|   +-- INDEX.md                         Status-Tracking
|   +-- README.md                        Spec-Format-Doku
+-- docs/
|   +-- PRD.md                       <-- Product Requirements Document
|   +-- production/                  <-- Production-Setup-Guides
|       +-- error-tracking.md            Sentry-Setup (5 Min)
|       +-- security-headers.md          XSS-/Clickjacking-Schutz
|       +-- performance.md               Lighthouse, Optimierung
|       +-- database-optimization.md     Indexing, N+1, Caching
|       +-- rate-limiting.md             Upstash Redis
+-- src/
|   +-- app/                         <-- Pages (Next.js App Router)
|   +-- components/
|   |   +-- ui/                      <-- shadcn/ui-Komponenten (35+ installiert)
|   +-- hooks/                       <-- Custom React Hooks
|   +-- lib/                         <-- Utilities
+-- public/                          <-- Statische Dateien
```

---

## Test-Strategie

Dieses Template nutzt eine **zweischichtige Test-Strategie**: Vitest für isolierte Logik, Playwright für sichtbares Nutzerverhalten. Beide sind verdrahtet; Tests werden pro Feature vom `/qa`-Skill generiert — kein Boilerplate zum Kopieren.

### Schicht 1: Vitest (Unit / Integration)

Schnell, läuft in `jsdom`. Test-Dateien direkt neben der Quelldatei ablegen (z. B. `src/hooks/useFeature.test.ts` neben `src/hooks/useFeature.ts`).

**Vitest verwenden, wenn** sich die Logik ohne Browser testen lässt:
- Custom Hooks mit nicht-trivialer Logik (Storage-Zugriff, Reducer, Debounced State)
- Pure Utility-/Transformations-Funktionen (sort, filter, reorder, parse)
- Aus Komponenten extrahierte Form-Validation-Logik
- API-Route-Handler (Request → Response, gemockte Deps)

**Vitest überspringen für** rein präsentationelle Komponenten oder alles, was bereits End-to-End abgedeckt ist.

Ausführen: `npm test` (einmalig) oder `npm run test:watch` (TDD).

### Schicht 2: Playwright (E2E)

Echtes Chromium + Mobile Safari, gegen einen laufenden `next dev`-Server. Tests liegen in [tests/](tests/) und sind pro Feature benannt: `tests/PROJ-X-feature-name.spec.ts`.

**Playwright verwenden, wenn** das Verhalten nur durch die UI sinnvoll prüfbar ist:
- Ein `test()` pro Acceptance Criterion (der Test liest sich wie die User Story)
- Multi-Page-Flows, Navigation, Auth, Redirects
- Form-Submission-Roundtrips, Optimistic UI, Server-Antworten
- Responsive- / Cross-Browser-Regressionen

Diese Specs werden zur permanenten Regressions-Suite — beim Ändern eines Features niemals bestehende grüne E2E-Tests löschen, sondern aktualisieren.

Ausführen: `npm run test:e2e` (headless), `npm run test:e2e:ui` (Debugger), `npm run test:all` (beide Schichten).

### Wann was schreiben — schnelle Regel

> Wenn ein Senior-Dev **durch Lesen** des Codes erkennen könnte, ob er korrekt ist → Vitest-Test.
> Wenn er **durch die App klicken** müsste, um sicher zu sein → Playwright-Test.

### Wie Tests entstehen

Du schreibst keine Tests von Hand. Der `/qa`-Skill ([.claude/skills/qa/SKILL.md](.claude/skills/qa/SKILL.md)) liest den Feature-Spec, geht Acceptance Criteria + Edge Cases + Security-Audit durch und generiert die Unit- und E2E-Tests, die er zur Verifikation genutzt hätte. `/qa features/PROJ-X-name.md` nach der Implementierung ausführen.

### Einmaliges Setup

Playwright benötigt einmal pro Maschine die Browser-Binaries (~300 MB):
```bash
npx playwright install chromium
```

---

## SEO- & GEO-Strategie

Nach bestandenem QA optimiert der `/seo`-Skill das Feature für klassische Suchmaschinen und KI-/LLM-Crawler (ChatGPT, Perplexity, Claude, Google AI Overviews). Zwei Schichten, wie beim Testen — eine stabil, eine experimentell.

### Schicht 1: SEO (stabil, Pflicht)

Für jede öffentlich zugängliche Page eines Features ergänzt `/seo`:

- **Page-Metadaten** über Next.js `generateMetadata()` — `title`, `description`, OG-/Twitter-Cards, Canonical URL
- **Strukturierte Daten** (JSON-LD) — passendes Schema je Content-Typ (`Article`, `Product`, `FAQPage`, `BreadcrumbList`, `Organization`, `Person`, `Event`, `HowTo`)
- **OG-Bilder** — statisch oder dynamisch generiert via `opengraph-image.tsx` + `next/og`
- **Sitemap-Eintrag** — ergänzt in `src/app/sitemap.ts`
- **Lighthouse-SEO-Audit** — Ziel ≥ 95 pro Page (echter Score, gemessen via `npx lighthouse`)

Die Site-Baseline (`metadataBase`, `sitemap.ts`, `robots.ts`, `manifest.ts`) wird beim ersten Lauf automatisch eingerichtet.

### Schicht 2: GEO (experimentell, Best Effort)

Generative Engine Optimization macht Content für KI-Crawler auffindbar und zitierfähig. Standards entwickeln sich noch (`llms.txt` wurde 2024 von Anthropic vorgeschlagen), daher kennzeichnet `/seo` GEO-Punkte explizit als experimentell im Feature-Spec:

- **`public/llms.txt`** — Markdown-Zusammenfassung der Site für LLM-Crawler, mit Schlüssel-URLs und Content-Kategorien
- **`public/llms-full.txt`** (optional) — vollständige Content-Snapshots zur Zitation
- **Zitierfähige Struktur** — klare `<h1>`/`<h2>`/`<h3>`-Hierarchie, semantisches `<article>`/`<section>`, FAQ-Q&A-Blöcke gepaart mit `FAQPage`-Schema
- **E-E-A-T-Signale** — Experience, Expertise, Authority, Trust via `Organization`- + `Person`-Schema, `sameAs`-Links auf Social-Profile, Author-Bylines mit `datePublished`/`dateModified`
- **Keine LLM-blockierenden Patterns** — wichtige Inhalte im initialen HTML (Server Components), kein Canvas- oder rein bildbasierter Text, keine Login-Walls vor indexierbaren Inhalten

### Wann `/seo` übersprungen werden kann

Nur bei Features ohne öffentliche Pages — interne Admin-Tools, Dashboards hinter Auth, die nicht indexiert werden sollen. Die Skill fragt nach, bevor sie etwas anfasst.

### Wie SEO/GEO entsteht

Du schreibst keine Metadaten von Hand. Der `/seo`-Skill ([.claude/skills/seo/SKILL.md](.claude/skills/seo/SKILL.md)) liest den Feature-Spec, richtet die Site-Baseline ein, falls fehlend, und generiert dann pro Page Metadaten, JSON-LD, OG-Bilder und Sitemap-Einträge. Er führt Lighthouse-Audits aus und validiert JSON-LD gegen den [Google Rich Results Test](https://search.google.com/test/rich-results), bevor er reportet. `/seo features/PROJ-X-name.md` nach bestandenem `/qa` ausführen.

---

## Wie es unter der Haube funktioniert

### Skills (`.claude/skills/`)
Jeder Skill ist ein strukturierter Workflow, den Claude Code automatisch erkennt. Skills laufen entweder inline (im Hauptgespräch) oder als geforkter Sub-Agent (isoliertes Context-Window).

| Skill | Ausführung | Warum? |
|-------|-----------|--------|
| `/requirements` | Inline | Braucht Live-Interaktion mit Nutzer |
| `/architecture` | Inline | Kurzer Output, Nutzer reviewt in Echtzeit |
| `/frontend` | Sub-Agent (forked) | Viele Datei-Edits, viel Output |
| `/backend` | Sub-Agent (forked) | Viele Datei-Edits, SQL, API-Code |
| `/qa` | Sub-Agent (forked) | Systematisches Testen, viel Output |
| `/seo` | Sub-Agent (forked) | Multi-File-Metadaten-Edits, Audits, Schema-Generierung |
| `/deploy` | Inline | Deployment braucht Nutzer-Aufsicht |
| `/help` | Inline | Schneller Status-Check und Guidance |

### Rules (`.claude/rules/`)
Coding-Standards, die je nach bearbeiteter Datei automatisch greifen. Kein manuelles Laden nötig.

### Sub-Agent-Configs (`.claude/agents/`)
Schlanke Configs, die Modell, Tool-Zugriff und Turn-Limits für geforkte Skills definieren.

### CLAUDE.md
Wird bei jedem Session-Start automatisch geladen. Enthält Tech-Stack, Konventionen und Verweise auf PRD und Feature-Index.

---

## Context Engineering

KI-Agents arbeiten am besten mit sauberem, strukturiertem Context — nicht mit längeren Prompts. Dieses Template ist um folgende Prinzipien herum gebaut:

### State lebt in Dateien, nicht im Speicher

Jeder Skill liest beim Start `features/INDEX.md` und den relevanten Feature-Spec. Nach Context-Compaction oder einer neuen Session geht nichts verloren — der Agent liest die Dateien einfach neu. Fortschritts-Tracking, Acceptance Criteria und Tech-Designs leben in Markdown-Dateien, nicht im Gespräch.

### Context ist geschichtet

Nicht alles wird auf einmal geladen. Informationen sind nach Relevanz geschichtet:

| Schicht | Was | Wann geladen |
|---------|-----|--------------|
| `CLAUDE.md` | Tech-Stack, Konventionen, Befehle | Bei jeder Session (auto) |
| `.claude/rules/` | Coding-Standards | Beim Bearbeiten passender Dateien (auto) |
| Skill `SKILL.md` | Workflow-Anweisungen | Beim Aufruf des Skills |
| Feature-Spec | Anforderungen, AC, Tech-Design | On Demand (Skill liest ihn) |
| `docs/production/` | Deployment-Guides | Nur bei Verweis |

### Context ist isoliert

Schwere Implementierungs-Skills (`/frontend`, `/backend`, `/qa`) laufen als **geforkte Sub-Agents** mit eigenem Context-Window. Recherche-Lärm aus einem Skill verschmutzt keinen anderen. Jeder Fork startet sauber und lädt nur, was er braucht.

### Context Recovery ist eingebaut

Alle geforkten Skills haben eine **Context-Recovery**-Sektion: Wird der Context mitten in der Aufgabe komprimiert, liest der Agent den Feature-Spec erneut, prüft `git diff` auf Fortschritt und macht ohne Neustart oder Doppelarbeit weiter.

### Immer lesen, nie raten

Eine globale Rule (`rules/general.md`) erzwingt: Datei vor jedem Bearbeiten lesen, niemals Inhalte aus dem Gedächtnis annehmen, Import-Pfade und API-Routen durch Lesen verifizieren. Das verhindert halluzinierte Code-Referenzen — die häufigste Quelle für KI-Coding-Fehler.

---

## Anpassung für dein Team

Dieses Template ist als Startpunkt gedacht. Für dein Team anpassen:

1. **CLAUDE.md bearbeiten** — projekt-spezifische Konventionen und Build-Befehle ergänzen
2. **docs/PRD.md bearbeiten** — Produktvision und Roadmap definieren
3. **.claude/rules/ bearbeiten** — Coding-Standards für dein Team anpassen
4. **.claude/skills/ bearbeiten** — Workflows an euren Prozess anpassen
5. **.claude/settings.json bearbeiten** — Team-Permissions konfigurieren

---

## Production-Guides

Standalone-Guides in `docs/production/`:

| Guide | Setup-Zeit | Was er macht |
|-------|-----------|--------------|
| [Error Tracking](docs/production/error-tracking.md) | 5 Min | Sentry-Integration für automatisches Fehler-Capturing |
| [Security Headers](docs/production/security-headers.md) | 2 Min | XSS-, Clickjacking-, MIME-Sniffing-Schutz |
| [Performance](docs/production/performance.md) | 10 Min | Lighthouse-Checks, Image-Optimierung, Caching |
| [Database Optimization](docs/production/database-optimization.md) | 15 Min | Indexing, N+1-Vermeidung, Query-Optimierung |
| [Rate Limiting](docs/production/rate-limiting.md) | 10 Min | Upstash Redis gegen API-Missbrauch |

---

## Scripts

```bash
npm run dev          # Development-Server (localhost:3000)
npm run build        # Production-Build
npm run start        # Production-Server
npm run lint         # ESLint
npm test             # Vitest: Integration-Tests für API-Routes
npm run test:e2e     # Playwright: E2E-Tests für User-Flows
npm run test:all     # Beide Test-Suites ausführen
```

---

## Autor

Erstellt von **becoss** – AI Product Engineer & Content Creator.

- [Website](https://becoss.de)

---

## Lizenz

MIT-Lizenz – frei für eigene Projekte verwendbar.

© becoss GmbH. Alle Rechte vorbehalten.
