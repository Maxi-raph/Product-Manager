import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";


const NotFound = () => {
    return (  <>
    <Link to={'/'} className="mb-4 mr-12 flex justify-end items-center text-lg font-semibold text-blue-600"><FaArrowLeft size={18} className="mr-1"/>
Go Back To Products</Link>
    <div className="flex flex-col items-center mt-24 space-y-3">
        <span className="text-blue-600 text-3xl">ERROR 404</span>
        <p className="text-2xl">Page Not Found</p>
    </div>
    </> );
}
 
export default NotFound;