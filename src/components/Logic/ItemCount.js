import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(0);

    const checkStockAdd = () => {
        if (count < stock - 1 && stock !== 0) {
            setCount(count + 1)
        }
    }
    const checkStockRemove = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className='countContainer'>
            <div className='count'>
                <Button variant="light" onClick={checkStockRemove}>-</Button>
                <p className='countDisplay'> {initial + count}</p>
                <Button variant="light" onClick={checkStockAdd}>+</Button>
            </div>
            <Button className='cartAddBtn' variant="outline-dark" onClick={() => onAdd(stock, count, initial)}>Agregar al carrito</Button>
        </div>
        
    );
}

export default ItemCount