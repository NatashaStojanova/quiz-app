import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
    background-image: url('/assets/quiz-background.png'); /* Reference the public folder */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .container {
    max-width: 800px;
    margin: auto;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7); /* Add transparency to container */
    padding: 20px;
    border-radius: 10px;
  }
`;
