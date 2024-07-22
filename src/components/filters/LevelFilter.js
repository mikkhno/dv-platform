import React, { useState } from 'react';
import { filtersLevels } from '../../helpers/filtersLevels'; // Імпорт даних з рівнями
import Tag from '../../components/article_card/tag/Tag'; // Імпорт компонента Tag

const LevelFilter = ({ onLevelChange }) => {
  const [activeLevel, setActiveLevel] = useState('');

  const handleLevelClick = (level) => {
    setActiveLevel(level);
    onLevelChange(level);
  };

  return (

      <div className="filter-level">
          <div className="all"  onClick={() => handleLevelClick('')}>
              <p>Усі</p>
          </div>
          {filtersLevels.map((level) => (
              <Tag
                  key={level.id}
                  tags={level.title}
                  icon={level.icon}
                  onClick={() => handleLevelClick(level.title)}
                  isActive={activeLevel === level.title}
              />
          ))}
      </div>
  );
};

export default LevelFilter;
