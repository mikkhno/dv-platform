import React from "react";
import '../styles/coursespage.css'

const CoursesPage = () => {
    return (
        <div className="content-page">


            <div className="category-select">
                <ul>
                    <li>Курси</li>
                    <li>Граматика</li>
                    <li><b>Лексика</b></li>
                    <li>Змішане навчання</li>
                </ul>
            </div>

            <div className="selected-category-catalog">
                <h1 className="category-title">Лексика</h1>

                <div className="topic-info">
                    <div className="topic-desc">
                        <h2 className="topic-title">Wellness</h2>
                        <p className="topic-full-desc">У розділі "Wellness" зібрані слова, що допоможуть говорити про
                            здоров’я, добробут та гармонію в житті. Ви вивчите лексику, пов’язану з активним способом
                            життя,
                            правильним харчуванням і турботою про себе. Це дозволить обговорювати такі теми, як ризики
                            для
                            здоров'я, медичне страхування та здорові звички. </p>
                        <div className="action-section">
                            <div className="go-to-topic"></div>
                            <p className="word-count">28 слів (wordcount)</p>
                        </div>
                    </div>

                    <img src="#"/>
                </div>

                <h2 className="available-text">Доступна лексика за вашим рівнем</h2>
                {/* далі перетворити на компонент*/}
                <div className="level-sublevel">
                    <h3 className="level-name">РІВЕНЬ В1(userslevel)</h3>
                    <h3 className="sublevel-name">Wellness(sublevelname)</h3>

                    {/* картка з лексикою */}
                    <div className="topics-container">
                        <div className="topic-card">
                            <img/>

                            <div className="topic-card-info">
                                <div className="level-block">
                                    <p>B1.1</p>
                                </div>
                                <h2>Wellness</h2>
                                <h3>28 слів</h3>
                            </div>

                            <div className="action-progress">
                                <div className="progress-circle">
                                    <div className="one-of-8"></div>
                                    <div className="two-of-8"></div>
                                    <div className="three-of-8"></div>
                                    <div className="four-of-8"></div>
                                    <div className="five-of-8"></div>
                                    <div className="six-of-8"></div>
                                    <div className="seven-of-8"></div>
                                    <div className="eight-of-8"></div>
                                </div>
                                <div className="go-to-topic">
                                    {/*<div className="butt-triangle"></div>*/}
                                </div>

                            </div>
                        </div>

                        <div className="topic-card">
                            <img/>

                            <div className="topic-card-info">
                                <div className="level-block">
                                    <p>B1.1</p>
                                </div>
                                <h2>Wellness</h2>
                                <h3>28 слів</h3>
                            </div>

                            <div className="action-progress">
                                <div className="progress-circle">
                                    <div className="one-of-8"></div>
                                    <div className="two-of-8"></div>
                                    <div className="three-of-8"></div>
                                    <div className="four-of-8"></div>
                                    <div className="five-of-8"></div>
                                    <div className="six-of-8"></div>
                                    <div className="seven-of-8"></div>
                                    <div className="eight-of-8"></div>
                                </div>
                                <div className="go-to-topic">
                                    {/*<div className="butt-triangle"></div>*/}
                                </div>
                            </div>
                        </div>

                        <div className="topic-card">
                            <img/>

                            <div className="topic-card-info">
                                <div className="level-block">
                                    <p>B1.1</p>
                                </div>
                                <h2>Wellness</h2>
                                <h3>28 слів</h3>
                            </div>

                            <div className="action-progress">
                                <div className="progress-circle">
                                    <div className="one-of-8"></div>
                                    <div className="two-of-8"></div>
                                    <div className="three-of-8"></div>
                                    <div className="four-of-8"></div>
                                    <div className="five-of-8"></div>
                                    <div className="six-of-8"></div>
                                    <div className="seven-of-8"></div>
                                    <div className="eight-of-8"></div>
                                </div>
                                <div className="go-to-topic">
                                    {/*<div className="butt-triangle"></div>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>)
        ;
};

export default CoursesPage;