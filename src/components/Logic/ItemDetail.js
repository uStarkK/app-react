import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App/carritoContext'

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart, isInCart, cart } = useContext(CartContext)

  const onAdd = (stock, count, initial) => {
    if (stock > 0) {
      const newProduct = {
        nombre: product.producto,
        precio: product.precio,
        marca: product.marca,
        cantidad: count,
        id: product.id,
        img: product.picURL,
        cat: product.category,
        stock: product.stock
      }
      if (isInCart(newProduct)) {
        console.log("Item en carrito")
        const index = cart.map(ele => ele.nombre).indexOf(newProduct.nombre)
        cart[index].cantidad = newProduct.cantidad
        console.log(cart[index])
      } else {
        addToCart(newProduct)
      }
      setCount(1)

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
    <div className='productDetailContainer'>
      <div className='productosDetail'>
        <div>{product.producto}</div>
        <div>Marca: {product.marca}</div>
        <div>
          <img className='detailImg' src={product.picURL} alt={product.producto}></img>
        </div>
        <div>Cantidad en stock: {product.stock}</div>
        <div>Precio: ${product.precio} </div>
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
      <div className='productDescr'>
        <p>{product.desc}</p>
        <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium animi. Facere magni esse itaque repellendus voluptates nam porro, illum est ullam consectetur, repellat doloremque, sapiente vel ducimus asperiores id.</p>
      </div>
    </div>
  )
}

export default ItemDetail