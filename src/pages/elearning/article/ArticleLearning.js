import '../../../styles/elearning/elearning-screen.css';
import defaultImage from '../../../image/picture1.png'
import WordGame from "../test/WordGame";
import React, {useState} from "react";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import vektor_onfire from "../../../image/vektor/vektor_onfire.png";
import vektor_shocked from "../../../image/vektor/vektor_shocked.png";
import {motion} from "framer-motion";
import PopupMessage from "../../../components/elearning/PopUpMessage";


const ArticleLearning = ({words = []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const handlePrevious = () => {

        if (!isCorrect) return; // Блокуємо, якщо відповідь неправильна
        setIsCorrect(null);

        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                setIsCorrect(null); // Скидаємо стан правильності після переходу
                return prevIndex - 1;
            }
            return prevIndex; // Не змінюємо стан, якщо prevIndex <= 1
        });
    };

    const handleResult = (result) => {
        setIsCorrect(result);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Повернення на попередню сторінку
        window.history.back();
    };

    const handleNext = () => {
        if (!isCorrect) return; // Блокуємо, якщо відповідь неправильна

        setCurrentIndex((prevIndex) => {
            setIsCorrect(null);
            if (prevIndex < words.length - 1) {
                return prevIndex + 1;
            } else {
                setShowPopup(true);
                return prevIndex;
            }
        });

    }

    return (<>
            <style>
                {`
                 .App, body { background-color: var(--second); width:100vw; height:100vh; }
        .material-symbols-outlined {
            color: #0B2545;
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    `}
            </style>

            {showPopup && (
                <PopupMessage
                    imageSrc={vektor_onfire}
                    text="Всі артиклі вивчено!"
                    buttonText="Повернутися"
                    onClose={handleClosePopup}
                />
            )}


            <div className="card-learning">

                <div className="learning-header">
                    <div className="learning-info">
                        <div className="mode-exercise">

                            <div className="exercise-ico-title">
                                <span className="material-symbols-outlined">crossword</span>
                                <h2>Артиклі</h2>
                            </div>
                        </div>

                        <div className="word-count-topic">
                            <h2 className="word-count">{currentIndex + 1}/{words.length}</h2>
                            <h2 className="topic-name">Möbel</h2>
                        </div>

                        <a href="/theme/1"><span className="material-symbols-outlined">close</span></a>
                    </div>
                    <ProgressBar currentIndex={currentIndex} words={words}/>


                </div>

                <div className="word-picture">
                    <motion.div
                        className="word-picture"
                        style={{width: "100%"}}
                        key={currentIndex} // Унікальний ключ для кожного слова
                        initial={{opacity: 0, y: 20}} // Початковий стан (прозорість і зсув)
                        animate={{opacity: 1, y: 0}} // Анімація до фінального стану
                        exit={{opacity: 0, y: -20}} // Анімація при виході
                        transition={{duration: 0.4}} // Тривалість анімації
                    >

                        <div className="article-drag">
                            <h2 id="article-instruction">Оберіть відповідний артикль до слова</h2>
                            <div className="word-translation">
                                <WordGame word={words[currentIndex].word}
                                          audio={words[currentIndex].audio}
                                          correctArticle={words[currentIndex].article}
                                          onResult={handleResult}
                                          resetGame={(callback) => callback()}
                                />

                                {isCorrect === true &&
                                    <div className="word-example">
                                        <img className="vektor-example" src={vektor_onfire} alt="Example Icon"/>
                                        <div className="message-bubble">
                                            <div className="message">
                                                <h2 id="Vektor-name">Vektor</h2>
                                                <h2 id="message-text">Gut gemacht!</h2>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {isCorrect === false &&
                                    <div className="word-example">
                                        <img className="vektor-example" src={vektor_shocked} alt="Example Icon"/>
                                        <div className="message-bubble">
                                            <div className="message">
                                                <h2 className="Vektor-name">Vektor</h2>
                                                <h2 className="message-text">Versuch's noch mal!</h2>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                        <img
                            className="pict-word"
                            src={words[currentIndex]?.picture || defaultImage}
                            alt="word"
                            onError={(e) => (e.target.src = defaultImage)}
                        />
                    </motion.div>
                </div>


                <div className="nav-buttons">
                    <div className="arrow-left"
                         onClick={handlePrevious}
                    >
                        <span className="material-symbols-outlined">arrow_left_alt</span>
                    </div>
                    <div className={`arrow-right`}
                         onClick={handleNext}
                    >
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ArticleLearning;



