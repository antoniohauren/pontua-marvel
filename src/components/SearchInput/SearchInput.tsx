import SearchIcon from "@/assets/search.svg";
import { SearchInputProps } from ".";

export default function SearchInput({ onChange, value }: SearchInputProps) {
  return (
    <div className="flex h-full w-full items-center gap-1 border-b-2 border-b-gray/100 bg-white px-4 py-2 text-blue/200">
      <div className="h-6 w-6 ">
        <SearchIcon />
      </div>

      <input
        className="px-4 py-2 outline-none placeholder:text-sm"
        placeholder="Busque um agente"
        value={value}
        onChange={(evt) => onChange?.(evt.target.value)}
      />
    </div>
  );
}
