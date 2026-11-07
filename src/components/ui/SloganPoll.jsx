import { useState } from 'react'
import { SLOGANS } from '../../content/wit'
import { IS_SHARED_FEEDBACK } from '../../config/feedback'
import { useWorkshop } from '../../context/WorkshopContext'
import { submitFeedback } from '../../lib/feedback'
import ContentTag from './ContentTag'

/**
 * Workshop poll for the slogan candidates in the WIT website strategy.
 * Votes are saved on this device unless a shared feedback form is connected.
 */
export default function SloganPoll() {
  const { myVote, setMyVote } = useWorkshop()
  const [choice, setChoice] = useState(myVote ?? SLOGANS[0].id)
  const [status, setStatus] = useState('')
  const picked = SLOGANS.find((s) => s.id === choice)

  const vote = async (e) => {
    e.preventDefault()
    setMyVote(choice)
    setStatus('Saving…')
    const res = await submitFeedback({ kind: 'slogan-vote', section: 'slogan', slot: 'Slogan vote', message: choice })
    setStatus(
      res.delivered
        ? `Thanks! Your vote for “${picked.text}” was sent to the shared form.`
        : res.error
          ? `Saved on this device. ${res.error}`
          : `Thanks! Your vote for “${picked.text}” is saved on this device only — there’s no shared tally yet.`,
    )
  }

  return (
    <form className="poll" onSubmit={vote} aria-labelledby="poll-title">
      <h3 id="poll-title" className="poll__title">
        Workshop poll: pick a slogan
      </h3>
      <p className="poll__note">Candidates from the WIT website strategy. None of them is approved.</p>
      <ContentTag kind="confirm" note="The final slogan is for the WIT team to decide." />
      <fieldset className="poll__options">
        <legend className="sr-only">Slogan candidates</legend>
        {SLOGANS.map((s) => (
          <label key={s.id} className="poll__option">
            <input type="radio" name="slogan" value={s.id} checked={choice === s.id} onChange={() => setChoice(s.id)} />
            <span>{s.text}</span>
            {myVote === s.id ? <em className="poll__mine">your vote</em> : null}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="btn btn--primary btn--block">
        Vote for “{picked.text}”
      </button>
      <p className="poll__status" role="status" aria-live="polite">
        {status || (IS_SHARED_FEEDBACK ? 'Votes go to the shared workshop form.' : 'Votes stay on this device until a shared form is connected.')}
      </p>
    </form>
  )
}
