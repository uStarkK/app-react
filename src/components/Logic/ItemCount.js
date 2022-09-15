import React, { useState } from 'react';
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
                <button onClick={checkStockRemove}>-</button>
                <p className='countDisplay'> {initial + count}</p>
                <button onClick={checkStockAdd}>+</button>
            </div>
            <button onClick={() => onAdd(stock, count, initial)}>Agregar al carrito</button>
        </div>
        
    );
}

export default ItemCount