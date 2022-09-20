import React from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { Link } from 'react-router-dom'

const Items = ({ nombre, precio, stock, marca, pictureUrl, id }) => {

    return (
        <div className='productos'>
            <div>{nombre}</div>
            <div>Marca: {marca}</div>
            <div>
                <Link  to={`/products/${id}`}><img className="productImg" src={pictureUrl} alt={nombre}></img></Link>
            </div>
            <div>Cantidad en stock: {stock}</div>
            <div>Precio: ${precio} </div>
        </div>
    )
}
export default Items