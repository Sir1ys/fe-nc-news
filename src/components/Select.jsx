import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../api";

export default function Select({ setArticles }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const setSearchParams = useSearchParams()[1];

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("sort_by", sortBy);
    params.set("order", order);
    setSearchParams(params);

    const url = `/articles?sort_by=${sortBy}&order=${order}`;

    fetchData(url).then(({ articles }) => {
      setArticles(articles);
    });
  }, [order, sortBy]);

  return (
    <div className="sort-container">
      <label htmlFor="sort_by">
        Sort By
        <select
          name="sort_by"
          id="sort_by"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label htmlFor="order">
        Order
        <select
          name="order"
          id="order"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </select>
      </label>
    </div>
  );
}
