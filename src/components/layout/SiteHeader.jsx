import { useEffect, useRef, useState } from 'react'
import { NAV } from '../../content/site'
import { useActiveSection } from '../../hooks/useActiveSection'

const NAV_IDS = NAV.map((n) => n.id)

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 960 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner container">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">WIT</span>
          <span className="brand__text">
            <span className="brand__name">Women in Tech</span>
            <span className="brand__sub">build log · prototype</span>
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-toggle__bars" aria-hidden="true" />
          <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
        </button>

        <nav id="primary-nav" className="primary-nav" aria-label="Sections">
          <ol className="primary-nav__list">
            {NAV.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="primary-nav__link"
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="primary-nav__no" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <a className="btn btn--primary btn--sm primary-nav__cta" href="#get-involved" onClick={() => setOpen(false)}>
            Join the community
          </a>
        </nav>
      </div>
    </header>
  )
}
