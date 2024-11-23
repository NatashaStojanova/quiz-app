import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";
import { Theme } from "theme/Theme";
import ThemeWrapper from "theme/ThemeWrapper";
import AppRouterConfig from "./Navigation/AppRouterConfig";

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
