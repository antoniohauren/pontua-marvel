import HomeIcon from "@/assets/dashboard.svg";
import ProfileIcon from "@/assets/user.svg";
import SideBar from "@/sections/SideBar/SideBar";
import TopBar from "@/sections/TopBar/TopBar";
import { LoggedBaseLayoutProps } from ".";

export default function LoggedBaseLayout({
  children,
  hasSearch,
}: LoggedBaseLayoutProps) {
  return (
    <div className="flex">
      <SideBar
        menuItems={[
          {
            label: "Home",
            icon: <HomeIcon />,
            href: "/",
            isSelected: true,
          },
          {
            label: "Perfil",
            href: "/profile/1",
            icon: <ProfileIcon />,
          },
        ]}
      />

      <div>
        <TopBar hasSearch={hasSearch} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
