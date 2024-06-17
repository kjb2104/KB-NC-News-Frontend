import Articles from "./Articles"
import axios from 'axios'


const Nav = () => {


return(

    <nav className="nav">
        <Link to={Articles} className="nav_link">
        Articles 
        </Link>
    </nav>
)

}

export default Nav