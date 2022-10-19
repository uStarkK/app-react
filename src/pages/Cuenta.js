import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/Containers/NavBar'
import Purchases from '../components/Logic/Purchases'

const Cuenta = () => {
    const purchaseId = useParams()
    return (
        <div>
            <NavBar />
            <div className='info'>
                <p>Bienvenido querido Usuario!</p>
                <p>Te encuentras en la seccion de Tu Cuenta, aqui podrás revisar el ID de tus compras y acceder a ellos para obtener más información!</p>
            </div>
            <div>
                <div className="purchasesContainer">
                    <Purchases purchaseId={purchaseId}/>
                </div>
            </div>
        </div>
    )
}

export default Cuenta