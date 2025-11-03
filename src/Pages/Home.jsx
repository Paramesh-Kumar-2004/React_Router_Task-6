import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"
import { getProducts } from '../API/API_Call'
import Cards from '../Components/Cards'



const Home = () => {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

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

            {/* {products.map((item) => { */}
            <Cards item={item} />
            {/* }) */}
            {/* } */}

        </div>
    )
}

export default Home