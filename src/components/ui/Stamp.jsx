/**
 * The WIT rubber stamp — the single recurring motif (strategy §6.2).
 * Ink colour is the accent. Re-keying on `text` replays the stamp-in animation.
 */
export default function Stamp({ text, top = 'WIT · provisional', bottom = 'workshop draft', size = 'lg', className = '' }) {
  return (
    <span className={`stamp stamp--${size} ${className}`} aria-hidden="true">
      <span key={text} className="stamp__inner">
        <span className="stamp__small">{top}</span>
        <span className="stamp__text">{text}</span>
        <span className="stamp__small">★ {bottom} ★</span>
      </span>
    </span>
  )
}

/** SVG filter that roughens edges so stamps and tape read as ink and paper. Render once. */
export function InkFilters() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter id="ink-rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}
