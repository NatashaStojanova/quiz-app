import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 15px; /* Increased size for better visibility */
  margin: ${({ theme: { mp } }) => mp.md} 0;
  position: relative;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: 50px;
  overflow: hidden;
`;

export const Progress = styled.div<{ progress: number }>`
  width: 0%; /* Start at 0 for animation */
  height: 100%;
  background: ${({ theme: { palette }, progress }) =>
    `linear-gradient(90deg, ${palette.warning} 0%, ${palette.success} ${progress}%)`};
  background-size: 200%;
  border-radius: 50px;
`;
