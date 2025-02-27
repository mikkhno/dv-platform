import { useState } from "react";
import correctSound from '../../../sounds/correct.mp3';
import selectSound from '../../../sounds/select.wav';
import wrongSound from '../../../sounds/wrong.wav';

export function useWordGame(correctArticle) {
    const [article, setArticle] = useState("");
    const [message, setMessage] = useState(""); // Повідомлення для результату
    const [isCorrect, setIsCorrect] = useState(null); // Стан правильної відповіді

    // Функція для відтворення звуку
    const playSound = (soundFile) => {
        const audio = new Audio(soundFile);
        audio.play();
    };

    // Перетягування починається
    const handleDragStart = (e, value) => {
        e.dataTransfer.setData("text", value);
    };

    // Дозвіл на перетягування
    const allowDrop = (e) => {
        e.preventDefault();
    };

    // Обробка "перетягнути і відпустити"
    const handleDrop = (e) => {
        e.preventDefault();
        const draggedArticle = e.dataTransfer.getData("text");
        setArticle(draggedArticle); // Заносимо вибраний артикль
        setMessage(""); // Очистити повідомлення
        playSound(selectSound);
    };

    // Очищення поля
    const clearField = () => {
        setArticle("");
        setMessage("");
        setIsCorrect(null); // Скинути стан правильності
    };

const handleArrowClick = () => {
    const wordResultElement = document.querySelector(".word-result");
    if (wordResultElement) {
        wordResultElement.classList.add("hidden"); // Додаємо клас для анімації зникнення
        setTimeout(() => {
            setIsCorrect(null); // Скидаємо стан після анімації
        }, 500); // Час анімації в CSS
    } else {
        setIsCorrect(null); // Якщо елемент вже прихований, просто скидаємо стан
    }
};



    // Перевірка відповіді
    const checkAnswer = () => {
        if (article === correctArticle) {
            setMessage("Correct");
            setIsCorrect(true);
            playSound(correctSound); // Звук правильної відповіді
        } else {
            setMessage("False");
            setIsCorrect(false);
            playSound(wrongSound); // Звук неправильної відповіді
        }
    };

    return {
        article,
        message,
        isCorrect,
        handleDragStart,
        allowDrop,
        handleDrop,
        clearField,
        checkAnswer,
    };
}


