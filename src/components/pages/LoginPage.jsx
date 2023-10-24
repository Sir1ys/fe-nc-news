import React from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export default function LoginPage() {
  return (
    <section className="login">
      <SignIn />
      <SignUp />
    </section>
  );
}
