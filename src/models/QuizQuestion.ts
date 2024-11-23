import { IAnswer } from "./Answer";

export interface IQuizQuestion {
  question: string;
  answers: IAnswer[];
}
