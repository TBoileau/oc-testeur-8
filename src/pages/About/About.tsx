import './About.css';

import Background from '../../assets/images/bg-about.png';
import { Banner } from '../../components/Banner/Banner';
import { Collapse } from '../../components/Collapse/Collapse';

export function About(): JSX.Element {
  return (
    <>
      <Banner
        background={Background}
        alt="Photo d'un paysage de montage et de forêt, prise par Kalen Emsley"
      />
      <div className="about">
        <Collapse
          title="Fiabilité"
          body={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos
              sont conformes aux logements, et toutes les informations sont régulièrement
              vérifiées par nos équipes.
            </p>
          }
        />
        <Collapse
          title="Respect"
          body={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage entraînera une
              exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title="Service"
          body={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience
              parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre
              question.
            </p>
          }
        />
        <Collapse
          title="Sécurité"
          body={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
              voyageurs, chaque logement correspond aux critères de sécurité établis par
              nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au
              locataire, cela permet à nos équipes de vérifier que les standards sont bien
              respectés. Nous organisons également des ateliers sur la sécurité domestique
              pour nos hôtes.
            </p>
          }
        />
      </div>
    </>
  );
}
