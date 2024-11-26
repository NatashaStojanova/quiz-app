import { BrowserRouter as Router } from "react-router-dom";
import { Theme } from "theme/Theme";
import { ThemeWrapper } from "theme/ThemeWrapper";
import { ErrorBoundary } from "components/ErrorBoundary";
import { AppRouterConfig } from "./Navigation/AppRouterConfig";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ThemeWrapper theme={Theme}>
          <AppRouterConfig />
        </ThemeWrapper>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
