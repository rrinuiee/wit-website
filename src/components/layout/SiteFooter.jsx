import { TINKERHUB_URL } from '../../content/site'
import Placeholder from '../ui/Placeholder'
import Status from '../ui/Status'

const SOCIALS = ['Instagram', 'LinkedIn', 'YouTube', 'Discord / Slack', 'WhatsApp']

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__mark" aria-hidden="true">
            WIT
          </p>
          <p className="site-footer__credit">
            crafted with the WIT community <span aria-hidden="true">♥</span>
          </p>
          <Status kind="recommended" source="Credit-line convention, strategy §5.8 / §6.1" />
          <p className="site-footer__parent">
            Part of the TinkerHub family →{' '}
            <a href={TINKERHUB_URL} target="_blank" rel="noopener noreferrer">
              tinkerhub.org<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>

        <div className="site-footer__socials">
          <p className="mono-label">Find WIT</p>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s}>
                <span className="social-slot">
                  {s} <span className="social-slot__tbd">handle tbd</span>
                </span>
              </li>
            ))}
          </ul>
          <Status kind="placeholder" source="Social handles, strategy §8.7" />
        </div>

        <Placeholder
          label="Newsletter"
          hint="Is there an existing WIT newsletter? Signup URL needed (§8.7)."
          section="partners"
          className="site-footer__news"
        />
      </div>

      <div className="container site-footer__base">
        <p>
          Workshop prototype · draft 0.1 · not an official TinkerHub Foundation or WIT website. Content marked
          Placeholder has not been supplied yet; Verified items come from the WIT website strategy and still need WIT’s
          confirmation.
        </p>
      </div>
    </footer>
  )
}
