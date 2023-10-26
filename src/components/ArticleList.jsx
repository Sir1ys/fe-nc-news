import React, { useState } from "react";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
import Select from "./Select";

export default function ArticleList({ articles, setArticles, loading }) {
  const [count, setCount] = useState(6);

  const handleClick = () => {
    setCount(count + 3);
  };

  return (
    <section className="articles">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Select setArticles={setArticles} />
          <div className="grid-container">
            {articles
              .map((article, index) => (
                <ArticleCard key={index} article={article} homePage={true} />
              ))
              .slice(0, count)}
          </div>
          {count < articles.length ? (
            <button
              onClick={() => {
                handleClick();
              }}
            >
              See more
            </button>
          ) : null}
        </>
      )}
    </section>
  );
}
