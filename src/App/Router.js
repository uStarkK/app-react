import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/Containers/ItemDetailContainer'
import ItemListContainer from '../components/Containers/ItemListContainer'
import AboutUs from '../pages/AboutUs'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import LogIn from '../pages/LogIn'
import Productos from '../pages/Productos'
const Router = () => (
    <BrowserRouter> 
      <Routes>
        <Route index element={<Productos/>}/> 
        <Route path="/products/" element={<Productos/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/contact/" element={<Contact/>}/>
        <Route path="/login/" element={<LogIn/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        <Route path="/aboutUs/" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )

export default Router