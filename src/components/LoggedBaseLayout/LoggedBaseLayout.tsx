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
    <div className="flex">
      <SideBar menuItems={menuEntries || []} />

      <div>
        <TopBar hasSearch={hasSearch} setSearch={setSearch} search={search} />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}
