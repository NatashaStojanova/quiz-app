import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { IAnswerButtonProps, indexToAlphabet } from "./utils";
import { StyledButton } from "./style";

export const AnswerButton = ({
  label,
  isCorrect,
  onClick,
  answerKey,
  isSelected,
  showCorrect,
  isWrong,
  isDisabled,
  isFocused,
  onFocus,
  shouldAnimate,
}: IAnswerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Focus handling for keyboard navigation
  useEffect(() => {
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocused]);

  // Animation handling based on shouldAnimate
  useEffect(() => {
    if (!shouldAnimate) return;

    if (showCorrect && isCorrect) {
      if (isSelected) {
        // Animation for correctly selected answer
        gsap.fromTo(
          buttonRef.current,
          { scale: 1 },
          {
            scale: 1.2,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }
        );
      } else {
        // Animation for shaking the correct answer when revealed, in case we selected a wrong one
        gsap.fromTo(
          buttonRef.current,
          { x: -5 },
          {
            x: 5,
            duration: 0.1,
            yoyo: true,
            repeat: 15,
            ease: "power1.inOut",
          }
        );
      }
    }
  }, [isSelected, showCorrect, isCorrect, isWrong, shouldAnimate]);

  return (
    <StyledButton
      ref={buttonRef}
      isCorrect={isCorrect}
      isSelected={isSelected}
      showCorrect={showCorrect}
      isWrong={isWrong}
      isDisabled={isDisabled}
      onFocus={onFocus}
      onClick={isDisabled ? () => {} : onClick}
    >
      <Text color="warning" fontWeight="bold" mr="sm">
        {indexToAlphabet(answerKey as number)}.
      </Text>
      {label}
    </StyledButton>
  );
};
