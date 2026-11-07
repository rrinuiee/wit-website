import { COMMUNITY_NUMBERS } from '../content/site'
import { useWorkshop } from '../context/WorkshopContext'
import SectionHeader from '../components/ui/SectionHeader'
import Status from '../components/ui/Status'
import { IndexCard, MarginNote, Tape } from '../components/ui/Paper'

function StoryCard() {
  const { openFeedback } = useWorkshop()
  return (
    <IndexCard as="figure" ruled tilt={-1} className="story reveal" aria-labelledby="story-label">
      <Tape pos="top" />
      <span className="story__marks" aria-hidden="true">
        “
      </span>
      <p id="story-label" className="placeholder__label">
        <span aria-hidden="true">◌</span> Placeholder · member story
      </p>
      <blockquote className="story__blank">
        <p>
          <span className="scribble" aria-hidden="true" />
          <span className="scribble scribble--short" aria-hidden="true" />
          <span className="sr-only">No story yet.</span>
        </p>
      </blockquote>
      <figcaption className="story__caption">
        A real WIT member’s words go here — only with their written consent. We won’t make one up.
      </figcaption>
      <div className="story__actions">
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => openFeedback({ section: 'community', slot: 'Member story nomination' })}
        >
          Nominate a story
        </button>
        <span className="placeholder__ref">§5.1 · §8.4</span>
      </div>
    </IndexCard>
  )
}

function Numbers() {
  return (
    <div className="numbers reveal" aria-labelledby="numbers-title">
      <div className="numbers__head">
        <h3 id="numbers-title" className="numbers__title">
          WIT in numbers
        </h3>
        <p className="numbers__note">
          Every value is blank on purpose. Tink-Her-Hack’s figures describe one event, so they aren’t reused here.
        </p>
        <Status kind="placeholder" source="Community size numbers, strategy §5.1 item 7 / §8.4" />
      </div>
      <ul className="numbers__grid">
        {COMMUNITY_NUMBERS.map((n) => (
          <li key={n.label} className="tally">
            <span className="tally__value" aria-hidden="true">
              ??
            </span>
            <span className="tally__label">{n.label}</span>
            <span className="tally__hint">
              <span className="sr-only">Placeholder: </span>
              {n.hint} — not supplied
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Community() {
  return (
    <section id="community" className="section community" aria-labelledby="community-title">
      <div className="container">
        <SectionHeader log="05" kicker="Community" title="The people make the notebook." id="community-title" />
        <div className="community__grid">
          <StoryCard />
          <Numbers />
        </div>
        <MarginNote arrow="up" className="community__note">
          these fill in once WIT shares real, publishable numbers
        </MarginNote>
      </div>
    </section>
  )
}
