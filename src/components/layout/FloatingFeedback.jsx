import { useWorkshop } from '../../context/WorkshopContext'

/** Round "Feedback" button that stays in the bottom-right corner. */
export default function FloatingFeedback() {
  const { openFeedback } = useWorkshop()
  return (
    <button type="button" className="fab" onClick={() => openFeedback()}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M4 5h16v11H9l-5 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span>Feedback</span>
    </button>
  )
}
