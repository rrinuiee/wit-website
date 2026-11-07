# WIT Build Log: workshop prototype

An interactive, single-page prototype for a Women in Tech (WIT) website under TinkerHub Foundation. It was built for a live community workshop, so participants can explore it and leave feedback.

> **This is not an official or approved website.** All content follows [`WIT-Website-Strategy.md`](WIT-Website-Strategy.md):
>
> - **Verified** items come from the strategy doc and still need WIT's confirmation.
> - **Recommended** items are proposals.
> - **Placeholder** slots are intentionally empty. The prototype contains no invented people, events, partners, testimonials, statistics or links.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

**Phones at the workshop:** `npm run dev` also prints a **Network** URL (e.g. `http://192.168.x.x:5173`). Phones on the same Wi-Fi can open that URL, or a QR code made from it. Some venue Wi-Fi networks block devices from reaching each other. Test the URL before the session.

**Production build:** `npm run build` writes to `dist/`, and `npm run preview` serves the built files. Fonts are bundled, so the prototype works offline.

## What's in it

| Feature | How it behaves |
|---|---|
| Prototype banner | Always visible. Its button also toggles source labels. |
| Navigation | Sticky header that scrolls to each section and highlights the current one. Collapses to a menu sheet on mobile (closes with Escape). |
| Slogan stamp | Choosing one of the four provisional slogans (strategy §6.2) re-stamps the hero. **Vote** records a choice. |
| Ink picker | Previews the four accent candidates. Terracotta is the default. The choice is remembered per device. |
| Review mode | Shows a Verified / Recommended / Placeholder chip and its source on every block. |
| Feedback | The dock button opens a drawer. Each "Suggest this" link opens it pre-filled for that slot. |
| Events | Build Her (12 Nov 2026) appears only until the end of that day. After that, a marked placeholder replaces it automatically. |
| Motion | Stamp-in, hover lift, tape peel, fade-in on scroll. All are disabled under `prefers-reduced-motion`. |

## Feedback: what happens today

**No shared service is connected.** Notes and slogan votes are saved in each visitor's own browser (localStorage), and the interface says so in plain words. Nothing claims to be sent anywhere.

- On any device: **Feedback → "Notes on this device" → Download CSV / JSON** exports what that browser has stored.
- That works if participants use a facilitator's laptop. Notes typed on participants' own phones stay on those phones. **Shared collection needs the integration below.**

## Connecting shared feedback

The app sends a standard form POST (`application/x-www-form-urlencoded`) to whatever URL is set in `VITE_FEEDBACK_ENDPOINT`. Each submission includes these fields:

```
id, createdAt, kind, section, slot, message, name, page
```

`kind` is `love`, `confusing`, `idea`, `missing` or `slogan-vote`. For a vote, `message` holds the slogan id.

### Step 1: pick a receiver (either works without a backend)

**Option A: Formspree** (simplest)

1. Create a free form at formspree.io and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. Check the free tier's monthly submission limit against the expected workshop size.

**Option B: Google Sheet via Apps Script** (free, results land in a sheet)

1. Create a Google Sheet. Add a header row: `id, createdAt, kind, section, slot, message, name, page`.
2. Open **Extensions → Apps Script** and paste:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
     const p = e.parameter
     sheet.appendRow([p.id, p.createdAt, p.kind, p.section, p.slot, p.message, p.name, p.page])
     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON)
   }
   ```

3. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**, then copy the `/exec` URL.

> Tally and Google Forms can't receive this POST directly. Google Forms needs per-question `entry.*` IDs and gives no confirmation of delivery, so the UI couldn't honestly report success.

### Step 2: configure the app

```bash
cp .env.example .env
# edit .env:
VITE_FEEDBACK_ENDPOINT=https://formspree.io/f/abcdwxyz
```

Restart `npm run dev` (or rebuild). The drawer will then say **"Shared form connected"**:

- Each note reports whether it was actually delivered.
- If the network fails, the note is still kept on the device and the error is shown.

### Step 3: test before the workshop

Submit one note and one vote, then confirm both arrive in Formspree or the sheet.

### Decisions this needs from you

- [ ] Which receiver to use (Formspree or Google Sheet), and whose account owns it
- [ ] Whether collecting an optional name or handle is OK, and who can see the results
- [ ] How phones will reach the prototype: shared Wi-Fi to a laptop, or a hosted copy (deployment is out of scope for now)

## Project structure

```
src/
  config/feedback.js        Shared-feedback endpoint (env-driven, empty by default)
  content/site.js           All copy, statuses, sources, accents, slogans, events
  context/WorkshopContext   Accent, review mode, slogan, vote, feedback drawer state
  hooks/                    Stored state, active section, scroll reveal
  lib/                      Feedback submit/export, event date logic, safe storage
  components/ui/            Status chip, Placeholder, Stamp, Tape, IndexCard, Ticket, EventTicket…
  components/layout/        Banner, header/nav, workshop dock, feedback drawer, footer
  sections/                 Hero, About, WhatWeDo, TinkHerHack, Events, Community, GetInvolved, Partners
  styles/                   tokens → base → components → layout → sections (plain CSS)
```

**To change content:** edit `src/content/site.js` and keep each claim's status honest. Add dated events to `EVENTS` only once they are verified.

## Design notes

- **Concept:** "The Build Log", a shared notebook. It uses graph paper (the 24px grid is also the spacing rhythm), index cards, ticket stubs, washi tape, margin notes and one rubber-stamp motif whose ink is the accent colour.
- **Type:** Bricolage Grotesque (display), Source Sans 3 (body), IBM Plex Mono (labels). All are self-hosted via Fontsource.
- **Contrast:** every accent has a text-safe variant (`--accent-text`) at ≥ 4.5:1 on paper. Electric coral uses ink text on its fills.
- **Not done yet** (out of scope for this prototype):
  - Malayalam display text (needs community-approved copy, strategy §9 Q18)
  - real photos and sticker art
  - the other site pages
  - deployment
