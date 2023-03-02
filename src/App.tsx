import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {Layout} from './components/Layout/Layout'
import {Home} from "./pages/Home/Home"
import {HousingPage} from "./pages/HousingPage/HousingPage"
import {Error as ErrorPage} from "./pages/Error/Error"
import {About} from './pages/About/About'
import {find} from "./repositories/HousingRepository";
import {Housing} from './models/Housing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/:id"
             loader={({params}): Promise<Housing> => {
               if (!params.id) {
                 throw new Error('No id provided')
               }

               const housing = find(params.id) as Promise<Housing>

                if (housing) {
                  return housing
                }

                throw new Error('Housing not found')
             }}
             element={<HousingPage/>}
             errorElement={<ErrorPage/>}
      />
      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)

export function App() {
  return <RouterProvider router={router}/>
}
