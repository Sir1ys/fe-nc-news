import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article, homePage }) {
  const { author, title, topic, votes, article_img_url: url, body } = article;
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
        <p className="article-body">{body}</p>
        <div>
          <p>{topic}</p>
          <p>Votes: {votes}</p>
        </div>
      </div>
    </article>
  );
}
