import { Button } from "components/Button";
import { Flex } from "components/Flex";

interface INavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  onDone: () => void;
  isLastQuestion: boolean; // Determine if the current question is the last one
  disablePrevious?: boolean; // Disable the Previous button
  disableNext?: boolean; // Disable the Next button
}

export const NavigationButtons = ({
  onNext,
  onPrevious,
  onDone,
  isLastQuestion,
  disablePrevious = false,
  disableNext = false,
}: INavigationButtonsProps) => (
  <Flex mt="md" justifyContent="space-between" width="100%">
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
  </Flex>
);
