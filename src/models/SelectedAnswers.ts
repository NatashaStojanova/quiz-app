interface SelectedAnswer {
  selectedIndex: number;
  isCorrect: boolean;
}

export interface SelectedAnswers {
  [key: number]: SelectedAnswer | null;
}
