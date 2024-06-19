import { getUsers } from "../utils/api"
import {useEffect, useState} from "react"

    const Users = () => {

        const [isLoading, setIsLoading] = useState(false)
        const [users, setUsers] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        getUsers().then(({users}) => {
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
                    <h1>{user.username}</h1>
                    <p>Name: {user.name}</p>
                    </li>
            ))}
        </ol>
    )

    }

export default Users