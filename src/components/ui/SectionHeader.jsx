/** "LOG 03 — WHAT WE DO" mono label + display heading, the doubled rhythm from strategy §2.7. */
export default function SectionHeader({ log, kicker, title, id, children, align = 'start' }) {
  return (
    <header className={`section-header section-header--${align} reveal`}>
      <p className="section-header__kicker">
        <span className="section-header__log">LOG {log}</span>
        <span aria-hidden="true" className="section-header__rule" />
        <span>{kicker}</span>
      </p>
      <h2 className="section-header__title" id={id}>
        {title}
      </h2>
      {children ? <div className="section-header__intro">{children}</div> : null}
    </header>
  )
}
