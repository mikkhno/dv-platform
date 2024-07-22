import React from 'react';
import InfiniteScroll from './InfiniteScroll';

const ArticlesWall = ({ selectedCategory, selectedLevel }) => {
  return (
    <>
      <InfiniteScroll selectedCategory={selectedCategory} selectedLevel={selectedLevel} />
    </>
  );
};

export default ArticlesWall;
