import React from "react";
import SignIn from "../SignIn";

export default function LoginPage({ setUser }) {
  return (
    <section className="login">
      <SignIn setUser={setUser} />
    </section>
  );
}
