import './Carousel.css'
import {Picture} from "../../models/Picture";
import {useState} from "react";

type CarouselProps = {
  pictures: Picture[]
}

export function Carousel({pictures}: CarouselProps): JSX.Element {
  const [currentPicture, setCurrentPicture] = useState(0)

  const next = () => {
    setCurrentPicture(currentPicture + 1 === pictures.length ? 0 : currentPicture + 1)
  }

  const previous = () => {
    setCurrentPicture(currentPicture - 1 < 0 ? pictures.length - 1 : currentPicture - 1)
  }

  return (
    <div className="carousel">
      <div className="carousel__inner">
        {pictures.map((picture, index) => (
          <img className={index === currentPicture ? "active" : ""} key={picture.url} src={picture.url} alt={`Slide ${index}`}/>
        ))}
      </div>
      <span className="carousel__indicator">{currentPicture + 1}/{pictures.length}</span>
      <a href="#" className="carousel__left" aria-label="Précédent" onClick={previous}>
        <svg viewBox="0 0 48 80" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="#ffffff"/>
        </svg>
      </a>
      <a href="#" className="carousel__right" aria-label="Suivant" onClick={next}>
        <svg viewBox="0 0 48 80" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="#ffffff"/>
        </svg>
      </a>
    </div>
  )
}
