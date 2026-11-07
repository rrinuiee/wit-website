import { TINKERHUB_EVENTS_URL } from '../../content/site'
import { formatEventDate } from '../../lib/events'
import { Ticket } from './Paper'
import Placeholder from './Placeholder'
import Status from './Status'

/** Ticket for a Verified dated event. Missing details are shown as missing, never guessed. */
export function EventTicket({ event, compact = false, label = 'Upcoming' }) {
  const d = formatEventDate(event.date)
  return (
    <Ticket
      as="article"
      className={`event-ticket ${compact ? 'event-ticket--compact' : ''}`}
      aria-label={`${event.title}, ${d.full}`}
      stub={
        <time dateTime={event.date} className="event-ticket__date">
          <span className="event-ticket__day">{d.day}</span>
          <span className="event-ticket__month">{d.month}</span>
          <span className="event-ticket__year">{d.year}</span>
        </time>
      }
    >
      <p className="event-ticket__label">
        <span className="pulse" aria-hidden="true" /> {label} · {d.weekday}
      </p>
      <h3 className="event-ticket__title">{event.title}</h3>
      <p className="event-ticket__missing">
        <span className="mono-label">Time · venue · register</span>
        <span>not confirmed yet</span>
      </p>
      <Status kind="verified" source={`${event.source}. ${event.missing}.`} />
      {!compact ? (
        <a className="link-arrow" href={TINKERHUB_EVENTS_URL} target="_blank" rel="noopener noreferrer">
          Check TinkerHub’s events page<span className="sr-only"> (opens in a new tab)</span>
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : null}
    </Ticket>
  )
}

/** Clearly marked empty ticket for when no verified upcoming event exists. */
export function EmptyTicket({ title = 'Next WIT event', hint = 'Date to be announced' }) {
  return (
    <Ticket
      className="event-ticket event-ticket--empty"
      stub={
        <span className="event-ticket__date" aria-hidden="true">
          <span className="event-ticket__day">??</span>
          <span className="event-ticket__month">tba</span>
        </span>
      }
    >
      <Placeholder label={title} hint={hint} section="events" suggestLabel="Suggest an event" variant="bare" />
    </Ticket>
  )
}
