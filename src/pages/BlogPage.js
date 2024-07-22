// icons
import calender from './../image/ico/calendar.svg';
import timer from './../image/ico/pace.svg';
import beginnerIcon from './../image/ico/flower.svg';
import intermediateIcon from './../image/ico/sprinter.svg';

import React, {useState} from 'react';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import TopicFilter from './../components/filters/TopicFilter';
import LevelFilter from './../components/filters/LevelFilter';
import ArticlesWall from './../components/wall_of_articles/ArticlesWall';

import './../styles/blogpage.css';

const BlogPage = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
    };


    return (<>
            <Header/>
            <div className="blog-title">
                <h2>Наш блог</h2>
                <h1>Збагачуйте знання граматики<br/>
                    та вивчайте німецьку мову в деталях.</h1>
            </div>

            <div className="feed-new">
                <div className="feed-new-header">
                    <div className="feed-title">
                        <div id="orange-rect"></div>
                        <h1>Актуальне</h1>
                    </div>
                    <h2>Сортувати за темами:</h2>

                    <div className="feed-categories">

                        <TopicFilter onCategoryChange={handleCategoryChange}/>
                        {/*{filtersTopics.map((topic)=>{return <Tag key={topic.id} tags = {topic.title} icon = {topic.icon} />})}*/}

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
                    <h1>До читання</h1>
                </div>

                <div className="wall-of-article">

                    <div className="flex-container" id="filters">
                        <h2 className="a-title">Фільтри пошуку</h2>
                        <h3>Сортування за темами:</h3>
                        <div className="filter-topic">
                            <TopicFilter onCategoryChange={handleCategoryChange}/>
                            {/*{filtersTopics.map((topic)=>{return <Tag key={topic.id} tags = {topic.title} icon = {topic.icon} />})}*/}

                        </div>

                        <h3>Сортування за рівнями:</h3>
                        <LevelFilter onLevelChange={handleLevelChange}/>
                        {/*{filtersLevels.map((level)=>{return <Tag key={level.id} tags = {level.level} />})}*/}


                    </div>

                    {/*IT WORKS*/}
                    {/*{articles.map((article)=>{*/}
                    {/*    return <ArticleCard key={article.id} title={article.title} description={article.description} image={article.image}*/}
                    {/*    category={article.category} readTime={article.readTime} date={article.date} tags={article.tags}/>*/}
                    {/*})}*/}

                    <ArticlesWall selectedCategory={selectedCategory} selectedLevel={selectedLevel}/>

                </div>

            </div>
            <Footer/>
        </>
    );
}


export default BlogPage;