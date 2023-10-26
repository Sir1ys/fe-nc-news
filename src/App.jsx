import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ArticlePage from "./components/pages/ArticlePage";
import CodingPage from "./components/pages/CodingPage";
import FootballPage from "./components/pages/FootballPage";
import CookingPage from "./components/pages/CookingPage";
import LoginPage from "./components/pages/LoginPage";
import Footer from "./components/Footer";
import { fetchData } from "./utils";
import "./App.scss";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "/articles";

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
            element={<Home articles={articles} setArticles={setArticles} loading={loading} />}
          />

          <Route
            path="/articles/topics/coding"
            element={<CodingPage articles={articles} setArticles={setArticles} loading={loading} />}
          />
          <Route
            path="/articles/topics/football"
            element={<FootballPage articles={articles} setArticles={setArticles} loading={loading} />}
          />
          <Route
            path="/articles/topics/cooking"
            element={<CookingPage articles={articles} setArticles={setArticles} loading={loading} />}
          />

          <Route
            path="/articles/:article_id"
            element={<ArticlePage setArticles={setArticles} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
