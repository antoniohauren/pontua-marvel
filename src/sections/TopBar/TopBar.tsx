import ArrowBackIcon from "@/assets/arrowBack.svg";
import MenuItem from "@/components/Menu/MenuItem/MenuItem";
import SearchInput from "@/components/SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import { TopBarProps } from ".";

export default function TopBar({
  hasSearch,
  setSearch,
  search,
  menuItems,
}: TopBarProps) {
  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("heroId");
    navigate("/login");
  }

  return (
    <div className="flex h-fit w-full flex-col bg-white shadow-sm">
      <div className="flex items-center gap-4 border-b-[1px] border-gray/100 shadow-sm md:hidden">
        <div className="h-[60px] w-full  px-6 py-4">
          <img src="/logo_pontua_dark.svg" alt="Logo Pontua" />
        </div>

        {menuItems?.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            icon={item.icon}
            isMobile={true}
            isSelected={item.isSelected}
          />
        ))}

        <MenuItem
          icon={<ArrowBackIcon />}
          onClick={handleLogout}
          isMobile={true}
        />
      </div>

      {hasSearch ? <SearchInput onChange={setSearch} value={search} /> : null}
    </div>
  );
}
