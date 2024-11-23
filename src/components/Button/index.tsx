import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { IButtonProps } from "./utils";
import { StyledButton, LeftIcon, RightIcon } from "./style";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      variant = "primary",
      disabled = false,
      hasLeftArrow = false,
      hasRightArrow = false,
      onClick,
      ...props
    },
    ref
  ) => (
    <StyledButton
      ref={ref} // Attach the ref here
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      {...props} // Spread remaining props
    >
      {/* Render left arrow if hasLeftArrow is true */}
      {hasLeftArrow && <LeftIcon icon={faChevronLeft} />}
      {children}
      {/* Render right arrow if hasRightArrow is true */}
      {hasRightArrow && <RightIcon icon={faChevronRight} />}
    </StyledButton>
  )
);
