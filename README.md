# Quiz Application

A lightweight and engaging quiz application built with React, showcasing modern frontend development practices, reusable components, and state management.

---

## Features

### Custom Components
- **Reusability:** Developed modular and reusable components (`Card`, `Flex`, `Button`, `Input`, `Text`, `Table`) for maintainability.
- **Dynamic Props:** Components are highly configurable through props for dimensions, spacing, colors, and alignment.
- **Theming:** Centralized styling through a `theme` to ensure consistent spacing, colors, and UI elements.

### State Management
- **React Context:** Used Context API to manage user data (`name`, `score`) across pages efficiently.
- **LocalStorage:** Persisted leaderboard data for a seamless user experience across sessions.

### Animations
- **GSAP (GreenSock):** Added delightful animations (e.g., scaling, button bounce) to enhance user experience on the results page.

### Validation
- **Formik and Yup (Not Used):** Chose not to use these libraries as the form validation needs were minimal (only one required field for the user name).

---

## Project Structure

### File Organization
- **`components/`**: Contains all reusable components like `Card`, `Button`, `Input`, and `Table`.
- **`context/`**: Includes `UserContext` for managing application state globally.
- **`pages/`**: Holds the main pages (`WelcomePage`, `ResultsPage`, `LeaderboardPage`).
- **`theme/`**: Centralized styling for consistent design.

### Theme Details
The `theme` is defined in the `theme/` directory and provides:
- **Spacing (`mp`)**: Predefined spacing values (e.g., `sm`, `md`, `lg`) used for margins and paddings. Applied dynamically via props like `p`, `px`, `my`.
- **Colors (`palette`)**: Centralized color definitions for primary, secondary, success, and muted tones.
- **Border Radius**: Standardized corner rounding for UI components.

#### Why Use a Theme?
- **Consistency:** Ensures uniform spacing, colors, and border radii across all components.
- **Scalability:** Adding new design tokens is easy and keeps styles maintainable.
- **Readability:** Simplifies styling by using named tokens instead of arbitrary values.

Example:
```javascript
const theme = {
  mp: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  palette: {
    primary: "#007bff",
    success: "#28a745",
    muted: "#6c757d",
    white: "#ffffff",
  },
};

## Key Pages

### Welcome Page:
- Users enter their name to start the quiz.
- Includes a single input field with basic validation.

### Results Page:
- Displays user results with GSAP animations for a smooth and engaging experience.
- Includes buttons to restart the quiz or view the leaderboard.

### Leaderboard Page:
- Fetches and displays scores using React TanStack Table.
- Handles data pagination and dynamic sorting.

---

## Why Not Redux?
- The app’s state complexity is minimal, making Redux unnecessary.
- React Context and `useState` were sufficient for managing global and local state efficiently.
