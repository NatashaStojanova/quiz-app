import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: ${({ theme: { mp } }) => mp.md};
  border-collapse: collapse;

  /* Cell Styling */
  th,
  td {
    padding: ${({ theme: { mp } }) => mp.sm};
    text-align: center;
    font-size: ${({ theme: { font } }) => font.sizes.small};
    color: ${({ theme: { palette } }) => palette.muted};
  }

  /* Header Styling */
  th {
    background-color: ${({ theme: { palette } }) => palette.primary};
    color: ${({ theme: { palette } }) => palette.white};
    font-weight: ${({ theme: { font } }) => font.weights.bold};
  }

  /* Row Styling */
  tr:nth-child(even) {
    background-color: ${({ theme: { palette } }) => palette.disabled};
  }
`;
