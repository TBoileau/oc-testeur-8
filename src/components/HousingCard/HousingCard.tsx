import './HousingCard.css';

import { Link } from 'react-router-dom';

import { Housing } from '../../models/Housing';

type HousingCardProps = {
  housing: Housing;
};

export function HousingCard({ housing }: HousingCardProps): JSX.Element {
  return (
    <article>
      <Link to={`/${housing.id}`} className="card">
        <img className="card__image" src={housing.cover.url} alt={housing.title} />
        <h2 className="card__title">{housing.title}</h2>
      </Link>
    </article>
  );
}
