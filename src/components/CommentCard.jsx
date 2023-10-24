import React from "react";

export default function CommentCard({ comment }) {
  const { author, body, votes } = comment;
  return (
    <div className="comment-card">
      <div className="container">
        <h3>
          <b>{author}</b>
        </h3>
        <p>{body}</p>
        <p>Votes: {votes}</p>
      </div>
    </div>
  );
}
