import React from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { Link } from 'react-router-dom'

const Items = ({ nombre, precio, stock, marca, pictureUrl, id }) => {

    const onAdd = (stock, count, initial) => {
        if (stock > 0 && initial >= 1) {
            Swal.fire(
                `BUENARDO AGREGASTE ${count + initial} ${nombre} "${marca}" AL CARRITO `,
                ``,
                'success')
            count = 0;

        } else if (stock <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo sentimos, no hay stock de este producto',
                footer: '<a href="https://www.youtube.com/watch?v=jJzNszDGn9U&ab_channel=FARENH" target="_blank">Qué hará este botón?</a>'
            })
        }
    }
    return (
        <div className='productos'>
            <div>{nombre}</div>
            <div>Marca: {marca}</div>
            <div>
                <Link  to={`/products/${id}`}><img className="productImg" src={pictureUrl} alt={nombre}></img></Link>
            </div>
            <div>Cantidad en stock: {stock}</div>
            <div>Precio: ${precio} </div>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    )
}
export default Items