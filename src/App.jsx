import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ArticlePage from "./components/pages/ArticlePage";
import CodingPage from "./components/pages/CodingPage";
import FootballPage from "./components/pages/FootballPage";
import CookingPage from "./components/pages/CookingPage";
import LoginPage from "./components/pages/LoginPage";
import Header from "./components/Header";
import { fetchData } from "./utils";
import "./App.scss";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userAuthorized, setUserAuthorized] = useState(false);

  useEffect(() => {
    const url = "/articles";

    fetchData(url).then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        userAuthorized={userAuthorized}
        setUserAuthorized={setUserAuthorized}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home articles={articles} loading={loading} />}
          />

          <Route path="/articles/coding" element={<CodingPage />} />
          <Route path="/articles/football" element={<FootballPage />} />
          <Route path="/articles/cooking" element={<CookingPage />} />

          <Route
            path="/articles/football"
            element={<Home articles={articles} loading={loading} />}
          />

          <Route
            path="articles/cooking"
            element={<Home articles={articles} loading={loading} />}
          />

          <Route
            path="/articles/:article_id"
            element={
              <ArticlePage
                user={user}
                userAuthorized={userAuthorized}
                setArticles={setArticles}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                setUser={setUser}
                setUserAuthorized={setUserAuthorized}
              />
            }
          />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
