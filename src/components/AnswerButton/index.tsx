import { useEffect, useRef } from "react";
import { Text } from "components/Text";
import { StyledButton } from "./style";
import { IAnswerButtonProps, indexToAlphabet } from "./utils";
import gsap from "gsap";

interface AnswerButtonProps extends IAnswerButtonProps {
  isSelected: boolean;
  showCorrect?: boolean;
  isWrong?: boolean;
  isDisabled?: boolean;
}

export const AnswerButton = ({
  label,
  isCorrect,
  onClick,
  answerKey,
  isSelected,
  showCorrect,
  isWrong,
  isDisabled,
}: AnswerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showCorrect && isCorrect) {
      // Shake the correct answer when it is revealed
      gsap.fromTo(
        buttonRef.current,
        { x: -5 },
        {
          x: 5,
          duration: 0.1,
          yoyo: true,
          repeat: 15, // 1.5 seconds of shake animation
          ease: "power1.inOut",
        }
      );
    }
  }, [isSelected, showCorrect, isCorrect, isWrong]);

  return (
    <StyledButton
      ref={buttonRef}
      isCorrect={isCorrect}
      isSelected={isSelected}
      showCorrect={showCorrect}
      isWrong={isWrong}
      isDisabled={isDisabled}
      onClick={isDisabled ? () => {} : onClick}
    >
      <Text color="warning" fontWeight="bold" mr="sm">
        {indexToAlphabet(answerKey as number)}.
      </Text>
      {label}
    </StyledButton>
  );
};
