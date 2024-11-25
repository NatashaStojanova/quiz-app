export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
  variant?: "primary" | "secondary"; // Variant styles; primary is with background color, secondary is outlined
  hasLeftArrow?: boolean; // Adds left arrow icon
  hasRightArrow?: boolean; // Adds right arrow icon
}
