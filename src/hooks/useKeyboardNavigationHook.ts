import { useState, useEffect } from "react";

export const useKeyboardNavigation = (
  totalItems: number,
  onSelect: (index: number) => void
) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (totalItems === 0) return;

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev === null || prev === 0 ? totalItems - 1 : prev - 1
        );
      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev === null || prev === totalItems - 1 ? 0 : prev + 1
        );
      } else if (event.key === "Enter" && focusedIndex !== null) {
        event.preventDefault();
        onSelect(focusedIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalItems, focusedIndex, onSelect]);

  return { focusedIndex, setFocusedIndex };
};
