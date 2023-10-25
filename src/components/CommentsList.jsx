import React, { useEffect, useState } from "react";
import { fetchData, postData } from "../utils";
import CommentCard from "./CommentCard";
import Loader from "./Loader";

export default function CommentsList({ user, articleId, userAuthorized }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(true);
  const url = `/articles/${articleId}/comments`;

  useEffect(() => {
    fetchData(url).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [articleId]);

  const handleClick = () => {
    setCount(count + 2);
  };

  const addComment = (e) => {
    e.preventDefault();
    postData(url, {
      username: `${user.username}`,
      body: `${comment}`,
    })
      .then((response) => response.json())
      .then(({ comment }) =>
        setComments((currentComments) => {
          const newComments = [...currentComments];
          newComments.push(comment);
          return newComments;
        })
      );
    setComment("");
  };

  return (
    <section className="comments">
      <h2>Testimonials</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {comments
            .map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))
            .slice(0, count)}
        </div>
      )}

      <>
        {userAuthorized ? (
          <form
            onSubmit={(e) => {
              addComment(e);
            }}
          >
            <label htmlFor="comment">Write comment:</label>
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <div className="buttons">
              <button type="reset" onClick={() => setComment("")}>
                Cancel
              </button>
              <button type="submit" disabled={comment === "" ? true : false}>
                Comment
              </button>
            </div>
          </form>
        ) : null}
        {count < comments.length ? (
          <button
            className="btn"
            onClick={() => {
              handleClick();
            }}
          >
            See more
          </button>
        ) : null}
      </>
    </section>
  );
}
