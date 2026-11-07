import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ACCENTS, DEFAULT_ACCENT, SLOGANS } from '../content/site'
import { useStoredState } from '../hooks/useStoredState'

const WorkshopContext = createContext(null)

const isAccent = (v) => ACCENTS.some((a) => a.id === v)
const isSlogan = (v) => SLOGANS.some((s) => s.id === v)
const isBool = (v) => typeof v === 'boolean'
const isVote = (v) => v === null || isSlogan(v)

export function WorkshopProvider({ children }) {
  const [accent, setAccent] = useStoredState('wit-proto:accent', DEFAULT_ACCENT, isAccent)
  const [reviewMode, setReviewMode] = useStoredState('wit-proto:review', false, isBool)
  const [slogan, setSlogan] = useStoredState('wit-proto:slogan', SLOGANS[0].id, isSlogan)
  const [myVote, setMyVote] = useStoredState('wit-proto:vote', null, isVote)
  const [feedback, setFeedback] = useState({ open: false, preset: null })

  useEffect(() => {
    document.documentElement.dataset.accent = accent
  }, [accent])

  useEffect(() => {
    document.documentElement.dataset.review = reviewMode ? 'on' : 'off'
  }, [reviewMode])

  const openFeedback = useCallback((preset = null) => setFeedback({ open: true, preset }), [])
  const closeFeedback = useCallback(() => setFeedback((f) => ({ ...f, open: false })), [])

  const value = useMemo(
    () => ({
      accent,
      setAccent,
      reviewMode,
      setReviewMode,
      slogan,
      setSlogan,
      myVote,
      setMyVote,
      feedback,
      openFeedback,
      closeFeedback,
    }),
    [accent, setAccent, reviewMode, setReviewMode, slogan, setSlogan, myVote, setMyVote, feedback, openFeedback, closeFeedback],
  )

  return <WorkshopContext.Provider value={value}>{children}</WorkshopContext.Provider>
}

export function useWorkshop() {
  const ctx = useContext(WorkshopContext)
  if (!ctx) throw new Error('useWorkshop must be used inside <WorkshopProvider>')
  return ctx
}
