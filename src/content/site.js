/**
 * Single source of content for the prototype.
 *
 * Every claim carries a status that mirrors WIT-Website-Strategy.md:
 *   verified     – observed on TinkerHub properties / cited sources (per the
 *                  strategy doc; still to be confirmed by WIT before publishing)
 *   recommended  – a proposal from the strategy doc or this prototype
 *   placeholder  – content WIT must supply; never filled with invented facts
 */

export const STATUS = {
  verified: { label: 'Verified', short: 'V' },
  recommended: { label: 'Recommended', short: 'R' },
  placeholder: { label: 'Placeholder', short: 'P' },
}

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'what-we-do', label: 'What we do' },
  { id: 'tink-her-hack', label: 'Tink-Her-Hack' },
  { id: 'events', label: 'Events' },
  { id: 'community', label: 'Community' },
  { id: 'get-involved', label: 'Get involved' },
]

/** Sections offered in the feedback form. */
export const FEEDBACK_SECTIONS = [
  { id: 'whole-site', label: 'The whole prototype' },
  { id: 'hero', label: 'Hero & wordmark' },
  { id: 'slogan', label: 'Slogan stamp' },
  { id: 'about', label: 'About WIT' },
  { id: 'what-we-do', label: 'What we do (01–04)' },
  { id: 'tink-her-hack', label: 'Tink-Her-Hack' },
  { id: 'events', label: 'Upcoming events' },
  { id: 'community', label: 'Community story & numbers' },
  { id: 'get-involved', label: 'Get involved' },
  { id: 'partners', label: 'Partners & footer' },
  { id: 'colour', label: 'Accent colour' },
]

export const FEEDBACK_KINDS = [
  { id: 'love', label: 'Love this' },
  { id: 'confusing', label: 'Confusing' },
  { id: 'idea', label: 'Idea' },
  { id: 'missing', label: 'Something’s missing' },
]

/** Accent candidates — strategy §6.2. Final choice is a Placeholder. */
export const ACCENTS = [
  { id: 'terracotta', label: 'Laterite terracotta', hex: '#B5452B' },
  { id: 'magenta', label: 'Deep magenta', hex: '#9E1F5C' },
  { id: 'red', label: 'Warm red', hex: '#C8281E' },
  { id: 'coral', label: 'Electric coral', hex: '#FF5B3A' },
]
export const DEFAULT_ACCENT = 'terracotta'

/** Slogan candidates — strategy §6.2 ("Placeholder: pick in workshop"). */
export const SLOGANS = [
  { id: 'she-tinkers', text: 'she tinkers' },
  { id: 'make-mentor', text: 'make & mentor' },
  { id: 'kerala-builds', text: 'kerala builds' },
  { id: 'ente-code', text: 'ente code' },
]

export const HERO = {
  kicker: 'Build log · draft 0.1 · workshop edition',
  fullName: 'Women in Tech',
  parent: 'a community under TinkerHub Foundation',
  // Provisional tagline written for the workshop, verb-first per strategy §2.8,
  // echoing the recommended 01–04 strip. The real tagline is a Placeholder (§5.1, §8.2).
  tagline: 'Learn it. Build it. Lead it. Celebrate it — together.',
}

export const ABOUT = {
  verifiedLine:
    '“Tink-Her-Hack is an all-Kerala women’s exclusive hackathon by TinkerHub Women in Tech.”',
  verifiedSource: 'Verified subject line quoted in strategy §3.1',
}

/** Recommended strip labels — strategy §5.1 item 3. One-liners are Placeholders. */
export const WHAT_WE_DO = [
  { n: '01', title: 'Learn', prompt: 'What does learning look like at WIT?' },
  { n: '02', title: 'Build', prompt: 'What do WIT members build together?' },
  { n: '03', title: 'Lead', prompt: 'How does WIT grow new leads?' },
  { n: '04', title: 'Celebrate', prompt: 'What — and who — does WIT celebrate?' },
]

/** Strategy §3.4. All Verified per the doc; WIT confirms before publishing. */
export const TINK_HER_HACK = {
  description: 'An all-Kerala women’s overnight hackathon.',
  editions: ['2.0', '3.0', '4.0'],
  latest: {
    name: 'Tink-Her-Hack 4.0',
    dates: '27–28 Feb 2026',
    participants: '6,000',
    campuses: '100+',
    claim: 'the world’s largest offline hackathon for girls',
  },
  sources: [
    'tink-her-hack / TinkerHub',
    'Tink-Her-Hack 4.0 recap (Vidya Academy)',
    'tinkerhub.cev.ac.in/her',
  ],
  related: {
    name: 'Women Makers Celebration',
    line: 'WMC ’26 brought together the top 300 women makers coming through Tink-Her-Hack.',
    source: 'LinkedIn recap by Afeef Venthodika (strategy §3.4)',
  },
}

/**
 * Dated events — only Verified ones belong here.
 * The WiT Leadership Summit (Nov 18–19) is intentionally excluded: its year is
 * only "as reported" in the strategy doc, so it can't be shown as upcoming.
 */
export const EVENTS = [
  {
    id: 'build-her',
    title: 'Build Her',
    date: '2026-11-12',
    source: 'Listed on TinkerHub’s public events feed (strategy §1.5, §3.4)',
    missing: 'Time, venue and registration link are not in the strategy doc',
  },
]

export const TINKERHUB_URL = 'https://tinkerhub.org'
export const TINKERHUB_EVENTS_URL = 'https://tinkerhub.org/events'

/** Strategy §5.1 item 7 — all Placeholder. */
export const COMMUNITY_NUMBERS = [
  { label: 'members', hint: 'Approximate community size' },
  { label: 'campuses', hint: 'Campus chapters' },
  { label: 'projects', hint: 'Projects built' },
  { label: 'mentors', hint: 'Active mentors' },
]

/** Strategy §5.7 — destinations not decided yet (Placeholder). */
export const GET_INVOLVED = [
  {
    id: 'join',
    no: 'A',
    title: 'Join the community',
    who: 'Anyone who wants in',
    goesTo: 'Signup form, Discord invite or WhatsApp link — not decided yet',
  },
  {
    id: 'volunteer',
    no: 'B',
    title: 'Volunteer',
    who: 'People with time to give to organising',
    goesTo: 'Volunteer form (Notion pattern or self-hosted) — not decided yet',
  },
  {
    id: 'host',
    no: 'C',
    title: 'Host at your campus',
    who: 'Student leads and faculty',
    goesTo: 'Application form (Airtable pattern) — not decided yet',
  },
]

export const PARTNER_SLOTS = 5
