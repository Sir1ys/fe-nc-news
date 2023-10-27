import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { patchData } from "../api";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ArticleCard({ article, setArticles, homePage }) {
  const {
    author,
    title,
    votes,
    article_img_url: url,
    body,
    article_id,
    created_at,
  } = { ...article };

  const { userAuthorizedState } = useContext(UserContext);
  const [userAuthorized] = userAuthorizedState;

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
          <FavoriteIcon
            className={vote === 0 ? "svg-heart" : "svg-heart svg-heart__red"}
            onClick={(event) => {
              userAuthorized ? handleClick(1) : event.target.disabled;
            }}
          />
          <p>{votes + vote} likes</p>
        </div>
      )}
      <div className="container">
        <h3>{title}</h3>
        <h4>
          Written by <b>{author}</b>
        </h4>
        <p className="article-body">{body}</p>
        {homePage ? (
          <div>
            <p>
              {votes} <FavoriteIcon />
            </p>
            <p>{created_at.split("T")[0]}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
