import React from 'react'
import Items from './Items'

const ItemList = ({ datos, category, filter }) => {
    return (
        <>
        <div className='productContainer'>
            
            {
                filter.length===0 ?
                datos.map((datos, id) => <Items key={id} id={datos.id} nombre={datos.producto} marca={datos.marca} precio={datos.precio} stock={datos.stock} pictureUrl={datos.picURL} category={datos.category}/>)
                :
                filter.map((datos, id) => <Items key={id} id={datos.id} nombre={datos.producto} marca={datos.marca} precio={datos.precio} stock={datos.stock} pictureUrl={datos.picURL} category={category}/>)
            }
        </div>
        </>
    )
}
export default ItemList