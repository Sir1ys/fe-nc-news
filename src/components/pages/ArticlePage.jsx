import React from "react";
import ArticleCard from "../ArticleCard";
import CommentsList from "../CommentsList";
import { useLocation } from "react-router-dom";

export default function ArticlePage() {
  const location = useLocation();
  const { state: article } = location;

  return (
    <section className="article">
      {Object.keys(article).length === 0 ? (
        <h2>No article found</h2>
      ) : (
        <>
          <ArticleCard article={article} />
          <CommentsList articleId={article.article_id} />
        </>
      )}
    </section>
  );
}