import SearchInput from "@/components/SearchInput/SearchInput";
import { TopBarProps } from ".";

export default function TopBar({ hasSearch, setSearch, search }: TopBarProps) {
  return (
    <div className="h-[60px] w-full bg-white shadow-sm">
      {hasSearch ? <SearchInput onChange={setSearch} value={search} /> : null}
    </div>
  );
}
