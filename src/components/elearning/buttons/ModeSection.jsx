import { WordTopicInfo, exerciseEntityList, jsonExerciseProgress } from "../../../helpers/elearning/jsonLexikPage";
import { useState } from "react";
import PopUpMessage2 from "../PopUpMessage2";
import vektor_shocked from "../../../image/vektor/vektor_shocked.png";

const getProgressClass = (progress, total, step) => {
    const percentage = (progress / total) * 3;
    return percentage >= step ? "completed" : "";
};

const ExerciseBlock = () => {
    const topicInfo = WordTopicInfo[0];
    const [showPopup, setShowPopup] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);

    return (
        <div className="block-exercises">
            {exerciseEntityList.map((exercise) => {
                const progressData = jsonExerciseProgress.find(p => p.exerciseId === exercise.id);
                const progress = progressData ? progressData.exerciseProgress : 0;
                const totalWords = topicInfo[exercise.wordCountKey] || 0;
                const isFull = progress >= totalWords;

                return (
                    <div
                        key={exercise.id}
                        className={`exercise-item ${isFull ? "full" : ""}`}
                        onClick={() => {
                            if (progress >= totalWords) {
                                setSelectedExercise(exercise.id);
                                setShowPopup(true);
                            } else {
                                window.location.href = exercise.link;
                            }
                        }}
                    >
                        <div className="tooltip-container">
                            <div className="exercise-ico-title">
                                <span className="material-symbols-outlined">{exercise.icon}</span>
                                <h2>{exercise.title}</h2>
                                <div className="tooltip">{progressData?.exerciseMessage}</div>
                            </div>
                            <div className="mobile-mode-progress">
                                <h2>{progressData.exerciseProgress}/{totalWords}</h2>
                            </div>
                            <div className="mode-progress">
                                {[1, 2, 3].map(step => (
                                    <div key={step} className={`progress-segment ${getProgressClass(progress, totalWords, step)}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}

            {showPopup && (
                <PopUpMessage2
                    imageSrc={vektor_shocked}
                    text="Ви вже завершили цей режим. Бажаєте пройти знову?"
                    buttonText="Пройти заново"
                    onClose={() => setShowPopup(false)}
                    onConfirm={() => {
                        setShowPopup(false);
                        if (selectedExercise) {
                            window.location.href = exerciseEntityList.find(e => e.id === selectedExercise)?.link;
                        }
                    }}
                    secondaryButtonText="Вибрати інший режим"
                    onSecondaryAction={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default ExerciseBlock;
