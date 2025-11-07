import { useEffect, useState } from "react";
import { useParams,Link } from "react-router";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useProducts } from "../context/ProductContext";


const EditProduct = () => {
const [edit,setEdit] = useState({category:'',price:''})
const [isEdited,setIsEdited] = useState(false)

const {id} = useParams()
const {editProduct} = useProducts()
 
    useEffect(()=>{
  const handleEnter = (e)=> e.key === 'Enter' ? editProduct(id,edit.category,edit.price,setEdit,setIsEdited):''

        window.addEventListener('keydown',handleEnter)

        return ()=> window.removeEventListener('keydown',handleEnter)
    },[id,edit])

    return ( <>
    <Link to={'/'} className="mb-4 mr-6 flex justify-end items-center text-md font-semibold text-blue-600"><FaArrowLeft size={18} className="mr-1"/>
Go Back To Products</Link>
    <div className="max-w-lg bg-gray-600 p-6 rounded-lg mx-auto">
        <p  className={`flex justify-center absolute right-1/3 items-center text-lg font-semibold transition-all duration-600 ${isEdited ? 'opacity-100' : ' opacity-0 '}` }>Edited <FaCheckCircle size={'18px'} className=" text-green-600 ml-1"/></p>
        <label htmlFor="category" className="font-semibold mb-2 block text-lg">Edit Category:</label>
        <input type="text" className="p-2 w-full rounded-lg bg-white text-black mb-4 placeholder:text-gray-600" placeholder="Enter new category here..." name="category" value={edit.category} onChange={(e)=>setEdit(prev=>({...prev,[e.target.name]:e.target.value}))}/>
                <label htmlFor="category" className="font-semibold mb-2 block text-lg">Edit Price:</label>
        <input type="number" className="p-2 w-full rounded-lg bg-white text-black mb-4 placeholder:text-gray-600" placeholder="Enter new price here..." name="price" value={edit.price} onChange={(e)=>setEdit(prev=>({...prev,[e.target.name]:parseFloat(e.target.value)}))}/>
        <button className="w-32 p-2 bg-white mx-auto block shadow-md shadow-gray-800 text-black rounded-lg font-semibold mt-2 cursor-pointer" onClick={()=>editProduct(id,edit.category,edit.price,setEdit,setIsEdited)}>Edit Product</button>
    </div> 
    </>);
}
 
export default EditProduct;