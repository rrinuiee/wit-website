import { INITIATIVES } from '../content/wit'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import Doodle, { Blob } from '../components/ui/Doodle'

export default function Initiatives() {
  const { featured, others } = INITIATIVES
  return (
    <section id="initiatives" className="section initiatives" aria-labelledby="initiatives-title">
      <div className="container">
        <SectionHeading
          label="Initiatives"
          id="initiatives-title"
          tone="light"
          title={
            <>
              Hackathons, workshops &amp; <em>big nights.</em>
            </>
          }
        >
          <p>What we could verify is marked as such. Everything else is waiting for the WIT team to confirm.</p>
        </SectionHeading>

        <article className="thh reveal" aria-labelledby="thh-title">
          <div className="thh__art" aria-hidden="true">
            <Blob variant={2} className="thh__blob" />
            <span className="thh__badge">4.0</span>
            <Doodle name="sparkle" className="thh__spark" />
            <Doodle name="laptop" className="thh__laptop" />
          </div>

          <div className="thh__body">
            <p className="thh__kicker">Featured initiative</p>
            <h3 id="thh-title" className="thh__title">
              Tink-<em>Her</em>-Hack
            </h3>

            <p className="thh__verified">{featured.verified.text}</p>
            <ContentTag kind="verified" source={featured.verified.source} />

            <div className="confirm-box">
              <p className="confirm-box__title">
                <ContentTag kind="confirm" /> Reported elsewhere — please confirm
              </p>
              <ul>
                {featured.toConfirm.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <ul className="initiative-grid">
          {others.map((item, i) => (
            <li key={item.name} className="initiative-card reveal" style={{ '--delay': `${i * 80}ms` }}>
              <h3 className="initiative-card__title">{item.name}</h3>
              <p>{item.text}</p>
              <ContentTag kind={item.status} source={item.source} note={item.note} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
