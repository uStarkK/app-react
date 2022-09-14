import { Link } from "react-router-dom"
import CartWidget from "../Logic/CartWidget"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navBarElement"><img className="logo" src="../logo.png" alt="logo"/></div>
            <div className="navBarElement"><Link to="/"> Inicio</Link></div>
            <div className="navBarElement"><Link to={"/products/"}>Productos</Link></div>
            <div className="navBarElement"><Link to="/"> Nosotros</Link></div>
            <div className="navBarElement"><Link to="/"> Contacto</Link></div>
            <div className="navBarElement"><Link to="/"> Log-In</Link></div>
            <CartWidget/>
        </div>
    )
}

export default NavBar