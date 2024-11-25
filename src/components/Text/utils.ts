import React from "react";
import { Theme } from "theme/Theme";
import { SpacingProps } from "theme/Spacings";

export interface TextProps
  extends SpacingProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, "color"> {
  fontWeight?: keyof typeof Theme.font.weights;
  fontSize?: keyof typeof Theme.font.sizes;
  color?: keyof typeof Theme.palette;
  as?: keyof JSX.IntrinsicElements; // Prop for dynamic tags like <span>, <div>, etc.
  textAlign?: "left" | "right" | "center";
}
