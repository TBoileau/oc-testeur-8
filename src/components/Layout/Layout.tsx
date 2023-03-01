import {Outlet} from "react-router-dom";

export function Layout(): JSX.Element {
  return (
    <>
      <header>header</header>
      <Outlet/>
    </>
  )
}
