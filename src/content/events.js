/**
 * Events shown in the "Events" section.
 *
 * status:
 *   'verified' – copied from an official TinkerHub page (see `source`)
 *   'demo'     – a made-up example to show what the section could look like
 *
 * Demo events never get real calendar dates.
 * Verified events with a `date` (YYYY-MM-DD) hide automatically after that day.
 */
import { SOURCES } from './sources'

export const UPCOMING_EVENTS = [
  {
    id: 'build-her',
    status: 'verified',
    title: 'Build Her',
    date: '2026-11-12',
    time: '1:30 PM – 4:30 PM',
    venue: 'Institute of Engineering & Technology, Calicut University',
    format: 'Campus-exclusive workshop',
    quoted: true, // word-for-word from the source page
    description:
      'An exclusive programme for girls to explore AI-powered vibe coding, build their own projects, and push their creations to GitHub.',
    organiser: 'An event by Institute of Engineering and Technology, Thenhipalam',
    note: 'Listed on TinkerHub’s events page. Not confirmed as a WIT-organised event.',
    link: SOURCES.buildHer.url,
    source: SOURCES.buildHer,
  },
  {
    id: 'demo-first-pr',
    status: 'demo',
    title: 'First Pull Request Party',
    when: 'Saturday · 10:00 AM',
    venue: 'Online',
    format: 'Beginner workshop',
    description: 'Make your very first open-source contribution — to this website! Bring a laptop and a GitHub account.',
  },
  {
    id: 'demo-build-night',
    status: 'demo',
    title: 'Build Night: Portfolio Sites',
    when: 'Friday · 6:00 PM',
    venue: 'Venue to be announced',
    format: 'Build night',
    description: 'Pair up, pick a template and leave with a personal portfolio page that’s actually online.',
  },
  {
    id: 'demo-speaker-circle',
    status: 'demo',
    title: 'Speaker Circle: Your First Tech Talk',
    when: 'Sunday · 4:00 PM',
    venue: 'Online',
    format: 'Peer circle',
    description: 'A friendly room to practise a five-minute talk and get kind, useful feedback.',
  },
]

export const PAST_EVENTS = [
  {
    id: 'thh4-prelearning',
    status: 'verified',
    title: 'TinkHerHack 4.0 Pre-Learning Program',
    when: '17–19 Feb',
    format: 'Campus study jam',
    quoted: true,
    description: 'A 3 day pre-learning program for TInkHerHack 4.0',
    note: 'Quoted as listed (original spelling). Run by a campus community; year not shown on the page.',
    source: SOURCES.studyJams,
  },
  {
    id: 'thh4-flutter',
    status: 'verified',
    title: 'Flutter Kickstart',
    when: '16–18 Feb',
    format: 'Campus study jam',
    description: 'A 3-day Flutter study jam organised as a pre-event to Tink-Her-Hack 4.0.',
    note: 'Summarised from the Study Jams listing. Run by a campus community; year not shown on the page.',
    source: SOURCES.studyJams,
  },
  {
    id: 'demo-git-101',
    status: 'demo',
    title: 'Git & GitHub for First-Timers',
    when: 'Sample recap',
    format: 'Workshop',
    description: 'What a recap card could look like: a photo, three takeaways and a link to the slides.',
  },
]
