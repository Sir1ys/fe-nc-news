import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import Header from "./components/Header";
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
