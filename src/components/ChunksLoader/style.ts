import styled, { keyframes } from "styled-components";
import { Flex } from "../Flex";

export const Pulse = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
`;

export const ChunksLoaderWrapper = styled(Flex)`
  flex: 1;
  height: calc(100vh - ${({ theme: { mp } }) => mp.md});
`;

export const Logo = styled.img`
  width: 100px;
  animation-name: ${Pulse};
  animation-duration: ${({ theme: { durations } }) => durations.slow};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
