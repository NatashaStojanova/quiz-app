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
  width?: string | number;
  height?: string | number;
}

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "justifyContent",
      "alignItems",
      "flexDirection",
      "flexWrap",
      "width",
      "height",
    ].includes(prop), // Filter props that shouldn't be forwarded, because otherwise they are passed to the DOM
})<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  ${({ theme, ...props }) => applySpacing(props, theme)};
`;
