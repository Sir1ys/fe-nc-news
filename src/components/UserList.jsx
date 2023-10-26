import React, { useState, useEffect } from "react";
import { fetchData } from "../utils";
import UserCard from "./UserCard";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    fetchData("/users").then(({ users }) => setUsers(users));
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      <div className="grid-container">
        {users
          .map((user, index) => {
            return <UserCard key={index} user={user} />;
          })
          .slice(count - 2, count)}
      </div>
      <button
        onClick={() => {
          if (count >= users.length) {
            setCount(2);
          } else {
            setCount(count + 2);
          }
        }}
      >
        Show others
      </button>
    </div>
  );
}
