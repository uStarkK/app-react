import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();


export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalValue, setValue] = useState()

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart)
    };
    const isInCart = (item) => cart.some(ele => ele.nombre == item.nombre)

    const removeItem = (item, func) => {
        if (item.cantidad > 0) {
            item.cantidad = item.cantidad - 1
            func(item.cantidad)
            setCart([...cart])
        } else if (item.cantidad < 1) {
            const newCart = cart.filter(ele => ele.nombre !== item.nombre)
            setCart([...newCart])
        }
    }

    useEffect(() => {
        const cartTotal = () => {
            const cartValue = cart.map((item) => parseInt(item.precio) * item.cantidad);
            if (cartValue.length > 0) {
                setValue(cartValue.reduce(function (prevValue, currentValue) {
                            return prevValue + currentValue;
                        })
                );
            }
        };
        cartTotal();
    }, [cart]);

    const clearCart = () => {
        setCart([])
    }
    const addItem = (item, func) => {
        if (item.cantidad < item.stock - 1 && item.stock !== 0 && item.cantidad >= 0) {
            item.cantidad = item.cantidad + 1
            func(item.cantidad)
            setCart([...cart])
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, isInCart, removeItem, addItem, clearCart, totalValue }}>
            {children}
        </CartContext.Provider>
    )
}

