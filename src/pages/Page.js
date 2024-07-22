import React, { useState } from 'react';
import TopicFilter from './../components/filters/TopicFilter';
import LevelFilter from './../components/filters/LevelFilter';
import ArticlesWall from './../components/wall_of_articles/ArticlesWall';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <TopicFilter onCategoryChange={handleCategoryChange} />
        <LevelFilter onLevelChange={handleLevelChange} />
      </div>
      <ArticlesWall selectedCategory={selectedCategory} selectedLevel={selectedLevel} />
    </div>
  );
};

export default App;
