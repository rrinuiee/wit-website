import Doodle from './Doodle'

/**
 * A slowly scrolling ribbon of words — a nod to TinkerHub's marquee bands.
 * The text is repeated so the loop looks seamless; screen readers hear it once.
 * Stops moving for people who prefer reduced motion.
 */
export default function Marquee({ items, tone = 'lilac' }) {
  const row = (hidden) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          {item}
          <Doodle name="sparkle" className="marquee__star" />
        </li>
      ))}
    </ul>
  )
  return (
    // The wrapper clips the tilted band so it never causes sideways scrolling.
    <div className="marquee-wrap">
      <div className={`marquee marquee--${tone}`}>
        <div className="marquee__track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  )
}
