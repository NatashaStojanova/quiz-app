import { ICountry } from "models/CountriesData";
import { TOTAL_QUESTIONS_NUMBER } from "consts/index";
import { IQuizQuestion } from "models/QuizQuestion";

export const generateQuizQuestions = (
  countries: ICountry[]
): IQuizQuestion[] => {
  const questions: IQuizQuestion[] = [];

  countries.forEach((country) => {
    // Capital Question
    questions.push({
      type: "capital",
      question: `What is the capital of ${country.name}?`,
      answers: generateUniqueAnswers(
        country.capital,
        countries.map((c) => c.capital)
      ),
    });
    // Continent Question
    questions.push({
      type: "continent",
      question: `Which continent is ${country.name} in?`,
      answers: generateUniqueAnswers(
        country.continent.name,
        countries.map((c) => c.continent.name)
      ),
    });
    // Language Question
    const language = country.languages[0]?.name || "Unknown";
    if (language !== "Unknown") {
      questions.push({
        type: "language",
        question: `Which language is spoken in ${country.name}?`,
        answers: generateUniqueAnswers(
          language,
          countries.flatMap((c) => c.languages.map((l) => l.name))
        ),
      });
    }
  });

  // Shuffle and ensure no consecutive questions of the same type
  return selectQuestionsWithoutRepeatingTypes(
    questions,
    TOTAL_QUESTIONS_NUMBER
  );
};

// Helper function to select questions without consecutive types
const selectQuestionsWithoutRepeatingTypes = (
  questions: IQuizQuestion[],
  totalQuestions: number
): IQuizQuestion[] => {
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  const finalQuestions: IQuizQuestion[] = [];

  while (
    finalQuestions.length < totalQuestions &&
    shuffledQuestions.length > 0
  ) {
    const nextQuestion = shuffledQuestions.shift()!;
    if (
      finalQuestions.length === 0 || // First question, no need to check
      finalQuestions[finalQuestions.length - 1].type !== nextQuestion.type // Ensure type doesn't repeat
    ) {
      finalQuestions.push(nextQuestion);
    } else {
      // If the next question type repeats, push it back and reshuffle
      shuffledQuestions.push(nextQuestion);
      shuffledQuestions.sort(() => Math.random() - 0.5);
    }
  }

  return finalQuestions;
};

// Helper function to generate answers with the required format
const generateUniqueAnswers = (correctAnswer: string, pool: string[]) => {
  const incorrectAnswers = pool
    .filter((answer) => answer !== correctAnswer) // Exclude correct answer
    .sort(() => 0.5 - Math.random()) // Randomize answers
    .slice(0, 3); // Take 3 incorrect answers

  const allAnswers = [
    { text: correctAnswer, isCorrect: true },
    ...incorrectAnswers.map((answer) => ({
      text: answer,
      isCorrect: false,
    })),
  ];

  return allAnswers.sort(() => Math.random() - 0.5); // Shuffle final answers
};
