export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Variant styles
  disabled?: boolean; // Disable button
  hasLeftArrow?: boolean; // Adds left arrow icon
  hasRightArrow?: boolean; // Adds right arrow icon
  children: React.ReactNode; // Button content
  width?: string;
}
