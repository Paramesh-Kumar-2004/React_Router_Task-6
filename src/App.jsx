import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import PageNotFound from './Pages/PageNotFound'



const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App