import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ user, setUser }) {
  return (
    <header>
      <NavLink to="/" className="logo">
        NC News
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {Object.keys(user).length === 0 ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={() => {
                    setUser({});
                  }}
                >
                  Log out
                </button>
              </li>
              <li>
                <img src={user.avatar_url} alt="image of the user" />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
