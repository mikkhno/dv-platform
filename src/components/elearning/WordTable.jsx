// const WordTable = ({ wordsData }) => {
//     const playAudio = (audioSrc) => {
//         if (audioSrc) {
//             const audio = new Audio(audioSrc);
//             audio.play();
//         }
//     };
//
//     return (
//         <div className="table-words">
//             <table className="words-import">
//                 <tbody>
//                     {wordsData.map((word) => (
//                         <tr key={word.word_id}>
//                             <td className="sound-span">
//                                 <span
//                                     className="material-symbols-outlined"
//                                     onClick={() => playAudio(word.article ? word.audioWithArticle : word.audio)}
//                                     style={{ cursor: 'pointer' }}
//                                 >
//                                     volume_up
//                                 </span>
//                             </td>
//                             <td className="word-bold">{word.article ? word.article + ' ' : ''}{word.word}{word.plural_form ? ', ' + word.plural_form : ''}</td>
//                             <td>{word.translation}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default WordTable;

import React, { useState, useEffect } from "react";

const WordTable = ({ wordsData }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1356);
            if (window.innerWidth >= 1356) {
                setVisibleCount(wordsData.length);
            } else {
                setVisibleCount(5);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [wordsData]);

// const WordTable = ({ wordsData }) => {
//     const [visibleCount, setVisibleCount] = useState(() =>
//         window.innerWidth < 1024 ? 5 : wordsData.length
//     );
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//
//     useEffect(() => {
//         const handleResize = () => {
//             const mobile = window.innerWidth < 1024;
//             setIsMobile(mobile);
//             setVisibleCount(mobile ? 5 : wordsData.length);
//         };
//
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, [wordsData.length]);

    const playAudio = (audioSrc) => {
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        }
    };

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 10, wordsData.length));
    };

    return (
        <><h2>Слова до вивчення</h2>
    <div className="table-words">

            <table className="words-import">
                <tbody>
                {(isMobile ? wordsData.slice(0, visibleCount) : wordsData).map((word) => (
                    <tr key={word.word_id}>
                        <td className="sound-span">
                                <span
                                    className="material-symbols-outlined"
                                    onClick={() => playAudio(word.article ? word.audioWithArticle : word.audio)}
                                    style={{cursor: 'pointer'}}
                                >
                                    volume_up
                                </span>
                        </td>
                        <td className="word-bold">{word.article ? word.article + ' ' : ''}{word.word}{word.plural_form ? ', ' + word.plural_form : ''}</td>
                        <td>{word.translation}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
            {isMobile && visibleCount < wordsData.length && (
                <button onClick={loadMore} className="show-more-btn">
                    Показати більше
                </button>
            )}
            </>
    );
};

export default WordTable;


