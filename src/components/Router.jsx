import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/HomePage'
import ProductView from './productView/ProductView'
import Category from './category/Category'
import Addtocart from './Addtocart/Addtocart'

import User from './userinfo/User'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProductView />} /> 
        <Route path="/category" element={<Category />} />
        
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/user" element={<User />} />
        </Routes>
    </>
  )
}

export default Router
