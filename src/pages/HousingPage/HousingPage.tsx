import './HousingPage.css';

import { useLoaderData } from 'react-router-dom';

import { Badge } from '../../components/Badge/Badge';
import { Carousel } from '../../components/Carousel/Carousel';
import { Collapse } from '../../components/Collapse/Collapse';
import { Star } from '../../components/Star/Star';
import { Housing } from '../../models/Housing';

export function HousingPage(): JSX.Element {
  const housing = useLoaderData() as Housing;

  return (
    <div className="housing">
      <Carousel pictures={housing.pictures} />
      <div className="housing__header">
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <div className="housing__tags">
            {housing.tags.map((tag) => (
              <Badge label={tag.label} key={tag.label} />
            ))}
          </div>
        </div>
        <div>
          <div className="housing__rating">
            {housing.ratingToArray.map((rating, index) => (
              <Star active={rating} key={index} />
            ))}
          </div>
          <div className="housing__host">
            <span>{housing.host.name}</span>
            <img src={housing.host.picture} alt={housing.host.name} />
          </div>
        </div>
      </div>
      <div className="housing__body">
        <Collapse title={'Description'} body={<p>{housing.description}</p>} />
        <Collapse
          title={'Equipements'}
          body={
            <ul>
              {housing.equipments.map((equipment) => (
                <li key={equipment.label}>{equipment.label}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}
