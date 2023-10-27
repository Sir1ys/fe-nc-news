import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import TopicPage from "./components/pages/TopicPage";
import ArticlePage from "./components/pages/ArticlePage";
import LoginPage from "./components/pages/LoginPage";
import Footer from "./components/Footer";
import { fetchData } from "./api";
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
            element={
              <Home
                articles={articles}
                setArticles={setArticles}
                loading={loading}
              />
            }
          />

          <Route
            path="/articles/topics/coding"
            element={
              <TopicPage
                articles={articles}
                setArticles={setArticles}
                loading={loading}
                topic="coding"
              />
            }
          />
          <Route
            path="/articles/topics/football"
            element={
              <TopicPage
                articles={articles}
                setArticles={setArticles}
                loading={loading}
                topic="football"
              />
            }
          />
          <Route
            path="/articles/topics/cooking"
            element={
              <TopicPage
                articles={articles}
                setArticles={setArticles}
                loading={loading}
                topic="cooking"
              />
            }
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
