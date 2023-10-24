import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { author, title, topic, votes, article_img_url: url } = article;
  let navigate = useNavigate();

  return (
    <article
      className="article-card"
      onClick={() => {
        navigate("/article", { state: article });
      }}
    >
      <img src={url} alt="Avatar" />
      <div className="container">
        <h3>
          <b>{author}</b>
        </h3>
        <h4>{title}</h4>
        <p>{topic}</p>
        <p>Votes: {votes}</p>
      </div>
    </article>
  );
}
