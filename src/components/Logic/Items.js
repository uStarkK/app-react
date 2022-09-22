import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ nombre, precio, stock, marca, pictureUrl, id, category}) => {

    return (
        <div className='productos'>
            <div>{nombre}</div>
            <div>Marca: {marca}</div>
            <div>
                <Link  to={`/products/category/${category}/${id}`}><img className="productImg" src={pictureUrl} alt={nombre}></img></Link>
            </div>
            <div>Cantidad en stock: {stock}</div>
            <div>Precio: ${precio} </div>
        </div>
    )
}
export default Items