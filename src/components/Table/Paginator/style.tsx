import styled from "styled-components";
import { Flex } from "components/Flex";

const PaginatorWrapper = styled(Flex)`
  background-color: transparent;
  width: 100%;
`;

const PaginatorContent = styled(Flex)`
  & > button:first-child {
    margin-right: ${({ theme: { mp } }) => mp.xs};
  }
  & > button:last-child {
    margin-left: ${({ theme: { mp } }) => mp.xs};
  }
  width: 100%;
`;

const PaginatorCellElement = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0px 2px;
  cursor: pointer;
  outline: 0;
  font-size: ${({
    theme: {
      font: { sizes },
    },
  }) => sizes.small};
  font-weight: ${({
    theme: {
      font: { weights },
    },
  }) => weights.light};
`;

const PaginatorArrow = styled(({ theme, disabled, ...rest }: any) => (
  <PaginatorCellElement {...rest} disabled={disabled} />
))`
  color: ${({ disabled, theme: { palette } }) =>
    disabled ? palette.gray : palette.primary};
  background-color: ${({ theme: { palette } }) => palette.white};
  width: 30px;
  height: 30px;
  margin: 0;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

const PaginatorCell = styled(({ current, ...rest }: any) => (
  <PaginatorCellElement {...rest} />
))`
  color: ${({ current, theme: { palette } }) =>
    current ? palette.white : palette.dark};
  background-color: ${({ current, theme: { palette } }) =>
    current ? palette.primary : palette.white};
`;

const PaginatorCellDots = styled.span`
  padding: 2px 4px;
  border: 0;
  color: ${({ theme: { palette } }) => palette.dark};
  margin: ${({ theme: { mp } }) => `0px ${mp.xs}`};
`;

export {
  PaginatorWrapper,
  PaginatorArrow,
  PaginatorCell,
  PaginatorCellDots,
  PaginatorContent,
};
