import styled from "styled-components";
import { Flex } from "components/Flex";

export const PreparationWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;
  color: ${({ theme: { palette } }) => palette.white};
`;
