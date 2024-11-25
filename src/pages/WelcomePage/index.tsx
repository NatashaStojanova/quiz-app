import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "routes/routes";
import { useUserContext } from "context/UserContext";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Card } from "components/Card";
import { Logo } from "./style";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { setUserState } = useUserContext();
  const [inputValue, setInputValue] = useState("");

  const handleStartClick = () => {
    if (!inputValue) return;
    setUserState((prevState) => ({
      ...prevState,
      user: inputValue,
    }));
    navigate(ROUTES.QUIZ_SCREEN);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue) {
      handleStartClick();
    }
  };

  return (
    <Card
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="lg"
      width="400px"
      height="450px"
    >
      <Logo src="/assets/quiz-time-logo.svg" alt="Quiz Logo" />
      <Input
        value={inputValue}
        onChange={setInputValue}
        onKeyPress={handleKeyPress}
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
    </Card>
  );
};

export default WelcomePage;
