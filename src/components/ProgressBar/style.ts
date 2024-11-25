import styled from "styled-components";

const progressPropsToFilter = ["progress"];

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 15px;
  position: relative;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: 50px;
  overflow: hidden;
`;

export const Progress = styled.div.withConfig({
  shouldForwardProp: (prop) => !progressPropsToFilter.includes(prop), // Exclude `progress` from being passed to the DOM
})<{ progress: number }>`
  width: ${({ progress }) =>
    `${progress}%`}; /* Use progress to control width */
  height: 100%;
  background: ${({ theme: { palette }, progress }) =>
    `linear-gradient(90deg, ${palette.warning} 0%, ${palette.success} ${progress}%)`};
  background-size: 200%;
  border-radius: 50px;
`;
