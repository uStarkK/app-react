import { serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { createItem, getItems } from '../../App/api';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import NavBar from './NavBar';
import { CartContext } from '../../App/carritoContext';
const Account = () => {
    const {cart, clearCart, totalValue} = useContext(CartContext)

    const [dataForm, setDataForm] = useState({
        email: "",
        id: "",
        items: cart,
        total: totalValue,
    });

    const success = (id) => {
        Swal.fire({
            title: 'Buenardo',
            text: `Acá tenés el ID de tu compra: ${id}`,
            icon: 'success'
        })
    }

    function handleCheckout(e) {
        e.preventDefault();
        const orderData = {
            buyer: dataForm,
            date: serverTimestamp()
        }
        createItem(orderData, "usuarios").then(orderID => {
            success(orderID)
        })
    }
    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;
        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }
    return (
        <div>
            <span>
                <NavBar/>
            </span>
            <div>
                <p className='info'>Su compra está casi lista! El último paso es colocar su información para que podamos enviarle el producto!</p>
            </div>
            <div class="container_user">
                <form class="userInfo" onSubmit={handleCheckout}>
                    <fieldset>
                        <div>
                            <label style={{ display: "block" }} htmlFor="name">Nombre</label>
                            <input
                                defaultValue={dataForm.name}
                                onChange={inputChangeHandler}
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                required
                            />
                            <label style={{ display: "block" }} htmlFor="lastName">Apellido</label>
                            <input
                                defaultValue={dataForm.lastName}
                                onChange={inputChangeHandler}
                                name="lastName"
                                type="text"
                                placeholder="Apellido"
                                required
                            />
                            <label style={{ display: "block" }} htmlFor="telefono">Telefono</label>
                            <input
                                defaultValue={dataForm.phone}
                                onChange={inputChangeHandler}
                                name="phone"
                                type="number"
                                placeholder="Telefono"
                                required
                            />
                            <label style={{ display: "block" }} htmlFor="email">Email</label>
                            <input
                                defaultValue={dataForm.email}
                                onChange={inputChangeHandler}
                                name="email"
                                type="text"
                                placeholder="Correo"
                                required
                            />
                            <label style={{ display: "block" }} htmlFor="direccion">Dirección de Entrega</label>
                            <input
                                defaultValue={dataForm.adress}
                                onChange={inputChangeHandler}
                                name="adress"
                                type="text"
                                placeholder="Dirección"
                                required
                            />
                            <label style={{ display: "block" }} htmlFor="id">DNI</label>
                            <input
                                defaultValue={dataForm.userId}
                                onChange={inputChangeHandler}
                                name="userId"
                                type="number"
                                placeholder="DNI"
                                required
                            />
                        </div>
                        <div class="licencia">
                            <p> Acepta terminos y condiciones? <input type="checkbox" name="terminos_y_condiciones" id="check" required/></p>
                        </div>
                        <input type="submit" value="Finalizar compra" id="create-acc" onClick={clearCart}/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Account