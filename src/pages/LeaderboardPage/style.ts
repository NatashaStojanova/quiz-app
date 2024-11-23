import styled from "styled-components";
import { Flex } from "components/Flex";

export const LeaderboardWrapper = styled(Flex)`
  width: 400px;
  height: 550px;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { mp } }) => mp.sm};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledFlex = styled(Flex)`
  width: 100%;
  align-items: center;
`;
