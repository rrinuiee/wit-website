import { CONTRIBUTE } from '../content/wit'
import { REPO } from '../content/sources'
import { useWorkshop } from '../context/WorkshopContext'
import SectionHeading from '../components/ui/SectionHeading'
import ExternalLink from '../components/ui/ExternalLink'
import CopyButton from '../components/ui/CopyButton'
import SloganPoll from '../components/ui/SloganPoll'
import Doodle from '../components/ui/Doodle'

export default function Contribute() {
  const { openFeedback } = useWorkshop()
  return (
    <section id="contribute" className="section contribute" aria-labelledby="contribute-title">
      <div className="container">
        <SectionHeading
          label="Open source · beginners welcome"
          id="contribute-title"
          title={
            <>
              Help build <em>this website.</em>
            </>
          }
        >
          <p>
            This site is an open-source learning project. Spot a bug, suggest a design idea, fix a sentence — every
            contribution counts, and nobody expects you to be an expert.
          </p>
        </SectionHeading>

        <ol className="steps reveal">
          {CONTRIBUTE.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__no" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="contribute__grid">
          <div className="contribute__main">
            <div className="code-box reveal">
              <p className="code-box__label">
                <Doodle name="github" /> Get the code
              </p>
              <div className="code-box__row">
                <code>{REPO.cloneCommand}</code>
                <CopyButton text={REPO.cloneCommand} />
              </div>
              <p className="code-box__hint">
                Then run <code>npm install</code> and <code>npm run dev</code>. The step-by-step guide is in the{' '}
                <code>CONTRIBUTING.md</code> file inside the project.
              </p>
              <div className="code-box__actions">
                <ExternalLink href={REPO.url} className="btn btn--primary btn--sm">
                  View on GitHub
                </ExternalLink>
                <ExternalLink href={REPO.newIssue} className="btn btn--ghost btn--sm">
                  Open an issue
                </ExternalLink>
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => openFeedback({ section: 'contribute' })}>
                  Leave quick feedback
                </button>
              </div>
            </div>

            <div className="first-issues reveal">
              <h3 className="first-issues__title">Good first contributions</h3>
              <ul>
                {CONTRIBUTE.firstIssues.map((it) => (
                  <li key={it.text}>
                    <span className="first-issues__label">{it.label}</span>
                    {it.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="faq reveal">
              <h3 className="faq__title">Questions beginners ask</h3>
              {CONTRIBUTE.faq.map((item) => (
                <details key={item.q} className="faq__item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="contribute__side reveal">
            <SloganPoll />
          </aside>
        </div>
      </div>
    </section>
  )
}
