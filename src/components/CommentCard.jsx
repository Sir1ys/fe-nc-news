import React from "react";

export default function CommentCard({ comment }) {
  const { author, body, votes } = comment;
  return (
    <div className="comment-card">
      <div className="container">
        <p>Votes: {votes}</p>
        <h3>@{author}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
