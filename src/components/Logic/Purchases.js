import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getItems } from '../../App/api'
import PurchaseDetail from './PurchaseDetail'
const Purchases = () => {
    const [purchases, setPurchases] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems("usuarios").then((data) => {
            setPurchases(data)
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
        <div>
            <p className='info'>Aqui podrás ver los IDs de tus compras en nuestra web!</p>
            <div>
                {purchases.map((ele, id) => <div className='purchasesId' key={id}><Link to={ele.id}>{ele.id}</Link></div>)}
            </div>
        </div>
    )
}

export default Purchases