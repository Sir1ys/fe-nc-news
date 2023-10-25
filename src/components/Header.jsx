import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({
  user,
  setUser,
  userAuthorized,
  setUserAuthorized,
}) {
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

          <li>
            <NavLink to="/">Topics</NavLink>
            <ul>
              <li>
                <NavLink to="/articles/coding">Coding</NavLink>
              </li>
              <li>
                <NavLink to="/articles/football">Football</NavLink>
              </li>
              <li>
                <NavLink to="/articles/cooking">Cooking</NavLink>
              </li>
            </ul>
          </li>

          {!userAuthorized ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={() => {
                    setUser({});
                    setUserAuthorized(false);
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
