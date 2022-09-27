import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2';

export const CartContext = createContext();


export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart)
    };
    const isInCart = (item) => cart.some(ele => ele.nombre == item.nombre)

    const removeItem = (item, func) => {
        if (item.cantidad > 0) {
            item.cantidad = item.cantidad - 1
            func(item.cantidad)
            console.log(item.cantidad)
        } else if (item.cantidad < 1) {
            cart.splice(cart.findIndex(ele => ele.nombre == item.nombre), 1)

        }
    }

    const clearCart = () => {
        setCart([])
    }
    const addItem = (item, func) => {
        if (item.cantidad < item.stock - 1 && item.stock !== 0 && item.cantidad > 0) {
            item.cantidad = item.cantidad + 1
            func(item.cantidad)
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, isInCart, removeItem, addItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

