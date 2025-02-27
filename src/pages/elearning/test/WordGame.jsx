import "../../../styles/elearning/elearning-screen.css";
import React, { useState, useEffect } from "react";
import correctSound from "../../../sounds/correct.mp3";
import selectSound from "../../../sounds/select.wav";
import wrongSound from "../../../sounds/wrong.wav";

const WordGame = ({ audio, word, correctArticle, onResult }) => {
    const [article, setArticle] = useState("");
    const [message, setMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [isLocked, setIsLocked] = useState(false);

    const playSound = (soundFile) => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    const playAudio = (audioSrc) => {
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        }
    };

    const handleDragStart = (e, value) => {
        if (isLocked) return;
        e.dataTransfer.setData("text", value);
    };

    const allowDrop = (e) => {
        if (!isLocked) e.preventDefault();
    };

    const handleDrop = (e) => {
        if (isLocked) return;
        const droppedArticle = e.dataTransfer.getData("text");
        setArticle(droppedArticle);
        setMessage("");
        playSound(selectSound);
    };

    const clearField = () => {
        setArticle("");
        setMessage("");
        setIsCorrect(null);
        setIsLocked(false);
    };

    const checkAnswer = () => {

        const result = article === correctArticle;
        setIsCorrect(result);
        setIsLocked(true);
        onResult(result);

        if (result) {
            setMessage("Correct");
            playSound(correctSound);
        } else {
            setMessage("False");
            playSound(wrongSound);
        }

    };

    useEffect(() => {
        clearField();
        setIsCorrect(null);
    }, [word]);

    return (
        <div className="word-game">
            <div className="word-translated">
                <div className="field-article" onDrop={handleDrop} onDragOver={allowDrop}>
                    {article && <p>{article}</p>}
                </div>
                <h2>
                    {word}
                    <span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={() => playAudio(audio)}>
                        volume_up
                    </span>
                </h2>
            </div>

            <div className="variant-article">
                {["der", "die", "das"].map((art) => (
                    <div
                        key={art}
                        className={`${art}-article`}
                        draggable={!isLocked}
                        onDragStart={(e) => handleDragStart(e, art)}
                        onClick={() => handleDrop({ dataTransfer: { getData: () => art } })}
                    >
                        <p>{art}</p>
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button className="clear-button" onClick={clearField} disabled={isCorrect !== false}>
                    Очистити
                </button>
                <button className="check-button" onClick={checkAnswer} disabled={isLocked || !article}>
                    Перевірити
                </button>
            </div>
        </div>
    );
};

export default WordGame;
