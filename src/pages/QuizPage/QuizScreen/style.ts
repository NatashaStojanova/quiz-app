import styled from "styled-components";
import { Flex } from "components/Flex";

export const QuizWrapper = styled(Flex)`
  width: 800px;
  text-align: center;
`;

export const AnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for two rows */
  gap: ${({ theme: { mp } }) => mp.sm};
  width: 100%;
  margin: ${({ theme: { mp } }) => mp.md}px 0;
`;
