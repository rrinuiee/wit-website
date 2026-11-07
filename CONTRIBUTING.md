# Contributing to the WIT website prototype

Welcome! 👋 This project is a **learning space**. If this is your first time using GitHub, you're in the right place.

You don't need to be an expert, and you don't need to write code to contribute.

## Ways to help (pick any)

| You can… | Example |
|---|---|
| 🐛 Report a bug | "The menu doesn't close on my phone" |
| 🎨 Suggest a design idea | "The event cards could show a photo" |
| ✍️ Improve content | Rewrite a demo card, fix a typo |
| ♿ Improve accessibility | Better alt text, clearer link names, contrast fixes |
| 💻 Add a small feature | A "back to top" button, a filter for events |

## Step 1: Explore and open an issue

1. Open the website. Run it locally (below) or use a link someone shares.
2. Try it on a **phone** and a **laptop**. Resize the browser window. Use the keyboard (Tab key) to move around.
3. Found something? Go to **Issues → New issue** on GitHub and describe:
   - **what** you saw
   - **where** (which section, which device/browser)
   - **what you expected** instead
   - a screenshot, if you can

That's already a real contribution! 🎉

## Step 2: Run the project on your computer

You need [Node.js](https://nodejs.org/) (version 18 or newer) and [Git](https://git-scm.com/).

```bash
# 1. Fork the repository on GitHub (the "Fork" button, top right)
# 2. Clone YOUR fork (replace YOUR-USERNAME)
git clone https://github.com/YOUR-USERNAME/wit-website.git
cd wit-website

# 3. Install and start
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Changes you save appear instantly.

## Step 3: Make a change on a branch

```bash
git checkout -b fix-menu-on-small-phones   # a short name describing your change
# …edit files…
git add .
git commit -m "Fix menu closing on small phones"
git push origin fix-menu-on-small-phones
```

Then open your fork on GitHub and click **Compare & pull request**. Describe what you changed and why. Link the issue if there is one (e.g. "Fixes #12").

## Where things live

```
src/
  content/      ← all the words: edit text here without touching layout
    wit.js        WIT content (mostly demo)
    tinkerhub.js  verified TinkerHub facts (with sources)
    events.js     event cards
    sources.js    official source links + "checked on" date
  sections/     ← one file per page section (Hero, About, Events…)
  components/   ← reusable pieces (buttons, tags, cards, header, footer)
  styles/       ← CSS: tokens.css has all colours, fonts and spacing
docs/
  CONTENT-SOURCES.md  where every piece of content comes from
```

## Content rules (please read!)

This site is about a real community, so honesty matters.

- **Never present made-up information as real.** Demo content must use the `demo` status, which shows a "Demo content" label.
- Facts about TinkerHub need an **official source** (`status: 'verified'` plus a `source` link).
- Not sure if something is true? Use `status: 'confirm'` ("Needs confirmation").
- Don't add real people's names, photos or quotes without their consent.
- Don't use TinkerHub logos or images unless the TinkerHub team gives permission.
- Update `docs/CONTENT-SOURCES.md` when you add or change content.

## Before you open a pull request

- [ ] `npm run build` finishes without errors
- [ ] It looks right on a phone-sized window (about 375px wide) and on desktop
- [ ] You can reach new buttons and links with the Tab key
- [ ] Text has enough contrast (use the colours in `src/styles/tokens.css`)

## Be kind

Everyone here is learning. Ask questions, review gently, and celebrate each other's first PRs. 💜
