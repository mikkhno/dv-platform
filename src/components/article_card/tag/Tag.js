import './Tag.css';
import beginnerIcon from './icons/flower.svg';
import intermediateIcon from './icons/sprinter.svg';
import masterIcon from './icons/flag.svg';

const Tag = ({ tags, icon, onClick}) => {
  const IcoSelect = (tag) => {
    if (tag === 'A1' || tag === 'A2') return beginnerIcon;
    if (tag === 'B1' || tag === 'B2') return intermediateIcon;
    if (tag === 'C1') return masterIcon;
    return icon;
  };

  return (
    <div className="category" id="pruefung" onClick={onClick}>
      <img src={IcoSelect(tags)} alt={tags} />
      <p>{tags}</p>
    </div>
  );
};

export default Tag;