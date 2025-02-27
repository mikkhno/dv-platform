import React, {useState} from "react";
import '../../../styles/elearning/cardlearning.css';
import vektor_like from '../../../image/vektor/vektor_like.png';
import vektor_onfire from '../../../image/vektor/vektor_onfire.png';
import {motion} from "framer-motion";
import defaultImage from "../../../image/404.png"
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import PopupMessage from "../../../components/elearning/PopUpMessage";

const CardLearning = ({words = []}) => {
    if (!words.length) {
        return <div className="card-learning">Немає слів для відображення</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentIndex, setCurrentIndex] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPopup, setShowPopup] = useState(false);



    const handleNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setShowPopup(true);
        }
    };

    const handlePrevious = (prevIndex) => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex; // Не змінюємо стан, якщо prevIndex <= 1
        });
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        // Повернення на попередню сторінку
        window.history.back();
    };
    const currentWord = words[currentIndex];


    return (
        <>
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
                    text="Всі слова вивчено!"
                    buttonText="Повернутися"
                    onClose={handleClosePopup}
                />
            )}


            <div className="card-learning">

                <div className="learning-header">
                    <div className="learning-info">
                        <div className="mode-exercise">
                            <div className="exercise-ico-title">
                                <span className="material-symbols-outlined">style</span>
                                <h2>Картки</h2>
                            </div>
                        </div>

                        <div className="word-count-topic">
                            <h2 className="word-count">{currentIndex + 1}/{words.length}</h2>
                            <h2 className="topic-name">Möbel</h2>
                        </div>

                        <a href="/theme/1"><span className="material-symbols-outlined" id="pointer">close</span></a>
                    </div>
                    <ProgressBar currentIndex={currentIndex} words={words}/>
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
                            <div className="word-translation-cards">
                                <h2>
                                    {currentWord.article} {currentWord.word}
                                    <span className="material-symbols-outlined"
                                    onClick={() => {
                                        const audio = new Audio(currentWord.audio);
                                        audio.play();
                                    }}
                                    style={{cursor: 'pointer'}}>volume_up</span>
                                </h2>
                                <h4>{currentWord.pluralForm}</h4>
                                <h3>{currentWord.translation}</h3>
                            </div>

                            <div className="word-example">
                                <img className="vektor-example" src={vektor_like} alt="Example Icon"/>
                                <div className="message-bubble">
                                    <div className="message">
                                        <h2 id="Vektor-name">Vektor</h2>
                                        <h2 id="message-text">{currentWord.examples}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img className="pict-word" src={currentWord.picture} alt={currentWord.word}
                             onError={(e) => e.target.src = defaultImage}/>
                    </motion.div>
                </div>

                <div className="nav-buttons">
                    <div className="arrow-left" onClick={handlePrevious}>
                        <span className="material-symbols-outlined">arrow_left_alt</span>
                    </div>
                    <div className="arrow-right" onClick={handleNext}>
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardLearning;
