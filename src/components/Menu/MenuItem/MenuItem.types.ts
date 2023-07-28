export type MenuItemProps = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};
