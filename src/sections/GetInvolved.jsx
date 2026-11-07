import { GET_INVOLVED } from '../content/wit'
import { useWorkshop } from '../context/WorkshopContext'
import SectionHeading from '../components/ui/SectionHeading'
import ContentTag from '../components/ui/ContentTag'
import ExternalLink from '../components/ui/ExternalLink'

export default function GetInvolved() {
  const { openFeedback } = useWorkshop()
  return (
    <section id="get-involved" className="section involved" aria-labelledby="involved-title">
      <div className="container">
        <SectionHeading
          label="Get involved"
          id="involved-title"
          align="center"
          title={
            <>
              Be kind. <em>Pull up a chair.</em>
            </>
          }
        >
          <p>Learn, volunteer, collaborate or lead — there’s room for you here.</p>
        </SectionHeading>

        <ul className="involved__grid">
          {GET_INVOLVED.map((card, i) => (
            <li key={card.id} className={`involve-card involve-card--${i + 1} reveal`} style={{ '--delay': `${i * 70}ms` }}>
              <span className="involve-card__no" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="involve-card__title">{card.title}</h3>
              <p>{card.text}</p>
              <ContentTag kind={card.status} source={card.source} note={card.note} />
              <div className="involve-card__action">
                {card.action.kind === 'link' ? (
                  <ExternalLink href={card.action.href} className="btn btn--primary btn--sm">
                    {card.action.label}
                  </ExternalLink>
                ) : (
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    onClick={() => openFeedback({ section: 'get-involved', slot: card.title })}
                  >
                    {card.action.label}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
