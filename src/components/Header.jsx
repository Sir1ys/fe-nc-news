import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const { userState, userAuthorizedState } = useContext(UserContext);
  const [user, setUser] = userState;
  const [userAuthorized, setUserAuthorized] = userAuthorizedState;

  const toggleClassName = (action) => {
    if (action === "add") {
      document.getElementById("nav").classList.add("active");
    } else {
      document.getElementById("nav").classList.remove("active");
    }
  };

  return (
    <header>
      <NavLink to="/" className="logo">
        NC News
      </NavLink>
      <nav id="nav">
        <CloseIcon id="nav-close" onClick={() => toggleClassName("remove")} />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="articles/topics/coding" className='topic-link'>Topics</NavLink>
            <ul>
              <li>
                <NavLink to="/articles/topics/coding">Coding</NavLink>
              </li>
              <li>
                <NavLink to="/articles/topics/football">Football</NavLink>
              </li>
              <li>
                <NavLink to="/articles/topics/cooking">Cooking</NavLink>
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
      <MenuIcon id="menu-btn" onClick={() => toggleClassName("add")} />
    </header>
  );
}
