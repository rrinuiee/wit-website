import { ABOUT_WIT } from '../content/wit'
import { TINKERHUB, TINKERHUB_LINKS } from '../content/tinkerhub'
import { SOURCES } from '../content/sources'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import ExternalLink from '../components/ui/ExternalLink'
import Doodle from '../components/ui/Doodle'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          label="About WIT"
          id="about-title"
          title={
            <>
              A community, <em>not a classroom.</em>
            </>
          }
        />

        <div className="about__grid">
          <div className="about__story reveal">
            {ABOUT_WIT.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="about__para">
                {p}
              </p>
            ))}
            <ContentTag kind="demo" note="Illustrative copy — WIT’s real story and values still need to be written by the team." />

            <ul className="about__values" aria-label="What we value (demo)">
              {ABOUT_WIT.values.map((v, i) => (
                <li key={v} className={`value value--${i + 1}`}>
                  <Doodle name="heart" />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <aside className="family-card reveal" aria-labelledby="family-title">
            <p className="family-card__label">
              <Doodle name="sparkle" /> Part of the TinkerHub family
            </p>
            <h3 id="family-title" className="family-card__title">
              WIT belongs to a much bigger community of makers.
            </h3>

            <blockquote className="family-card__quote">
              <p>“{TINKERHUB.description.quote}”</p>
            </blockquote>
            <ContentTag kind="verified" source={SOURCES.home} />

            <div className="family-card__mission">
              <p className="family-card__mini">TinkerHub’s mission</p>
              <p>“{TINKERHUB.mission.quote}”</p>
              <ContentTag kind="verified" source={SOURCES.home} note="TinkerHub’s mission, not a WIT target." />
            </div>

            <p className="family-card__mini">How TinkerHub brings its vision to life</p>
            <ol className="action-plan">
              {TINKERHUB.actionPlan.map((item, i) => (
                <li key={item.title}>
                  <span className="action-plan__no" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <strong>{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ol>
            <ContentTag kind="verified" source={SOURCES.home} note="TinkerHub’s “Action plan”." />

            <ExternalLink href={TINKERHUB_LINKS.site} className="btn btn--ghost btn--sm family-card__btn">
              Visit tinkerhub.org
            </ExternalLink>
          </aside>
        </div>
      </div>
    </section>
  )
}
