import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/Containers/ItemDetailContainer'
import AboutUs from '../pages/AboutUs'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import Productos from '../pages/Productos'
import AddProduct from '../pages/AddProduct'
import Cuenta from '../pages/Cuenta'
import UserData from "../components/Containers/UserData"
import PurchaseDetail from '../components/Logic/PurchaseDetail'
const Router = () => (
    <BrowserRouter> 
      <Routes>
        <Route index element={<Productos/>}/> 
        <Route path="/products/" element={<Productos/>}/>
        <Route path="/products/category/:categoryId/:id" element={<ItemDetailContainer/>}/>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/contact/" element={<Contact/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        <Route path="/aboutUs/" element={<AboutUs/>}/>
        <Route path="/products/category/:categoryId" element={<Productos/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        <Route path="/account/" element={<Cuenta/>}/>
        <Route path="/account/:purchaseId" element={<PurchaseDetail/>}/>
        <Route path="/cart/confirmPurchase/" element={<UserData/>}/>
      </Routes>
    </BrowserRouter>
  )
export default Router