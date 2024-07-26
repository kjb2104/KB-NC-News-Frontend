import Users from './users'
import Articles from './Articles'
import Topics from './topics'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from "../nav.module.css";
import image from "../assets/newsbase_logo.png"

const Nav = () => {


return(

    <nav className={styles.Nav}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
      <img className={styles.img} src={image}/>
      </li>
    </ul>
  </nav>
)

}

export default Nav