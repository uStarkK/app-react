import NavBar from "../components/Containers/NavBar"
import ItemListContainer from '../components/Containers/ItemListContainer';

const Productos = () => {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greetings="Aqui podra buscar y añadir productos al carrito"/>
        </div>
    )
}

export default Productos