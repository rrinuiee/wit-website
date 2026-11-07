import Doodle from '../ui/Doodle'

/**
 * Typographic stand-in for a WIT logo (no official logo has been supplied).
 * `size="lg"` is used in the footer.
 */
export default function Logo({ size = 'md', light = false }) {
  return (
    <span className={`logo logo--${size} ${light ? 'logo--light' : ''}`}>
      <span className="logo__mark" aria-hidden="true">
        wit
        <Doodle name="sparkle" className="logo__spark" />
      </span>
      <span className="logo__text">
        <span className="logo__name">Women in Tech</span>
        <span className="logo__sub">a TinkerHub community</span>
      </span>
    </span>
  )
}
