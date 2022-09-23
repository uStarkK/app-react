import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App/Provider'
import Button from 'react-bootstrap/Button';


const CartContext = () => {
    const [state, setState] = useContext(AppContext)

    const removeCartItem = (id) => {
        state.splice(state.find(ele => ele.id == id))
    }
    const uniqueIds = []
    const uniqueProducts = state.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id)
        if (!isDuplicate) {
            uniqueIds.push(element.id)
            return true;
        }
        return false;
    });

console.log(uniqueProducts)
    
    return (
        <div className='cartContainer'>
            {uniqueProducts.map((item) =>
                <div key={item.id} className="productos">
                    <div>{item.nombre}</div>
                    <div>{item.marca}</div>
                    <div>Precio: ${item.precio}</div>
                    <div>Cantidad: {item.cantidad}</div>
                    <div>
                        <Link to={`/products/category/${item.cat}/${item.id}`}><img className="productImg" src={item.img} alt={item.nombre}></img></Link>
                    </div>
                </div>)}
            <div className='cartConfirm'>
                {
                    state.length === 0 ?
                        <h2>Su carrito está vacío</h2>
                        :
                        <div>
                            <Button variant="success">Confirmar compra</Button>
                            {/* <Button variant="danger" onClick={removeCartItem()}>Remover Elemento</Button> */}
                        </div>
                }
            </div>
        </div>
    )
}

export default CartContext