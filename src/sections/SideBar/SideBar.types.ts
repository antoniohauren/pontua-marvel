type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
};

export type SideBarProps = {
  menuItems: MenuItem[];
};
