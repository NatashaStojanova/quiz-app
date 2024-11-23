// src/theme/styled.d.ts
import "styled-components";
import { Theme } from "./Theme"; // Adjust the path to your actual Theme file

// Use the type of the exported Theme object
type ThemeType = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
