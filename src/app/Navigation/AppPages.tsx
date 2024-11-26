import loadable from "@loadable/component";
import { retry } from "helpers/helperFunctions";
import { ChunksLoader } from "components/ChunksLoader";

export const AsyncWelcomePage = loadable(
  () =>
    retry(() =>
      import("../../pages/WelcomePage").then((module) => module.default)
    ),
  {
    fallback: <ChunksLoader />,
  }
);

export const AsyncQuizPage = loadable(
  () =>
    retry(() =>
      import("../../pages/QuizPage").then((module) => module.default)
    ),
  {
    fallback: <ChunksLoader />,
  }
);

export const AsyncResultsPage = loadable(
  () =>
    retry(() =>
      import("../../pages/ResultsPage").then((module) => module.default)
    ),
  {
    fallback: <ChunksLoader />,
  }
);

export const AsyncLeaderboardPage = loadable(
  () =>
    retry(() =>
      import("../../pages/LeaderboardPage").then((module) => module.default)
    ),
  {
    fallback: <ChunksLoader />,
  }
);
