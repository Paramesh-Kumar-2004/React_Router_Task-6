import React from 'react'
import Logo from "../../public/VP.jpg"
import "../Styles/Header.css"
import { Navigate, useNavigate } from 'react-router-dom'



const Header = ({ CartProductsCount }) => {

    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: 14, color: "white", alignItems: "center" }}>
                <img src={Logo} alt="Logo" width={26} />
                <h1>VP</h1>
            </div>

            <div style={{ marginRight: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => navigate("/cart")} id='SubmitButton' >Cart</button>
                <p>{CartProductsCount}</p>
            </div>



        </div >
    )
}

export default Header