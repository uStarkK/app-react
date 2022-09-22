import React from 'react'
import { useEffect, useState } from "react"
import { getProductos } from "../../App/api"
import { useParams } from 'react-router-dom'
import ItemDetail from '../Logic/ItemDetail'
import NavBar from './NavBar'
const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductos().then((data) => {
            const filteredData = data.find(product => product.id == id)
            setProduct(filteredData)
            setLoading(false)

        })
    }, [id])
    if (loading) {
        return (
            <div className='loadingContainer'>
                <h1 className='loading'>LOADING</h1>
            </div>
        )
    }
    return (
        <div className="itemDetail">
            <NavBar/>
            <ItemDetail product={product} />
        </div>
    )
}


export default ItemDetailContainer




