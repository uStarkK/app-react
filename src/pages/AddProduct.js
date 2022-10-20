import { async } from "@firebase/util"
import { useEffect, useState } from "react"
import {getItems, createItem} from "../App/api"
import NavBar from "../components/Containers/NavBar"
import Swal from "sweetalert2"
const AddProduct = () => {
    const [product, setProduct] = useState()
    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productBrand, setProductBrand] = useState()
    const [productStock, setProductStock] = useState()
    const [productDesc, setProductDesc] = useState()
    const [productCategory, setProductCategory] = useState()
    const [productImg, setProductImg] = useState()

    const success = () => {
        Swal.fire({
            title: 'Buenardo',
            text: `Añadiste un producto nuevo`,
            icon: 'success'
        })
    }
    useEffect(() => {
        getItems().then(res => setProduct(res))
    }, [])

    return (
        <div>
            <div><NavBar/></div>
            <div className="addProduct">
                <p className="info">Agregar un producto:</p>
                <input type="text" placeholder="Producto" onChange={e => setProductName(e.target.value) } required></input>
                <input type="number" min={1} max={9999} placeholder="Precio" onChange={e => setProductPrice(e.target.value) }required></input>
                <input type="text" placeholder="Marca"  onChange={e => setProductBrand(e.target.value) }required></input>
                <input type="number" placeholder="Stock" min={1} max={99}  onChange={e => setProductStock(e.target.value) }required></input>
                <p className="info">Ingrese una descripción del producto</p>
                <textarea style={{height: 130, width:250}} placeholder="Descripción"  onChange={e => setProductDesc(e.target.value) }required></textarea>
                <p className="info">Ingrese categoria</p>
                <input type="text" style={{width:250}} placeholder="food, accesories, cleaning" onChange={e => setProductCategory(e.target.value) }required></input>
                <p className="info">Añada la ruta de la imagen de su producto, por defecto ../../images/"nombre de la imagen".png/jpg:</p>
                <input type="text" placeholder="Imagen" onChange={e => setProductImg(e.target.value) }required></input>
                <button onClick={async() => {
                    await createItem({producto: productName, precio: productPrice, category: productCategory, desc: productDesc, marca: productBrand, picURL: productImg, stock: productStock}, "productos")
                    success()
                }}>Agregar producto</button>
            </div>
            <div>
                {product && product.map(ele => <p>{ele.name}</p>)}
            </div>
        </div>
    )
}

export default AddProduct