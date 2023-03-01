import './Footer.css'
import {Logo} from "../Logo/Logo";

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo color="#FFFFFF" className="footer__logo"/>
      <p className="footer__copyright">© 2023 Kasa. All rights reserved</p>
    </footer>
  )
}
