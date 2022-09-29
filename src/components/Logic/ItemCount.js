import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../App/carritoContext';

function ItemCount({ stock, initial, onAdd, cart, product }) {
    const [count, setCount] = useState(initial);
    const {removeItem, addItem} = useContext(CartContext)
    const [count2, setCount2] = useState()

    const checkStockAdd = () => {
        if (count < stock - 1 && stock !== 0) {
            setCount(count + 1)
        }
    }
    const checkStockRemove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <>
            {
                cart === "yes" ?
                    <div className='countContainer'>
                        <div className='count'>
                            <Button variant="light" onClick={() => removeItem(product, setCount2)}>-</Button>
                            <p className='countDisplay'> {product.cantidad!==0? product.cantidad : <button onClick={()=>removeItem(product)}><img src="../tachobasura.png"></img></button>}</p>
                            <Button variant="light" onClick={() => addItem(product, setCount2)}>+</Button>
                        </div>
                    </div>
                    :
                    <div className='countContainer'>
                        <div className='count'>
                            <Button variant="light" onClick={checkStockRemove}>-</Button>
                            <p className='countDisplay'> {count}</p>
                            <Button variant="light" onClick={checkStockAdd}>+</Button>
                        </div>
                        <Button className='cartAddBtn' variant="outline-dark" onClick={() => onAdd(stock, count, initial)}>Agregar al carrito</Button>
                    </div>
            }

        </>

    );
}

export default ItemCount