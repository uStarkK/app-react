import "./App.css"

import Router from "./App/Router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./App/carrito";

function App() { 
  return (
    <CartProvider>
      <Router/>
    </CartProvider>
  )   
}

export default App;
