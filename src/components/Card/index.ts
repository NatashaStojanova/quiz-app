import styled from "styled-components";
import { Flex } from "components/Flex";
import { SpacingProps, applySpacing } from "theme/Spacings";

interface ICardProps extends SpacingProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  maxWidth?: string | number;
}

export const Card = styled(Flex)<ICardProps>`
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "100%"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.mp[borderRadius] : theme.mp.md};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0 4px 10px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.white};
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth || "500px"};
  text-align: center;

  /* Apply dynamic spacing props */
  ${({ theme, ...props }) => applySpacing(props, theme)};
`;
