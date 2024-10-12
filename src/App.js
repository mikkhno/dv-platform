import Article from "./pages/Article";
import ArticleTest from "./pages/TestArticle";
import BlogPage from "./pages/BlogPage";
import ArticleCard from "./components/article_card/ArticleCard";
import Page from "./pages/Page"
import BlogPageLocalised from "./pages/BlogPageLocalised";

import InfiniteScroll from "./components/wall_of_articles/InfiniteScroll";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SettingsPage from "./pages/SettingsPage";
import TestArticle from "./pages/TestArticle";


function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/blog" element={<BlogPageLocalised/>}></Route>
                  <Route path="/blog/post/:id" element={<Article/>}></Route>
                  <Route path="/article-test" element={<ArticleTest/>}></Route>
                  <Route path="/page" element={<Page/>}></Route>
                  <Route path="*" element={<ErrorPage/>}/>
                  <Route path="/settings" element={<SettingsPage />} />

              </Routes>
          </Router>
      </div>
);
}

export default App;