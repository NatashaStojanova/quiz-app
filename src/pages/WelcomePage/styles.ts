import styled from "styled-components";
import { Flex } from "components/Flex";

export const CardWrapper = styled(Flex)`
  width: 90%;
  max-width: 500px;
  padding: ${({ theme: { mp } }) => `${mp.lg} ${mp.md}`};
  text-align: center;
  background-color: ${({ theme: { palette } }) => palette.white};
  border-radius: ${({ theme: { mp } }) => mp.md};
  border: 4px solid ${({ theme: { palette } }) => palette.primary};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: ${({ theme: { mp } }) => mp.md};
`;
