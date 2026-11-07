/** A link that opens in a new tab, with the safety attributes and a screen-reader hint. */
export default function ExternalLink({ href, children, className = '', arrow = true }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      {arrow ? <span aria-hidden="true"> ↗</span> : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
