import { WHAT_WE_DO } from '../content/wit'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import Doodle from '../components/ui/Doodle'

export default function WhatWeDo() {
  return (
    <section className="section what" aria-labelledby="what-title">
      <div className="container">
        <SectionHeading
          label="What we do"
          id="what-title"
          align="center"
          title={
            <>
              Four ways to <em>show up.</em>
            </>
          }
        >
          <p>Pick one, or all four. Everyone starts somewhere.</p>
          <ContentTag kind="demo" note="The four labels come from the WIT website strategy; descriptions are illustrative." />
        </SectionHeading>

        <ul className="what__grid">
          {WHAT_WE_DO.map((item, i) => (
            <li key={item.id} className={`what-card what-card--${item.tone} reveal`} style={{ '--delay': `${i * 80}ms` }}>
              <span className="what-card__icon" aria-hidden="true">
                <Doodle name={item.icon} />
              </span>
              <h3 className="what-card__title">{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
