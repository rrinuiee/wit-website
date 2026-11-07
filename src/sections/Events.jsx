import { UPCOMING_EVENTS, PAST_EVENTS } from '../content/events'
import { TINKERHUB_LINKS } from '../content/tinkerhub'
import { isUpcoming } from '../lib/events'
import SectionHeading from '../components/ui/SectionHeading'
import EventCard from '../components/ui/EventCard'
import ExternalLink from '../components/ui/ExternalLink'
import Tabs from '../components/ui/Tabs'

function EventList({ events }) {
  return (
    <ul className="event-list">
      {events.map((e) => (
        <li key={e.id}>
          <EventCard event={e} />
        </li>
      ))}
    </ul>
  )
}

export default function Events() {
  // Verified events with a date disappear after their day; demo events always show.
  const upcoming = UPCOMING_EVENTS.filter((e) => !e.date || isUpcoming(e.date))

  return (
    <section id="events" className="section events" aria-labelledby="events-title">
      <div className="container">
        <SectionHeading
          label="Events"
          id="events-title"
          title={
            <>
              What’s <em>on.</em>
            </>
          }
        >
          <p>Verified events link to TinkerHub’s official listing. Demo events show how WIT’s own calendar could look.</p>
        </SectionHeading>

        <div className="reveal">
          <Tabs
            label="Events"
            tabs={[
              { id: 'upcoming', label: 'Upcoming', content: <EventList events={upcoming} /> },
              { id: 'past', label: 'Past', content: <EventList events={PAST_EVENTS} /> },
            ]}
          />
        </div>

        <p className="events__more">
          <ExternalLink href={TINKERHUB_LINKS.events} className="btn btn--ghost">
            Browse every TinkerHub event
          </ExternalLink>
        </p>
      </div>
    </section>
  )
}
