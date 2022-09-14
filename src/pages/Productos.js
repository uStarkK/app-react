import NavBar from "../components/Containers/NavBar"
import ItemListContainer from '../components/Containers/ItemListContainer';
import ItemDetailContainer from '../components/Containers/ItemDetailContainer';

const Productos = () => {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greetings="Aqui podra buscar y añadir productos al carrito"/>
            <ItemDetailContainer />
        </div>
    )
}

export default Productos