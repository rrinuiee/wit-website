import { NAV } from '../../content/wit'
import { CHECKED_ON, REPO } from '../../content/sources'
import { TINKERHUB_LINKS } from '../../content/tinkerhub'
import { useWorkshop } from '../../context/WorkshopContext'
import ExternalLink from '../ui/ExternalLink'
import ContentTag from '../ui/ContentTag'
import Logo from './Logo'

const TINKERHUB_FOOTER_LINKS = [
  { label: 'TinkerHub', href: TINKERHUB_LINKS.site },
  { label: 'TinkerSpace', href: TINKERHUB_LINKS.tinkerspace },
  { label: 'Events', href: TINKERHUB_LINKS.events },
  { label: 'Study Jams', href: TINKERHUB_LINKS.studyJams },
  { label: 'Campus communities', href: TINKERHUB_LINKS.campus },
  { label: 'Community stories (Medium)', href: TINKERHUB_LINKS.stories },
]

export default function SiteFooter() {
  const { showSources, setShowSources } = useWorkshop()
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo size="lg" light />
          <p className="site-footer__tagline">
            Learn together. Build boldly. <em>Lift each other.</em>
          </p>
          <ContentTag kind="demo" note="Tagline written for this prototype." />
        </div>

        <nav aria-label="This page" className="site-footer__col">
          <h2 className="site-footer__heading">On this page</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#get-involved">Get involved</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="TinkerHub" className="site-footer__col">
          <h2 className="site-footer__heading">TinkerHub ecosystem</h2>
          <ul>
            {TINKERHUB_FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <ExternalLink href={l.href}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">WIT socials</h2>
          <p className="site-footer__muted">Official WIT social handles haven’t been confirmed yet, so none are linked.</p>
          <ContentTag kind="confirm" note="Instagram, LinkedIn, community chat links needed." />
          <h2 className="site-footer__heading site-footer__heading--spaced">This project</h2>
          <ul>
            <li>
              <ExternalLink href={REPO.url}>Code on GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href={REPO.issues}>Report an issue</ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__base">
        <p>
          Community prototype for Women in Tech (WIT), a community under TinkerHub Foundation. Not an official or approved
          website. Verified facts were checked on official TinkerHub pages on {CHECKED_ON}; demo content is illustrative
          only.
        </p>
        <button
          type="button"
          className="text-btn text-btn--light"
          aria-pressed={showSources}
          onClick={() => setShowSources(!showSources)}
        >
          {showSources ? 'Hide sources & notes' : 'Show sources & notes'}
        </button>
      </div>
    </footer>
  )
}
