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
import LexikPage from "./pages/LexikPage";
import CardLearning from "./pages/elearning/words-only/CardLearning";
import ArticleLearning from "./pages/elearning/article/ArticleLearning";
import WordLearning from "./pages/elearning/word-ger/WordLearning";
import words from "./pages/elearning/test/test_data.json";
import CoursesPage from "./pages/CoursesPage";
import NewLearning from "./pages/elearning/word-ukr/NewLearning";
import AudioLearning from "./pages/elearning/audio/AudioLearning";



function App() {
    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Router>
                <Routes>
                    <Route path="/blog" element={<BlogPageLocalised/>}></Route>
                    <Route path="/blog/post/:id" element={<Article/>}></Route>
                    <Route path="/article-test" element={<ArticleTest/>}></Route>
                    <Route path="/page" element={<Page/>}></Route>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/user/userInfo" element={<SettingsPage/>}/>


                    <Route path="/theme/1" element={<LexikPage/>}></Route>
                    <Route path="/elearning/wordcards/1" element={<CardLearning words={words}/>}></Route>
                    <Route path="/elearning/article/1" element={<ArticleLearning words={words}/>}></Route>
                    <Route path="/elearning/wordtranslate/1" element={<WordLearning words={words}/>}></Route>
                    <Route path="/elearning/new/1" element={<NewLearning words={words}/>}></Route>
                    <Route path="/elearning/listening/1" element={<AudioLearning words={words}/>}></Route>
                    <Route path="/courses" element={<CoursesPage/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;