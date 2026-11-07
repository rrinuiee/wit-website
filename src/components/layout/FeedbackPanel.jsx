import { useEffect, useId, useRef, useState } from 'react'
import { IS_SHARED_FEEDBACK } from '../../config/feedback'
import { FEEDBACK_KINDS, FEEDBACK_SECTIONS } from '../../content/feedback'
import { SLOGANS } from '../../content/wit'
import { useWorkshop } from '../../context/WorkshopContext'
import {
  clearLocalFeedback,
  downloadFile,
  feedbackToCSV,
  loadLocalFeedback,
  submitFeedback,
} from '../../lib/feedback'

const sectionLabel = (id) => FEEDBACK_SECTIONS.find((s) => s.id === id)?.label ?? id
const kindLabel = (id) =>
  id === 'slogan-vote' ? 'Slogan vote' : FEEDBACK_KINDS.find((k) => k.id === id)?.label ?? id

function IntegrationNotice() {
  if (IS_SHARED_FEEDBACK) {
    return (
      <p className="notice notice--ok">
        <strong>Shared form connected.</strong> Notes are sent to the workshop organisers. A copy also stays on this device.
      </p>
    )
  }
  return (
    <p className="notice notice--warn">
      <strong>Saved on this device only.</strong> No shared form is connected yet, so organisers will only see your
      note if it’s exported from this browser (see “Notes on this device” below).
    </p>
  )
}

export default function FeedbackPanel() {
  const { feedback, closeFeedback } = useWorkshop()
  const dialogRef = useRef(null)
  const messageRef = useRef(null)
  const formId = useId()

  const [section, setSection] = useState('whole-site')
  const [slot, setSlot] = useState('')
  const [kind, setKind] = useState('idea')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)
  const [saved, setSaved] = useState([])

  // Open / close the native modal dialog (focus trap + Escape for free).
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (feedback.open && !dialog.open) {
      const preset = feedback.preset ?? {}
      setSection(preset.section ?? 'whole-site')
      setSlot(preset.slot ?? '')
      setResult(null)
      setSaved(loadLocalFeedback())
      dialog.showModal()
      requestAnimationFrame(() => messageRef.current?.focus())
    } else if (!feedback.open && dialog.open) {
      dialog.close()
    }
  }, [feedback])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) {
      messageRef.current?.focus()
      return
    }
    setSending(true)
    const res = await submitFeedback({ kind, section, slot, message, name })
    setSending(false)
    setResult(res)
    setSaved(loadLocalFeedback())
    setMessage('')
  }

  const exportCSV = () => downloadFile('wit-prototype-feedback.csv', feedbackToCSV(saved), 'text/csv')
  const exportJSON = () =>
    downloadFile('wit-prototype-feedback.json', JSON.stringify(saved, null, 2), 'application/json')
  const clearAll = () => {
    if (window.confirm('Delete all notes and votes saved in this browser? This can’t be undone.')) {
      clearLocalFeedback()
      setSaved([])
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="drawer"
      aria-labelledby={`${formId}-title`}
      onClose={closeFeedback}
      onCancel={closeFeedback}
      onClick={(e) => {
        if (e.target === dialogRef.current) closeFeedback()
      }}
    >
      <div className="drawer__sheet">
        <header className="drawer__head">
          <p className="drawer__kicker">Share your thoughts</p>
          <h2 id={`${formId}-title`} className="drawer__title">
            Help shape this website
          </h2>
          <button type="button" className="drawer__close" onClick={closeFeedback}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close feedback</span>
          </button>
        </header>

        <div className="drawer__body">
          <IntegrationNotice />

          {result ? (
            <div className="sent" role="status">
              <span className="sent__badge" aria-hidden="true">
                thank you ✦
              </span>
              <p>
                {result.delivered
                  ? 'Thanks! Your note reached the shared form.'
                  : result.error
                    ? `Saved on this device. ${result.error}`
                    : 'Thanks! Your note is saved on this device.'}
              </p>
              <button type="button" className="link-btn" onClick={() => setResult(null)}>
                Add another note →
              </button>
            </div>
          ) : (
            <form className="fb-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor={`${formId}-section`}>Which part?</label>
                <select id={`${formId}-section`} value={section} onChange={(e) => setSection(e.target.value)}>
                  {FEEDBACK_SECTIONS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {slot ? (
                  <p className="field__chip">
                    About: <strong>{slot}</strong>
                    <button type="button" onClick={() => setSlot('')}>
                      <span aria-hidden="true">×</span>
                      <span className="sr-only">Remove “{slot}”</span>
                    </button>
                  </p>
                ) : null}
              </div>

              <fieldset className="field">
                <legend>What kind of note?</legend>
                <div className="chips">
                  {FEEDBACK_KINDS.map((k) => (
                    <label key={k.id} className="chip">
                      <input
                        type="radio"
                        name={`${formId}-kind`}
                        value={k.id}
                        checked={kind === k.id}
                        onChange={() => setKind(k.id)}
                      />
                      <span>{k.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field">
                <label htmlFor={`${formId}-msg`}>Your note</label>
                <textarea
                  id={`${formId}-msg`}
                  ref={messageRef}
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-describedby={`${formId}-msg-help`}
                />
                <p id={`${formId}-msg-help`} className="field__help">
                  Suggestions for copy, layout, colour, missing info — anything.
                </p>
              </div>

              <div className="field">
                <label htmlFor={`${formId}-name`}>
                  Name or handle <span className="field__opt">(optional)</span>
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  autoComplete="nickname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby={`${formId}-name-help`}
                />
                <p id={`${formId}-name-help`} className="field__help">
                  Leave blank to stay anonymous.
                </p>
              </div>

              <button type="submit" className="btn btn--primary btn--block" disabled={sending || !message.trim()}>
                {sending ? 'Sending…' : IS_SHARED_FEEDBACK ? 'Send note' : 'Save note'}
              </button>
            </form>
          )}

          <details className="saved">
            <summary>
              Notes on this device <span className="saved__count">{saved.length}</span>
            </summary>
            {saved.length === 0 ? (
              <p className="field__help">Nothing saved in this browser yet.</p>
            ) : (
              <>
                <ul className="saved__list">
                  {[...saved].reverse().map((n) => (
                    <li key={n.id}>
                      <span className="saved__meta">
                        {kindLabel(n.kind)} · {sectionLabel(n.section)}
                        {n.slot ? ` · ${n.slot}` : ''}
                        {IS_SHARED_FEEDBACK ? (n.delivered ? ' · sent' : ' · not sent') : ''}
                      </span>
                      <span className="saved__msg">
                        {n.kind === 'slogan-vote'
                          ? `Voted “${SLOGANS.find((s) => s.id === n.message)?.text ?? n.message}”`
                          : n.message}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="saved__actions">
                  <button type="button" className="btn btn--ghost btn--sm" onClick={exportCSV}>
                    Download CSV
                  </button>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={exportJSON}>
                    Download JSON
                  </button>
                  <button type="button" className="link-btn link-btn--danger" onClick={clearAll}>
                    Clear
                  </button>
                </div>
              </>
            )}
          </details>
        </div>
      </div>
    </dialog>
  )
}
