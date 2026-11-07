import { PARTNER_SLOTS } from '../content/site'
import { useWorkshop } from '../context/WorkshopContext'
import Status from '../components/ui/Status'
import { Tape } from '../components/ui/Paper'

export default function Partners() {
  const { openFeedback } = useWorkshop()
  return (
    <section id="partners" className="section partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="partners__head reveal">
          <p className="section-header__kicker">
            <span className="section-header__log">LOG 07</span>
            <span aria-hidden="true" className="section-header__rule" />
            <span>Partners</span>
          </p>
          <h2 id="partners-title" className="partners__title">
            Who we build with
          </h2>
          <p className="partners__note">
            No partner list has been supplied, so no logos are shown. Each slot needs a logo, a category
            (funding / institutional / community) and permission to display.
          </p>
          <Status kind="placeholder" source="Partners, strategy §8.6" />
        </div>
        <ul className="partners__strip reveal" aria-label="Empty partner logo slots">
          {Array.from({ length: PARTNER_SLOTS }).map((_, i) => (
            <li key={i} className="logo-slot" style={{ '--tilt': `${(i % 2 ? 1 : -1) * (0.6 + (i % 3) * 0.4)}deg` }}>
              <Tape pos="top" tone={i % 2 ? 'slate' : 'accent'} />
              <span>partner logo</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="link-btn partners__suggest"
          onClick={() => openFeedback({ section: 'partners', slot: 'Partner suggestion' })}
        >
          Know a partner WIT works with? Note it <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}
