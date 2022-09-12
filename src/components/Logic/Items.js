import React from 'react'
import ItemCount from './ItemCount'
import Swal from "sweetalert2"
const Items = ({ nombre, precio, stock, marca, pictureUrl }) => {
    const onAdd = (stock, count, initial) =>{
        if(stock>0 && initial>=1){
            Swal.fire(
                `BUENARDO AGREGASTE ${count + initial} PRODUCTOS AL CARRITO `,
                ``,
                'success')
            count = 0;
        } else if(stock<=0){
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
                <img src={pictureUrl} alt={nombre}></img>
            </div>
            <div>Cantidad en stock:{stock}</div>
            <div>Precio: ${precio} </div>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        </div>
    )
}
export default Items