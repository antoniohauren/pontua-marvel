import HomeIcon from "@/assets/dashboard.svg";
import ProfileIcon from "@/assets/user.svg";
import SideBar from "@/sections/SideBar/SideBar";
import TopBar from "@/sections/TopBar/TopBar";
import { LoggedBaseLayoutProps } from ".";

export default function LoggedBaseLayout({ children }: LoggedBaseLayoutProps) {
  return (
    <div className="flex">
      <SideBar
        menuItems={[
          {
            label: "Home",
            icon: <HomeIcon />,
            isSelected: true,
          },
          {
            label: "Perfil",
            icon: <ProfileIcon />,
          },
        ]}
      />

      <div>
        <TopBar hasSearch={true} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
