import React, {Suspense, useState, useTransition} from 'react';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import TopicFilter from './../components/filters/TopicFilter';
import LevelFilter from './../components/filters/LevelFilter';
import ArticlesWall from './../components/wall_of_articles/ArticlesWall';

import './../styles/blogpage.css';

import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {Trans} from "react-i18next";
import translationsUa from "../locals/ua/blogpage";
import translationsEn from "../locals/en/blogpage";
import translationsDe from "../locals/de/blogpage";
import Feed from "../components/feed/Feed";
import ThemeToggle from "../components/dark-mode-toogle/dark-toogle";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ua: {translation: translationsUa},
            en: {translation: translationsEn},
            de: {translation: translationsDe},
        },
        lng:"ua",
        fallbackLng:"ua",
        interpolation: {escapeValue: false},
    });

const BlogPage = () => {

    const {t} = useTranslation();
    const onChange = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
    };


    return (<Suspense fallback="Loading...">

        <div className="blog-title">
            <Header/>
            <div className="text">
                <h2>{t('ourBlog')}</h2>
                <h1><Trans components={{br: <br/>}}>{t('pageTitle')}</Trans></h1>
            </div>
        </div>

        <div className="feed-new">
            <select name="language" onChange={onChange}>
                <option value="ua">UA</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>

            <ThemeToggle />

            <div className="feed-new-header">
                <div className="feed-title">
                    <div id="orange-rect"></div>
                    <h1>{t('feed')}</h1>
                </div>
                <h2>{t('sortBy')}</h2>

                <div className="feed-categories">

                    <TopicFilter onCategoryChange={handleCategoryChange}/>

                </div>
            </div>

            <div className="feed-articles">
                <Feed/>
            </div>


        </div>

        <div className="feed-to-read">

            <div className="feed-title">
                <div id="orange-rect"></div>
                <h1>{t('toRead')}</h1>
            </div>

            <div className="wall-of-article">

                <div className="flex-container" id="filters">

                    <h2 className="a-title">{t('searchFilters')}</h2>
                    <h3>{t('topicFilter')}</h3>

                    <div className="filter-topic">
                        <TopicFilter onCategoryChange={handleCategoryChange}/>
                    </div>

                    <h3>{t('levelFilter')}</h3>
                    <LevelFilter onLevelChange={handleLevelChange}/>

                </div>

                <ArticlesWall selectedCategory={selectedCategory} selectedLevel={selectedLevel}/>

            </div>

        </div>
        <Footer/>
    </Suspense>
);
}

export default BlogPage;