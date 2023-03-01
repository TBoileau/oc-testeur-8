import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {Layout} from './components/Layout/Layout'
import {Home} from "./pages/Home/Home"
import {Housing} from "./pages/Housing/Housing"
import {Error} from "./pages/Error/Error"
import {About} from './pages/About/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path=":id" element={<Housing/>}/>
      <Route path="*" element={<Error/>}/>
    </Route>
  )
)

export function App() {
  return <RouterProvider router={router}/>
}
