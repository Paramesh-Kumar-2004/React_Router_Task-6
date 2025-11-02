import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "../Styles/Home.css"



const Home = () => {

    const navigate = useNavigate()

    return (
        <div>

            <div>
                <button onClick={() => navigate("/CreateProducts")} id="CreateButton">Create Product</button>
            </div>

            <h1 style={{ color: "white" }}>Products</h1>

        </div>
    )
}

export default Home