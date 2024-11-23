import { ICountry } from "models/CountriesData";

interface IAnswer {
  text: string;
  isCorrect: boolean;
}

interface IQuizQuestion {
  question: string;
  answers: IAnswer[];
}

export const generateQuizQuestions = (
  countries: ICountry[]
): IQuizQuestion[] => {
  return countries.map((country) => {
    // Create a question using the country's capital
    const question: IQuizQuestion = {
      question: `What is the capital of ${country.name}?`,
      answers: [],
    };

    // Add the correct answer
    question.answers.push({
      text: country.capital,
      isCorrect: true,
    });

    // Generate random wrong answers (using random countries from the list)
    const wrongAnswers = countries
      .filter((c) => c.name !== country.name) // Avoid using the correct country as a wrong answer
      .slice(0, 3) // Get 3 random countries for wrong answers
      .map((c) => ({
        text: c.capital, // Using the capital as a wrong answer
        isCorrect: false,
      }));

    // Combine correct and wrong answers
    question.answers = [...question.answers, ...wrongAnswers];

    // Shuffle answers to randomize their order
    question.answers = shuffleArray(question.answers);

    return question;
  });
};

// Function to shuffle the answers array
export const shuffleArray = (array: IAnswer[]): IAnswer[] => {
  return array.sort(() => Math.random() - 0.5);
};
