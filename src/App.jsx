import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import AddProducts from './Pages/CreateProducts'
import Header from './Components/Header'
import Footer from './Components/Footer'



const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/AddProducts' element={<AddProducts />} />

        <Route path='*' element={<PageNotFound />} />


      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App