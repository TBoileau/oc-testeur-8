import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Layout} from './components/Layout/Layout';
import {Home} from "./components/Home/Home";
import {Housing} from "./components/Housing/Housing";
import {Error} from "./components/Error/Error";
import { About } from './components/About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path=":id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
