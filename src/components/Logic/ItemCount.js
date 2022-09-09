import React, { useState } from 'react';

function ItemCount({stock, initial}) {
const [count, setCount] = useState(0);

const checkStockAdd = () => {
    if(count<stock-1){
        setCount(count+1)
    }
}
const checkStockRem = () =>{
    if(count>0){
        setCount(count-1)
    }
}
return (
    <div className='countContainer'>
        <div className='count'>
        <button onClick={() => checkStockRem()}>-</button>
        <p className='countDisplay'> {initial + count}</p>
        <button onClick={() => checkStockAdd()}>+</button>
        </div>
        <button>Agregar al carrito</button>
    </div>
);
}

export default ItemCount