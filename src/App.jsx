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

  const HandleAdCart = (e, data) => {
    const isInCart = cartItem.some(item => item.id === data.id);

    if (!isInCart) {
      setCartItems(prev => [...prev, data]);
      setCartProductsCount(prevCount => prevCount + 1);
    }
    else {
      setCartItems(prev => prev.filter(item => item.id !== data.id));
      setCartProductsCount(prevCount => prevCount - 1);
    }
  };

  const handleDeleteBtn = (item) => {
    const updatedCart = cartItem.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);
    setCartProductsCount(pre => pre - 1)
  };




  return (
    <BrowserRouter>
      <div id="MainApp">

        <Header CartProductsCount={cartProductsCount} />

        <Routes>

          <Route path='/' element={<Home HandleAdCart={HandleAdCart} cartItem={cartItem} />} />
          <Route path='/CreateProducts' element={<CreateProducts />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} handleDeleteBtn={handleDeleteBtn} />} />
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