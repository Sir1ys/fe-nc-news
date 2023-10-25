import React from "react";
import SignIn from "../SignIn";

export default function LoginPage({ setUser, setUserAuthorized }) {
  return (
    <section className="login">
      <SignIn setUser={setUser} setUserAuthorized={setUserAuthorized} />
    </section>
  );
}
