import React from "react";

export default function ArticleCard({ article }) {
  const {
    author,
    title,
    topic,
    votes,
    article_img_url: url,
  } = article;


  return (
    <article className="article-card">
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
