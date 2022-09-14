import React from 'react'
import Items from './Items'

const ItemList = ({ datos }) => {
    return (
        <>
        <div className='productContainer'>
            { 
            datos.map((datos, id) => <Items key={id} id={datos.id} nombre={datos.producto} marca={datos.marca} precio={datos.precio} stock={datos.stock} pictureUrl={datos.picURL}/>)
            }
        </div>
        </>
    )
}
export default ItemList