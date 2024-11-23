import { Text } from "components/Text";
import { ErrorWrapper } from "./style";

interface IErrorProps {
  errorMessage?: string;
}

export const Error = ({ errorMessage = "An error occurred!" }: IErrorProps) => {
  return (
    <ErrorWrapper justifyContent="center" alignItems="center">
      <Text fontSize="h2" fontWeight="bold" color="white">
        {errorMessage}
      </Text>
    </ErrorWrapper>
  );
};
