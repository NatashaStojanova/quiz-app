import { Routes, Route } from "react-router-dom";
import ROUTES from "routes/routes";
import { Gateway } from "components/Gateway";
import {
  AsyncWelcomePage,
  AsyncQuizPage,
  AsyncResultsPage,
  AsyncLeaderboardPage,
} from "./AppPages";

export const AppRouterConfig = () => (
  <Routes>
    <Route
      path={ROUTES.WELCOME_SCREEN}
      element={
        <Gateway>
          <AsyncWelcomePage />
        </Gateway>
      }
    />
    <Route
      path={ROUTES.QUIZ_SCREEN}
      element={
        <Gateway>
          <AsyncQuizPage />
        </Gateway>
      }
    />
    <Route
      path={ROUTES.RESULTS_SCREEN}
      element={
        <Gateway>
          <AsyncResultsPage />
        </Gateway>
      }
    />
    <Route
      path={ROUTES.LEADERBOARD_SCREEN}
      element={
        <Gateway>
          <AsyncLeaderboardPage />
        </Gateway>
      }
    />
  </Routes>
);

export default AppRouterConfig;
