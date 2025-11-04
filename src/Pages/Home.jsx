import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"
import { deleteProduct, getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'
import img from "../assets/Obito_5.jpg"
import img2 from "../assets/Akatsuki_Members_11.jpg"
import Loader from '../Components/Loader'



const Home = ({ HandleAdCart, cartItem }) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")

    const [products, setProducts] = useState([])
    const [deleteProductData, setDeleteProductData] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [deleteProductData])


    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            setProducts(response)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }

    const HandleDeleteBtn = async (data) => {
        try {
            const response = await deleteProduct(data.id)
            setDeleteProductData(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return (
            <div>
                <Loader loadingMessage={loadingMessage} />
            </div>
        )
    }

    return (
        <div>

            <Cards items={products} HandleAdCart={HandleAdCart} cartItem={cartItem} HandleDeleteBtn={HandleDeleteBtn} />

        </div>
    )
}

export default Home