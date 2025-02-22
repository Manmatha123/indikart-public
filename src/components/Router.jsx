import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/HomePage'
import ProductView from './productView/ProductView'
import Category from './category/Category'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProductView />} /> 
        <Route path="/category" element={<Category />} />
        
        </Routes>
    </>
  )
}

export default Router
