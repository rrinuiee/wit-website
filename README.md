# WIT: Women in Tech website prototype

A community-built, open-source prototype website for **Women in Tech (WIT)**, a community under **TinkerHub Foundation**. It's built for workshops: participants explore it, find issues, suggest improvements and learn GitHub by contributing.

> **This is not an official or approved website.**
>
> Every card is labelled:
> - **✓ Verified**: from an official TinkerHub page
> - **✦ Demo content**: illustrative only
> - **? Needs confirmation**: still to be confirmed by the WIT team
>
> See [docs/CONTENT-SOURCES.md](docs/CONTENT-SOURCES.md) for every source.

## Run it locally

You need [Node.js](https://nodejs.org/) 18+.

```bash
npm install      # first time only
npm run dev      # start → open http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with instant reload. It also prints a **Network** URL that phones on the same Wi-Fi can open. |
| `npm run build` | Builds the final site into `dist/` |
| `npm run preview` | Serves the built `dist/` site locally to double-check it |

## What's on the page

| Section | Content |
|---|---|
| **Hero** | Headline, intro (demo), and the next **verified** TinkerHub event (hidden automatically after its date) |
| **About** | WIT story (demo), plus verified TinkerHub description, mission and action plan |
| **What we do** | Learn / Build / Lead / Celebrate (demo descriptions) |
| **Learn** | Tabs: WIT session formats (demo), and Study Jams and TinkerSpace across TinkerHub (verified) |
| **Initiatives** | Tink-Her-Hack (verified mention plus a "needs confirmation" box), Build Her, WMC, WiT Leadership Summit |
| **Events** | Upcoming and past tabs: verified TinkerHub listings plus demo cards (no fake dates) |
| **Stories** | Fictional personas, clearly labelled, plus a link to real TinkerHub stories on Medium |
| **Get involved** | WIT join link (needs confirmation), plus TinkerHub's verified Volunteer and Start-a-campus links |
| **Contribute** | Beginner GitHub steps, copyable clone command, good first issues, FAQ, slogan poll |

**Interactive features:**
- sticky navigation that highlights the current section
- mobile menu
- tabs (with arrow-key support)
- a marquee ribbon
- FAQ accordions
- a "Show sources & notes" switch
- a feedback drawer
- a slogan poll
- scroll reveals (switched off for people who prefer reduced motion)

## Project structure

```
src/
  content/            ← text lives here, separate from layout
    wit.js              WIT content (mostly demo)
    tinkerhub.js        verified TinkerHub facts
    events.js           event cards
    sources.js          official source links + date checked
    feedback.js         feedback form options
  sections/           ← one component per page section
  components/
    layout/             header, footer, announcement bar, feedback drawer, logo
    ui/                 ContentTag, Tabs, EventCard, Doodle (SVG art), Marquee…
  context/            ← shared state (sources switch, feedback drawer, poll vote)
  hooks/ lib/         ← small helpers (scroll reveal, storage, dates, feedback)
  styles/
    tokens.css          ALL colours, fonts, spacing (start here to restyle)
    base.css → components.css → layout.css → sections.css
docs/CONTENT-SOURCES.md  ← verified / demo / needs-confirmation log
CONTRIBUTING.md          ← beginner guide to issues, forks and pull requests
.github/ISSUE_TEMPLATE/  ← bug, idea and accessibility issue forms
```

## Design

The site should feel like part of the TinkerHub family, without copying it:

- **Shared with TinkerHub (observed on tinkerhub.org):** Instrument Serif italic accents, a marquee ribbon, sticker-style labels, tilted cards and a "Be kind" call to action.
- **WIT's own identity:**
  - warm cream base
  - lilac and peach pastels
  - muted rose for actions
  - deep plum for text and dark sections
  - organic blob shapes and hand-coded SVG doodles
- **Type:** Bricolage Grotesque (headings), Instrument Serif (expressive accents), Source Sans 3 (body). All are self-hosted, so the site works offline.
- **Contrast:** all text colours meet WCAG AA. See the notes in `src/styles/tokens.css`.
- **Not used:** no TinkerHub logos, photos or artwork. The "wit" logo is a typographic stand-in until WIT supplies one.

## Feedback: what happens today

**No shared service is connected.**

- Notes and poll votes are saved in each visitor's own browser, and the interface says so.
- In the drawer, **Feedback → Notes on this device → Download CSV / JSON** exports them.

To collect everyone's feedback in one place:

1. Create a receiver, either:
   - a [Formspree](https://formspree.io) form, or
   - a Google Sheet with an Apps Script web app (code below)
2. Copy `.env.example` to `.env` and set `VITE_FEEDBACK_ENDPOINT=<your URL>`.
3. Restart `npm run dev`. The drawer then says **"Shared form connected"** and reports whether each note was delivered.
4. Send one test note and one vote before the workshop.

<details>
<summary>Google Apps Script receiver</summary>

1. Create a Sheet with the header row `id, createdAt, kind, section, slot, message, name, page`.
2. Open **Extensions → Apps Script** and paste:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  const p = e.parameter
  sheet.appendRow([p.id, p.createdAt, p.kind, p.section, p.slot, p.message, p.name, p.page])
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON)
}
```

3. Choose **Deploy → Web app**. Set **Execute as: Me** and **Who has access: Anyone**, then use the `/exec` URL.

</details>

## Contributing

Beginners are very welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md).
