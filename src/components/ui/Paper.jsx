/** Washi tape strip. `pos` = 'top' | 'top-left' | 'top-right' | 'corner'. */
export function Tape({ pos = 'top', tone = 'accent', className = '' }) {
  return <span className={`tape tape--${pos} tape--${tone} ${className}`} aria-hidden="true" />
}

/** Handwritten-style margin annotation with a little drawn arrow. */
export function MarginNote({ children, arrow = 'left', className = '' }) {
  return (
    <p className={`margin-note margin-note--${arrow} ${className}`}>
      <svg className="margin-note__arrow" viewBox="0 0 48 24" aria-hidden="true" focusable="false">
        <path d="M46 6 C 32 2, 16 4, 6 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5 8 L 6 17 L 14 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </p>
  )
}

/** Index card. `ruled` adds faint notebook lines; `tilt` = -2..2. */
export function IndexCard({ as: Tag = 'div', ruled = false, tilt = 0, className = '', children, ...rest }) {
  return (
    <Tag
      className={`index-card ${ruled ? 'index-card--ruled' : ''} ${className}`}
      style={{ '--tilt': `${tilt}deg` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Ticket stub with notches and a perforated stub column. */
export function Ticket({ as: Tag = 'div', stub, className = '', children, ...rest }) {
  return (
    <Tag className={`ticket ${className}`} {...rest}>
      {/* The mask (notches) lives on the inner layer so the outer drop-shadow survives. */}
      <div className="ticket__paper">
        <div className="ticket__body">{children}</div>
        <div className="ticket__stub">{stub}</div>
      </div>
    </Tag>
  )
}
