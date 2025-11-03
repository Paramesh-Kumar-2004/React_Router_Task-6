import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"
import { getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'
import img from "../assets/Obito_5.jpg"
import img2 from "../assets/Akatsuki_Members_11.jpg"



const Home = ({ HandleAdCart, cartItem }) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])


    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            setProducts(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            <div>
                <button onClick={() => navigate("/CreateProducts")} id="CreateButton">Create Product</button>
            </div>

            <h1 style={{ color: "white" }}>Products</h1>


            <Cards items={products} HandleAdCart={HandleAdCart} cartItem={cartItem} />


        </div>
    )
}

export default Home