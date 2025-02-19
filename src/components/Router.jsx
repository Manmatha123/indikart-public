import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './homepage/HomePage'
import ProductView from './productView/ProductView'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ProductView />} />
        </Routes>
    </>
  )
}

export default Router
