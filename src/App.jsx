import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import AddProducts from './Pages/CreateProducts'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateProducts from './Pages/CreateProducts'

import "./index.css"
import Cart from './Pages/Cart'


const App = () => {

  const [cartProductsCount, setCartProductsCount] = useState(0)

  return (
    <BrowserRouter>
      <div id="MainApp">

        <Header CartProductsCount={cartProductsCount} />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/CreateProducts' element={<CreateProducts />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<PageNotFound />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter >
  )
}

export default App