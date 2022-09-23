import React from 'react'
import NavBar from '../components/Containers/NavBar'
import CartContext from '../components/Logic/CartContext'
const Cart = () => {
    return (
        <div>
            <NavBar/>
            <p className="uwu">Le damos la bienvenida a su carrito de Compra! Aqui encontrará todos los productos que ha elegido, pero cuya compra aún no ha sido confirmada.</p>

            <div><CartContext/></div>
        </div>
    )
}

export default Cart