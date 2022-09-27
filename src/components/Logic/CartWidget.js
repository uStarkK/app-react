import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../App/carrito';
import ItemCount from './ItemCount';

const CartWidget = () => {
    const { cart, clearCart } = useContext(CartContext)


    return (
        <div className='cartContainer'>
            {cart.map((item) =>
                    <div key={item.id} className="productos">
                        <div>{item.nombre}</div>
                        <div>{item.marca}</div>
                        <div>Precio: ${item.precio}</div>
                        <div>
                            <Link to={`/products/category/${item.cat}/${item.id}`}><img className="productImg" src={item.img} alt={item.nombre}></img></Link>
                        </div>
                        <ItemCount cart="yes" product={item} />
                    </div>
                    )}

            <div className='cartConfirm'>
                {
                    cart.length === 0 ?
                        <h2>Su carrito está vacío</h2>
                        :
                        <div>
                            <Button variant="success">Confirmar compra</Button>
                            <Button variant="success" onClick={() => clearCart()}>Limpiar Carrito</Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartWidget