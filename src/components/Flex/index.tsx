import styled from "styled-components";
import { applySpacing, SpacingProps } from "theme/Spacings";

interface FlexProps extends SpacingProps {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  ${({ theme, ...props }) => applySpacing(props, theme)};
`;
