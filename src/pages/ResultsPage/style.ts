import styled from "styled-components";
import { Flex } from "components/Flex";

export const Wrapper = styled(Flex)`
  width: 100vw;
  height: 500px;
  max-width: 500px;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { mp } }) => mp.sm};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
