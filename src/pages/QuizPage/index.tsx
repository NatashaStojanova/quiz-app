import { useState } from "react";
import { PreparationScreen } from "./PreparationScreen";
import { QuizScreen } from "./QuizScreen";

const QuizPage = () => {
  const [isPreparationComplete, setIsPreparationComplete] = useState(false);

  const handlePreparationComplete = () => {
    setIsPreparationComplete(true);
  };

  return (
    <>
      {isPreparationComplete ? (
        <QuizScreen />
      ) : (
        <PreparationScreen onComplete={handlePreparationComplete} />
      )}
    </>
  );
};

export default QuizPage;
