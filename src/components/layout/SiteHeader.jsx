import { useEffect, useRef, useState } from 'react'
import { NAV } from '../../content/wit'
import { useActiveSection } from '../../hooks/useActiveSection'
import Logo from './Logo'

const NAV_IDS = NAV.map((n) => n.id)

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const toggleRef = useRef(null)

  // Close the mobile menu with Escape, or when the screen becomes wide.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" onClick={close} aria-label="WIT — Women in Tech, back to top">
          <Logo />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-btn__icon" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="site-nav__link"
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#get-involved" className="btn btn--primary btn--sm site-nav__cta" onClick={close}>
            Get involved
          </a>
        </nav>
      </div>
    </header>
  )
}
