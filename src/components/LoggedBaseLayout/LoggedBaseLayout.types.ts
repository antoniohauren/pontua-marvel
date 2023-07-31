import { TopBarProps } from "@/sections/TopBar";
import { ReactNode } from "react";

export type LoggedBaseLayoutProps = {
  children?: ReactNode;
} & Pick<TopBarProps, "hasSearch" | "search" | "setSearch">;
