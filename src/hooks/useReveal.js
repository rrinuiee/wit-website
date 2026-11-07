import { useEffect } from 'react'

/**
 * Adds `is-visible` to `.reveal` elements as they enter the viewport.
 * CSS keeps everything visible when reduced motion is preferred or JS fails.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    const els = Array.from(document.querySelectorAll('.reveal'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }
    root.classList.add('js-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
