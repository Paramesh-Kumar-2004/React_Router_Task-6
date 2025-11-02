import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"



const Home = () => {

    const navigate = useNavigate()

    return (
        <div>

            <h1>Products</h1>

            <div style={{ display: "flex", justifyContent: "end" }}>
                <button onClick={() => navigate("/CreateProducts")} id="CreateButton">Create Product</button>
            </div>

        </div>
    )
}

export default Home