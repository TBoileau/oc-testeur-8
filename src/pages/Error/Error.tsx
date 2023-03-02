import {Link} from "react-router-dom"
import './Error.css'

export function Error(): JSX.Element {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"}>Retour sur la page d'accueil</Link>
    </div>
  )
}