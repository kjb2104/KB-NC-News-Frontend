import axios from "axios";



const getArticles = () => {
    return axios.get('https://newsbase.onrender.com/api/articles').then((res) =>{
    
       return  res.data
    })
}

const fetchArticleById = (article_id) => {

    return axios.get(`https://newsbase.onrender.com/api/articles/${article_id}`).then((res) => {
      
        return res.data.article
    })
}
const fetchCommentsForArticle =(article_id) =>{
    return axios.get(`https://newsbase.onrender.com/api/articles/${article_id}/comments`).then((res) => {
      
        return res.data.comments
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


export { getArticles, getUsers, getTopics, fetchArticleById, fetchCommentsForArticle }