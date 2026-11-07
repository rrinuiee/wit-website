import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { SLOGANS } from '../content/wit'
import { useStoredState } from '../hooks/useStoredState'

/**
 * Shared state for the whole page:
 * - showSources: whether content labels also show their source/notes
 * - feedback: whether the feedback drawer is open (and what it's about)
 * - myVote: the slogan this visitor voted for (stored on this device only)
 */
const WorkshopContext = createContext(null)

const isBool = (v) => typeof v === 'boolean'
const isVote = (v) => v === null || SLOGANS.some((s) => s.id === v)

export function WorkshopProvider({ children }) {
  const [showSources, setShowSources] = useStoredState('wit:show-sources', false, isBool)
  const [myVote, setMyVote] = useStoredState('wit:slogan-vote', null, isVote)
  const [feedback, setFeedback] = useState({ open: false, preset: null })

  const openFeedback = useCallback((preset = null) => setFeedback({ open: true, preset }), [])
  const closeFeedback = useCallback(() => setFeedback((f) => ({ ...f, open: false })), [])

  const value = useMemo(
    () => ({ showSources, setShowSources, myVote, setMyVote, feedback, openFeedback, closeFeedback }),
    [showSources, setShowSources, myVote, setMyVote, feedback, openFeedback, closeFeedback],
  )

  return <WorkshopContext.Provider value={value}>{children}</WorkshopContext.Provider>
}

export function useWorkshop() {
  const ctx = useContext(WorkshopContext)
  if (!ctx) throw new Error('useWorkshop must be used inside <WorkshopProvider>')
  return ctx
}
