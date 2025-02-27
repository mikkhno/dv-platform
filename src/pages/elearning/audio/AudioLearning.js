import React, {useEffect, useState} from "react";
import "../../../styles/elearning/cardlearning.css";
import "../../../styles/elearning/wordlearning.css";
import defaultImage from "../../../image/404.png";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import vektor_shocked from "../../../image/vektor/vektor_shocked.png";
import vektor_onfire from "../../../image/vektor/vektor_onfire.png";
import vektor_like from "../../../image/vektor/vektor_like.png";
import correctSound from "../../../sounds/correct.mp3";
import wrongSound from "../../../sounds/wrong.wav";
import {motion} from "framer-motion";

const CardLearning = ({words = []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(null);
    const [lives, setLives] = useState(3);
    const [showPopup, setShowPopup] = useState(false);
    const [incorrectWords, setIncorrectWords] = useState(new Set()); // Слова, на які була хоча б одна помилка
    const [correctAnswers, setCorrectAnswers] = useState(0); // Лічильник ідеально відгаданих слів
    const [showCompletionPopup, setShowCompletionPopup] = useState(false); // Вікно успішного проходження

    useEffect(() => {
        if (words.length > 0) {
            setUserInput("");
            setIsCorrect(null);
        }
    }, [currentIndex, words]);

    useEffect(() => {
        if (isAnsweredCorrectly && words.length > 0) {
            const timer = setTimeout(() => {
                handleNext();
            }, 3000);

            return () => clearTimeout(timer); // Очистка таймера при оновленні компонента
        }
    }, [isAnsweredCorrectly, words.length]);

    const handleClearInput = () => {
        setUserInput("");
        setIsAnsweredCorrectly(null);
    };


    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        window.history.back(); // Повернення на попередню сторінку
    };

    const handleCloseCompletionPopup = () => {
        setShowCompletionPopup(false);
        setCurrentIndex(0); // Починаємо з першого слова
        setCorrectAnswers(0);
        handleClosePopup(); // Скидаємо рахунок правильних відповідей
    };


    const handleCheckAnswer = () => {
        const correctAnswer = `${words[currentIndex]?.article} ${words[currentIndex]?.word}`.trim().toLowerCase();
        const isCorrect = userInput.trim().toLowerCase() === correctAnswer;

        setIsAnsweredCorrectly(isCorrect);
        playAudio(isCorrect ? correctSound : wrongSound); // Відтворюємо правильний або неправильний звук

        if (isCorrect) {
            setCorrectAnswers((prev) => {
                const newCorrectAnswers = incorrectWords.has(words[currentIndex]) ? prev : prev + 1;

                if (newCorrectAnswers === words.length) {
                    setShowCompletionPopup(true);
                }

                return newCorrectAnswers;
            });
        } else {
            setLives((prevLives) => {
                if (prevLives === 1) {
                    setShowPopup(true);
                }
                return prevLives - 1;
            });

            setIncorrectWords((prevSet) => new Set(prevSet).add(words[currentIndex]));
        }
    };


    const handleNext = () => {
        if (!isAnsweredCorrectly) return;

        setCurrentIndex((prevIndex) => {
            if (prevIndex < words.length - 1) {
                return prevIndex + 1;
            } else {
                setShowCompletionPopup(true);
                return prevIndex;
            }
        });

        setIsAnsweredCorrectly(null);
        handleClearInput();
    };

    const handlePrevious = () => {
        if (!isAnsweredCorrectly) return;

        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                setIsAnsweredCorrectly(null);
                return prevIndex - 1;
            }
            return prevIndex;
        });

        handleClearInput();
    };

    const currentWord = words[currentIndex];


    const playAudio = (audioSrc) => {
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        }
    };

    if (!words.length) {
        return <div className="card-learning">Немає слів для відображення</div>;
    }

    return (
        <>

            <style>
                {`
                 .App, body { background-color: var(--second);     width: 100vw;
    height: 100vh;}
        .material-symbols-outlined {
            color: #0B2545;
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    `}
            </style>

            {(showPopup || showCompletionPopup) && (
                <>
                    {/* Затемнення фону */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999
                    }}></div>

                    {/* Спливаюче вікно для втрати всіх життів */}
                    {showPopup && (
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#DCE9F9',
                            padding: '20px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            textAlign: 'center',
                            zIndex: 1000
                        }}>

                            <img src={vektor_shocked} style={{width: '100px', height: '100px'}}/>
                            <p style={{
                                fontFamily: 'Manrope',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '36px',
                                lineHeight: '36px',
                                color: '#0B2545',
                                margin: '16px'


                            }}>Всі життя закінчилися.</p>
                            <button style={{
                                width: '200px',
                                height: '45px', backgroundColor: '#fff',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'Manrope',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '18px',
                                lineHeight: '36px',
                                color: '#0B2545',
                                margin: '16px'
                            }} onClick={handleClosePopup}>Повернутися
                            </button>
                        </div>

                    )}

                    {/* Спливаюче вікно після завершення всіх слів */}
                    {showCompletionPopup && (
                        <div style={{

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#DCE9F9',
                            padding: '20px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            textAlign: 'center',
                            zIndex: 1000
                        }}>

                            <img src={vektor_onfire} style={{width: '100px', height: '100px'}}/>
                            <p style={{
                                fontFamily: 'Manrope',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '36px',
                                lineHeight: '36px',
                                color: '#0B2545',
                                margin: '16px'


                            }}>Молодець! {correctAnswers} слів правильно!</p>
                            <button style={{
                                width: '200px',
                                height: '45px', backgroundColor: '#fff',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'Manrope',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '18px',
                                lineHeight: '36px',
                                color: '#0B2545',
                                margin: '16px'
                            }} onClick={handleCloseCompletionPopup}>Повернутися
                            </button>
                        </div>
                    )}
                </>
            )}

            <div className="card-learning">
                <div className="learning-header">
                    <div className="learning-info">
                        <div className="mode-exercise">
                            <div className="exercise-ico-title">
                                <span className="material-symbols-outlined">record_voice_over</span>
                                <h2>На слух</h2>
                            </div>
                        </div>

                        <div className="word-count-topic">
                            <h2 className="word-count">
                                {currentIndex + 1}/{words.length}
                            </h2>
                            <h2 className="topic-name">{words[0].topic || "Тема"}</h2>
                        </div>

                        <a href="/theme/1">
                            <span className="material-symbols-outlined">close</span>
                        </a>
                    </div>
                    <ProgressBar currentIndex={currentIndex} words={words}/>
                    <div className="hearts">
                        {Array.from({length: 3}).map((_, index) => (
                            <span key={index} className={index < lives ? "heart counted" : "heart empty"}>
            ❤️
          </span>
                        ))}
                    </div>
                </div>

                <div className="word-picture">
                    <motion.div
                        className="word-picture"
                        style={{width: "100%"}}
                        key={currentWord.id} // Унікальний ключ для кожного слова
                        initial={{opacity: 0, y: 20}} // Початковий стан (прозорість і зсув)
                        animate={{opacity: 1, y: 0}} // Анімація до фінального стану
                        exit={{opacity: 0, y: -20}} // Анімація при виході
                        transition={{duration: 0.4}} // Тривалість анімації
                    >
                        <div className="word">

                            <div id={"audio-part"}>
                                <div className="hidden-word">
                                    <h1>{isAnsweredCorrectly ? `${words[currentIndex]?.article} ${words[currentIndex]?.word}` : "*".repeat((words[currentIndex]?.article.length || 0) + (words[currentIndex]?.word.length || 0) + 1)}</h1>
                                </div>
                                <h2>Введіть почуте слово</h2>
                                <input type="text" className={"audio-input"} value={userInput}
                                       onChange={handleInputChange}/>

                                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                                    <button className={"clear-button"} onClick={handleClearInput}>Очистити</button>
                                    <button className={"check-button"} onClick={handleCheckAnswer}>Перевірити</button>
                                </div>
                            </div>

                            {isAnsweredCorrectly === null &&
                                <div className="word-example">
                                    <img className="vektor-example" src={vektor_like} alt="Example Icon"/>
                                    <div className="message-bubble">
                                        <div className="message">
                                            <h2 id="Vektor-name">Примітка</h2>
                                            <h2 id="message-text">ä = ae, ö = oe, ü = ue, ß = ss</h2>
                                        </div>
                                    </div>
                                </div>
                            }

                            {isAnsweredCorrectly === true &&
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

                            {isAnsweredCorrectly === false &&
                                <div className="word-example">
                                    <img className="vektor-example" src={vektor_shocked} alt="Example Icon"/>
                                    <div className="message-bubble">
                                        <div className="message">
                                            <h2 id="Vektor-name">Vektor</h2>
                                            <h2 id="message-text">Versuch's noch mal!</h2>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="image-container">
                            <img
                                className="pict-word"
                                src={words[currentIndex]?.picture || defaultImage}
                                alt="word"
                                onError={(e) => (e.target.src = defaultImage)}
                            />
                            <div className={`overlay ${isAnsweredCorrectly ? "hidden" : ""}`}>
                <span className="question-mark">
<button
    style={{
        border: "none",
        backgroundColor: "transparent",
        fontVariationSettings: "'FILL' 1",
        cursor: "pointer"
    }}
    onClick={() => playAudio(words[currentIndex]?.audio)}
>
              <span className="material-symbols-outlined" style={{fontSize: '96px', color: "#0B2545"}}>volume_up</span>
                </button>
                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>


                <div className="nav-buttons">
                    <div className="arrow-left"
                         onClick={handlePrevious}>
                        <span className="material-symbols-outlined">arrow_left_alt</span>
                    </div>
                    <div className={`arrow-right ${!isAnsweredCorrectly ? "disabled" : ""}`} onClick={handleNext}>
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardLearning;
