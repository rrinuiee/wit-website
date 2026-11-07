import { useWorkshop } from '../../context/WorkshopContext'

/**
 * A visibly empty slot. Always looks unfinished, in both clean and review view,
 * so nothing reads as approved content. "Suggest" opens the feedback panel
 * pre-filled with this slot.
 */
export default function Placeholder({
  label,
  hint,
  section,
  cite,
  suggestLabel = 'Suggest this',
  variant = 'card',
  as: Tag = 'div',
  children,
  className = '',
}) {
  const { openFeedback } = useWorkshop()
  return (
    <Tag className={`placeholder placeholder--${variant} ${className}`}>
      <span className="placeholder__label">
        <span aria-hidden="true">◌</span> Placeholder · {label}
      </span>
      {hint ? <span className="placeholder__hint">{hint}</span> : null}
      {children}
      <span className="placeholder__foot">
        {cite ? <span className="placeholder__ref">{cite}</span> : null}
        {section ? (
          <button
            type="button"
            className="link-btn"
            onClick={() => openFeedback({ section, slot: label })}
          >
            {suggestLabel} <span aria-hidden="true">→</span>
          </button>
        ) : null}
      </span>
    </Tag>
  )
}
