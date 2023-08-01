export type MenuItemProps = {
  label?: string;
  href?: string;
  isMobile?: boolean;
  icon?: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};
