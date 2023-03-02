import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {Layout} from './components/Layout/Layout'
import {Home} from "./pages/Home/Home"
import {HousingPage} from "./pages/HousingPage/HousingPage"
import {Error} from "./pages/Error/Error"
import {About} from './pages/About/About'
import {find} from "./repositories/HousingRepository";
import {Housing} from './models/Housing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/:id"
             loader={({params}): Promise<Housing> => find(params.id)}
             element={<HousingPage/>}
             errorElement={<Error/>}
      />
      <Route path="*" element={<Error/>}/>
    </Route>
  )
)

export function App() {
  return <RouterProvider router={router}/>
}
