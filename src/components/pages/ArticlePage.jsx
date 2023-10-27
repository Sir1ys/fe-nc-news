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
      {article === null ? (
        <div className="article-not-found">
          <h2>Error 404</h2>
          <h3>Woops. Looks like this article doesn't exist.</h3>
        </div>
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
