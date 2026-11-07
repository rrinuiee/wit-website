import { useState } from 'react'

/** Copies `text` to the clipboard and briefly says "Copied!". */
export default function CopyButton({ text, label = 'Copy' }) {
  const [status, setStatus] = useState('')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('Copied!')
    } catch {
      setStatus('Select the text and copy it manually')
    }
    setTimeout(() => setStatus(''), 2500)
  }

  return (
    <>
      <button type="button" className="copy-btn" onClick={copy}>
        {status || label}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status}
      </span>
    </>
  )
}
