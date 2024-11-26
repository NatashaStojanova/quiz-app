import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "context/UserContext";
import ROUTES from "routes/routes";
import { PreparationScreen } from "./PreparationScreen";
import { QuizScreen } from "./QuizScreen";

const QuizPage = () => {
  const [isPreparationComplete, setIsPreparationComplete] = useState(false);
  const { userState } = useUserContext();
  const { user } = userState;
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the welcome screen if there is no user in the context
    if (!user) {
      navigate(ROUTES.WELCOME_SCREEN);
    }
  }, [user, navigate]);

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
