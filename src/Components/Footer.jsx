import React from 'react'
import { useNavigate } from 'react-router-dom'



const Footer = () => {

    const navigate = useNavigate()

    return (
        <>
            <h4 onClick={() => navigate("ImageURLs")}>If You Want - Get Image URL Here. Only For Testing...</h4>
        </>
    )
}

export default Footer
