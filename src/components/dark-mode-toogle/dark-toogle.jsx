// import React, { useState, useEffect } from 'react';
// import '../../styles/blogpage.css'; // за замовчуванням завантажуємо світлу тему
// import '../../styles/dark-theme/blogpage-dark.css';

//
// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);
//
//   useEffect(() => {
//     // Динамічне підключення теми
//     if (darkMode) {
//       import('../../styles/dark-theme/blogpage-dark.css').then(() => {
//         console.log("Темна тема завантажена");
//       });
//     } else {
//       import('../../styles/blogpage.css').then(() => {
//         console.log("Світла тема завантажена");
//       });
//     }
//   }, [darkMode]);
//
//   // Функція для перемикання теми
//   const handleToggle = () => {
//     setDarkMode(!darkMode);
//   };
//
//   return (
//     <label className="dark-mode">
//       <input type="checkbox" checked={darkMode} onChange={handleToggle} />
//       <span className="slider round"></span>
//     </label>
//   );
// };
//
// export default ThemeToggle;
//
//


import React, { useState, useEffect } from 'react';
import '../../styles/blogpage.css'; // Підключаємо світлу тему (як базову)
import '../../styles/dark-theme/blogpage-dark.css'; // Підключаємо стилі для темної теми


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Додаємо або прибираємо клас dark-mode на body залежно від стану
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Функція для перемикання теми
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="dark-mode">
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
