import React from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({product}) => {
  const [count, setCount] = useState(0);
  let c = 0;
  const onAdd = (stock, count, initial) => {
    if (stock > 0 && initial > 0) {
        Swal.fire(
            `BUENARDO AGREGASTE ${count + initial} ${product.producto} "${product.marca}" AL CARRITO `,
            ``,
            'success')
            c = initial
            setCount(c)
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
            {
              count === 0 ? 
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                :
                <div className='countLinks'>
                  <Link to={"/cart"}>Terminar Compra</Link> 
                  <Link to={"/products/"}>Seguir comprando</Link>
                </div>
            }
    </div> 

  )
}

export default ItemDetail