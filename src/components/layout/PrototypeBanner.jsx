import { useWorkshop } from '../../context/WorkshopContext'

export default function PrototypeBanner() {
  const { reviewMode, setReviewMode } = useWorkshop()
  return (
    <aside className="proto-banner" aria-label="Prototype notice">
      <div className="proto-banner__inner">
        <span className="proto-banner__tag">Workshop prototype</span>
        <p className="proto-banner__text">
          A community draft for a WIT workshop — <strong>not an official or approved TinkerHub / WIT website</strong>.
          Dashed cards are placeholders waiting for real content.
        </p>
        <button
          type="button"
          className="proto-banner__btn"
          aria-pressed={reviewMode}
          onClick={() => setReviewMode(!reviewMode)}
        >
          {reviewMode ? 'Hide source labels' : 'Show source labels'}
        </button>
      </div>
    </aside>
  )
}
