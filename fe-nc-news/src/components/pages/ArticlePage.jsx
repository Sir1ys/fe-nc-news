import React from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard";

export default function ArticlePage({ articles }) {
  const [articleId, setArticleId] = useState("");
  const [article, setArticle] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundArticle = articles.find(
      (article) => article.article_id === +articleId
    );

    setArticle({ ...foundArticle });
    setArticleId("");
  };

  return (
    <section className="article">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="article-input">Article id: </label>
        <div>
          <input
            type="text"
            name="article-input"
            id="article-input"
            placeholder="Enter Article id"
            onChange={(event) => {
              setArticleId(event.target.value);
            }}
            value={articleId}
          />
          <button>Search</button>
        </div>
      </form>

      {Object.keys(article).length === 0 ? (
        <h2>No article found</h2>
      ) : (
        <ArticleCard article={article} />
      )}
    </section>
  );
}
