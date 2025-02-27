import React from "react";
import './ProgressBar.css'

const ProgressBar = ({ currentIndex, words }) => {
  const totalWords = words.length;
  const progressPerSection = totalWords / 3; // Кількість слів на кожну секцію

  const getFillWidth = (barIndex) => {
    const progress = currentIndex + 1; // Поточний прогрес
    const start = (barIndex - 1) * progressPerSection;
    const end = barIndex * progressPerSection;

    if (progress <= start) return "0%"; // Секція ще не заповнена
    if (progress >= end) return "100%"; // Секція повністю заповнена
    return `${((progress - start) / progressPerSection) * 100}%`; // Часткове заповнення
  };

  return (
    <div className="progress-bar">
      <div className="bar">
        <div
          className="fill first-bar"
          style={{ width: getFillWidth(1) }}
        ></div>
      </div>
      <div className="bar">
        <div
          className="fill second-bar"
          style={{ width: getFillWidth(2) }}
        ></div>
      </div>
      <div className="bar">
        <div
          className="fill third-bar"
          style={{ width: getFillWidth(3) }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
