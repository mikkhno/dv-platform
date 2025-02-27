import React, { useState, useEffect } from "react";
import "../../../styles/elearning/cardlearning.css";
import "../../../styles/elearning/wordlearning.css";
import WordCard from "../mechanics/WordUkrGer";
import defaultImage from "../../../image/404.png";
import ProgressBar from "../../../components/progress-bar/ProgressBar";
import vektor_shocked from "../../../image/vektor/vektor_shocked.png";
import vektor_onfire from "../../../image/vektor/vektor_onfire.png";
import PopupMessage from "../../../components/elearning/PopUpMessage";
// Додайте, якщо потрібно

// Функція для створення рандомних варіантів
const generateVariants = (currentWord, words, numVariants = 4) => {
  const otherTranslations = words
    .filter((word) => word.translation !== currentWord.translation)
    .map((word) => word.translation);

  // Перемішуємо список
  const shuffled = otherTranslations.sort(() => Math.random() - 0.5);

  // Вибираємо потрібну кількість варіантів
  const randomVariants = shuffled.slice(0, numVariants - 1);

  // Додаємо правильний переклад
  randomVariants.push(currentWord.translation);

  // Перемішуємо остаточний список
  return randomVariants.sort(() => Math.random() - 0.5);
};

const WordLearning = ({ words = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [variants, setVariants] = useState([]);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [lives, setLives] = useState(3);
  const [showPopup, setShowPopup] = useState(false);
  const [incorrectWords, setIncorrectWords] = useState(new Set()); // Слова, на які була хоча б одна помилка
  const [correctAnswers, setCorrectAnswers] = useState(0); // Лічильник ідеально відгаданих слів
  const [showCompletionPopup, setShowCompletionPopup] = useState(false); // Вікно успішного проходження


  useEffect(() => {
    if (words.length > 0) {
      const currentWord = words[currentIndex];
      setVariants(generateVariants(currentWord, words));
      setIsAnsweredCorrectly(false); // Скидаємо правильність відповіді при зміні слова
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

  if (!words.length) {
    return <div className="card-learning">Немає слів для відображення</div>;
  }

  const handleNext = () => {
    if (!isAnsweredCorrectly) return; // Блокуємо, якщо відповідь неправильна

    setCurrentIndex((prevIndex) => {
        if (prevIndex < words.length - 1) {
            return prevIndex + 1;
        } else {
            setShowCompletionPopup(true); // Якщо це останнє слово – показуємо вікно
            return prevIndex;
        }
    });

    setIsAnsweredCorrectly(false); // Скидаємо стан правильності перед новим словом
};


  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
        setIsAnsweredCorrectly(true);

        // Якщо слово не було в списку помилок, додаємо до правильних відповідей
        setCorrectAnswers((prev) => {
            const newCorrectAnswers = incorrectWords.has(words[currentIndex]) ? prev : prev + 1;

            // Перевіряємо, чи користувач закінчив усі слова
            if (newCorrectAnswers === words.length) {
                setShowCompletionPopup(true); // Відкриваємо вікно завершення
            }

            return newCorrectAnswers;
        });
    } else {
        setLives((prevLives) => {
            if (prevLives === 1) {
                setShowPopup(true); // Показуємо вспливаюче вікно при 3-й помилці
            }
            return prevLives - 1;
        });

        // Додаємо слово до списку помилкових
        setIncorrectWords((prevSet) => new Set(prevSet).add(words[currentIndex]));
    }
};

    const handleClosePopup = () => {
    setShowPopup(false);
    window.history.back(); // Повернення на попередню сторінку
  };

    const handleCloseCompletionPopup = () => {
    setShowCompletionPopup(false);
    handleClosePopup();// Скидаємо рахунок правильних відповідей
};

const handlePrevious = () => {
    if (!isAnsweredCorrectly) return; // Блокуємо, якщо відповідь неправильна

    setCurrentIndex((prevIndex) => {
        if (prevIndex > 0) {
            setIsAnsweredCorrectly(false); // Скидаємо стан правильності після переходу
            return prevIndex - 1;
        }
        return prevIndex; // Не змінюємо стан, якщо prevIndex <= 1
    });
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
                    imageSrc={vektor_shocked}
                    text="Всі життя закінчилися."
                    buttonText="Повернутися"
                    onClose={handleClosePopup}
                /> )}

                  {showCompletionPopup && (
                      <PopupMessage
                    imageSrc={vektor_onfire}
                    text={`Молодець! ${correctAnswers} слів правильно!`}
                    buttonText="Повернутися"
                    onClose={handleCloseCompletionPopup}
                />
            )}

          <div className="card-learning">

              <div className="learning-header">
                  <div className="learning-info">
                      <div className="mode-exercise">
                          <div className="exercise-ico-title">
                              <span className="material-symbols-outlined">translate</span>
                              <h2>Переклад</h2>
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
              <WordCard
                  key={currentWord.word} // Додаємо key для перезавантаження компонента при зміні слова
                  word={currentWord.word}
                  audio={currentWord.audio}
                  article={currentWord.article}
                  correctTranslation={currentWord.translation}
                  translations={variants}
                  exampleSentence={currentWord.example}
                  imageSrc={currentWord.picture || defaultImage}
                  topic={currentWord.topic}
                  onNext={handleNext}
                  onAnswer={handleAnswer}// Передаємо функцію, якщо потрібно
              />
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

export default WordLearning;



