import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../App/carritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    const acc = 0
    const totalQuantity = () => cart.map(ele => ele.cantidad).reduce((prevValue, currValue) => acc + prevValue + currValue)
    return (
        <div>
            <div className="navBarElement"><Link to="/cart"> <img className="carrito" src="../images/carrito.png" alt="carrito"></img></Link>
                {cart.length === 0 ?
                    console.log(cart, "el carrito está vacío")
                    :
                    totalQuantity()
                }
            </div>
        </div>
    )
}
export default CartWidget
