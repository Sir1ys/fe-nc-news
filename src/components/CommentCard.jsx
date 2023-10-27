import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchData, deleteData } from "../api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CommentCard({ comment, setComments }) {
  const { author, body, votes, comment_id } = comment;
  const { userState, userAuthorizedState } = useContext(UserContext);
  const userAuthorized = userAuthorizedState[0];
  const { username } = userState[0];
  const [commentVote, setCommentVote] = useState(0);

  const handleVote = (number) => {
    patchData(`/comments/${comment_id}`, {
      inc_votes: `${commentVote === 1 ? -number : number}`,
    });

    commentVote === 1 ? setCommentVote(0) : setCommentVote(1);
  };

  const handleDelete = () => {
    if (username === author) {
      deleteData(`/comments/${comment_id}`)
        .then(() => {
          setComments((currentComments) => {
            const updatedComments = [...currentComments].filter(
              (comment) => comment.comment_id !== comment_id
            );

            return updatedComments;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="comment-card">
      <div className="container">
        <div>
          <div>
            <FavoriteIcon
              className={commentVote === 1 ? "svg-active" : null}
              onClick={(event) => {
                userAuthorized ? handleVote(1) : event.target.disabled;
              }}
            />
            <p>{votes + commentVote} likes</p>
          </div>

          {username === author ? (
            <button
              className="delete-btn"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
        <h3>@{author}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
