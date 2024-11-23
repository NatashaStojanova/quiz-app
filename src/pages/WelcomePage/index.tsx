import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes/routes";
import { useUserContext } from "context/UserContext";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { CardWrapper, Logo } from "./styles";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { userState, setUserState } = useUserContext();
  const [inputValue, setInputValue] = useState(userState.user || "");

  const handleStartClick = () => {
    if (!inputValue) return;
    setUserState((prevState) => ({
      ...prevState,
      user: inputValue,
    }));
    navigate(ROUTES.QUIZ_SCREEN);
  };

  return (
    <CardWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Logo src="/assets/quiz-time-logo.svg" alt="Quiz Logo" />
      <Input
        value={inputValue}
        onChange={setInputValue}
        placeholder="Enter your name"
        required
        validationMessage="*Name is a required field"
      />
      <Text mb="md" color="muted">
        Click the Start button and try your luck with us! 🎉
      </Text>
      <Button onClick={handleStartClick} disabled={!inputValue}>
        Start
      </Button>
    </CardWrapper>
  );
};

export default WelcomePage;
