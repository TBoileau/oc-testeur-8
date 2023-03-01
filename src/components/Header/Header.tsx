import './Header.css'
import {Link, useLocation} from "react-router-dom";
import {Logo} from '../Logo/Logo';

export function Header(): JSX.Element {
  const location = useLocation()

  return (
    <header className="header">
      <Logo color="#FF6060" className="header__logo"/>
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
