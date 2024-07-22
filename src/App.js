import Article from "./pages/Article";
import BlogPage from "./pages/BlogPage";
import ArticleCard from "./components/article_card/ArticleCard";
import Page from "./pages/Page"
import InfiniteScroll from "./components/wall_of_articles/InfiniteScroll";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/blog" element={<BlogPage />}></Route>
                  <Route path="/article" element={<Article />}></Route>
                  <Route path="/page" element={<Page />}></Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;