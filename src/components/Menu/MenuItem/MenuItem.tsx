import { Link } from "react-router-dom";
import { MenuItemProps } from ".";

export default function MenuItem({
  label,
  icon,
  isSelected,
  href,
  isMobile,
  onClick,
}: MenuItemProps) {
  return (
    <Link to={href || "#"}>
      <div
        className={`flex w-full cursor-pointer items-center gap-2 rounded-xl px-4 py-2 hover:bg-gray/background ${
          isSelected ? "text-orange/500" : ""
        }`}
        onClick={onClick}
      >
        {icon && <div className="h-8 w-8 p-1">{icon}</div>}

        {isMobile ? null : <p className="font-medium">{label}</p>}
      </div>
    </Link>
  );
}
