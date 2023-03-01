import './Layout.css'
import {Outlet} from "react-router-dom"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
