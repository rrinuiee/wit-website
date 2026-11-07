import { useWorkshop } from '../../context/WorkshopContext'

/** Thin bar at the very top: explains that this is a prototype and toggles source notes. */
export default function AnnouncementBar() {
  const { showSources, setShowSources } = useWorkshop()
  return (
    <aside className="announce" aria-label="About this prototype">
      <div className="container announce__inner">
        <p>
          <span className="announce__pill">Prototype</span>
          A community-built demo — <strong>not an official TinkerHub or WIT website</strong>. Cards are labelled{' '}
          <span className="announce__key announce__key--verified">Verified</span>,{' '}
          <span className="announce__key announce__key--demo">Demo</span> or{' '}
          <span className="announce__key announce__key--confirm">Needs confirmation</span>.
        </p>
        <button
          type="button"
          className="announce__toggle"
          role="switch"
          aria-checked={showSources}
          onClick={() => setShowSources(!showSources)}
        >
          <span className="switch" aria-hidden="true">
            <span className="switch__knob" />
          </span>
          Show sources &amp; notes
        </button>
      </div>
    </aside>
  )
}
