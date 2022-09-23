import NavBar from "../components/Containers/NavBar"
import ItemListContainer from '../components/Containers/ItemListContainer';
import { Link } from "react-router-dom";

const Productos = () => {
    return (
        <div>
            <NavBar/>
            <h1 className="categoryH1">Categorias</h1>
            <div className="categoryElement">
                <Link to="/products/category/food"> Alimentos </Link>
                <Link to="/products/category/cleaning"> Limpieza </Link>
                <Link to="/products/category/accesories"> Accesorios </Link>
            </div>
            <ItemListContainer greetings="Aqui podra buscar y añadir productos al carrito"/>
        </div>
    )
}

export default Productos