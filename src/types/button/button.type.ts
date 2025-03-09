export interface ButtonProps {
  type?: "submit" | "button";
  onClick?: () => void | 0;
  disabled?: boolean;
}

export interface ButtonStyle extends ButtonProps {
  variant: "primary" | "secondary";
}
