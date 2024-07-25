// icons
import calender from './../image/ico/calendar.svg';
import timer from './../image/ico/pace.svg';
import beginnerIcon from './../image/ico/flower.svg';
import intermediateIcon from './../image/ico/sprinter.svg';

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
            <Header/>
            <select name="language" onChange={onChange}>
                <option value="ua">UA</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>
            <div className="blog-title">
                <h2>{t('ourBlog')}</h2>
                <h1><Trans components={{br: <br />}}>{t('pageTitle')}</Trans></h1>
            </div>

            <div className="feed-new">
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
                    <div className="big-article">
                        <div className="ba-pict">
                            <div className="ba-topic">
                                <p>Grammatik</p>
                            </div>
                        </div>
                        <div id="ba-info">
                            <img src={calender}/>
                            <p>Квітень 26, 2023</p>
                            <p>|</p>
                            <img src={timer}/>
                            <p>15 хв. для читання</p>
                        </div>
                        <h2 id="ba-title">Використання Vorganspassiv<br/>
                            в німецькій мові</h2>
                        <p id="ba-desc">Пасивні речення – це речення, де не вказана особа, яка виконує дію. Посуд
                            миється.
                            Робота робиться. Німецька вчиться. І в німецькій мові такі речення вживаються значно
                            частіше,
                            ніж в
                            українській. Також ця граматика є обов’язковою від рівня А2...</p>
                        <div className="article-tags">

                            <div className="category" id="pruefung">
                                <img src={beginnerIcon}/>
                                <p>A2</p>
                            </div>

                            <div className="category" id="pruefung">
                                <img src={intermediateIcon}/>
                                <p>B1</p>
                            </div>

                        </div>
                        <a href="" className="read-action">Читати-></a>

                    </div>

                    <div className="small-articles">
                        <div className="first-article">
                            <div className="sa-pict">
                                <div className="article-topic">
                                    <p>Prüfung</p>
                                </div>
                            </div>
                            <h2 className="a-title">Фрази для написання листів</h2>
                            <p className="a-desc">Пишемо листи німецькою для іспиту DTZ. Цей іспит охоплює декілька
                                типів
                                листів:
                                лист для подачі документів на роботу, щодо оренди квартири..</p>
                            <a href="" className="read-action">Читати-></a>

                        </div>

                        <div className="second-article">
                            <div className="sa-pict">
                                <div className="article-topic">
                                    <p>Prüfung</p>
                                </div>
                            </div>
                            <h2 className="a-title">Фрази для написання листів</h2>
                            <p className="a-desc">Пишемо листи німецькою для іспиту DTZ. Цей іспит охоплює декілька
                                типів
                                листів:
                                лист для подачі документів на роботу, щодо оренди квартири..</p>
                            <a href="" className="read-action">Читати-></a>
                        </div>
                    </div>
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