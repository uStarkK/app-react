import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navBarElement"><img className="logo" src="logo.png" alt="logo"/></div>
            <div className="navBarElement"><a href="">Inicio</a></div>
            <div className="navBarElement"><a href="">Productos</a></div>
            <div className="navBarElement"><a href="#">Nosotros</a></div>
            <div className="navBarElement"><a href="#">Contacto</a></div>
            <div className="navBarElement"><a href="#">LogIn</a></div>
            <CartWidget/>
        </div>
    )
}

export default NavBar