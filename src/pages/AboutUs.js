import React from 'react'
import NavBar from '../components/Containers/NavBar'

const AboutUs = () => {
    return (
        <div><NavBar/>
        <div className='uwu'>
            <h1>Somos Refachero!:
                <p className='aboutUsP'>Un pequeño comercio dedicado a la venta online de productos, tales como alimentos, accesorios para el cuerpo y productos para la higiene y la limpieza</p>
                <p className='aboutUsP'>Llevamos más de 10 años en el mercado y contamos con el apoyo de más de 1000 fieles clientes que prefieren nuestro servicio</p>
                <p className='aboutUsP'>Nuestros productos son de la máxima calidad y provienen de los mejores productores disponibles. Podrás encontrar una gran variedad de artículos para el hogar y la vida cotidiana que no te defraudarán</p>
                <p className='aboutUsP'> Nuestra central se encuentra Mar del Plata, ciudad de la Provincia de Buenos Aires, Argentina. Contamos con envío gratis a cualquier parte del país!.</p>
                <p className='aboutUsP'>Lamentablemente, no realizamos envíos internacionales por el momento, lo sentimos! :(</p>
            </h1>
                
        </div>
        </div>
    )
}

export default AboutUs