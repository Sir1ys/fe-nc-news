import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((currTheme) => {
      return currTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <button onClick={toggleTheme} className={`button__${theme}`}>
      Change theme
    </button>
  );
}
