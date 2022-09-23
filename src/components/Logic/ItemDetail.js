import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
import { useState } from 'react'
import { AppContext } from '../../App/Provider'
import { Link } from 'react-router-dom'
const ItemDetail = ({product}) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useContext(AppContext)
  let c = 0;
  const isDuplicate = () => {state.some(ele => ele.id == product.id)}
  const onAdd = (stock, count, initial) => {
    if (stock > 0 && initial > 0) {
        Swal.fire(
            `BUENARDO AGREGASTE ${count + initial} ${product.producto} "${product.marca}" AL CARRITO `,
            ``,
            'success')
            c = initial
            setCount(c)

            const newProduct ={ 
              nombre: product.producto,
              precio: product.precio,
              marca: product.marca,
              cantidad: count + initial,
              id: product.id,
              img: product.picURL,
              cat: product.category
            }
            
            console.log(isDuplicate(), "sexo")
            if(isDuplicate()==true){
              const productIncrease = state.find(ele => ele.nombre == product.producto);
              console.log(productIncrease)
            } else{
              setState([...state, newProduct])
              console.log(newProduct)
            }
            

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