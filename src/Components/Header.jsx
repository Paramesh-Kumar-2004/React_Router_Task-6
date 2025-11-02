import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import CartLogo from "../assets/Cart.png"
import Logo from "../../public/VP.jpg"
import "../Styles/Header.css"



const Header = ({ CartProductsCount }) => {

    const navigate = useNavigate()

    return (
        <div id='HeaderDiv'>

            <div id='MainLogo'>
                <a href="https://github.com/Paramesh-Kumar-2004" target='b'>
                    <img src={Logo} alt="Logo" width={26} />
                </a>
                <h1 onClick={() => navigate("/")}>VP</h1>
            </div>

            <div id='CartDiv'>
                <div onClick={() => navigate("/cart")} id='CartLogo' ></div>
                <p className='CartCount'>{CartProductsCount}</p>
            </div>



        </div >
    )
}

export default Header