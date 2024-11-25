import styled from "styled-components";
import { Flex } from "../Flex";

export const ChunksLoaderWrapper = styled(Flex)`
  flex: 1;
  height: calc(100vh - ${({ theme: { mp } }) => mp.md});
`;

export const Logo = styled.img`
  width: 100px;
`;
