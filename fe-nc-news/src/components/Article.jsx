import React from "react";

export default function Article({ article }) {
  const {
    author,
    title,
    topic,
    votes,
    article_img_url: url,
    article_id: id,
  } = article;

  return (
    <article className="article">
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
