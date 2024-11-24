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
      as = "p", // Default to <p>
      className,
      textAlign,
      ...props
    },
    ref // Receive the forwarded ref
  ) => {
    return (
      <StyledText
        ref={ref} // Forward the ref to the StyledText component
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

Text.displayName = "Text"; // Optional: set a display name for the component
