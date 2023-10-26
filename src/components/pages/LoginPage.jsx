import React from "react";
import SignIn from "../SignIn";
import UserList from "../UserList";

export default function LoginPage({ setUser, setUserAuthorized }) {
  return (
    <section className="login">
      <SignIn setUser={setUser} setUserAuthorized={setUserAuthorized} />
      <UserList />
    </section>
  );
}
