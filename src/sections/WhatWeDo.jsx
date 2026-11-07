import { WHAT_WE_DO } from '../content/site'
import { useWorkshop } from '../context/WorkshopContext'
import SectionHeader from '../components/ui/SectionHeader'
import Status from '../components/ui/Status'
import { Tape } from '../components/ui/Paper'

const TILTS = [-1.6, 1.1, -0.7, 1.5]

export default function WhatWeDo() {
  const { openFeedback } = useWorkshop()
  return (
    <section id="what-we-do" className="section what" aria-labelledby="what-title">
      <div className="container">
        <SectionHeader log="02" kicker="What we do" title="Four verbs, pinned to the board." id="what-title">
          <p>
            The labels follow TinkerHub’s numbered action-plan pattern. What each one means for WIT is still blank.
          </p>
          <Status kind="recommended" source="Strip labels suggested in strategy §5.1; one-liners are Placeholders" />
        </SectionHeader>
      </div>

      <div className="what__rail" role="list">
        {WHAT_WE_DO.map((item, i) => (
          <article
            key={item.n}
            role="listitem"
            className="what-card reveal"
            style={{ '--tilt': `${TILTS[i]}deg`, '--delay': `${i * 70}ms` }}
            aria-labelledby={`what-${item.n}`}
          >
            <Tape pos={i % 2 ? 'top-right' : 'top-left'} tone={i % 2 ? 'slate' : 'accent'} />
            <span className="what-card__no" aria-hidden="true">
              {item.n}
            </span>
            <h3 id={`what-${item.n}`} className="what-card__title">
              {item.title}
            </h3>
            <p className="what-card__blank">
              <span className="placeholder__label">
                <span aria-hidden="true">◌</span> Placeholder · one-liner
              </span>
              <span className="what-card__prompt">{item.prompt}</span>
            </p>
            <button
              type="button"
              className="link-btn what-card__suggest"
              onClick={() => openFeedback({ section: 'what-we-do', slot: `${item.n} ${item.title} one-liner` })}
            >
              Write this line <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>
      <p className="what__swipe mono-label" aria-hidden="true">
        swipe →
      </p>
    </section>
  )
}
