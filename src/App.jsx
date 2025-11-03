import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import AddProducts from './Pages/CreateProducts'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateProducts from './Pages/CreateProducts'
import Cart from './Pages/Cart'
import ImageURLs from './Components/ImageURLs'

import "./index.css"


const App = () => {

  const [cartItem, setCartItems] = useState([])
  const [cartProductsCount, setCartProductsCount] = useState(0)

  const HandleAdCart = async (e, data) => {
    if (e.target.value === "Add To Cart") {
      if (!cartItem.includes(data.id)) {
        setCartItems((prev) => [...prev, data.id])
        setCartProductsCount(cartProductsCount + 1)
      }
    }
    else {
      console.log(e.target.value)
      if (cartItem.includes(data.id)) {
        setCartItems((prev) => prev.filter((itemId) => itemId !== data.id));
        setCartProductsCount((prevCount) => prevCount - 1);
      }
    }
  }
  console.log(cartItem)


  return (
    <BrowserRouter>
      <div id="MainApp">

        <Header CartProductsCount={cartProductsCount} />

        <Routes>

          <Route path='/' element={<Home HandleAdCart={HandleAdCart} cartItem={cartItem} />} />
          <Route path='/CreateProducts' element={<CreateProducts />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} />} />
          <Route path='/ImageURLs' element={<ImageURLs />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>

        <div style={{ textAlign: "center", width: "100%" }}>
          <Footer />
        </div>

      </div>

    </BrowserRouter >
  )
}

export default App