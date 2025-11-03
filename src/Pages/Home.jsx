import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"
import { getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'



const Home = () => {

    const navigate = useNavigate()
    // const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([
        { title: "1", image: "NO", price: 2004 },
        { title: "2", image: "NO", price: 2004 },
        { title: "3", image: "NO", price: 2004 },
    ])

    useEffect(() => {
        // fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            setProducts(response)
            console.log(response)
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

            <Cards items={products2} />

        </div>
    )
}

export default Home