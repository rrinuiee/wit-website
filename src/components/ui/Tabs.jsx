import { useId, useRef, useState } from 'react'

/**
 * Accessible tabs. Arrow keys move between tabs (WAI-ARIA tabs pattern).
 *
 * <Tabs label="Events" tabs={[{ id: 'up', label: 'Upcoming', content: <div /> }]} />
 */
export default function Tabs({ label, tabs, className = '' }) {
  const [active, setActive] = useState(tabs[0]?.id)
  const baseId = useId()
  const refs = useRef({})

  const onKeyDown = (e, index) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = tabs[(index + dir + tabs.length) % tabs.length]
    setActive(next.id)
    refs.current[next.id]?.focus()
  }

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs__list" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            type="button"
            role="tab"
            id={`${baseId}-tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`${baseId}-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            className="tabs__tab"
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${baseId}-panel-${t.id}`}
          aria-labelledby={`${baseId}-tab-${t.id}`}
          hidden={active !== t.id}
          className="tabs__panel"
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}
