import React from "react";
import ArticleList from "../ArticleList";

export default function CookingPage({ articles, setArticles, loading }) {
  const cookingArticles = [...articles].filter(
    (article) => article.topic === "cooking"
  );

  return (
    <ArticleList
      loading={loading}
      articles={cookingArticles}
      setArticles={setArticles}
    />
  );
}
