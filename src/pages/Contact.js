import React from 'react'
import NavBar from '../components/Containers/NavBar'
const Contact = () => {
    return (
        <div>
            <NavBar/>
            <div className='contacto'>
                <h1>Información de contacto
                    <p>Email: refa_chero@gmail.com </p>
                    <p>WhatsApp: +54 9 223 1234567</p>
                    <p>También puedes contactarnos por Instagram y Facebook!: Refa_chero</p>
                </h1>
            </div>
        </div>
    )
}

export default Contact