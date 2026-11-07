import { formatEventDate } from '../../lib/events'
import ContentTag from './ContentTag'
import Doodle from './Doodle'
import ExternalLink from './ExternalLink'

/** One event. Verified events show a real date; demo events show a sample day only. */
export default function EventCard({ event }) {
  const d = event.date ? formatEventDate(event.date) : null
  const isDemo = event.status === 'demo'

  return (
    <article className={`event-card ${isDemo ? 'event-card--demo' : ''}`}>
      <div className="event-card__date" aria-hidden={d ? undefined : 'true'}>
        {d ? (
          <time dateTime={event.date}>
            <span className="event-card__day">{d.day}</span>
            <span className="event-card__month">{d.month}</span>
          </time>
        ) : (
          <Doodle name="calendar" className="event-card__cal" />
        )}
      </div>

      <div className="event-card__body">
        <p className="event-card__format">{event.format}</p>
        <h3 className="event-card__title">{event.title}</h3>
        <ul className="event-card__meta">
          <li>
            <Doodle name="calendar" />
            {d ? `${d.weekday}${event.time ? ` · ${event.time}` : ''}` : event.when}
          </li>
          {event.venue ? (
            <li>
              <Doodle name="pin" />
              {event.venue}
            </li>
          ) : null}
        </ul>
        {/* `quoted: true` means the text is copied word-for-word from the source page */}
        <p className="event-card__desc">{event.quoted ? <q>{event.description}</q> : event.description}</p>
        {event.organiser ? <p className="event-card__org">{event.organiser}</p> : null}
        <div className="event-card__foot">
          <ContentTag kind={event.status} source={event.source} note={event.note} />
          {event.link ? (
            <ExternalLink href={event.link} className="text-link">
              Details on TinkerHub
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  )
}
