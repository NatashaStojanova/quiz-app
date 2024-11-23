export interface IAnswerButtonProps {
  isCorrect?: boolean;
  isSelected?: boolean;
  onClick: () => void;
  label?: string;
  answerKey?: number;
  disabled?: boolean;
}

export const indexToAlphabet = (index: number, result = ""): string =>
  index < 0
    ? result
    : indexToAlphabet(
        Math.floor(index / 26) - 1,
        String.fromCharCode((index % 26) + 65) + result
      );
