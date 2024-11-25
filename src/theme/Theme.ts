// src/theme/Theme.ts
import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  palette: {
    // Light blue
    primary: "#3974C3",
    primary_rgb: "57, 116, 195",
    // Dark blue
    secondary: "#1F406B",
    secondary_rgb: "31, 64, 107",
    // Green
    success: "#4CAF50",
    success_rgb: "76, 175, 80",
    // Red
    danger: "#B71C1C",
    danger_rgb: "183, 28, 28",
    // Yellow
    warning: "#FDC300",
    warning_rgb: "253, 195, 0",
    // White
    white: "#FFF",
    white_rgb: "255, 255, 255",
    // Light gray
    gray: "#c5c5c7",
    gray_rgb: "197, 197, 199",
    // Dark gray
    muted: "#666",
    muted_rgb: "102, 102, 102",
    // Black
    dark: "#000",
    dark_rgb: "0, 0, 0",
  },
  mp: {
    xxs: "2px",
    xs: "5px",
    sm: "10px",
    md: "20px",
    lg: "30px",
    xl: "40px",
  },
  durations: {
    superfast: ".2s",
    fast: ".5s",
    slow: "1s",
    superslow: "2s",
  },
  font: {
    primary: "Helvetica Neue, sans-serif",
    primaryFallback:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    weights: {
      thin: 100,
      light: 300,
      regular: 400,
      default: 400,
      normal: 500,
      semiBold: 600,
      bold: 700,
      black: 900,
    },
    sizes: {
      xsmall: "10px",
      small: "12px",
      default: "14px",
      medium: "16px",
      large: "18px",
      h1: "2em",
      h2: "1.5em",
      h3: "1.17em",
      h4: "1em",
      h5: ".83em",
      h6: ".67em",
    },
  },
};
