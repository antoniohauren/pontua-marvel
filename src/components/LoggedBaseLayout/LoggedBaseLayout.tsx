import { useApiGetMenuEntries } from "@/api/hooks/useApiGetMenuEntries";
import SideBar from "@/sections/SideBar/SideBar";
import TopBar from "@/sections/TopBar/TopBar";
import { useLocation } from "react-router-dom";
import { LoggedBaseLayoutProps } from ".";

export default function LoggedBaseLayout({
  children,
  search,
  hasSearch,
  setSearch,
}: LoggedBaseLayoutProps) {
  const { pathname } = useLocation();

  const { data: menuEntries } = useApiGetMenuEntries(pathname);

  return (
    <div className="flex w-full">
      <SideBar menuItems={menuEntries || []} />

      <div className="w-full md:ml-[300px]">
        <TopBar hasSearch={hasSearch} setSearch={setSearch} search={search} />
        <div className="w-full p-10">{children}</div>
      </div>
    </div>
  );
}
