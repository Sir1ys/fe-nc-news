import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";
import ArticleCard from "../ArticleCard";
import CommentsList from "../CommentsList";

export default function ArticlePage({ setArticles }) {
  const location = useLocation();
  const { state: article } = location;

  const { userAuthorizedState } = useContext(UserContext);
  const [userAuthorized] = userAuthorizedState;

  return (
    <section className="article">
      {Object.keys(article).length === 0 ? (
        <h2>No article found</h2>
      ) : (
        <>
          <ArticleCard
            article={article}
            userAuthorized={userAuthorized}
            setArticles={setArticles}
          />
          <CommentsList
            articleId={article.article_id}
            userAuthorized={userAuthorized}
          />
        </>
      )}
    </section>
  );
}
