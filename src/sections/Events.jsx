import { EVENTS } from '../content/site'
import { upcomingEvents } from '../lib/events'
import SectionHeader from '../components/ui/SectionHeader'
import Status from '../components/ui/Status'
import { EmptyTicket, EventTicket } from '../components/ui/EventTicket'

const MAX = 3

export default function Events() {
  const upcoming = upcomingEvents(EVENTS).slice(0, MAX)

  return (
    <section id="events" className="section events" aria-labelledby="events-title">
      <div className="container">
        <SectionHeader log="04" kicker="Upcoming events" title="What’s on." id="events-title">
          <p>
            Only events with a verified date that hasn’t passed appear here. Everything else is marked as still to come.
          </p>
          <Status
            kind="recommended"
            source="WiT Leadership Summit (Nov 18–19) is left out on purpose: its year is only “as reported” in strategy §3.4"
          />
        </SectionHeader>

        <div className="events__list">
          {upcoming.map((e) => (
            <div key={e.id} className="reveal">
              <EventTicket event={e} />
            </div>
          ))}
          <div className="reveal">
            <EmptyTicket
              title={upcoming.length ? 'More WIT events' : 'Next WIT event'}
              hint={
                upcoming.length
                  ? 'Workshops, meetups, info sessions — dates not supplied yet.'
                  : 'No verified upcoming date right now. To be announced.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
