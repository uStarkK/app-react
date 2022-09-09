import ItemCount from "../Logic/ItemCount"
import ItemList from "../Logic/ItemList"
import { useEffect, useState } from "react"
import { getProductos } from "../../App/api"


const ItemListContainer = ({ greetings }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductos().then((data) => {
            setProduct(data)
        })
    }, [])
    return (
        <div className="itemList">{greetings}
            <ItemList datos={product} />
        </div>

    )
}

export default ItemListContainer