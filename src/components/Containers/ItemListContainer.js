import ItemList from "../Logic/ItemList"
import { useEffect, useState } from "react"
import { getProductos } from "../../App/api"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greetings }) => {
    const {categoryId} = useParams()
    const [products, setProduct] = useState({});
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductos().then((data) => {
            const filteredData = data.filter(products => products.category == categoryId)
            setCategory(filteredData)
            setProduct(data)
            setLoading(false)
        })
    }, [categoryId])
    if (loading) {
        return (
            <div className='loadingContainer'>
                <h1 className='loading'>LOADING</h1>
            </div>
        )
    }
    return (
        <div className="itemList">{greetings}
            <ItemList datos={products} filter={category} category={categoryId} />
        </div>
    )
}

export default ItemListContainer