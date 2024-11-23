import styled from "styled-components";
import { Flex } from "components/Flex";

export const InputWrapper = styled(Flex)`
  width: 300px;
`;

export const StyledInput = styled.input`
  padding: ${({ theme: { mp } }) => mp.sm} ${({ theme: { mp } }) => mp.md};
  font-size: ${({ theme: { font } }) => font.sizes.medium};
  color: ${({ theme: { palette } }) => palette.dark};
  border: 1px solid ${({ theme: { palette } }) => palette.gray};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  background: ${({ theme: { palette } }) => palette.white};

  &:focus {
    border-color: ${({ theme: { palette } }) => palette.primary};
  }

  &::placeholder {
    color: ${({ theme: { palette } }) => palette.muted};
  }
`;
