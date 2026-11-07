import { HERO, WHAT_WE_DO } from '../content/wit'
import { UPCOMING_EVENTS } from '../content/events'
import { upcomingEvents, formatEventDate } from '../lib/events'
import ContentTag from '../components/ui/ContentTag'
import Doodle, { Blob, Squiggle } from '../components/ui/Doodle'

/** The decorative "code card" illustration on the right of the hero. */
function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card__bar">
        <span />
        <span />
        <span />
        <p>wit.js</p>
      </div>
      <pre className="code-card__code">
        <code>
          <span className="c-key">const</span> wit = {'{'}
          {'\n'}  learn: <span className="c-str">'together'</span>,
          {'\n'}  build: <span className="c-str">'boldly'</span>,
          {'\n'}  lead: <span className="c-str">'with kindness'</span>,
          {'\n'}
          {'}'}
          {'\n\n'}wit.<span className="c-fn">celebrate</span>() <span className="c-com">// ✦</span>
        </code>
      </pre>
    </div>
  )
}

/** Small card showing the next *verified* event from TinkerHub's calendar (if any). */
function NextUpCard() {
  const next = upcomingEvents(UPCOMING_EVENTS.filter((e) => e.status === 'verified'))[0]
  if (!next) return null
  const d = formatEventDate(next.date)
  return (
    <article className="next-card" aria-labelledby="next-card-title">
      <p className="next-card__label">Next on TinkerHub’s calendar</p>
      <div className="next-card__row">
        <time className="next-card__date" dateTime={next.date}>
          <span>{d.day}</span>
          {d.month}
        </time>
        <div>
          <h2 id="next-card-title" className="next-card__title">
            {next.title}
          </h2>
          <p className="next-card__meta">{next.format}</p>
        </div>
      </div>
      <ContentTag kind="verified" source={next.source} note={next.note} />
      <a className="text-link" href="#events">
        See details
      </a>
    </article>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1 id="hero-title" className="hero__title">
            Women who{' '}
            <span className="hero__accent">
              <em>tinker,</em>
              <Squiggle className="hero__squiggle" />
            </span>{' '}
            build &amp; lead.
          </h1>

          <p className="hero__intro">{HERO.intro}</p>
          <ContentTag kind="demo" note="Draft introduction written for this prototype — the WIT team should approve the final wording." />

          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href="#get-involved">
              Get involved
            </a>
            <a className="btn btn--ghost btn--lg" href="#events">
              See what’s on
            </a>
          </div>

          <ul className="hero__pillars" aria-label="What WIT is about">
            {WHAT_WE_DO.map((p) => (
              <li key={p.id} className={`pill pill--${p.tone}`}>
                <Doodle name={p.icon} />
                {p.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__art">
          <div className="hero__stage">
            <Blob variant={1} className="hero__blob hero__blob--lilac" />
            <Blob variant={3} className="hero__blob hero__blob--peach" />
            <Doodle name="flower" className="hero__flower" />
            <Doodle name="sparkle" className="hero__spark hero__spark--1" />
            <Doodle name="sparkle" className="hero__spark hero__spark--2" />
            <CodeCard />
            <ul className="hero__stickers" aria-hidden="true">
              {HERO.stickers.map((s, i) => (
                <li key={s} className={`sticker sticker--${i + 1}`}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <NextUpCard />
        </div>
      </div>
    </section>
  )
}
