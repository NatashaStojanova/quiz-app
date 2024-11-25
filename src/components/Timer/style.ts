import styled from "styled-components";

export const TimerWrapper = styled.div<{ time: number }>`
  font-size: ${({ theme: { font } }) => font.sizes.large};
  font-weight: ${({ theme: { font } }) => font.weights.bold};
  text-align: center;
  margin: ${({ theme: { mp } }) => mp.sm}px auto;
  padding: ${({ theme: { mp } }) => mp.sm};
  width: 200px;
  border-radius: 50px;
  background-color: ${({ theme: { palette }, time }) =>
    time <= 3 ? palette.danger : time <= 10 ? palette.warning : palette.white};
  transform-origin: center;
`;
