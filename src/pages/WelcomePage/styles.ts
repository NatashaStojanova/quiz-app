import styled from "styled-components";

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: ${({ theme: { mp } }) => mp.md};
`;
