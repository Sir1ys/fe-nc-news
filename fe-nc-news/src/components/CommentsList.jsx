import React, { useEffect, useState } from "react";
import { fetchData } from "../utils";
import CommentCard from "./CommentCard";

export default function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://back-end-news.onrender.com/api/articles/${articleId}/comments`;

    fetchData(url).then(({comments}) => {
      setComments(comments);
    });

    console.log(comments);
  }, [articleId]);

  return (
    <section>
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </section>
  );
}
