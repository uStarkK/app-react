import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItemById } from "../../App/api"
import NavBar from "../Containers/NavBar"

const PurchaseDetail = () => {
    const {purchaseId} = useParams()
    const [purchase, setPurchase] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getItemById(purchaseId, "usuarios").then((data) => {
            const filteredId = data;
            setPurchase(filteredId)
            setLoading(false)
        })
    }, [])

    

    if (loading) {
        return (
            <div className='loadingContainer'>
                <h1 className='loading'>LOADING</h1>
            </div>
        )
    }
    /* const purchaseValue = Object.values(purchase)
    const buyer = purchaseValue.slice(0, 1) */
    const {buyer} = purchase
    const {date} = purchase
    const {seconds} = date

    function toDateTime(secs) {
        const t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(secs);
        return t;
    }
    let normalDate = new Date(seconds * 1000).toLocaleString('es-MX',{timeZone:'America/Santiago'})
    console.log(normalDate)

    return (
        <>
            <div>
            <NavBar/>
            </div>
                    <div className="dataContainer">
                        <div className="buyerInfo">
                            <div> Nombre(s): {buyer.name}</div>
                            <div> Apellido(s) {buyer.lastName}</div>
                            <div> Dirección de entrega: {buyer.adress}</div>
                            <div> Número de contacto: {buyer.phone}</div>
                            <div> DNI: {buyer.userId}</div>
                            <div> Dirección de correo electrónico: {buyer.email}</div>
                            <div> Fecha y hora de la compra: {normalDate}</div>
                        </div>
                        <div className="purchaseContainer">
                            {buyer.items.map((item, index) => 
                                <div key={index} className="purchaseDetail">
                                    <div>Producto:{item.nombre}</div>
                                    <div>Marca:{item.marca}</div>
                                    <div>Cantidad: {item.cantidad}</div>
                                    <div>
                                        <img className="productImg" src={item.img} alt={item.nombre}></img>
                                    </div>
                                    <div>${item.precio}</div>
                                </div>
                            )}
                    </div>
                
            </div>
            </>
    )
}

export default PurchaseDetail