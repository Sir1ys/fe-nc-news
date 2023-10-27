import React from "react";
import ArticleList from "../ArticleList";

export default function TopicPage({ articles, setArticles, loading, topic }) {
  const articlesList = [...articles].filter(
    (article) => article.topic === topic
  );

  return (
    <ArticleList
      loading={loading}
      articles={articlesList}
      setArticles={setArticles}
    />
  );
}
