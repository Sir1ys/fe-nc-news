import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchData, postData } from "../api";
import CommentCard from "./CommentCard";
import Loader from "./Loader";

export default function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(true);
  const url = `/articles/${articleId}/comments`;

  const { userState, userAuthorizedState } = useContext(UserContext);
  const [user] = userState;
  const [userAuthorized] = userAuthorizedState;

  useEffect(() => {
    fetchData(url).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [articleId]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const addComment = (e) => {
    e.preventDefault();
    postData(url, {
      username: `${user.username}`,
      body: `${comment}`,
    }).then(({ comment }) =>
      setComments((currentComments) => {
        const newComments = [...currentComments];
        newComments.unshift(comment);
        return newComments;
      })
    );
    setComment("");
  };

  return (
    <section className="comments">
      <h2>Testimonials</h2>
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
      {loading ? (
        <Loader />
      ) : (
        <div className="comments-container">
          {comments
            .map((comment, index) => (
              <CommentCard
                key={index}
                comment={comment}
                setComments={setComments}
              />
            ))
            .slice(0, count)}
        </div>
      )}

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
    </section>
  );
}
