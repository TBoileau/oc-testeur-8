import logo from '../../assets/images/logo.png'
import './Header.css'
import {Link, useLocation} from "react-router-dom";

export function Header(): JSX.Element {
  const location = useLocation()

  return (
    <header className="header">
      <img src={logo} alt="Logo du site Kasa" className="header__logo"/>
      <ul className="header__nav">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos" className={location.pathname === "/a-propos" ? "active" : ""}>A propos</Link>
        </li>
      </ul>
    </header>
  )
}
