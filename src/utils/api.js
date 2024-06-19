import axios from "axios";

const getArticles = () => {
  return axios.get("https://newsbase.onrender.com/api/articles").then((res) => {
    return res.data;
  });
};

const fetchArticleById = (article_id) => {
  return axios
    .get(`https://newsbase.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data.article;
    });
};
const fetchCommentsForArticle = (article_id) => {
  return axios
    .get(`https://newsbase.onrender.com/api/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};

const getUsers = () => {
  return axios.get("https://newsbase.onrender.com/api/users").then((res) => {
    return res.data;
  });
};

const getTopics = () => {
  return axios.get("https://newsbase.onrender.com/api/topics").then((res) => {
    return res.data;
  });
};

const sendVoteByArticleId = (article_id) => {
  const patchBody = { inc_votes: 1 };
  return axios
    .patch(
      `https://newsbase.onrender.com/api/articles/${article_id}`,
      patchBody
    )
    .then((res) => {
      return res;
    });
};
const removeVoteByArticleId = (article_id) => {
  const patchBody = { inc_votes: -1 };
  return axios
    .patch(
      `https://newsbase.onrender.com/api/articles/${article_id}`,
      patchBody
    )
    .then((res) => {
      return res;
    });
};

const postCommentByArticleId = (article_id, body) => {
  const postBody = {
    article_id: article_id,
    body: body.body,
    author: body.author,
    votes: body.votes,
    created_at: body.created_at,
  };

  return axios
    .post(
      `https://newsbase.onrender.com/api/articles/${article_id}/comments`,
      postBody
    )
    .then((res) => {
      return res.data.comment;
    });
};

const removeComment = (comment_id) => {
    return axios
      .delete(
        `https://newsbase.onrender.com/api/comments/${comment_id}`,
      )
      .then((res) => {
    
        return res;
      });
  };

export {
  getArticles,
  getUsers,
  getTopics,
  fetchArticleById,
  fetchCommentsForArticle,
  sendVoteByArticleId,
  removeVoteByArticleId,
  postCommentByArticleId,
  removeComment,
};
