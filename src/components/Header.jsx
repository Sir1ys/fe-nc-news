import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">NC News</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
