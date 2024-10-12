import './Tag.css';
const beginnerIcon = <span className="material-symbols-outlined">local_florist</span>;
const intermediateIcon = <span className="material-symbols-outlined">sprint</span>;
const masterIcon = <span className="material-symbols-outlined">sports_score</span>;

const Tag = ({ tags, icon, onClick}) => {
  const IcoSelect = (tag) => {
    if (tag === 'A1' || tag === 'A2') return beginnerIcon;
    if (tag === 'B1' || tag === 'B2') return intermediateIcon;
    if (tag === 'C1') return masterIcon;
    return icon;
  };

  return (
      <div className="category" id="pruefung" onClick={onClick}>
        <div className="icon">
          {IcoSelect(tags)}
        </div>
        <p>{tags}</p>
      </div>
  );
};

export default Tag;