import { useEffect, useRef, useState } from 'react'
import { ACCENTS } from '../../content/site'
import { useWorkshop } from '../../context/WorkshopContext'
import { useScrolledPast } from '../../hooks/useActiveSection'

function AccentPicker() {
  const { accent, setAccent } = useWorkshop()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const btnRef = useRef(null)
  const current = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0]

  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="ink" ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        className="dock__btn"
        aria-expanded={open}
        aria-controls="ink-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="ink__swatch" style={{ background: current.hex }} aria-hidden="true" />
        <span className="dock__label">Ink</span>
        <span className="sr-only">: {current.label}. Change accent colour</span>
      </button>

      <div id="ink-panel" className="ink__panel" hidden={!open}>
        <fieldset>
          <legend className="ink__legend">
            Try an accent ink
            <span>Candidates from strategy §6.2 · final colour not chosen yet</span>
          </legend>
          {ACCENTS.map((a) => (
            <label key={a.id} className="ink__option">
              <input
                type="radio"
                name="accent"
                value={a.id}
                checked={accent === a.id}
                onChange={() => setAccent(a.id)}
              />
              <span className="ink__pot" style={{ background: a.hex }} aria-hidden="true" />
              <span className="ink__name">
                {a.label}
                {a.id === 'terracotta' ? <em> · default</em> : null}
              </span>
              <code className="ink__hex">{a.hex}</code>
            </label>
          ))}
        </fieldset>
      </div>
    </div>
  )
}

export default function WorkshopDock() {
  const { reviewMode, setReviewMode, openFeedback } = useWorkshop()
  const pastHero = useScrolledPast('hero')

  return (
    <div className="dock" role="region" aria-label="Workshop tools">
      <a className={`btn btn--primary dock__join ${pastHero ? 'is-shown' : ''}`} href="#get-involved" tabIndex={pastHero ? 0 : -1} aria-hidden={!pastHero}>
        Join
      </a>
      <div className="dock__tools">
        <AccentPicker />
        <button
          type="button"
          role="switch"
          aria-checked={reviewMode}
          className="dock__btn dock__switch"
          onClick={() => setReviewMode(!reviewMode)}
        >
          <span className="switch" aria-hidden="true">
            <span className="switch__knob" />
          </span>
          <span className="dock__label">Review</span>
          <span className="sr-only"> mode: show Verified, Recommended and Placeholder labels</span>
        </button>
        <button type="button" className="dock__btn dock__btn--feedback" onClick={() => openFeedback()}>
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M3 3h14v10H8l-5 4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
          <span className="dock__label">Feedback</span>
        </button>
      </div>
    </div>
  )
}
