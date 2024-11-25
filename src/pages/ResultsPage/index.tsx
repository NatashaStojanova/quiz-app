import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useUserContext } from "context/UserContext";
import ROUTES from "routes/routes";
import { Flex } from "components/Flex";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Divider } from "components/Divider/style";
import { Card } from "components/Card";

const ResultsPage = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { userState } = useUserContext();
  const { user, score } = userState;

  const handleLeaderboardClick = () => navigate(ROUTES.LEADERBOARD_SCREEN);
  const handleStartAgainClick = () => navigate(ROUTES.QUIZ_SCREEN);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <Card
      ref={wrapperRef}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="400px"
      height="500px"
    >
      <Text fontWeight="bold" fontSize="h1" color="dark" mb="sm">
        Result:
      </Text>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Text fontWeight="bold" fontSize="h3" color="dark" mb="sm">
          Congratulations,
          <Text as="span" color="primary" fontWeight="bold" ml="xs">
            {user || "Player"}!
          </Text>
        </Text>
        <Text fontSize="medium" color="dark" mb="sm">
          You have answered
          <Text fontWeight="bold" as="span" color="success" mx="xs">
            {score || "0/10"}
          </Text>
          questions correctly!
        </Text>
      </Flex>
      <Text fontWeight="bold" fontSize="medium" color="dark" mb="sm" mt="md">
        See the Leaderboard scores
      </Text>
      <Button variant="primary" onClick={handleLeaderboardClick}>
        Leaderboard
      </Button>
      <Divider />
      <Text fontWeight="bold" fontSize="h3" color="dark" mb="md">
        Wanna go for another round? 🧐
      </Text>
      <Button ref={buttonRef} variant="primary" onClick={handleStartAgainClick}>
        Start 🚀
      </Button>
    </Card>
  );
};

export default ResultsPage;
