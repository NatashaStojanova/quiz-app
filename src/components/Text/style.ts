import styled from "styled-components";
import { applySpacing, spacingProps } from "theme/Spacings";
import { TextProps } from "./utils";

export const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => !spacingProps.includes(prop as string), // Filter out spacing props from being forwarded to the DOM
})<TextProps>`
  font-weight: ${({ theme: { font }, fontWeight }) =>
    fontWeight ? font.weights[fontWeight] : font.weights.default};
  font-size: ${({ theme: { font }, fontSize }) =>
    fontSize ? font.sizes[fontSize] : font.sizes.default};
  color: ${({ theme: { palette }, color }) =>
    color ? palette[color] : palette.dark};
  text-align: ${({ textAlign }) => textAlign};
  ${({ theme, ...props }) => applySpacing(props, theme)}
`;
