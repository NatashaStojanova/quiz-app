import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { StyledButton } from "./style";
import { IAnswerButtonProps, indexToAlphabet } from "./utils";

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
}: IAnswerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (showCorrect && isCorrect) {
      // Animation used to shake the correct answer when it is revealed
      if (isSelected) {
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
  }, [isSelected, showCorrect, isCorrect, isWrong]);

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
