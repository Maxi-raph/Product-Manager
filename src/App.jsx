import { useState,useEffect } from 'react'
import {Routes, Route} from 'react-router'
import './App.css'
import Products from './components/Products'
import EditProduct from './components/EditProduct'
import NotFound from './components/NotFound'
import LoadingSpinner from './spinner/LoadingSpinner'

function App() {
  const [products, setProducts] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(null)

  const fetchProducts = async ()=>{
    try {
      const res = await fetch('/api/products')
      if(!res.ok) throw new Error('Failed to fetch products')
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  
useEffect(()=>{
  fetchProducts()
},[])

const deleteProduct = async (id)=>{
 await fetch(`/api/products/${id}`,{method:'DELETE'})
 fetchProducts()
}

const editProduct = async (id,newCategory,newPrice,setEdit,setIsEdited)=>{
  if(!newCategory || !newPrice)return
  await fetch(`/api/products/${id}`,{
  method:'PATCH',
  headers: { "Content-Type": "application/json" },
  body:JSON.stringify({
    category: newCategory,
    price: parseFloat(newPrice)
  })
})
 setEdit({category:'',price:''})
 setIsEdited(prev=>!prev)
 setTimeout(()=> setIsEdited(prev=>!prev)
,700)
 fetchProducts()
}

  return (
    <div className='p-6'>
      <h1 className='text-2xl mb-6'>Product Manager</h1>
      {loading && <LoadingSpinner/>}
      {!loading && !error && 
      <Routes>
        <Route path='/'  element={<Products products={products} deleteProduct={deleteProduct}/>}/>
        <Route path='/edit/product/:id' element={<EditProduct fetchProducts={fetchProducts} editProduct={editProduct}/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>}
    </div>
  )
}

export default App
