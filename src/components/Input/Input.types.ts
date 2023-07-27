import React, { ReactNode } from "react";

export type InputProps = {
  icon?: ReactNode;
  inputRef?: React.RefObject<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;
