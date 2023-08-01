import ArrowBackIcon from "@/assets/arrowBack.svg";
import MenuItem from "@/components/Menu/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { SideBarProps } from ".";

export default function SideBar({ menuItems }: SideBarProps) {
  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("heroId");
    navigate("/login");
  }

  return (
    <div className="fixed z-10 hidden h-screen w-full min-w-[300px] max-w-[300px] flex-col border-r-2 border-r-gray/100 bg-white shadow-md md:flex">
      <Link to="/">
        <div className="h-[60px] w-full border-b-[1px] border-gray/100 px-6 py-4 shadow-sm">
          <img src="/logo_pontua_dark.svg" alt="Logo Pontua" />
        </div>
      </Link>

      <div className="w-full border-b-[1px] border-gray/100 p-4 shadow-sm">
        {menuItems?.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isSelected={item.isSelected}
          />
        ))}
      </div>

      <div className="mt-4 px-4">
        <MenuItem
          label={"Sair"}
          icon={<ArrowBackIcon />}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
