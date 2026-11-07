import { STATUS } from '../../content/site'

/**
 * Review-mode chip. Hidden in the clean view, shown when Review mode is on.
 * `source` explains where a Verified claim comes from or why something is
 * Recommended / Placeholder.
 */
export default function Status({ kind, source, className = '' }) {
  const meta = STATUS[kind]
  if (!meta) return null
  return (
    <span className={`status status--${kind} ${className}`}>
      <span className="status__chip">
        <span className="status__dot" aria-hidden="true" />
        {meta.label}
      </span>
      {source ? <span className="status__source">{source}</span> : null}
    </span>
  )
}
