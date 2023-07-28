import { MenuItemProps } from ".";

export default function MenuItem({ label, icon, isSelected }: MenuItemProps) {
  return (
    <div
      className={`flex w-full cursor-pointer items-center gap-2 rounded-xl px-4 py-2 hover:bg-gray/background ${
        isSelected ? "text-orange/500" : ""
      }`}
    >
      {icon && <div className="h-8 w-8 p-1">{icon}</div>}

      <p className="font-medium">{label}</p>
    </div>
  );
}
