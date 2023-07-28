import ArrowBackIcon from "@/assets/arrowBack.svg";
import MenuItem from "@/components/Menu/MenuItem";
import { Link } from "react-router-dom";
import { SideBarProps } from ".";

export default function SideBar({ menuItems }: SideBarProps) {
  return (
    <div className="z-10 flex h-screen w-full max-w-[300px] flex-col border-r-2 border-r-gray/100 bg-white shadow-md">
      <Link to="/">
        <div className="h-[60px] w-full border-b-[1px] border-gray/100 px-6 py-4 shadow-sm">
          <img src="/logo_pontua_dark.svg" alt="Logo Pontua" />
        </div>
      </Link>

      <div className="w-full border-b-[1px] border-gray/100 p-4 shadow-sm">
        {menuItems?.map((item) => (
          <MenuItem
            label={item.label}
            href={item.href}
            icon={item.icon}
            isSelected={item.isSelected}
          />
        ))}
      </div>

      <div className="mt-4 px-4">
        <MenuItem label={"Sair"} icon={<ArrowBackIcon />} />
      </div>
    </div>
  );
}
