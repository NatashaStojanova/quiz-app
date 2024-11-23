import { Fragment, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "globalStyles";

type Props = { children: ReactNode; theme: DefaultTheme };

const ThemeWrapper = ({ children, theme }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
