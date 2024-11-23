import { ICountry } from "models/CountriesData";
import { IQuizQuestion } from "models/QuizQuestion";

export const generateQuizQuestions = (
  countries: ICountry[]
): IQuizQuestion[] => {
  return countries.slice(0, 10).map((country) => {
    const question: IQuizQuestion = {
      question: `What is the capital of ${country.name}?`,
      answers: [],
    };

    question.answers.push({
      text: country.capital,
      isCorrect: true,
    });

    const wrongAnswers = countries
      .filter((c) => c.name !== country.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((c) => ({
        text: c.capital,
        isCorrect: false,
      }));

    question.answers = [...question.answers, ...wrongAnswers].sort(
      () => Math.random() - 0.5
    );

    return question;
  });
};
