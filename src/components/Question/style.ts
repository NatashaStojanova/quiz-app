import styled from "styled-components";

export const QuestionWrapper = styled.div`
  font-size: ${({ theme: { font } }) => font.sizes.h1};
  font-weight: ${({ theme: { font } }) => font.weights.bold};
  color: ${({ theme: { palette } }) => palette.white};
  padding: ${({ theme: { mp } }) => mp.md};
  margin: ${({ theme: { mp } }) => mp.md} 0;
  width: 100%;
  background-color: ${({ theme: { palette } }) => palette.secondary};
  border: 2px solid ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { mp } }) => mp.sm};
`;
