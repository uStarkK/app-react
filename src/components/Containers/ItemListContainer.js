import ItemList from "../Logic/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItems } from "../../App/api"

const ItemListContainer = ({ greetings }) => {
    const {categoryId} = useParams()
    const [products, setProducts] = useState({});
    const [category, setCategory] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getItems("productos").then((data) => {
            const filteredData = data.filter(products => products.category == categoryId)
            setCategory(filteredData)
            setProducts(data)
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