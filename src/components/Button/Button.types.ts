import { ReactNode } from "react";

export type ButtonProps = {
  title: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
