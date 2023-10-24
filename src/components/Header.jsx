import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ user }) {
  return (
    <header>
      <NavLink to="/">NC News</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {Object.keys(user).length === 0 ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
