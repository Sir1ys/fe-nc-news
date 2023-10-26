import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { fetchData } from "../utils";

export default function SignIn({ setUserAuthorized }) {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(`/users/${username}`).then(({ user }) => {
      if (user === undefined) {
      } else {
        setUser(user);
        setUserAuthorized(true);
        setUsername("");
        navigate("/");
      }
    });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <h2>Already have an account ?</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <button>Sign In</button>
    </form>
  );
}
