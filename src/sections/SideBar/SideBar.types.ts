type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
  visible?: boolean;
};

export type SideBarProps = {
  menuItems: MenuItem[];
};
