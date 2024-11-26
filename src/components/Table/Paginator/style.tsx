import styled from "styled-components";
import { Flex } from "components/Flex";

export const PaginatorWrapper = styled(Flex)`
  background-color: transparent;
  width: 100%;
`;

export const PaginatorContent = styled(Flex)`
  & > button:first-child {
    margin-right: ${({ theme: { mp } }) => mp.xs};
  }
  & > button:last-child {
    margin-left: ${({ theme: { mp } }) => mp.xs};
  }
  width: 100%;
`;

export const PaginatorCellElement = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: ${({ theme: { mp } }) => mp.lg};
  height: ${({ theme: { mp } }) => mp.lg};
  margin: ${({ theme: { mp } }) => `0 ${mp.xs}`};
  cursor: pointer;
  outline: none;
  font-size: ${({ theme: { font } }) => font.sizes.small};
  font-weight: ${({ theme: { font } }) => font.weights.light};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const PaginatorArrow = styled(PaginatorCellElement)<{
  disabled?: boolean;
}>`
  color: ${({ disabled, theme: { palette } }) =>
    disabled ? palette.gray : palette.primary};
  background-color: ${({ theme: { palette } }) => palette.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ theme: { palette }, disabled }) =>
      disabled ? palette.white : palette.secondary};
    color: ${({ theme: { palette }, disabled }) =>
      disabled ? palette.gray : palette.white};
  }
`;

export const PaginatorCell = styled(PaginatorCellElement).withConfig({
  shouldForwardProp: (prop) => prop !== "current",
})<{
  current?: boolean;
}>`
  color: ${({ current, theme: { palette } }) =>
    current ? palette.white : palette.dark};
  background-color: ${({ current, theme: { palette } }) =>
    current ? palette.primary : palette.white};

  &:hover {
    background-color: ${({ current, theme: { palette } }) =>
      current ? palette.primary : palette.secondary};
    color: ${({ current, theme: { palette } }) =>
      current ? palette.white : palette.light};
  }
`;

export const PaginatorCellDots = styled.span`
  padding: ${({ theme: { mp } }) => `${mp.xxs} ${mp.xs}`};
  border: none;
  color: ${({ theme: { palette } }) => palette.dark};
  margin: ${({ theme: { mp } }) => `0 ${mp.xs}`};
  font-size: ${({ theme: { font } }) => font.sizes.small};
`;
