import { ABOUT, TINKERHUB_URL } from '../content/site'
import SectionHeader from '../components/ui/SectionHeader'
import Placeholder from '../components/ui/Placeholder'
import Status from '../components/ui/Status'
import { IndexCard, MarginNote, Tape } from '../components/ui/Paper'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader log="01" kicker="About WIT" title="A notebook we’re writing together." id="about-title" />

        <div className="about__grid">
          <div className="about__known reveal">
            <p className="mono-label">What we can already say</p>
            <blockquote className="about__quote">
              <p>{ABOUT.verifiedLine}</p>
            </blockquote>
            <Status kind="verified" source={ABOUT.verifiedSource} />

            <IndexCard className="about__family" tilt={-0.8}>
              <Tape pos="top-left" tone="slate" />
              <p className="mono-label">How WIT fits</p>
              <p>
                WIT belongs to the TinkerHub Foundation family and shares its maker spirit.{' '}
                <a href={TINKERHUB_URL} target="_blank" rel="noopener noreferrer">
                  Visit tinkerhub.org<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <Status
                kind="recommended"
                source="Family framing from strategy §3.1 / §5.2; governance details (e.g. Campus Council relationship) are a Placeholder (§8.2)"
              />
            </IndexCard>

            <MarginNote arrow="left" className="about__note">
              casing still open: “WIT” or “WiT”? (§9 Q8)
            </MarginNote>
          </div>

          <div className="about__slots reveal">
            <Placeholder
              label="Who we are"
              hint="Two sentences, verb-first. Who WIT is and who it’s for."
              cite="§5.1 · §8.2"
              section="about"
              className="about__slot about__slot--lg"
            />
            <Placeholder
              label="Our story"
              hint="Origin and today, under 200 words. When and how did WIT start?"
              cite="§5.2 · §8.2"
              section="about"
              className="about__slot"
            />
            <Placeholder
              label="What we believe"
              hint="Three to four short pillars."
              cite="§5.2 · §8.2"
              section="about"
              className="about__slot"
            >
              <span className="pillar-ghosts" aria-hidden="true">
                <span>i.</span>
                <span>ii.</span>
                <span>iii.</span>
                <span>iv.</span>
              </span>
            </Placeholder>
          </div>
        </div>
      </div>
    </section>
  )
}
