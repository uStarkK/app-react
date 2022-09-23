import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2';

export const CartContext = createContext();


export function CartProvider ({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        setCart([...cart, item])
        console.log(cart)
    };
    const inCart = (item) => cart.some(ele => ele.nombre == item.nombre)
    const removeItem = (item) => {

        if (item.cantidad < item.stock - 1 && item.stock !== 0 && item.cantidad > 0) {
            item.cantidad = item.cantidad -1
            console.log(item.cantidad)
        } else if(item.cantidad < 1){
            cart.splice(cart.findIndex(ele => ele.nombre == item.nombre))
        }
    }
    return(
    <CartContext.Provider value={{cart, addToCart, inCart, removeItem}}>
        {children}
    </CartContext.Provider>
    )
}

