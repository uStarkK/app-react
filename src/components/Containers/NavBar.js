import { Link } from "react-router-dom"
import CartWidget from "../Containers/CartWidget"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navBarElement"> <Link to="/"> <img className="logo" src="../logo.png" alt="logo"/></Link></div>
            <div className="navBarElement"><Link to="/home/"> Inicio</Link></div>
            <div className="navBarElement"><Link to={"/products/"}>Productos</Link></div>
            <div className="navBarElement"><Link to="/aboutus/"> Nosotros</Link></div>
            <div className="navBarElement"><Link to="/contact/"> Contacto</Link></div>
            <div className="navBarElement"><Link to="/login/"> Log-In</Link></div>
            <CartWidget/>
        </div>
    )
}

export default NavBar