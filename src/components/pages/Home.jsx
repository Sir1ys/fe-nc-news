import React from "react";
import ArticleCard from "../ArticleCard";

export default function Home({ articles }) {

  return (
    <section className="articles">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article}/>
      ))}
    </section>
  );
}
