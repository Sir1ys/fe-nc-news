import React, { useEffect, useState } from "react";
import { fetchData } from "../utils";
import CommentCard from "./CommentCard";
import Loader from "./Loader";

export default function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://back-end-news.onrender.com/api/articles/${articleId}/comments`;

    fetchData(url).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [articleId]);

  return (
    <section className="comments">
      <h2>Testimonials</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
}
