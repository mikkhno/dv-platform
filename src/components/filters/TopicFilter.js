// import React, { useState } from 'react';
// import { filtersTopics } from '../../data/filtersTopics'; // Імпорт даних з категоріями
// import Tag from '../Tag'; // Імпорт компонента Tag
//
// const TopicFilter = ({ onCategoryChange }) => {
//   const [activeCategory, setActiveCategory] = useState('');
//
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     onCategoryChange(category);
//   };
//
//   return (
//     <div className="filters">
//       <h3>Categories</h3>
//       {filtersTopics.map((topic) => (
//         <Tag
//           key={topic.id}
//           tags={topic.title}
//           icon={topic.icon}
//           onClick={() => handleCategoryClick(topic.title)}
//           isActive={activeCategory === topic.title}
//         />
//       ))}
//       <button onClick={() => handleCategoryClick('')}>All Categories</button>
//     </div>
//   );
// };
//
// export default TopicFilter;
import React, { useState } from 'react';
import { filtersTopics } from '../../helpers/filtersTopics'; // Імпорт даних з категоріями
import Tag from '../../components/article_card/tag/Tag'; // Імпорт компонента Tag
import '../article_card/tag/Tag.css';
// Підключення стилів

const TopicFilter = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
<div className="filter-level">
          <div className="all"  onClick={() => handleCategoryClick('')}>
              <p>Усі</p>
          </div>
      {filtersTopics.map((topic) => (
        <Tag
          key={topic.id}
          tags={topic.title}
          icon={topic.icon}
          onClick={() => handleCategoryClick(topic.title)}
          isActive={activeCategory === topic.title}
        />
      ))}
      {/*<button onClick={() => handleCategoryClick('')}>All Categories</button>*/}
    </div>
  );
};

export default TopicFilter;
//
// const TopicFilter = ({ onCategoryChange }) => {
//   const [activeCategory, setActiveCategory] = useState('');
//
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     onCategoryChange(category);
//   };
//
//   return (
//     <div className="filter-level">
//       <div
//         className={`all ${activeCategory === '' ? 'active' : ''}`}
//         onClick={() => handleCategoryClick('')}
//       >
//         <p>Усі</p>
//       </div>
//       {filtersTopics.map((topic) => (
//         <div
//           key={topic.id}
//           className={`category ${activeCategory === topic.title ? 'active' : ''}`}
//           onClick={() => handleCategoryClick(topic.title)}
//         >
//           <Tag
//             tags={topic.title}
//             icon={topic.icon}
//             isActive={activeCategory === topic.title}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default TopicFilter;
