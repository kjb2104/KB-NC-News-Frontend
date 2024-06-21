import { getUsers } from "../utils/api"
import {useEffect, useState, useContext} from "react"
import styles from "../useres.module.css";
import { UserContext } from "./UserContext";

    const Users = () => {

        const [isLoading, setIsLoading] = useState(false)
        const [users, setUsers] = useState([])
        const [err, setErr] = useState(null)

        const {user} = useContext(UserContext)
    
    useEffect(() => {
        setIsLoading(true)
        getUsers().then(({users}) => {
            setUsers(users)
            setIsLoading(false)
    }).catch((err)=>{
        setErr(err)
    }) }, [])
    

    if(isLoading){
        return <p className="Loading">Loading...</p>
    }


    if (err) {
        return <ErrorComponent message={err} />;
      }
    return (
        <ol className={styles.User_list}>
            <h1>You are logged in as {user.username}</h1>
            {users.map((user) => (
                <li key={user.username}>
                    <h1>{user.username}</h1>
                    <p>Name: {user.name}</p>
                    </li>
            ))}
        </ol>
    )

    }

export default Users