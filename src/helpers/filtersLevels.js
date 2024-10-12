// import beginnerIcon from './../image/ico/flower.svg';

// import intermediateIcon from './../image/ico/sprinter.svg';
// import masterIcon from './../image/ico/flag.svg';

const beginnerIcon = <span className="material-symbols-outlined">local_florist</span>;
const intermediateIcon = <span className="material-symbols-outlined">sprint</span>;
const masterIcon = <span className="material-symbols-outlined">sports_score</span>;

const filtersLevels = [
    {
        id: 1,
        title: 'A1',
        icon: beginnerIcon
    },
    {
        id: 2,
        title: 'A2',
        icon: beginnerIcon
    },
    {
        id: 3,
        title: 'B1',
        icon: intermediateIcon

    },
    {
        id: 4,
        title: 'B2',
        icon: intermediateIcon
    },
    {
        id: 5,
        title: 'C1',
        icon: masterIcon
    }
]

export {filtersLevels};