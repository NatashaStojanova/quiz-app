/**
 * Formats a time value (in seconds) into a string in the format `MM:SS`.
 *
 * @param {number} time - The time value in seconds to format.
 * @returns {string} The formatted time string in `MM:SS` format.
 */
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
