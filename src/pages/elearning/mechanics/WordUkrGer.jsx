import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import correctSound from "../../../sounds/correct.mp3";
import wrongSound from "../../../sounds/wrong.wav";
import defaultImage from "../../../image/404.png"; // Додайте, якщо потрібно
import {motion} from "framer-motion";

const WordCard = ({
                      article,
                      word,
                      audio,
                      correctTranslation,
                      translations,
                      imageSrc,
                      onNext,
                      onAnswer
                  }) => {
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);

    // Скидання стану при зміні слова
    useEffect(() => {
        setSelected(null);
        setIsCorrect(null);
        setIsRevealed(false);
    }, [word]);

    const playSound = (soundFile) => {
        const audio = new Audio(soundFile);
        audio.play();
    };


    const handleClick = (translation) => {
        setSelected(translation);
        const isAnswerCorrect = translation === correctTranslation;
        setIsCorrect(isAnswerCorrect);
        playSound(isAnswerCorrect ? correctSound : wrongSound);

        onAnswer(isAnswerCorrect); // Передаємо стан у батьківський компонент

        if (isAnswerCorrect) {
            setTimeout(() => {
                setIsRevealed(true);
                onNext(); // Переходимо до наступного слова
            }, 1000);
        }
    };

    const clearField = () => {
        setSelected(null);
        setIsCorrect(null);
        setIsRevealed(false);
    };

    return (
        <div className="word-picture">
            <motion.div
                className="word-picture"
                style={{width: "100%"}}
                // key={currentWord.id} // Унікальний ключ для кожного слова
                initial={{opacity: 0, y: 20}} // Початковий стан (прозорість і зсув)
                animate={{opacity: 1, y: 0}} // Анімація до фінального стану
                exit={{opacity: 0, y: -20}} // Анімація при виході
                transition={{duration: 0.4, ease: "easeInOut"}} // Додаємо ease-in-out
            >
                <div className="word">
                    {!isRevealed ? (
                        <>
                            <div className="word-translation">
                                <h2>
                                    {audio && article} {word}
                                    {audio && (
                                        <span className="material-symbols-outlined"
                                              onClick={() => {

                                                  try {
                                                      const sound = new Audio(audio);
                                                      sound.play().catch((error) => console.error("Playback error:", error));
                                                  } catch (error) {
                                                      console.error("Audio initialization error:", error);
                                                  }
                                              }}

                                              style={{cursor: 'pointer'}}>volume_up</span>
                                    )}
                                </h2>
                            </div>

                            <div className="word-variants">
                                {translations.map((translation, index) => (
                                    <div
                                        key={index}
                                        className={`variant ${
                                            selected === translation
                                                ? isCorrect
                                                    ? "correct animate-correct"
                                                    : "incorrect animate-incorrect"
                                                : ""
                                        }`}
                                        onClick={() => handleClick(translation)}
                                    >
                                        <p>{!audio && article} {translation}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="revealed-card">
                            <h2>{!audio && article} {correctTranslation}</h2>
                        </div>
                    )}
                </div>

                <div className="image-container">
                    <img
                        className="pict-word"
                        src={imageSrc}
                        alt={word}
                        onError={(e) => (e.target.src = defaultImage)}
                    />
                    <div className={`overlay ${isRevealed ? "hidden" : ""}`}>
                        <span className="question-mark">?</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

WordCard.propTypes = {
    article: PropTypes.string.isRequired,
    word:
    PropTypes.string.isRequired,
    correctTranslation:
    PropTypes.string.isRequired,
    translations:
    PropTypes.arrayOf(PropTypes.string).isRequired,
    exampleSentence:
    PropTypes.string.isRequired,
    imageSrc:
    PropTypes.string.isRequired,
    onNext:
    PropTypes.func,
};

WordCard.defaultProps = {
    onNext: () => {
    },
};

export default WordCard;


