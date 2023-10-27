import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { fetchData } from "../api";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);
  const { userState, userAuthorizedState } = useContext(UserContext);
  const setUser = userState[1];
  const setUserAuthorized = userAuthorizedState[1];

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(`/users/${username}`)
      .then(({ user }) => {
        if (user === undefined) {
        } else {
          setUser(user);
          setUserAuthorized(true);
          setUsername("");
          navigate("/");
        }
      })
      .catch((err) => {
        setErr(true);
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
        required
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      {err ? <p>The username is invalid.</p> : null}
      <button>Sign In</button>

    </form>
  );
}
