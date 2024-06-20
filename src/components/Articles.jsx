import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../Articles.module.css";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams("");

  const topicQuery = searchParams.get("topic");


  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topicQuery]);


  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  const sortByOldest = () => {
    let newArticles = [...articles];

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', 'oldest');
    setSearchParams(newParams);

    newArticles.sort((a, b) => {
      const aDate = new Date(a.created_at);
      const bDate = new Date(b.created_at);
      return aDate - bDate
    });

    setArticles(newArticles);
  };

  const sortByNewest = () => {

    let newArticles = [...articles];

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', 'newest');
    setSearchParams(newParams);

    newArticles.sort((a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        return bDate - aDate
      });
  
      setArticles(newArticles);
}
  

  const sortByUpvotes = () => {
    let newArticles = [...articles];

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', 'votes');
    setSearchParams(newParams);

    newArticles.sort((a, b) => {
      return b.votes - a.votes
    });

    setArticles(newArticles);
  };

  const sortByComments = () => {
    let newArticles = [...articles];

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort_by', 'comment_count');
    setSearchParams(newParams);

    newArticles.sort((a, b) => {
      return b.comment_count - a.comment_count
    });

    setArticles(newArticles);
  };



  return (
      <div>
        <label className="Sort by">
          Sort By -
        </label>
        <button
          className="sort-button"
          onClick={() => sortByUpvotes('vote')}
        >
         Most Upvoted
        </button>
        <button
          className="sort-button"
          onClick={() => sortByOldest('oldest')}>
            Oldest to Newest 
          </button>
          <button
          className="sort-button"
          onClick={() => sortByNewest('newest')}>
            Newest to Oldest 
          </button>
          <button
          className="sort-button"
          onClick={() => sortByComments('comment_count')}>
            Most Comments
          </button>


      <ul className={styles.Article_list}>
        {articles.map((article) => (
          <li key={article.article_id}>
            <h1>Click to Read:</h1>
            <Link to={"/articles/" + article.article_id}>
              <p>{article.title}</p>
            </Link>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <p>Comment Count:{article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
