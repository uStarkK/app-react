import React from 'react'
import {useEffect, useState} from "react"
import { getProductos } from "../../App/api"
import { useParams } from 'react-router-dom'
import ItemDetail from '../Logic/ItemDetail'
const ItemDetailContainer = () => {
  const id = useParams()
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      getProductos().then((data) => {
          const filteredData = data.find(product => product.id == id.id)
          setProduct(filteredData)
          setLoading(false)
          console.log(filteredData, "ola")
      })
  }, [id.id])
  if (loading) {
      return (
          <div className='loadingContainer'>
              <h1 className='loading'>LOADING</h1>
          </div>
      )
  }
  return (
    <div className="itemDetail">
        <ItemDetail product={product}/>
       {/*  {console.log(product)} */}
    </div>
)
}


export default ItemDetailContainer




