import ItemList from "../Logic/ItemList"
import { useEffect, useState } from "react"
import { getProductos } from "../../App/api"


const ItemListContainer = ({ greetings }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductos().then((data) => {
            setProducts(data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return (
            <div className='loadingContainer'>
                <h1 className='loading'>LOADING</h1>
            </div>
        )
    }
    return (
        <div className="itemList">{greetings}
            <ItemList datos={products} />

        </div>

    )
}

export default ItemListContainer