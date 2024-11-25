import React from "react";
import { TextProps } from "./utils";
import { StyledText } from "./style";

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      fontWeight = "normal",
      fontSize = "md",
      color = "dark",
      as = "p",
      className,
      textAlign,
      ...props
    },
    ref // We need a ref prop to pass animations
  ) => {
    return (
      <StyledText
        ref={ref}
        as={as}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        className={className}
        textAlign={textAlign}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);
