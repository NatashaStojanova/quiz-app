import { QuestionWrapper } from "./style";

interface IQuestionProps {
  text: string;
}

export const Question = ({ text }: IQuestionProps) => {
  return <QuestionWrapper>{text}</QuestionWrapper>;
};
