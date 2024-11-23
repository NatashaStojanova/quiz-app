import styled from "styled-components";
import { Flex } from "components/Flex";

export const LoadingWrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { palette } }) => palette.dark};
`;
