/**
 * WIT content for the prototype.
 *
 * Most of this is DEMO content — written to show how the site could look once
 * the WIT team supplies real content. Each item says which kind it is:
 *   'verified' – backed by an official TinkerHub page (see `source`)
 *   'demo'     – illustrative, written for this prototype
 *   'confirm'  – real-world information we've seen reported, but that still
 *                needs confirmation from the WIT / TinkerHub team
 */
import { SOURCES } from './sources'
import { TINKERHUB_LINKS } from './tinkerhub'

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'learn', label: 'Learn' },
  { id: 'initiatives', label: 'Initiatives' },
  { id: 'events', label: 'Events' },
  { id: 'stories', label: 'Stories' },
  { id: 'contribute', label: 'Contribute' },
]

export const HERO = {
  eyebrow: 'Women in Tech · a TinkerHub community',
  // Draft copy for the prototype (demo) — the WIT team should approve the final wording.
  intro:
    'A warm, curious corner of the TinkerHub community where women learn together, build real things, and grow into leaders — one workshop, project and pull request at a time.',
  stickers: ['ask anything', 'ship it ✦', 'first PR!'],
}

export const MARQUEE = ['learn together', 'build boldly', 'ask anything', 'lift each other', 'ship it', 'stay curious']

export const ABOUT_WIT = {
  title: 'A community, not a classroom.',
  paragraphs: [
    'WIT brings women in the TinkerHub community together to learn, build and lead — whether you’re writing your first line of code or mentoring your fifth hackathon team.',
    'We believe the best way in is alongside people who’ve been where you are: peers who answer questions kindly, celebrate small wins loudly and pass the mic forward.',
  ],
  values: ['Show up before you feel ready', 'Learn in public', 'Make room for the next person'],
}

/** Labels suggested in the WIT website strategy; descriptions are demo copy. */
export const WHAT_WE_DO = [
  {
    id: 'learn',
    title: 'Learn',
    icon: 'book',
    tone: 'lilac',
    text: 'Beginner-friendly sessions, study circles and “ask anything” hours where no question is too small.',
  },
  {
    id: 'build',
    title: 'Build',
    icon: 'laptop',
    tone: 'peach',
    text: 'Build nights, hackathon teams and real open-source projects — like the website you’re looking at.',
  },
  {
    id: 'lead',
    title: 'Lead',
    icon: 'megaphone',
    tone: 'rose',
    text: 'Run a session, speak at a meetup or start a circle on your campus, with mentors in your corner.',
  },
  {
    id: 'celebrate',
    title: 'Celebrate',
    icon: 'sparkle',
    tone: 'butter',
    text: 'Shout-outs, show-and-tells and a lot of confetti for first PRs, first talks and finished projects.',
  },
]

/** Sample WIT session formats (demo). */
export const WIT_SESSIONS = [
  { title: 'Ask-Anything Hour', meta: 'Weekly · online', text: 'Bring a bug, a doubt or a career question. Peers and mentors answer together.' },
  { title: 'Build Circles', meta: '4-week sprints', text: 'Small groups pick one project, meet weekly and demo it at the end.' },
  { title: 'Open-Source Fridays', meta: 'Fortnightly', text: 'Find a good first issue, pair up and open your first pull request.' },
  { title: 'Mentor Office Hours', meta: 'Book a slot', text: 'Twenty minutes with someone a few steps ahead of you in tech.' },
]

/** Initiatives. Only claims we could check on official pages are 'verified'. */
export const INITIATIVES = {
  featured: {
    name: 'Tink-Her-Hack',
    verified: {
      text: 'TinkerHub’s Study Jams page lists campus pre-learning sessions run “as part of Tink-Her Hack 4.0” — including a 3-day pre-learning programme and a Flutter study jam.',
      source: SOURCES.studyJams,
    },
    toConfirm: [
      'Described elsewhere as an all-Kerala, women-only overnight hackathon by TinkerHub Women in Tech.',
      'Tink-Her-Hack 4.0 reported as held 27–28 Feb 2026 with about 6,000 participants across 100+ campuses.',
      'Whether Tink-Her-Hack should live on this site or link to its own site.',
    ],
  },
  others: [
    {
      name: 'Build Her',
      status: 'verified',
      text: 'A campus workshop for girls listed on TinkerHub’s events page — exploring AI-powered vibe coding and pushing projects to GitHub.',
      note: 'Organised by a campus community. Not confirmed as a WIT initiative.',
      source: SOURCES.buildHer,
    },
    {
      name: 'Women Makers Celebration',
      status: 'confirm',
      text: 'Reported as an annual celebration of women makers coming through Tink-Her-Hack.',
      note: 'Seen in a LinkedIn recap, not on an official TinkerHub page.',
    },
    {
      name: 'WiT Leadership Summit',
      status: 'confirm',
      text: 'Reported as a two-day leadership summit held at TinkerSpace.',
      note: 'Year and details need confirmation from the WIT team.',
    },
  ],
}

/** Illustrative member spotlights — personas, not real people or quotes. */
export const STORIES = [
  {
    persona: 'The first-timer',
    role: 'Second-year student',
    tone: 'lilac',
    icon: 'sparkle',
    quote: 'I joined to “just watch”. Two weeks later I’d pushed my first commit, and someone cheered in the group chat.',
  },
  {
    persona: 'The team lead',
    role: 'Hackathon captain',
    tone: 'peach',
    icon: 'laptop',
    quote: 'Leading a team of four taught me more than any course. The best part was mentoring someone on her first hack.',
  },
  {
    persona: 'The career switcher',
    role: 'Working professional',
    tone: 'rose',
    icon: 'book',
    quote: 'I came from a non-CS background. The study circles gave me a routine — and people who didn’t make me feel behind.',
  },
]

export const GET_INVOLVED = [
  {
    id: 'join',
    title: 'Join WIT',
    text: 'Get updates about sessions, build nights and ways to take part.',
    status: 'confirm',
    note: 'WIT’s official join link hasn’t been confirmed yet.',
    action: { kind: 'feedback', label: 'Share your idea' },
  },
  {
    id: 'volunteer',
    title: 'Volunteer with TinkerHub',
    text: 'Help organise events and communities across the TinkerHub ecosystem.',
    status: 'verified',
    note: 'TinkerHub-wide volunteer page.',
    source: SOURCES.home,
    action: { kind: 'link', label: 'Volunteer page', href: TINKERHUB_LINKS.volunteer },
  },
  {
    id: 'campus',
    title: 'Start a campus community',
    text: 'Bring TinkerHub’s campus community to your college.',
    status: 'verified',
    note: 'TinkerHub-wide “Start a campus” form.',
    source: SOURCES.home,
    action: { kind: 'link', label: 'Start a campus', href: TINKERHUB_LINKS.startCampus },
  },
  {
    id: 'mentor',
    title: 'Mentor or speak',
    text: 'Share what you know in a session, a code review or a twenty-minute chat.',
    status: 'demo',
    note: 'Example opportunity — no mentor programme has been announced.',
    action: { kind: 'feedback', label: 'Suggest a session' },
  },
]

/** Slogan candidates from the WIT website strategy (not approved). */
export const SLOGANS = [
  { id: 'she-tinkers', text: 'she tinkers' },
  { id: 'make-mentor', text: 'make & mentor' },
  { id: 'kerala-builds', text: 'kerala builds' },
  { id: 'ente-code', text: 'ente code' },
]

export const CONTRIBUTE = {
  steps: [
    { title: 'Explore', text: 'Click around on your phone and laptop. Notice anything odd, confusing or broken?' },
    { title: 'Open an issue', text: 'Describe what you saw and where. Screenshots help. That’s already a contribution!' },
    { title: 'Fork & branch', text: 'Make your own copy of the project and a branch for your change.' },
    { title: 'Open a pull request', text: 'Push your change and open a PR. Someone will review it with you.' },
  ],
  firstIssues: [
    { label: 'Accessibility', text: 'Check every image has helpful alt text' },
    { label: 'Design', text: 'Spot spacing that looks off on a small phone' },
    { label: 'Content', text: 'Rewrite a demo card in a friendlier voice' },
    { label: 'Code', text: 'Add a “back to top” button' },
    { label: 'Docs', text: 'Improve a step in CONTRIBUTING.md' },
  ],
  faq: [
    {
      q: 'Do I need to know React to help?',
      a: 'No. Reporting a bug, suggesting a design change or improving text are all real contributions. If you want to code, the components are small and commented.',
    },
    {
      q: 'Where does the content live?',
      a: 'In src/content/. Text is kept separate from the components, so you can edit words without touching layout code.',
    },
    {
      q: 'What do the labels on cards mean?',
      a: '“Verified” links to an official TinkerHub page. “Demo content” is made up to show the design. “Needs confirmation” is information the WIT team still has to check.',
    },
    {
      q: 'I’m scared of breaking something.',
      a: 'You can’t break the real project from your fork. Pull requests are reviewed before anything changes — that’s exactly what they’re for.',
    },
  ],
}
