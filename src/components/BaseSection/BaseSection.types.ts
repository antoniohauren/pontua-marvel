import { ReactNode } from "react";

export type BaseSectionProps = {
  title: string;
  titleDetail?: string;
  description: string;
  children?: ReactNode;
  shouldShrink?: boolean;
};
