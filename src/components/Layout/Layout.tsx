import './Layout.css'
import {Outlet} from "react-router-dom"
import {Header} from "../Header/Header";

export function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Header/>
      <Outlet/>
    </div>
  )
}
