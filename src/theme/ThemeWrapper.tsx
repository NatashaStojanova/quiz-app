import { Fragment, ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "globalStyles";

interface IThemeWrapperProps {
  children: ReactNode;
  theme: DefaultTheme;
}

export const ThemeWrapper = ({ children, theme }: IThemeWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};
