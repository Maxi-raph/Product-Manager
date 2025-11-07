import { useState,useEffect } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'
import Products from './components/Products'
import EditProduct from './components/EditProduct'
import NotFound from './components/NotFound'
import LoadingSpinner from './spinner/LoadingSpinner'
import { useProducts } from './context/ProductContext'

function App() {
 const {loading,error} = useProducts()

  return (
    <div className='p-6'>
      <h1 className='text-2xl mb-6'>Product Manager</h1>
      {loading && <LoadingSpinner/>}
      {!loading && !error && 
      <Routes>
        <Route path='/'  element={<Products/>}/>
        <Route path='/edit/product/:id' element={<EditProduct/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>}
    </div>
  )
}

export default App
