import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUserScore } from "models/UserScore";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { columns } from "./utils";
import { LeaderboardWrapper, StyledFlex } from "./style";

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [leaderboardData, setLeaderboardData] = useState<IUserScore[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve leaderboard data from localStorage
    const quizResults: IUserScore[] = JSON.parse(
      localStorage.getItem("quiz_results") || "[]"
    );

    // Sort data by score in descending order
    const sortedResults = quizResults.sort((a, b) => b.score - a.score);

    setLeaderboardData(sortedResults);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <LeaderboardWrapper
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      px="sm"
      py="lg"
    >
      <StyledFlex flexDirection="column">
        <Text fontWeight="bold" fontSize="h2" mt="lg" mb="md">
          Leaderboard
        </Text>
        {leaderboardData.length === 0 ? (
          <Text fontSize="h3" color="muted" textAlign="center" mb="lg">
            No one has taken the quiz yet. Be the first to set a high score! 🚀
          </Text>
        ) : (
          <Table
            data={leaderboardData}
            columns={columns}
            hideHeaders={true}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            maxRowsPerPage={8}
          />
        )}
      </StyledFlex>
      <Button
        onClick={() => navigate("/")}
        variant="secondary"
        hasLeftArrow
        width="80%"
      >
        Back
      </Button>
    </LeaderboardWrapper>
  );
};

export default Leaderboard;
