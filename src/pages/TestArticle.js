// import React, { useState } from 'react';
// import './../styles/test/testarticle.css'; // Файл зі стилями для компонента
//
// const Article = () => {
//   // Стан, що визначає наявність підписки
//   const [hasSubscription, setHasSubscription] = useState(false);
//
//   return (
//     <div className="article-container">
//       {/* Текст статті */}
//       <div className={`article-content ${!hasSubscription ? 'blurred' : ''}`}>
//         <h1>Заголовок статті</h1>
//         <p>
//           Це текст вашої статті. Коли користувач не має підписки, він буде
//           перекритий блоком з пропозицією оформити підписку.
//         </p>
//         <p>Додатковий контент статті...</p>
//       </div>
//
//       {/* Блок перекриття, якщо немає підписки */}
//       {!hasSubscription && (
//         <div className="overlay">
//           <div className="overlay-content">
//             <h2>Оформіть підписку для повного доступу</h2>
//             <button onClick={() => setHasSubscription(true)}>Оформити підписку</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default Article;

import React, {useEffect, useState} from 'react';
import './../styles/test/testarticle.css';
import deployed_codeIcon from "../image/ico/deployed_code.svg";
import './../styles/article.css'
import xIcon from './../image/ico/X_logo.svg'
import facebookIcon from './../image/ico/facebook_logo.svg'
import {ArticleContent, ArticleData, ArticleExercises, ArticleSuggested} from "../helpers/ArticleFile";
import Tag from "../components/article_card/tag/Tag";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DarkToogle from "../components/dark-mode-toogle/dark-toogle";

const renderContentWithAdds = (text, adds) => {
    // Розбиваємо текст на абзаци по нових рядках (\n)
    const paragraphs = text.trim().split('\n').filter(Boolean);

    return paragraphs.map((paragraph, index) => (
        <div key={index}>
            {/* Кожен абзац у тексті відображається окремо */}
            <p>{paragraph}</p>

            {/* Вставка додаткових елементів після відповідного абзацу */}
            {adds
                .filter(add => add.position === 'afterParagraph' && add.index === index)
                .map((add, i) => (
                    <div key={i} dangerouslySetInnerHTML={{__html: add.content}}/>
                ))}
        </div>
    ));
};

const Article = () => {
    const [activeSection, setActiveSection] = useState('');
    const [hasSubscription, setHasSubscription] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section'); // Вибираємо всі секції з класом "section"
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.innerHeight / 2; // Використовуємо середину екрана для обчислення

                // if (sectionTop <= extendedBottomBoundary && sectionTop + sectionHeight > extendedTopBoundary)
                // Якщо секція знаходиться в межах видимості
                if (sectionTop <= scrollPosition && sectionTop + sectionHeight > scrollPosition) {
                    currentSection = section.getAttribute('id'); // Отримуємо id секції
                    console.log(currentSection); // Перевірка, чи відображаються id секцій у консолі
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
            // setActiveSection(currentSection);  // Оновлюємо стан активної секції
        };

        // Додаємо обробник події прокручування
        window.addEventListener('scroll', handleScroll);

        // Очищаємо обробник при розмонтуванні компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Header/>
            <div className="article-name">
                <h1>{ArticleData[0].title}</h1>
                <h3>Опубліковано {ArticleData[0].date} | {ArticleData[0].readTime} хв. для опрацювання</h3>
                <div className="tags">
                    <div className="category" id="grammatik">
                        <img src={deployed_codeIcon} alt="code icon"/>
                        <p>{ArticleData[0].category}</p>
                    </div>
                    {ArticleData[0].tags.map((tag, index) => (
                        <Tag key={index} tags={tag}/>
                    ))}
                </div>
            </div>

            <div className="article-image"></div>
            <div className={`article-content ${!hasSubscription ? 'blurred' : ''}`}>
                <div className="content-and-menu">


                    <div className="left-side">

                        <div className="article-content">

                            {ArticleContent.map((section, index) => (
                                <div key={section.id} className="section" id={`${section.id}-sect`}>
                                    {/* Виведення заголовкa кожного розділу */}
                                    <h2>{section.title}</h2>

                                    {/* Виведення основного тексту з додатковими елементами після абзаців */}
                                    {renderContentWithAdds(section.text, section.adds)}

                                    {/* Виведення додаткових елементів в кінці секції (якщо є) */}
                                    {section.adds
                                        .filter(add => add.position === 'end')
                                        .map((add, index) => (
                                            <div key={index} dangerouslySetInnerHTML={{__html: add.content}}/>
                                        ))}
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="right-side">
                        <div className="right-side-blocks">
                            <div className="agenda">
                                <ul>
                                    {ArticleContent.map((section, index) => (
                                        <li key={section.id}
                                            className={activeSection === `${section.id}-sect` ? 'active' : ''}>
                                            <a>{section.title}</a>
                                            {/*<a href={`#${section.id}-sect`}>{section.title}</a>*/}
                                        </li>
                                    ))}
                                    <DarkToogle/>
                                </ul>
                            </div>
                            <h2>Вправи до теми</h2>
                            <div className="topic-exercises">
                                {ArticleExercises.map(exercise => (
                                    <a key={exercise.id} href={exercise.link}>
                                        <div id={`exercises-${exercise.id}`}>
                                            <h3>{exercise.title}</h3>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Блок перекриття, якщо немає підписки */}
            {!hasSubscription && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Оформіть підписку для повного доступу</h2>
                        <button onClick={() => setHasSubscription(true)}>Оформити підписку</button>
                    </div>
                </div>
            )}

            <div className="share">
                <h2>Поділіться цією статтею з друзями!</h2>
                <div className="social-media">
                    <div className="share-button" id="x"><img src={xIcon} alt="X icon"/></div>
                    <div className="share-button" id="facebook"><img src={facebookIcon} alt="Facebook icon"/></div>
                </div>
            </div>

            <div className="relevant-articles">
                <h2 id="title">Схожі статті</h2>
                <div className="rel-art-list">
                    {ArticleSuggested.map(article => (
                        <div key={article.id} className="rel-art" id={article.id}>
                            <a href={article.link}>
                                <div className="ra-pict" style={{backgroundImage: `url(${article.image})`}}></div>
                                <h2>{article.title}</h2>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Article;
