import './Home.css';

import { useEffect, useState } from 'react';

import Background from '../../assets/images/bg-home.png';
import { Banner } from '../../components/Banner/Banner';
import { HousingCard } from '../../components/HousingCard/HousingCard';
import { Housing } from '../../models/Housing';
import { findAll } from '../../repositories/HousingRepository';

export function Home(): JSX.Element {
  const [housingList, setHousingList] = useState<Housing[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      setHousingList(await findAll());
    };

    dataFetch();
  }, []);

  return (
    <>
      <Banner background={Background} title="Chez vous, partout et ailleurs" alt="Prise de vue sur une falaise, photo prise par Eric Muhr"/>
      <div className="housing-list">
        {housingList.map((housing) => (
          <HousingCard key={housing.id} housing={housing} />
        ))}
      </div>
    </>
  );
}
