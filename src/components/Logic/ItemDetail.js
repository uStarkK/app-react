import React from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"

const ItemDetail = ({product}) => {
  const onAdd = (stock, count, initial) => {
    if (stock > 0 && initial > 0) {
        Swal.fire(
            `BUENARDO AGREGASTE ${count + initial} ${product.producto} "${product.marca}" AL CARRITO `,
            ``,
            'success')
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
            <div>{product.producto}</div>
            <div>Marca: {product.marca}</div>
            <div>
                <img className='detailImg' src={product.picURL} alt={product.producto}></img>
            </div>
            <div>Cantidad en stock: {product.stock}</div>
            <div>Precio: ${product.precio} </div>
            <div>{product.desc}</div>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
    </div> 

  )
}

export default ItemDetail