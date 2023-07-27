import { ReactNode } from "react";

export type ButtonProps = {
  title: string;
  icon?: ReactNode;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
