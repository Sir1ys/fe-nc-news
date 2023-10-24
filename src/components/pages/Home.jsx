import React from "react";
import ArticleCard from "../ArticleCard";
import Loader from "../Loader";

export default function Home({ articles, loading }) {
  return (
    <section className="articles">
      {loading ? (
        <Loader />
      ) : (
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} homePage={true}/>
        ))
      )}
    </section>
  );
}
