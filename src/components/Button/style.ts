import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IButtonProps } from "./utils";

const buttonPropsToFilter = ["variant"];

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !buttonPropsToFilter.includes(prop),
})<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "auto"};
  padding: ${({ theme: { mp } }) => mp.sm} ${({ theme: { mp } }) => mp.md};
  border: ${({ theme: { palette }, variant }) =>
    variant === "secondary" ? `1px solid ${palette.primary}` : "none"};
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-size: ${({ theme: { font } }) => font.sizes.medium};
  color: ${({ theme: { palette }, variant }) =>
    variant === "secondary" ? palette.primary : palette.white};
  background-color: ${({ theme: { palette }, variant }) =>
    variant === "secondary" ? palette.white : palette.primary};
  font-weight: ${({ theme: { font } }) => font.weights.bold};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
    background-color: ${({ theme: { palette }, variant }) =>
      variant === "primary" || "secondary" ? palette.secondary : palette.white};
    color: ${({ theme: { palette }, variant }) =>
      variant === "primary" || "secondary" ? palette.white : palette.secondary};
  }
`;

export const LeftIcon = styled(FontAwesomeIcon)`
  margin-right: ${({ theme: { mp } }) => mp.sm};
  font-size: ${({ theme: { font } }) => font.sizes.medium};
`;

export const RightIcon = styled(FontAwesomeIcon)`
  margin-left: ${({ theme: { mp } }) => mp.sm};
  font-size: ${({ theme: { font } }) => font.sizes.medium};
`;
