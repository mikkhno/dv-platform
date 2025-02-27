const TopicBlock = ({ topicInfo }) => {
  return (
    <div>
      <h2 className="page-route">
        Лексика &gt; Рівень {topicInfo.subLevel} &gt; {topicInfo.moduleTitle} &gt; {topicInfo.themeTitle}
      </h2>
      <div className="topic-block">
        <div className="block-info">
          <div className="topic-level">
            <h2 className="level-topic">{topicInfo.subLevel}</h2>
          </div>
          <div className="down-info">
            <h2 className="word-count">{topicInfo.wordsQuantity} слів</h2>
            <h2 className="topic-title">{topicInfo.themeTitle}</h2>
          </div>
        </div>
        <img className="topic-pic" src={topicInfo.imagePath} alt={topicInfo.themeTitle} />
      </div>
    </div>
  );
};

export default TopicBlock;