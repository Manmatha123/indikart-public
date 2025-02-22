import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/HomePage'
import ProductView from './productView/ProductView'
import Addtocart from './Addtocart/Addtocart'


function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProductView />} />
        <Route path="/cart" element={<Addtocart />} />
        </Routes>
    </>
  )
}

export default Router
