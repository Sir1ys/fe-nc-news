import React from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard";

export default function ArticlePage({ articles }) {
  const [articleId, setArticleId] = useState("");

  return (
    <section className="article"> 
      <form>
        <label htmlFor="article-input">Article id: </label>
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
      </form>
      <ArticleCard article={articles} />
    </section>
  );
}
