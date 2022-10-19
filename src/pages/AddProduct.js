import { async } from "@firebase/util"
import { useEffect, useState } from "react"
import {getItems, createItem} from "../App/api"
const AddProduct = () => {
    const [product, setProduct] = useState()
    const [productDetails, setProductDetails] = useState()
    useEffect(() => {
        getItems().then(res => setProduct(res))
    }, [])
    return (
        <div>
            <div>
                <p>Agregar un producto:</p>
                <input type="text" onChange={e => setProductDetails(e.target.value) }></input>
                <button onClick={async() => {
                    await createItem({name: productDetails}, "productos")
                }}>Agregar producto</button>
            </div>
            <div>
                {product && product.map(ele => <p>{ele.name}</p>)}
            </div>
        </div>
    )
}

export default AddProduct