/**
 * Official pages used as sources for "Verified" content.
 * Every verified fact on the site links back to one of these.
 * If you update a fact, re-check the page and update CHECKED_ON.
 */
export const CHECKED_ON = '8 November 2026'

export const SOURCES = {
  home: { label: 'tinkerhub.org', url: 'https://tinkerhub.org/' },
  tinkerspace: { label: 'tinkerhub.org/tinkerspace', url: 'https://tinkerhub.org/tinkerspace' },
  events: { label: 'tinkerhub.org/events', url: 'https://tinkerhub.org/events' },
  studyJams: { label: 'tinkerhub.org/study-jam', url: 'https://tinkerhub.org/study-jam' },
  campus: { label: 'tinkerhub.org/campus', url: 'https://tinkerhub.org/campus' },
  donate: { label: 'tinkerhub.org/donate', url: 'https://tinkerhub.org/donate' },
  buildHer: { label: 'TinkerHub event page', url: 'https://tinkerhub.org/events/IYBV4KF4AP/build-her' },
}

/** This project's own GitHub repository (for the contribution section). */
export const REPO = {
  url: 'https://github.com/rrinuiee/wit-website',
  issues: 'https://github.com/rrinuiee/wit-website/issues',
  newIssue: 'https://github.com/rrinuiee/wit-website/issues/new',
  cloneCommand: 'git clone https://github.com/rrinuiee/wit-website.git',
}
