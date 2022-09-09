import React from 'react'
import ItemCount from './ItemCount'

const Items = ({ nombre, precio, stock, marca, pictureUrl }) => {
    return (
        <div className='productos'>
            <div>{nombre}</div>
            <div>Marca: {marca}</div>
            <div>
                <img src={pictureUrl} alt={nombre}></img>
            </div>
            <div>Cantidad en stock:{stock}</div>
            <div>Precio: ${precio} </div>
            <ItemCount stock={stock} initial={1} />
        </div>
    )
}
export default Items