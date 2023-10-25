import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patchData } from "../utils";

export default function ArticleCard({ article, homePage, user, setArticles }) {
  const {
    author,
    title,
    votes,
    article_img_url: url,
    body,
    article_id,
  } = { ...article };

  const [vote, setVote] = useState(0);

  let navigate = useNavigate();

  const handleClick = (number) => {
    patchData(`/articles/${article_id}`, {
      inc_votes: `${vote === 1 ? -number : number}`,
    });

    setArticles((currentArticles) => {
      const updatedArticles = [...currentArticles].map((article) => {
        if (article.article_id === article_id) {
          return {
            ...article,
            votes: article.votes + (vote === 1 ? -number : number),
          };
        } else return article;
      });

      return updatedArticles;
    });

    vote === 1 ? setVote(0) : setVote(1);
  };

  return (
    <article
      className="article-card"
      onClick={() => {
        navigate(`/articles/${article_id}`, { state: article });
      }}
    >
      <img src={url} alt="Avatar" />
      {homePage ? null : (
        <div>
          {Object.keys(user).length !== 0 ? (
            <svg
              className={vote === 0 ? "svg-heart" : "svg-heart__red"}
              onClick={() => {
                handleClick(1);
              }}
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>
          ) : null}
          <p>{votes + vote} likes</p>
        </div>
      )}
      <div className="container">
        <h3>{title}</h3>
        <h4>
          Written by <b>{author}</b>
        </h4>
        <p className="article-body">{body}</p>
      </div>
    </article>
  );
}
