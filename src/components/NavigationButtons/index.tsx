import { Button } from "components/Button";
import { NavigationWrapper } from "./style";

interface INavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  onDone: () => void;
  isLastQuestion: boolean; // Determine if the current question is the last one
  disablePrevious?: boolean; // Optional: disable the Previous button
  disableNext?: boolean; // Optional: disable the Next button
}

export const NavigationButtons = ({
  onNext,
  onPrevious,
  onDone,
  isLastQuestion,
  disablePrevious = false,
  disableNext = false,
}: INavigationButtonsProps) => (
  <NavigationWrapper mt="md" justifyContent="space-between">
    <Button
      variant="secondary"
      disabled={disablePrevious}
      onClick={onPrevious}
      hasLeftArrow
    >
      Previous
    </Button>
    {isLastQuestion ? (
      <Button onClick={onDone}>Done</Button>
    ) : (
      <Button disabled={disableNext} onClick={onNext} hasRightArrow>
        Next
      </Button>
    )}
  </NavigationWrapper>
);
