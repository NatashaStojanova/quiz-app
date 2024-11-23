import styled from "styled-components";
import { Flex } from "components/Flex";

export const ErrorWrapper = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { palette } }) => palette.danger};
`;
