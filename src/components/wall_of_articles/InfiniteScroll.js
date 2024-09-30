// import React, { useState, useEffect, useCallback } from 'react';
// import {articles} from "../../helpers/ListOfArticles";
// import ArticleCard from '../../components/article_card/ArticleCard.js'; // Імпорт компонента ArticleCard
// // import '../styles/blogpage.css';
//
// const InfiniteScroll = ({ selectedCategory, selectedLevel }) => {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const itemsPerPage = 10;
//
//   const fetchItems = useCallback(() => {
//     setLoading(true);
//     setTimeout(() => {
//       let filteredArticles = articles;
//       if (selectedCategory) {
//         filteredArticles = filteredArticles.filter((article) => article.category === selectedCategory);
//       }
//       if (selectedLevel) {
//         filteredArticles = filteredArticles.filter((article) => article.tags.includes(selectedLevel));
//       }
//       const newItems = filteredArticles.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//       setItems((prevItems) => [...prevItems, ...newItems]);
//       if (newItems.length === 0) {
//         setHasMore(false);
//       }
//       setLoading(false);
//     }, 0);
//   }, [page, selectedCategory, selectedLevel]);
//
//   useEffect(() => {
//     fetchItems();
//   }, [fetchItems]);
//
//   useEffect(() => {
//     setItems([]);
//     setPage(1);
//     setHasMore(true);
//   }, [selectedCategory, selectedLevel]);
//
//   const handleScroll = useCallback(() => {
//     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
//       return;
//     }
//     setPage((prevPage) => prevPage + 1);
//   }, [loading]);
//
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);
//
//   return (
//     <>
//       {items.map((item) => (
//         <ArticleCard key={item.id} article={item} />
//       ))}
//       {/*{!hasMore && <p id="no-articles">Поки що таких статей немає, але ми працюємо над цим :)<br/> Слідкуйте за оновленнями!</p>}*/}
//     </>
//   );
// };
//
// export default InfiniteScroll;






//працює, але без фільтру стилів

// import React, { useState, useEffect, useCallback } from 'react';
// import ArticleCard from '../../components/article_card/ArticleCard.js'; // Імпорт компонента ArticleCard
// // import '../styles/blogpage.css';
//
// const InfiniteScroll = ({ selectedCategory, selectedLevel }) => {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const itemsPerPage = 10;
//
//   const fetchItems = useCallback(() => {
//     setLoading(true);
//     fetch('http://134.209.234.33:8082/blog')
//       .then((response) => response.json())
//       .then((data) => {
//         let filteredArticles = data;
//         if (selectedCategory) {
//           filteredArticles = filteredArticles.filter((article) => article.category === selectedCategory);
//         }
//         if (selectedLevel) {
//           filteredArticles = filteredArticles.filter((article) => article.tags.includes(selectedLevel));
//         }
//         const newItems = filteredArticles.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//         setItems((prevItems) => [...prevItems, ...newItems]);
//         if (newItems.length === 0) {
//           setHasMore(false);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, [page, selectedCategory, selectedLevel]);
//
//   useEffect(() => {
//     fetchItems();
//   }, [fetchItems]);
//
//   useEffect(() => {
//     setItems([]);
//     setPage(1);
//     setHasMore(true);
//   }, [selectedCategory, selectedLevel]);
//
//   const handleScroll = useCallback(() => {
//     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
//       return;
//     }
//     setPage((prevPage) => prevPage + 1);
//   }, [loading]);
//
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);
//
//   return (
//     <>
//       {items.map((item) => (
//         <ArticleCard key={item.id} article={item} />
//       ))}
//       {/*{!hasMore && <p id="no-articles">Поки що таких статей немає, але ми працюємо над цим :)<br/> Слідкуйте за оновленнями!</p>}*/}
//     </>
//   );
// };
//
// export default InfiniteScroll;

import React, { useState, useEffect, useCallback } from 'react';
import ArticleCard from '../../components/article_card/ArticleCard.js'; // Імпорт компонента ArticleCard
// import '../styles/blogpage.css';

// Функція для видалення всіх атрибутів style та очищення тексту + укорочення(опціонально)
const cleanHtmlContent = (htmlContent) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  // Видаляємо атрибути style з кожного елемента
  const elements = tempDiv.querySelectorAll('[style]');
  elements.forEach((element) => element.removeAttribute('style'));

  // Отримуємо чистий текст без форматування
  const cleanText = tempDiv.innerText.replace(/\n/g, ' ').trim();

  function truncateText(cleanText, maxLength) {
  if (cleanText.length <= maxLength) {
    return cleanText; // Якщо текст не перевищує встановлену довжину, повертаємо його без змін
  }
  return cleanText.substring(0, maxLength) + '...'; // Обрізаємо текст і додаємо три крапки
}

const truncatedDescription = truncateText(cleanText, 272); // Наприклад, обмеження в 100 символів

return truncatedDescription;
//   return cleanText;
};



const InfiniteScroll = ({ selectedCategory, selectedLevel }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;

  const fetchItems = useCallback(() => {
    setLoading(true);
    fetch('http://134.209.234.33:8082/blog')
      .then((response) => response.json())
      .then((data) => {
        let filteredArticles = data;
        if (selectedCategory) {
          filteredArticles = filteredArticles.filter((article) => article.category === selectedCategory);
        }
        if (selectedLevel) {
          filteredArticles = filteredArticles.filter((article) => article.tags.includes(selectedLevel));
        }

        // Очищуємо HTML і форматування для кожної статті
        const cleanedArticles = filteredArticles.map((article) => ({
          ...article,
          description: cleanHtmlContent(article.description), // Очищуємо опис
        }));

        const newItems = cleanedArticles.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        setItems((prevItems) => [...prevItems, ...newItems]);

        if (newItems.length === 0) {
          setHasMore(false);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [page, selectedCategory, selectedLevel]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCategory, selectedLevel]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {items.map((item) => (
        <ArticleCard key={item.id} article={item} />
      ))}
      {!hasMore && (
        <p id="no-articles">
          На цьому все :) Слідкуйте за оновленнями!
        </p>
      )}
    </>
  );
};

export default InfiniteScroll;

