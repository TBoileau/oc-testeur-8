import './Banner.css'

type BannerProps = {
  title?: string,
  background: string,
}

export function Banner({background, title}: BannerProps): JSX.Element {
  return (
    <div className="banner">
      <img className="banner__background" src={background}
           alt="Prise de vue sur une falaise, photo prise par Eric Muhr"/>
      {title && <h1 className="banner__title">Chez vous, partout et ailleurs</h1>}
    </div>
  )
}
