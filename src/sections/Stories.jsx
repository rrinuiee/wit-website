import { STORIES } from '../content/wit'
import { TINKERHUB_LINKS } from '../content/tinkerhub'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import ExternalLink from '../components/ui/ExternalLink'
import Doodle, { Blob } from '../components/ui/Doodle'

export default function Stories() {
  return (
    <section id="stories" className="section stories" aria-labelledby="stories-title">
      <div className="container">
        <SectionHeading
          label="Stories & spotlights"
          id="stories-title"
          title={
            <>
              Stories from the <em>circle.</em>
            </>
          }
        >
          <p>
            These spotlights are <strong>illustrative personas</strong> — not real members or real quotes. Real stories
            will replace them once members share theirs (with consent).
          </p>
        </SectionHeading>

        <ul className="story-grid">
          {STORIES.map((s, i) => (
            <li key={s.persona} className={`story-card story-card--${s.tone} reveal`} style={{ '--delay': `${i * 90}ms` }}>
              <figure>
                <div className="story-card__avatar" aria-hidden="true">
                  <Blob variant={(i % 3) + 1} className="story-card__blob" />
                  <Doodle name={s.icon} className="story-card__icon" />
                </div>
                <blockquote className="story-card__quote">
                  <p>“{s.quote}”</p>
                </blockquote>
                <figcaption>
                  <strong>{s.persona}</strong>
                  <span>{s.role}</span>
                </figcaption>
              </figure>
              <ContentTag kind="demo" note="Fictional persona and quote for layout purposes." />
            </li>
          ))}
        </ul>

        <div className="real-stories reveal">
          <p>
            <strong>Want real stories?</strong> TinkerHub shares community stories — like its Maker of the Month series —
            on Medium.
          </p>
          <ExternalLink href={TINKERHUB_LINKS.stories} className="btn btn--ghost btn--sm">
            Read TinkerHub stories
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
