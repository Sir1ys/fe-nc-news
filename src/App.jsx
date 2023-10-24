import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ArticlePage from "./components/pages/ArticlePage";
import Header from "./components/Header";
import { fetchData } from "./utils";
import "./App.scss";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://back-end-news.onrender.com/api/articles";

    fetchData(url).then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home articles={articles} loading={loading} />}
          />
          <Route
            path="/article"
            element={<ArticlePage articles={articles}/>}
          />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
