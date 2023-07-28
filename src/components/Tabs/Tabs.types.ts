import { ReactNode } from "react";

type Tab = {
  label: string;
  content: ReactNode;
};

export type TabsProps = {
  items?: Tab[];
};

export type TabItemProps = {
  index: number;
  label: string;
  onClick: (tab: number) => void;
  isActive?: boolean;
};
