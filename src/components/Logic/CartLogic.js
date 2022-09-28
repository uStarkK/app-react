import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../App/carritoContext';
import ItemCount from './ItemCount';

const CartLogic = () => {
    const { cart, clearCart, totalValue } = useContext(CartContext)
    const [totalItems, setTotalItems] = useState(0)
    const [itemValue, setItemValue] = useState(0)

    const totalCart = () => {
        const total = cart.map(ele => ele.cantidad);
        setTotalItems(
            total.reduce(function (prevValue, currentValue) {
                return prevValue + currentValue;
            })
        )
    }

    const getItemValue = (item) => {
        const total = cart.map(ele => ele.precio == item.nombre)
        setItemValue(parseInt(total) * item.cantidad)
        return itemValue
    }

    useEffect(() => {
        if (cart.length > 0) {
            totalCart()
        }
    }, [cart, totalItems, totalCart])
    console.log(totalItems)
    return (
        <div className='cartContainer'>
            <div className="listContainer">
                {cart.map((item) =>
                    <div key={item.id} className="productos">
                        <div>{item.nombre}</div>
                        <div>{item.marca}</div>
                        <div>Precio Individual: ${parseInt(item.precio)}</div>
                        <div>Precio Total: ${parseInt(item.precio) * item.cantidad}</div>
                        <div>
                            <Link to={`/products/category/${item.cat}/${item.id}`}><img className="productImg" src={item.img} alt={item.nombre}></img></Link>
                        </div>
                        <ItemCount cart="yes" product={item} />
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
                            <Button variant="success">Confirmar compra</Button>
                            <Button variant="success" onClick={() => clearCart()}>Limpiar Carrito</Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartLogic