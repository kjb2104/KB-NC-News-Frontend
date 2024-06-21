

import { useContext } from "react";

import { UserContext } from "./UserContext";

import styles from "../home.module.css";

const Home = () => {

    const { user } = useContext(UserContext);


return(
    <h1 className={styles.user}>Welcome back {user.username} =D</h1>
)

}




export default Home