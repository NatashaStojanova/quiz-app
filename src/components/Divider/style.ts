import styled from "styled-components";

export const Divider = styled.hr`
  width: 100%;
  margin: ${({ theme: { mp } }) => mp.md} 0;
  border: none;
  border-top: 1px solid ${({ theme: { palette } }) => palette.gray};
`;
