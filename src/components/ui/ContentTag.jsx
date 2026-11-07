import { useWorkshop } from '../../context/WorkshopContext'

const KINDS = {
  verified: { label: 'Verified', icon: '✓' },
  demo: { label: 'Demo content', icon: '✦' },
  confirm: { label: 'Needs confirmation', icon: '?' },
}

/**
 * A small label that says where a piece of content comes from.
 * The chip is always visible. Its note and source link appear when
 * "Show sources & notes" is switched on.
 *
 * Usage: <ContentTag kind="verified" source={SOURCES.home} note="..." />
 */
export default function ContentTag({ kind, source, note, className = '' }) {
  const { showSources } = useWorkshop()
  const meta = KINDS[kind]
  if (!meta) return null

  return (
    <span className={`tag tag--${kind} ${className}`}>
      <span className="tag__chip">
        <span aria-hidden="true">{meta.icon}</span> {meta.label}
      </span>
      {showSources && (note || source) ? (
        <span className="tag__detail">
          {note}
          {note && source ? ' ' : null}
          {source ? (
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              Source: {source.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </span>
      ) : null}
    </span>
  )
}
