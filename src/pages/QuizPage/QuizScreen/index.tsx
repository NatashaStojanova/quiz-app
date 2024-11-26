import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "graphql/queries";
import ROUTES from "routes/routes";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigationHook";
import { SelectedAnswers } from "models/SelectedAnswers";
import { IQuizQuestion } from "models/QuizQuestion";
import { generateQuizQuestions } from "helpers/quizHelpers";
import { useUserContext } from "context/UserContext";
import { TOTAL_QUESTIONS_NUMBER } from "consts/index";
import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Loading } from "components/Loading";
import { Error } from "components/Error";
import { Timer } from "components/Timer";
import { Question } from "components/Question";
import { AnswerButton } from "components/AnswerButton";
import { ProgressBar } from "components/ProgressBar";
import { NavigationButtons } from "components/NavigationButtons";
import { QuizWrapper, AnswersWrapper } from "./style";

export const QuizScreen = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const navigate = useNavigate();
  const { userState, setUserState } = useUserContext();
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);
  const [progress, setProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (data && data.countries) {
      const quizQuestions = generateQuizQuestions(data.countries);
      setQuestions(quizQuestions.slice(0, 10)); // Use 10 random questions
    }
  }, [data]);

  // Update progress bar based on the number of answered questions
  useEffect(() => {
    const answeredQuestions = Object.keys(selectedAnswers).length;
    const progressValue =
      questions.length > 0 ? (answeredQuestions / questions.length) * 100 : 0;
    setProgress(progressValue);
  }, [selectedAnswers, questions]);

  useEffect(() => {
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    // Set shouldAnimate to true only if the question isn't already answered
    setShouldAnimate(!currentAnswer);
  }, [currentQuestionIndex, selectedAnswers]);

  const handleAnswerSelect = (index: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers[index]?.isCorrect;

    if (!selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: { selectedIndex: index, isCorrect },
      }));
    }

    if (!selectedAnswers[currentQuestionIndex] && isCorrect) {
      setAnsweredCorrectly((prev) => prev + 1);
    }
  };

  const handleTimeUp = () => {
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    if (!currentAnswer) {
      const correctAnswerIndex = questions[
        currentQuestionIndex
      ].answers.findIndex((answer) => answer.isCorrect);

      // Mark the correct answer as selected automatically
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: {
          selectedIndex: correctAnswerIndex,
          isCorrect: false,
        },
      }));

      // Delay before moving to the next question
      setTimeout(() => {
        handleNext(); // Move to the next question after showing the correct answer
      }, 2000); // 2-second delay
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleDone = () => {
    const newResult = {
      user: userState.user,
      score: answeredCorrectly,
    };

    const existingResults = JSON.parse(
      localStorage.getItem("quiz_results") || "[]"
    );

    const updatedResults = [...existingResults, newResult];

    localStorage.setItem("quiz_results", JSON.stringify(updatedResults));

    setUserState((prevState) => ({
      ...prevState,
      score: answeredCorrectly,
    }));

    navigate(ROUTES.RESULTS_SCREEN);
  };

  const { focusedIndex, setFocusedIndex } = useKeyboardNavigation(
    questions[currentQuestionIndex]?.answers.length || 0,
    (index) => {
      if (!selectedAnswers[currentQuestionIndex]) {
        handleAnswerSelect(index); // Select answer when Enter is pressed
      }
    }
  );

  const handleManualFocus = (index: number) => {
    setFocusedIndex(index); // Update focus index on click or manual focus
  };

  if (loading) return <Loading />;
  if (error) return <Error errorMessage={error.message} />;

  const currentAnswer = selectedAnswers[currentQuestionIndex];
  const isLocked = currentAnswer !== null && currentAnswer !== undefined; // Check if the current question is locked

  return (
    <QuizWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="md"
    >
      <Timer
        key={currentQuestionIndex}
        initialTime={15}
        onTimeUp={handleTimeUp}
        shouldRun={!isLocked}
        shouldAnimate={shouldAnimate} // Pass animation state to Timer
      />
      <Question text={questions[currentQuestionIndex]?.question || ""} />
      <AnswersWrapper>
        {questions[currentQuestionIndex]?.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            answerKey={index}
            label={answer.text}
            isSelected={currentAnswer?.selectedIndex === index}
            isCorrect={answer.isCorrect}
            showCorrect={!!currentAnswer && answer.isCorrect}
            isWrong={
              !!currentAnswer &&
              currentAnswer.selectedIndex === index &&
              !answer.isCorrect
            }
            onClick={() => {
              if (!isLocked) handleAnswerSelect(index);
              handleManualFocus(index);
            }}
            isDisabled={!!currentAnswer} // Disable all buttons when locked
            isFocused={focusedIndex === index} // Highlight the focused button
            onFocus={() => handleManualFocus(index)} // Update focus index on manual focus
            shouldAnimate={shouldAnimate} // Pass animation state to AnswerButton
          />
        ))}
      </AnswersWrapper>
      <Flex flexDirection="column" width="100%" my="sm">
        <Text fontSize="h2" fontWeight="bold" color="white" mt="xs" mb="md">
          {currentQuestionIndex + 1}/{TOTAL_QUESTIONS_NUMBER}
        </Text>
        <ProgressBar progress={progress} />
      </Flex>
      <NavigationButtons
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDone={handleDone}
        disablePrevious={
          currentQuestionIndex === 0 || !selectedAnswers[currentQuestionIndex]
        } // We should not be able to go back if our current question is not answered, because the timer will be resetted
        disableNext={!selectedAnswers[currentQuestionIndex]} // Enable Next only if the question is answered
      />
    </QuizWrapper>
  );
};
