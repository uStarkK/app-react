import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App/carrito'

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart, inCart } = useContext(CartContext)
  let c = 0;
  
  const onAdd = (stock, count, initial) => {
    if (stock > 0) {
      const newProduct = {
        nombre: product.producto,
        precio: product.precio,
        marca: product.marca,
        cantidad: count + initial,
        id: product.id,
        img: product.picURL,
        cat: product.category,
        stock: product.stock
      }
      if(inCart(newProduct)){
        console.log("Item en carrito")
      } else{
        addToCart(newProduct)
      }
      c = initial
      setCount(c)

    } else if (stock <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo sentimos, no hay stock de este producto',
        footer: '<a href="https://www.youtube.com/watch?v=jJzNszDGn9U&ab_channel=FARENH" target="_blank">Qué hará este botón?</a>'
      });
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
            <Link to="/cart">Finalizar compra</Link>
            <Link to="/products/">Continuar con la compra</Link>
          </div>
      }
    </div>

  )
}

export default ItemDetail