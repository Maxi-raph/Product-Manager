import { useNavigate } from "react-router";


const Products = ({products,deleteProduct}) => {
    const navigate = useNavigate()
    return ( <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> 
        {products.map((prod,i)=>{
            return(
                <div key={prod.id} className="bg-gray-600 p-4 rounded-lg">
                    <img src={prod.image} alt={prod.image} className="w-full h-64 mb-2 rounded-md border-2 border-black mx-auto"/>
                    <h1 className="mb-4 font-bold text-center text-lg">{prod.name}</h1>
                    <div className="flex justify-between">
                    <p className="mb-2 text-md">Category: {prod.category}</p>
                    <p className="mb-2 text-md">Price: ${prod.price}</p>
                    </div>
                    <div className="flex justify-between">
                    <button className="w-16 py-1 bg-white text-black rounded-lg font-semibold text-sm mt-2 cursor-pointer" onClick={()=>navigate(`/edit/product/${prod.id}`)}>Edit</button>
                    <button className="w-16 py-1 bg-white text-black rounded-lg font-semibold mt-2 cursor-pointer" onClick={()=>deleteProduct(prod.id)}>Delete</button>
                    </div>                 
                </div>
            )
        })}
        {products.length === 0 && <p className="text-center font-semibold mt-4">No products to see here...</p>}
    </div> );
}
 
export default Products;