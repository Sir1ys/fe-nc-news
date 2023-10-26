import React from "react";
import SignIn from "../SignIn";
import UserList from "../UserList";

export default function LoginPage({ setUserAuthorized }) {
  return (
    <section className="login">
      <SignIn setUserAuthorized={setUserAuthorized} />
      <UserList />
    </section>
  );
}
