import React from "react";
import ArticleList from "../ArticleList";

export default function Home({ articles, setArticles, loading }) {
  return (
    <ArticleList
      loading={loading}
      articles={articles}
      setArticles={setArticles}
    />
  );
}
