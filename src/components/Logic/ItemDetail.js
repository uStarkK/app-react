import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className='productos'>
            <div>{product.producto}</div>
            <div>Marca: {product.marca}</div>
            <div>
                <img src={product.picURL} alt={product.producto}></img>
            </div>
            <div>Cantidad en stock: {product.stock}</div>
            <div>Precio: ${product.precio} </div>
    </div> 

  )
}

export default ItemDetail