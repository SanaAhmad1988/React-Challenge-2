import {Link} from "react-router-dom"
import FirstImage from "../components/FirstImage"

const Home = () => {
    return(
    
        <div>
        <div class= 'text'>
        <h3>Bring your home to life</h3>
        
        <p>Elevate your living soace with a touch of nature.</p>
        <p>We offer a range of easy-care houseplants</p>
       
        <Link to ='./shop'><button>Browse Our Products</button></Link>
        <div><FirstImage/></div>
         </div>
       

         </div>
    )
}
export default Home
