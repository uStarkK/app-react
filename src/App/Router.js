import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/Containers/ItemDetailContainer'
import ItemListContainer from '../components/Containers/ItemListContainer'
import Home from "../pages/Home"
import Productos from '../pages/Productos'
const Router = () => (
    <BrowserRouter> 
      <Routes>
        <Route index element={<ItemListContainer/>}/> 
        <Route path="/products/" element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )

export default Router