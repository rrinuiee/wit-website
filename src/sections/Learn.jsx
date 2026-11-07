import { WIT_SESSIONS } from '../content/wit'
import { TINKERHUB, TINKERSPACE, TINKERHUB_LINKS } from '../content/tinkerhub'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import ExternalLink from '../components/ui/ExternalLink'
import Tabs from '../components/ui/Tabs'
import Doodle from '../components/ui/Doodle'

function WitSessions() {
  return (
    <>
      <p className="panel-note">
        <ContentTag kind="demo" /> Example formats to show how WIT’s own sessions could be listed.
      </p>
      <ul className="session-grid">
        {WIT_SESSIONS.map((s, i) => (
          <li key={s.title} className={`session-card session-card--${(i % 4) + 1}`}>
            <p className="session-card__meta">{s.meta}</p>
            <h3 className="session-card__title">{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

function AcrossTinkerHub() {
  return (
    <>
      <p className="panel-note">
        <ContentTag kind="verified" /> Open activities across TinkerHub — these are not WIT-specific.
      </p>
      <div className="th-grid">
        <article className="th-card th-card--jams">
          <h3 className="th-card__title">Study Jams</h3>
          <p className="th-card__quote">“{TINKERHUB.studyJams.quote}”</p>
          <ContentTag kind="verified" source={TINKERHUB.studyJams.source} />
          <ExternalLink href={TINKERHUB_LINKS.studyJams} className="text-link">
            Browse study jams
          </ExternalLink>
        </article>

        <article className="th-card th-card--space">
          <p className="th-card__eyebrow">
            <Doodle name="pin" /> {TINKERSPACE.place} · est. {TINKERSPACE.established}
          </p>
          <h3 className="th-card__title">TinkerSpace</h3>
          <p className="th-card__quote">“{TINKERSPACE.quote}”</p>
          <p>{TINKERSPACE.access}</p>
          <ul className="chip-list" aria-label="TinkerSpace facilities">
            {TINKERSPACE.facilities.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <ContentTag kind="verified" source={TINKERSPACE.source} note="Access line paraphrased from the TinkerSpace FAQ." />
          <ExternalLink href={TINKERHUB_LINKS.tinkerspace} className="text-link">
            Visit TinkerSpace
          </ExternalLink>
        </article>

        <article className="th-card th-card--recurring">
          <h3 className="th-card__title">Recurring at TinkerSpace</h3>
          <ul className="recurring-list">
            {TINKERSPACE.recurring.map((r) => (
              <li key={r.name}>
                <strong>{r.name}</strong>
                {r.when ? <span>{r.when}</span> : null}
              </li>
            ))}
          </ul>
          <ContentTag kind="verified" source={TINKERSPACE.source} />
        </article>
      </div>
    </>
  )
}

export default function Learn() {
  return (
    <section id="learn" className="section learn" aria-labelledby="learn-title">
      <div className="container">
        <SectionHeading
          label="Learn with us"
          id="learn-title"
          title={
            <>
              Learning that feels like <em>hanging out.</em>
            </>
          }
        >
          <p>Workshops, study circles and build nights — plus everything that’s already happening across TinkerHub.</p>
        </SectionHeading>

        <div className="reveal">
          <Tabs
            label="Ways to learn"
            tabs={[
              { id: 'wit', label: 'WIT sessions', content: <WitSessions /> },
              { id: 'tinkerhub', label: 'Across TinkerHub', content: <AcrossTinkerHub /> },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
