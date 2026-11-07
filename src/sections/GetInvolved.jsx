import { GET_INVOLVED } from '../content/site'
import { useWorkshop } from '../context/WorkshopContext'
import SectionHeader from '../components/ui/SectionHeader'
import Status from '../components/ui/Status'
import { Ticket } from '../components/ui/Paper'

export default function GetInvolved() {
  const { openFeedback } = useWorkshop()
  return (
    <section id="get-involved" className="section involved" aria-labelledby="involved-title">
      <div className="container">
        <SectionHeader log="06" kicker="Get involved" title={<>Be kind. <em>Get involved.</em></>} id="involved-title">
          <p>Three ways in. The actual sign-up links haven’t been decided, so for now each one asks how it should work.</p>
          <Status
            kind="recommended"
            source="“BE KIND. GET INVOLVED” panel pattern from TinkerHub (strategy §5.1, §6.1); destinations are Placeholders (§5.7)"
          />
        </SectionHeader>

        <ul className="involved__grid">
          {GET_INVOLVED.map((c, i) => (
            <li key={c.id} className="reveal" style={{ '--delay': `${i * 80}ms` }}>
              <Ticket
                as="article"
                className="involve-ticket"
                aria-labelledby={`inv-${c.id}`}
                stub={
                  <span className="involve-ticket__no" aria-hidden="true">
                    {c.no}
                  </span>
                }
              >
                <p className="mono-label">For: {c.who}</p>
                <h3 id={`inv-${c.id}`} className="involve-ticket__title">
                  {c.title}
                </h3>
                <p className="involve-ticket__dest">
                  <span className="placeholder__label">
                    <span aria-hidden="true">◌</span> Link not set
                  </span>
                  <span>{c.goesTo}</span>
                </p>
                <button
                  type="button"
                  className="btn btn--ink btn--sm"
                  onClick={() => openFeedback({ section: 'get-involved', slot: `${c.title} — how should it work?` })}
                >
                  Tell us how this should work
                </button>
              </Ticket>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
