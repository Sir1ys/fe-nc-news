import React from "react";
import ArticleList from "../ArticleList";

export default function FootballPage({ articles, loading }) {
  const footballArticles = [...articles].filter(
    (article) => article.topic === "football"
  );

  return <ArticleList loading={loading} articles={footballArticles} />;
}
