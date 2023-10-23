import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/articles" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
