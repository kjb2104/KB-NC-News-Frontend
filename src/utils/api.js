import axios from "axios";



const getArticles = () => {
    return axios.get('https://newsbase.onrender.com/api/articles').then((res) =>{
    
       return  res.data
    })
}

const getUsers = () =>{
    return axios.get('https://newsbase.onrender.com/api/users').then((res) => {
        
        return res.data
    })
}

const getTopics = () =>{
    return axios.get('https://newsbase.onrender.com/api/topics').then((res) => {
        return res.data
    })
}


export { getArticles, getUsers, getTopics }