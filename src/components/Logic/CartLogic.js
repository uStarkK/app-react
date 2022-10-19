import { useContext, useEffect, useState } from 'react'
import { CloseButton, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { CartContext } from '../../App/carritoContext';
import ItemCount from './ItemCount';

const CartLogic = () => {
    const { cart, clearCart, totalValue, deleteItem } = useContext(CartContext)
    const [totalItems, setTotalItems] = useState(0)

    const totalCart = () => {
        const total = cart.map(ele => ele.cantidad);
        setTotalItems(
            total.reduce(function (prevValue, currentValue) {
                return prevValue + currentValue;
            })
        )
    }


    useEffect(() => {
        if (cart.length > 0) {
            totalCart()
        }
    }, [cart, totalItems, totalCart])
    return (
        <div className='cartContainer'>
            <div className="listContainer">
                {cart.map((item) =>
                    <div key={item.id} className="cartProductos">
                        <div className='closeContainer'>
                            <CloseButton className="close" onClick={() => deleteItem(item)}></CloseButton>
                        </div>
                        <div>{item.nombre}</div>
                        <div>"{item.marca}"</div> 
                        <div>Precio Individual: ${parseInt(item.precio)}</div>
                        <div>Precio Total: ${parseInt(item.precio) * item.cantidad}</div>
                        <div>
                            <Link to={`/products/category/${item.cat}/${item.id}`}><img className="productImg" src={item.img} alt={item.nombre}></img></Link>
                        </div>
                        <ItemCount isCart="yes" product={item} />
                    </div>
                )}
            </div>
            <div className='cartConfirm'>
                {
                    cart.length === 0 ?
                        <h2>Su carrito está vacío</h2>
                        :
                        <div>
                            <p>Total: ${totalValue}</p>
                            <Link to="/cart/confirmPurchase/"><Button variant="success">Confirmar compra</Button></Link>
                            <Button variant="success" onClick={() => clearCart()}>Limpiar Carrito</Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartLogic