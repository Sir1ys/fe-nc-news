import React, { useState } from "react";
import ArticleCard from "../ArticleCard";
import Loader from "../Loader";

export default function Home({ articles, loading }) {
  const [count, setCount] = useState(6);

  const handleClick = () => {
    setCount(count + 6);
  };

  return (
    <section className="articles">
      {loading ? (
        <Loader />
      ) : (
        <>
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
