/**
 * VERIFIED content about TinkerHub (the wider community WIT belongs to).
 *
 * Everything here was read on the official TinkerHub website on the date in
 * sources.js. Quotes are copied word-for-word (including original wording).
 * These are TinkerHub-wide facts — they are NOT WIT achievements.
 */
import { SOURCES } from './sources'

export const TINKERHUB = {
  description: {
    quote:
      'TinkerHub Foundation is a community of tinkerers, makers & students - working towards mapping and empowering people who share a passion to innovate.',
    source: SOURCES.home,
  },
  mission: {
    quote:
      'By 2026, cultivate a thriving maker culture in Kerala to ignite creativity and equip 15,000 young makers with the skills to innovate and shape the future.',
    source: SOURCES.home,
  },
  // The "Action plan" from the TinkerHub home page.
  actionPlan: [
    { title: 'Learn & Lead', text: 'Dive into peer-driven learning stations and mentor-guided projects.' },
    { title: 'Build & Innovate', text: 'Turn ideas into reality through hands-on experiences and bootcamps.' },
    { title: 'Connect & Grow', text: 'Network with industry pros and fellow innovators at exclusive events.' },
    { title: 'Skill Up', text: 'Boost your career with tailored training and real-world internships.' },
    { title: 'Tinker & Shine', text: 'Access cutting-edge spaces and get recognized for your brilliance.' },
  ],
  studyJams: {
    quote:
      'Study jams are collaborative learning sessions that benefit students by enhancing their understanding of the material.',
    source: SOURCES.studyJams,
  },
}

export const TINKERSPACE = {
  place: 'Kochi',
  established: '2021',
  quote:
    'The first of its kind space where anyone can walk in, experience, and learn about future and exponential technologies.',
  // From the TinkerSpace FAQ ("Do we need to pay to use the space?") — paraphrased lightly.
  access: 'Free and open for anyone who wants to learn coding and new technologies.',
  facilities: ['VR Zone', 'Learning Space', 'GPU Station', 'Event Hall', 'Maker Station', '3D Printing'],
  recurring: [
    { name: 'AI Wednesdays', when: 'Every Wednesday, 6 PM to 8 PM' },
    { name: 'Maker Thursday' },
    { name: 'Gramasabha' },
    { name: 'Kutty Makers' },
  ],
  source: SOURCES.tinkerspace,
}

/** Official TinkerHub links (all checked). */
export const TINKERHUB_LINKS = {
  site: 'https://tinkerhub.org/',
  tinkerspace: 'https://tinkerhub.org/tinkerspace',
  events: 'https://tinkerhub.org/events',
  studyJams: 'https://tinkerhub.org/study-jam',
  campus: 'https://tinkerhub.org/campus',
  donate: 'https://tinkerhub.org/donate',
  volunteer: 'https://tinkerhub-foundation.notion.site/Volunteer-with-TinkerHub-198bd5ba1a8680358d99fe60055bc892',
  startCampus: 'https://airtable.com/appdFV7VvqOIlQ36v/shrKV8t5K5JgtfUOj',
  stories: 'https://medium.com/tinkerhub',
  appAndroid: 'https://play.google.com/store/apps/details?id=com.hoomans.tinkerhub&hl=en_IN',
  appIOS: 'https://apps.apple.com/in/app/the-hub-of-tinkerhub/id6478268842',
}
