

import { useContext } from "react";

import { UserContext } from "./UserContext";

const Home = () => {

    const { user } = useContext(UserContext);


return(
    <h1>Welcome back {user.username} =D</h1>
)

}




export default Home