// import examIcon from './../image/ico/dictionary.svg';
// import cubeIcon from './../image/ico/deployed_code.svg';
// import bIcon from './../image/ico/b.svg';
// import caseIcon from './../image/ico/case.svg';

const examIcon = <span className="material-symbols-outlined">dictionary</span>;
const cubeIcon = <span className="material-symbols-outlined">
deployed_code
</span>;
const bIcon = <span className="material-symbols-outlined">
slab_serif
</span>;
const caseIcon = <span className="material-symbols-outlined">
work
</span>;

const filtersTopics = [
    {
        id: 1,
        title: 'Prüfung',
        icon: examIcon
    },
    {
        id: 2,
        title: 'Grammatik',
        icon: cubeIcon,
    },
    {
        id: 3,
        title: 'Lexik',
        icon: bIcon,
    },
    {
        id: 4,
        title: 'Arbeit',
        icon: caseIcon,
    },

    {
        id: 5,
        title: 'Andere',
        icon: caseIcon
    }

]

export {filtersTopics};