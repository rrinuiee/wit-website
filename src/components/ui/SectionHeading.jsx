/**
 * Section title block: a small pill label, a big heading, and an optional intro.
 * Wrap a word in <em> inside `title` to set it in the italic serif accent font.
 */
export default function SectionHeading({ label, title, id, children, align = 'left', tone = 'default' }) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${tone} reveal`}>
      {label ? <p className="section-heading__label">{label}</p> : null}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {children ? <div className="section-heading__intro">{children}</div> : null}
    </header>
  )
}
