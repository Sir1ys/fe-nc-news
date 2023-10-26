import React, { useEffect, useState } from "react";

export default function Select() {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleSortBy = (e) => {};

  const handleOrder = (e) => {};

  useEffect(() => {});

  return (
    <div className="sort-container">
      <label htmlFor="sort_by">
        Sort By
        <select
          name="sort_by"
          id="sort_by"
          onChange={(e) => {
            handleSortBy(e);
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
            handleOrder(e);
          }}
        >
          <option value="asc">Hight to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </label>
    </div>
  );
}
