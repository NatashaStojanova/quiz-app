import styled from "styled-components";

export const TimerWrapper = styled.div<{ time: number }>`
  font-size: ${({ theme: { font } }) => font.sizes.large};
  font-weight: ${({ theme: { font } }) => font.weights.bold};
  text-align: center;
  color: ${({ theme: { palette }, time }) =>
    time > 10 ? palette.dark : palette.white};
  margin: ${({ theme: { mp } }) => mp.sm}px auto;
  padding: ${({ theme: { mp } }) => mp.sm};
  width: 200px;
  border-radius: 50px;
  background-color: ${({ theme: { palette }, time }) =>
    time <= 3 ? palette.danger : time <= 10 ? palette.warning : palette.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transform-origin: center;
`;
