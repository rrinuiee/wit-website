/** Parses a YYYY-MM-DD date as a local calendar day (no timezone shift). */
export function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

/** An event stays "upcoming" until the end of its day, in the visitor's time zone. */
export function isUpcoming(iso, now = new Date()) {
  const end = parseLocalDate(iso)
  end.setHours(23, 59, 59, 999)
  return end >= now
}

export function formatEventDate(iso) {
  const date = parseLocalDate(iso)
  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: date.toLocaleDateString('en-GB', { month: 'short' }),
    year: String(date.getFullYear()),
    weekday: date.toLocaleDateString('en-GB', { weekday: 'long' }),
    full: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

export function upcomingEvents(events, now = new Date()) {
  return events.filter((e) => isUpcoming(e.date, now)).sort((a, b) => a.date.localeCompare(b.date))
}
