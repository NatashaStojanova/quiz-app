export interface IAnswerButtonProps {
  isCorrect?: boolean; // Indicates if the answer is correct
  isSelected?: boolean; // Indicates if the answer is selected
  onClick: () => void; // Callback for button click
  label?: string; // Label for the answer
  answerKey?: number; // Key for the answer
  isDisabled?: boolean; // Indicates if the button is disabled
  showCorrect?: boolean; // Indicates if the correct answer should be shown
  isWrong?: boolean; // Indicates if the answer is wrong
  isFocused?: boolean; // Indicates if the button is focused
  onFocus?: () => void; // Callback for when the button is focused
  shouldAnimate?: boolean; // Indicates if animation should be applied to elements
}

/**
 * Converts an index number to its corresponding alphabet (Example: 0 -> A, 1 -> B) because we need it for the answers
 */
export const indexToAlphabet = (index: number, result = ""): string =>
  index < 0
    ? result
    : indexToAlphabet(
        Math.floor(index / 26) - 1,
        String.fromCharCode((index % 26) + 65) + result
      );
