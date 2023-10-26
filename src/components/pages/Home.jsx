import React from "react";
import ArticleList from "../ArticleList";

export default function Home({ articles, loading }) {
  return <ArticleList loading={loading} articles={articles} />;
}
