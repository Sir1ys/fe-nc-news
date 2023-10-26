import React from "react";
import SignIn from "../SignIn";
import UserList from "../UserList";

export default function LoginPage() {
  return (
    <section className="login">
      <SignIn />
      <UserList />
    </section>
  );
}
