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
  const [name, setName] = useState("");

  const handleStartClick = () => {
    const trimmedValue = name.trim();
    if (!trimmedValue) return; // Avoid entering a name that is empty or contains only whitespace

    setUserState((prevState) => ({
      ...prevState,
      user: trimmedValue,
    }));
    navigate(ROUTES.QUIZ_SCREEN);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && name.trim()) {
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
        value={name}
        onChange={setName}
        onKeyDown={handleKeyPress}
        placeholder="Enter your name"
        required
        validationMessage="*Name is a required field"
      />
      <Text mb="md" color="muted">
        Click the Start button and try your luck with us! 🎉
      </Text>
      <Button onClick={handleStartClick} disabled={!name.trim()}>
        Start
      </Button>
    </Card>
  );
};

export default WelcomePage;
