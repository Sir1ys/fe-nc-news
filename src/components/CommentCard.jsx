import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchData } from "../utils";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CommentCard({ comment }) {
  const { author, body, votes, comment_id } = comment;
  const { userAuthorizedState } = useContext(UserContext);
  const [userAuthorized] = userAuthorizedState;

  const [commentVote, setCommentVote] = useState(0);

  const handleClick = (number) => {
    patchData(`/comments/${comment_id}`, {
      inc_votes: `${commentVote === 1 ? -number : number}`,
    });

    commentVote === 1 ? setCommentVote(0) : setCommentVote(1);
  };

  return (
    <div className="comment-card">
      <div className="container">
        <div>
          <FavoriteIcon
            className={
              commentVote === 0 ? "svg-heart" : "svg-heart svg-heart__red"
            }
            onClick={(event) => {
              userAuthorized ? handleClick(1) : event.target.disabled;
            }}
          />
          <p>{votes + commentVote} likes</p>
        </div>
        <h3>@{author}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
