import {useState, useEffect, useContext, createContext} from 'react'


const ProductContext = createContext()

export const ProductProvider = ({children})=>{


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

    return(
        <ProductContext.Provider value={{loading,error,products,deleteProduct,fetchProducts,editProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = ()=>useContext(ProductContext)