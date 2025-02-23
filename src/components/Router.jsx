import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/HomePage'
import ProductView from './productView/ProductView'
import User from './userinfo/User'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProductView />} />
        <Route path="/user" element={<User />} />
        </Routes>
    </>
  )
}

export default Router
