  

# Quiz Application

  

This is a simple and engaging quiz app built using React. It uses reusable components, modern state management, and a consistent design system.

  

---

  

## How to Start the Application

  

1. ****Clone the repository:****

```bash

git clone git@github.com:NatashaStojanova/quiz-app.git

```

2. ****Install dependencies:****

```bash

npm install

```

3. ****Run the development server:****

```bash

npm run dev

```

The app will be available at `http://localhost:5173/`.

### Branch Structure

This project uses two branches to organize development and ensure stability:

1. **`dev` Branch:**
   - All feature development and bug fixes are committed to this branch.
   - Used for ongoing work and testing.

2. **`main` Branch:**
   - Contains the final, stable version of the code.
   - Only code reviewed from the `dev` branch is merged into `main`.


  

---


# Quiz Logic

- **User Name Input**:
  - User enters their name.
  - Empty or whitespace-only names are not allowed.
  - If a user tries to access `/quiz` without entering a name, they are redirected to the welcome screen.

- **Preparation Screen**:
  - A preparation screen with a countdown is displayed before the quiz starts.
  - After the countdown, the quiz begins.

- **Quiz Questions**:
  - Quiz consists of 10 shuffled questions on languages, countries, and continents.
  - Questions are structured to avoid consecutive questions of the same type (handled via a GraphQL transformation function).

- **Quiz Timer**:
  - Each question has a 15-second timer.
  - If time runs out:
    - A warning displays, and the correct answer is revealed.
    - Automatically proceeds to the next question.
  - If the user answers within the time limit:
    - They can navigate back to view previous results or forward to the next question.

- **Progress Tracking**:
  - A progress bar updates after each question, regardless of correctness.
  - Displays the current question number out of the total (Example: "3/10").

- **End of Quiz**:
  - Redirects to a results screen showing:
    - Total score.
    - Option to retake the quiz or view the leaderboard.

- **Navigation Rules**:
  - Users cannot navigate back or forward until they answer the current question.
  - After answering, navigation is allowed.


---

# Routes

The `/routes` folder contains constants for all the app routes, making navigation easy and maintainable:

- ****Welcome Screen:**** `/`

- ****Quiz Screen:**** `/quiz`

- ****Results Screen:**** `/results`

- ****Leaderboard Screen:**** `/leaderboard`



This structure keeps all route definitions in one place, making it easier to update or add routes in the future.

  ---

## Main Features

  

### Reusable Components

- The app uses modular and reusable components, like `Button`, `Input`, and `Table`. These are located in the `/components` folder.

- Each component has its own `index.tsx` (for logic) and `style.ts` (for styling) and optionally `utils.ts` for utilities, making them easy to maintain and update.

- Props allow you to configure dimensions, colors, spacing, and alignment dynamically.

  

### Centralized Theme

- The `/theme` folder contains a centralized design system with:

- ****Predefined Spacing:**** (`sm`, `md`, `lg`) for uniform padding and margins.

- ****Colors:**** Standardized palette for consistent UI elements.

- ****Why use a theme?****

- It ensures consistency across the app.

- Makes adding or changing design elements scalable and easy.

  

### State Management

- ****React Context API**** is used for global state management (like the user name and score).

- ****LocalStorage**** ensures the leaderboard data is saved even when you refresh or close the app.

  

### Animations

- ****GSAP (GreenSock)**** is used to add smooth animations to the app, such as scaling and button bouncing on the results page, counter and indicating wrong or right answer.

  

### Simple Validation

- Instead of using libraries like Formik or Yup, basic validation is done directly in the code since the app only needs minimal validation (Example: checking if the user's name is provided).

  

---

  

## Project Structure

  

### File Organization

- ******`/components`**:**** Contains all reusable components (Example: `Button`, `Card`, `Table`, `Text`, `Input`, `Divider`....).

- ******`/context`**:**** Includes the `UserContext` file for managing global state.

- ******`/pages`**:**** Contains the main pages of the app:

- `WelcomePage`: Where users can enter their name and start the quiz.

- `ResultsPage`: Displays the user’s quiz results with animations.

- `LeaderboardPage`: Shows a list of top scores.

- ******`/routes`**:**** Manages application routes to keep navigation logic separate.

- ******`/theme`**:**** Defines the design system for consistent colors, spacing, and styles.

- **`/context`**: Includes the `UserContext` file for managing global state.

- **`/models`**: Defines types and interfaces used across the project.

- **`/hooks`**: Contains custom hooks for encapsulating reusable logic.

- **`/helpers`**: Includes helper functions shared across different parts of the project.

  

---

  

### Additional Notes

- Hard to understand or complex areas in the codebase include short comments explaining the logic.

  

### Functional Components

- The app uses only functional components for consistency, except for the `ErrorBoundary` component (React currently does not have a clean way to implement an error boundary using functional components and class component was used for this specific case.)


---
  

## Pages


### Welcome Page

- Allows the user to enter their name and start the quiz.

- Has an input field with basic validation.

### Main Quiz Page

- Displays a timer and the current question with four answer options.  
- Shows a progress bar and the current question number out of the total.  
- Includes navigation buttons to move to the previous or next question.  

  

### Results Page

- Displays the user’s quiz score and results.

- Includes animations to enhance user experience.

- Provides buttons to restart the quiz or view the leaderboard.

  

### Leaderboard Page

- Displays a list of high scores saved in `LocalStorage`.

- Supports features like sorting and pagination using React TanStack Table.

  

---
