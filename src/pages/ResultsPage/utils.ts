export const getFeedback = (score: number) => {
  if (score >= 7) {
    return {
      message: "Fantastic job! 🎉 You're a quiz master!",
      color: "success",
    };
  } else if (score >= 4) {
    return {
      message: "Good effort! 😊 Keep practicing to improve.",
      color: "warning",
    };
  } else {
    return {
      message: "Don't give up! 🚀 Try again to get a better score.",
      color: "danger",
    };
  }
};
