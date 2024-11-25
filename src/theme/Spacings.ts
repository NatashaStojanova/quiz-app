import { DefaultTheme } from "styled-components";

export interface SpacingProps {
  m?: keyof DefaultTheme["mp"]; // Margin for all sides
  ml?: keyof DefaultTheme["mp"]; // Margin-left
  mr?: keyof DefaultTheme["mp"]; // Margin-right
  mt?: keyof DefaultTheme["mp"]; // Margin-top
  mb?: keyof DefaultTheme["mp"]; // Margin-bottom
  mx?: keyof DefaultTheme["mp"]; // Horizontal margin (left + right)
  my?: keyof DefaultTheme["mp"]; // Vertical margin (top + bottom)
  p?: keyof DefaultTheme["mp"]; // Padding for all sides
  pl?: keyof DefaultTheme["mp"]; // Padding-left
  pr?: keyof DefaultTheme["mp"]; // Padding-right
  pt?: keyof DefaultTheme["mp"]; // Padding-top
  pb?: keyof DefaultTheme["mp"]; // Padding-bottom
  px?: keyof DefaultTheme["mp"]; // Horizontal padding (left + right)
  py?: keyof DefaultTheme["mp"]; // Vertical padding (top + bottom)
}

export const applySpacing = (props: SpacingProps, theme: DefaultTheme) => `

  /* Margins */
  margin-left: ${
    props.ml
      ? theme.mp[props.ml]
      : props.mx
      ? theme.mp[props.mx]
      : props.m
      ? theme.mp[props.m]
      : 0
  };
  margin-right: ${
    props.mr
      ? theme.mp[props.mr]
      : props.mx
      ? theme.mp[props.mx]
      : props.m
      ? theme.mp[props.m]
      : 0
  };
  margin-top: ${
    props.mt
      ? theme.mp[props.mt]
      : props.my
      ? theme.mp[props.my]
      : props.m
      ? theme.mp[props.m]
      : 0
  };
  margin-bottom: ${
    props.mb
      ? theme.mp[props.mb]
      : props.my
      ? theme.mp[props.my]
      : props.m
      ? theme.mp[props.m]
      : 0
  };

  /* Paddings */
  padding-left: ${
    props.pl
      ? theme.mp[props.pl]
      : props.px
      ? theme.mp[props.px]
      : props.p
      ? theme.mp[props.p]
      : 0
  };
  padding-right: ${
    props.pr
      ? theme.mp[props.pr]
      : props.px
      ? theme.mp[props.px]
      : props.p
      ? theme.mp[props.p]
      : 0
  };
  padding-top: ${
    props.pt
      ? theme.mp[props.pt]
      : props.py
      ? theme.mp[props.py]
      : props.p
      ? theme.mp[props.p]
      : 0
  };
  padding-bottom: ${
    props.pb
      ? theme.mp[props.pb]
      : props.py
      ? theme.mp[props.py]
      : props.p
      ? theme.mp[props.p]
      : 0
  };
`;

export const spacingProps = [
  "m",
  "ml",
  "mr",
  "mt",
  "mb",
  "mx",
  "my",
  "p",
  "pl",
  "pr",
  "pt",
  "pb",
  "px",
  "py",
];
