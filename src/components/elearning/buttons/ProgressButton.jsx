import React from "react";
import triangleButton from "../../../image/svg/button.svg";

const CircularProgressSVG = ({ progress, size = 44, strokeWidth = 3 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg className="progress-button" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Фонова пунктирна лінія */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#2E59B7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="8 8" // Пунктир
        opacity="0.3" // Напівпрозорість
      />

      {/* Прогрес-бар */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#2E59B7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference} // Довжина всієї лінії
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {/* Іконка трикутної кнопки в центрі */}
      <image
        href={triangleButton}
        x={size / 2 - 15} // Центрування по горизонталі
        y={size / 2 - 15} // Центрування по вертикалі
        width="30"
        height="30"
      />
    </svg>
  );
};

export default CircularProgressSVG;
