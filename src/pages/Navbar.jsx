import {Link} from "react-router-dom"

const Navbar = () => {

    return(
        <div>
        <nav class="navbar">
    
            <Link to = "/">Home</Link>
            <Link to = "/shop">Shop</Link>
        
        </nav>

        </div>




    )
}
export default Navbar

