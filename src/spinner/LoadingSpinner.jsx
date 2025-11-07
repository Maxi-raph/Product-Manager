import {BarLoader} from 'react-spinners'

const LoadingSpinner = () => {
    return ( 
        <div className='flex justify-center'>
        <BarLoader size={'30px'} color='blue' />
        </div>
     );
}
 
export default LoadingSpinner;