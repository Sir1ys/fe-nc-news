import React, { useState } from "react";
import { fetchData } from "../utils";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setUser }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(`/users/${username}`).then(
      ({ user }) => {
        if (user === undefined) {
        } else {
          setUser(user);
          setUsername("");
          navigate("/");
        }
      }
    );
  };

  return (
    <form
      className="form-signIn"
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
