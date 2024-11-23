import { Button } from "components/Button";
import { Text } from "components/Text";
import { Wrap } from "./style";

export const SomethingWentWrongPage = () => {
  const reloadPage = () => {
    document.location.reload();
  };
  return (
    <Wrap flexDirection="column" justifyContent="center" alignItems="center">
      <Text>Oops... Something went wrong</Text>
      <Text>
        It appears that an error has occurred.
        <br />
        We are sorry for the inconvenience.
      </Text>
      <Button onClick={() => reloadPage()}>Try again</Button>
    </Wrap>
  );
};
