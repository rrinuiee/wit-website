import { TINK_HER_HACK as T } from '../content/site'
import SectionHeader from '../components/ui/SectionHeader'
import Placeholder from '../components/ui/Placeholder'
import Status from '../components/ui/Status'
import { IndexCard, MarginNote, Tape } from '../components/ui/Paper'

export default function TinkHerHack() {
  const sources = `Strategy §3.4, citing: ${T.sources.join('; ')}. WIT to confirm before publishing.`
  return (
    <section id="tink-her-hack" className="section thh" aria-labelledby="thh-title">
      <div className="container">
        <SectionHeader log="03" kicker="Featured initiative" title="Tink-Her-Hack" id="thh-title" />

        <div className="thh__spread">
          <figure className="thh__photo reveal">
            <Tape pos="top-left" />
            <Tape pos="corner" tone="slate" />
            <div className="thh__photo-frame">
              <Placeholder
                label="Photo"
                hint="A consented, candid photo of Tink-Her-Hack in action — no stock images."
                cite="§8.3 · §8.9"
                section="tink-her-hack"
                suggestLabel="I have a photo"
                variant="bare"
              />
            </div>
            <figcaption className="thh__caption">photo needed · hands, laptops, late-night energy</figcaption>
          </figure>

          <article className="thh__log reveal" aria-label="Tink-Her-Hack facts">
            <p className="mono-label thh__entry">Log entry · {T.latest.name}</p>
            <p className="thh__lede">{T.description}</p>

            <dl className="thh__facts">
              <div>
                <dt>Editions</dt>
                <dd>{T.editions.join(' · ')}</dd>
              </div>
              <div>
                <dt>Latest edition</dt>
                <dd>{T.latest.dates}</dd>
              </div>
            </dl>

            <div className="thh__numbers">
              <p className="big-number">
                <span className="big-number__value">{T.latest.participants}</span>
                <span className="big-number__label">participants</span>
              </p>
              <p className="big-number">
                <span className="big-number__value">{T.latest.campuses}</span>
                <span className="big-number__label">campuses</span>
              </p>
            </div>

            <p className="thh__claim">
              Described publicly as <q>{T.latest.claim}</q>.
            </p>
            <Status kind="verified" source={sources} />

            <div className="thh__next">
              <Placeholder
                label="Next edition"
                hint="Date and registration link — not known yet."
                cite="§8.3"
                section="tink-her-hack"
                variant="inline"
              />
            </div>

            <MarginNote className="thh__note">open Q: live here, or link out to its own site? (§9 Q9)</MarginNote>
          </article>
        </div>

        <IndexCard className="thh__related reveal" tilt={-0.6}>
          <p className="mono-label">Also in the log</p>
          <p className="thh__related-name">{T.related.name}</p>
          <p>{T.related.line}</p>
          <Status kind="verified" source={T.related.source} />
        </IndexCard>
      </div>
    </section>
  )
}
