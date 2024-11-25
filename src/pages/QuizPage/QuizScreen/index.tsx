import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "graphql/queries";
import ROUTES from "routes/routes";
import { generateQuizQuestions } from "helpers/quizHelpers";
import { useUserContext } from "context/UserContext";
import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Loading } from "components/Loading";
import { Error } from "components/Error";
import { IQuizQuestion } from "models/QuizQuestion";
import { Timer } from "components/Timer";
import { Question } from "components/Question";
import { AnswerButton } from "components/AnswerButton";
import { ProgressBar } from "components/ProgressBar";
import { NavigationButtons } from "components/NavigationButtons";
import { QuizWrapper, AnswersWrapper } from "./style";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigationHook";

export const QuizScreen = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const navigate = useNavigate();
  const { userState, setUserState } = useUserContext();
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, { selectedIndex: number; isCorrect: boolean } | null>
  >({});
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);
  const [progress, setProgress] = useState(0);

  // Transform fetched data into quiz questions
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

  const handleAnswerSelect = (index: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers[index]?.isCorrect;

    // Update selected answers
    if (!selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: { selectedIndex: index, isCorrect },
      }));
    }

    // Update correct answer counter
    if (!selectedAnswers[currentQuestionIndex] && isCorrect) {
      setAnsweredCorrectly((prev) => prev + 1);
    }
  };

  // Go on next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Go on previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Save user score (number of correct answers) when we are done
  const handleDone = () => {
    const newResult = {
      user: userState.user,
      score: answeredCorrectly,
    };

    // Check if "quiz_results" exists in localStorage
    const existingResults = JSON.parse(
      localStorage.getItem("quiz_results") || "[]"
    );

    // Append the new result to the existing list or create a new one
    const updatedResults = [...existingResults, newResult];

    // Save the updated list back to localStorage
    localStorage.setItem("quiz_results", JSON.stringify(updatedResults));

    // Update context with the score
    setUserState((prevState) => ({
      ...prevState,
      score: answeredCorrectly,
    }));

    // Navigate to results screen
    navigate(ROUTES.RESULTS_SCREEN);
  };

  // Use the custom hook for keyboard navigation
  const { focusedIndex, setFocusedIndex } = useKeyboardNavigation(
    questions[currentQuestionIndex]?.answers.length || 0,
    (index) => {
      if (!selectedAnswers[currentQuestionIndex]) {
        handleAnswerSelect(index); // Select answer when Enter is pressed
      }
    }
  );

  // Focus logic for the buttons
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
      <Flex flexDirection="column" mb="md">
        <Text fontSize="h3" fontWeight="bold" color="white" mr="xs">
          Correct Answers:
        </Text>
        <Text fontSize="h1" fontWeight="normal" color="white">
          {answeredCorrectly}/{questions.length}
        </Text>
      </Flex>
      <Timer
        key={currentQuestionIndex}
        initialTime={15}
        onTimeUp={handleNext}
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
              if (!isLocked) handleAnswerSelect(index); // Prevent re-answering
              handleManualFocus(index); // Update focus on click
            }}
            isDisabled={!!currentAnswer} // Disable all buttons when locked
            isFocused={focusedIndex === index} // Highlight the focused button
            onFocus={() => handleManualFocus(index)} // Update focus index on manual focus
          />
        ))}
      </AnswersWrapper>
      <ProgressBar progress={progress} />
      <NavigationButtons
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDone={handleDone}
        disablePrevious={currentQuestionIndex === 0}
        disableNext={!selectedAnswers[currentQuestionIndex]} // Enable Next only if the question is answered
      />
    </QuizWrapper>
  );
};
