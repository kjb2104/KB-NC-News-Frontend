import axios from "axios";



const getArticles = () => {
    return axios.get('https://newsbase.onrender.com/api/articles').then((res) =>{
    
       return  res.data
    })
}

const getUsers = () =>{
    return axios.get('https://newsbase.onrender.com/api/users').then((res) => {
        console.log(res.data)
        return res.data
    })
}

export { getArticles, getUsers }