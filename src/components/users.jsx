import { getUsers } from "../utils/api"
import {useEffect, useState} from "react"

    const Users = () => {

        const [isLoading, setIsLoading] = useState(false)
        const [users, setUsers] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        getUsers().then(({users}) => {
            console.log(users)
            setUsers(users)
            setIsLoading(false)
    }) }, [])
    

    if(isLoading){
        return <p className="Loading">Loading...</p>
    }


    return (
        <ol className="User_list">
            {users.map((user) => (
                <li key={user.username}>
                    <h1>Name: {user.name}</h1>
                    </li>
            ))}
        </ol>
    )

    }
    
export default Users