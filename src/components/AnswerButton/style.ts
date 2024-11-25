import styled from "styled-components";
import { IAnswerButtonProps } from "./utils";

const buttonPropsToFilter = [
  "showCorrect",
  "isWrong",
  "isDisabled",
  "isSelected",
  "isCorrect",
];

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !buttonPropsToFilter.includes(prop),
})<
  IAnswerButtonProps & {
    showCorrect?: boolean;
    isWrong?: boolean;
    isDisabled?: boolean;
  }
>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin: ${({ theme: { mp } }) => mp.xs};
  padding: ${({ theme: { mp } }) => mp.md};
  font-size: ${({ theme: { font } }) => font.sizes.medium};
  font-weight: ${({ theme: { font } }) => font.weights.bold};
  background-color: ${({
    theme: { palette },
    isSelected,
    showCorrect,
    isWrong,
    isDisabled,
  }) =>
    showCorrect
      ? palette.success
      : isWrong
      ? palette.danger
      : isSelected || isDisabled
      ? `rgba(${palette.warning_rgb}, 0.2)`
      : palette.secondary};
  color: ${({ theme: { palette }, isDisabled, isSelected, showCorrect }) =>
    !isDisabled || isSelected || showCorrect ? palette.white : palette.gray};
  border: 2px solid ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { mp } }) => mp.sm};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ theme: { palette }, isDisabled }) =>
      isDisabled ? palette.disabled : palette.warning};
  }

  &:focus {
    background-color: ${({ theme: { palette }, isDisabled }) =>
      isDisabled ? palette.disabled : palette.warning};
    outline: none;
  }
`;
