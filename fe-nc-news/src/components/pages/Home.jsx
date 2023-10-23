import React from "react";
import Article from "../Article";

export default function Home({ articles }) {
  return (
    <section className="articles">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </section>
  );
}
