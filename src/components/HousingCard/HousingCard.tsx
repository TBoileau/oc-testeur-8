import {Housing} from "../../models/Housing"
import {Link} from "react-router-dom"
import './HousingCard.css'

type HousingCardProps = {
  housing: Housing
}

export function HousingCard({housing}: HousingCardProps): JSX.Element {
  return (
    <article>
      <Link to={`/${housing.id}`} className="housing">
        <img className="housing__image" src={housing.cover.url} alt={housing.title}/>
        <h2 className="housing__title">{housing.title}</h2>
      </Link>
    </article>
  )
}