import React from "react";
import ArticleList from "../ArticleList";

export default function CodingPage({ articles, loading }) {
  const codingArticles = [...articles].filter(
    (article) => article.topic === "coding"
  );

  return <ArticleList loading={loading} articles={codingArticles} />;
}