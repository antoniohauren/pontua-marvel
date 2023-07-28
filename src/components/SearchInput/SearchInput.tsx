import SearchIcon from "@/assets/search.svg";
import { SearchInputProps } from ".";

export default function SearchInput({}: SearchInputProps) {
  return (
    <div className="flex w-full items-center gap-2 border-b-2 border-b-gray/100 bg-white px-4 py-4 text-blue/200 shadow-sm">
      <div className="h-10 w-10 ">
        <SearchIcon />
      </div>

      <input
        className="px-4 py-2 outline-none"
        placeholder="Busque um agente"
      />
    </div>
  );
}
