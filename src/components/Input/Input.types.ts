import React, { ReactNode } from "react";

export type InputProps = {
  icon?: ReactNode;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
