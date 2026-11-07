import { useEffect, useState } from 'react'

/** Returns the id of the section currently nearest the top of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return undefined
    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting))
        const first = ids.find((id) => visible.get(id))
        setActive(first ?? null)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

/** True once the element with `id` has scrolled out above the viewport. */
export function useScrolledPast(id) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [id])
  return past
}
