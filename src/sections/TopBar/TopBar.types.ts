import { SideBarProps } from "@/sections/SideBar";

export type TopBarProps = {
  hasSearch?: boolean;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
} & SideBarProps;
