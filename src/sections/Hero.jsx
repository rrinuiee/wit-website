import { useState } from 'react'
import { EVENTS, HERO, SLOGANS } from '../content/site'
import { useWorkshop } from '../context/WorkshopContext'
import { upcomingEvents } from '../lib/events'
import { submitFeedback } from '../lib/feedback'
import { IS_SHARED_FEEDBACK } from '../config/feedback'
import Stamp from '../components/ui/Stamp'
import Status from '../components/ui/Status'
import { IndexCard, MarginNote, Tape } from '../components/ui/Paper'
import { EmptyTicket, EventTicket } from '../components/ui/EventTicket'

function SloganPicker() {
  const { slogan, setSlogan, myVote, setMyVote } = useWorkshop()
  const [status, setStatus] = useState('')
  const current = SLOGANS.find((s) => s.id === slogan) ?? SLOGANS[0]
  const voted = SLOGANS.find((s) => s.id === myVote)

  const vote = async () => {
    setMyVote(current.id)
    setStatus('Saving…')
    const res = await submitFeedback({ kind: 'slogan-vote', section: 'slogan', slot: 'Slogan vote', message: current.id })
    setStatus(
      res.delivered
        ? `Vote for “${current.text}” sent to the shared form.`
        : res.error
          ? `Vote saved on this device. ${res.error}`
          : `Vote for “${current.text}” saved on this device only — no shared tally yet.`,
    )
  }

  return (
    <IndexCard as="section" ruled tilt={1.2} className="slogan-card" aria-labelledby="slogan-title">
      <Tape pos="top" />
      <h2 id="slogan-title" className="slogan-card__title">
        Stamp our slogan
      </h2>
      <p className="slogan-card__note">
        Provisional candidates from the strategy. None is approved — help pick one.
      </p>
      <Status kind="placeholder" source="Slogan shortlist, strategy §6.2: “pick in workshop”" />

      <fieldset className="slogan-card__options">
        <legend className="sr-only">Preview a slogan on the stamp</legend>
        {SLOGANS.map((s) => (
          <label key={s.id} className="slogan-opt">
            <input type="radio" name="slogan" value={s.id} checked={slogan === s.id} onChange={() => setSlogan(s.id)} />
            <span className="slogan-opt__text">{s.text}</span>
            {myVote === s.id ? <span className="slogan-opt__badge">your vote</span> : null}
          </label>
        ))}
      </fieldset>

      <button type="button" className="btn btn--ink btn--block" onClick={vote}>
        {voted && voted.id === current.id ? `You voted “${current.text}”` : `Vote for “${current.text}”`}
      </button>
      <p className="slogan-card__status" role="status" aria-live="polite">
        {status ||
          (IS_SHARED_FEEDBACK
            ? 'Votes go to the shared workshop form.'
            : 'Votes stay on this device until a shared form is connected.')}
      </p>
    </IndexCard>
  )
}

export default function Hero() {
  const { slogan } = useWorkshop()
  const current = SLOGANS.find((s) => s.id === slogan) ?? SLOGANS[0]
  const next = upcomingEvents(EVENTS)[0]

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__kicker mono-label">{HERO.kicker}</p>

          <div className="hero__mark">
            <h1 id="hero-title" className="wordmark">
              <span className="wordmark__letters" aria-hidden="true">
                <span>W</span>
                <span className="wordmark__i">I</span>
                <span>T</span>
              </span>
              <span className="sr-only">WIT — Women in Tech</span>
            </h1>
            <Stamp text={current.text} className="hero__stamp" />
            <div className="wordmark__ruler" aria-hidden="true" />
          </div>

          <p className="hero__name">
            <strong>{HERO.fullName}</strong> <span>— {HERO.parent}</span>
          </p>
          <Status kind="placeholder" source="Wordmark is a type stand-in; no official WIT logo or lockup supplied (§2.5, §8.1)" />

          <div className="hero__tagline-wrap">
            <p className="hero__tagline">{HERO.tagline}</p>
            <span className="tag-provisional">provisional tagline</span>
          </div>
          <Status
            kind="recommended"
            source="Draft written for this workshop from the 01–04 strip; the real tagline is a Placeholder (§5.1, §8.2)"
          />

          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href="#get-involved">
              Join the community
            </a>
            <a className="btn btn--ghost btn--lg" href="#events">
              See what’s on
            </a>
          </div>

          <MarginNote className="hero__note">this whole page is a draft — your notes shape it</MarginNote>
        </div>

        <div className="hero__aside">
          <div className="hero__next">
            {next ? <EventTicket event={next} compact label="Next up" /> : <EmptyTicket />}
          </div>
          <SloganPicker />
        </div>
      </div>
    </section>
  )
}
