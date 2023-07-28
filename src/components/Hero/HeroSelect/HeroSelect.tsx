import CheckIcon from "@/assets/check.svg";
import ChevronIcon from "@/assets/chevron.svg";
import UserIcon from "@/assets/user.svg";
import { useState } from "react";
import { HeroOptionProps, HeroOptionsProps, HeroSelectProps } from ".";

export default function HeroSelect({
  placeholder,
  heroes,
  value,
  onSelect,
}: HeroSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = heroes.map((opt) => {
    if (opt.id === value) {
      opt.isSelected = true;
    } else {
      opt.isSelected = false;
    }

    return opt;
  });

  const hasValue = value !== undefined;
  const selected = options.find((hero) => hero.isSelected);

  function handleSelect(id: string) {
    onSelect?.(id);
    setIsOpen(false);
  }

  return (
    <div className="relative w-full">
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray/300 px-4 py-2 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasValue ? (
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img src={selected?.imageUrl} alt="" />
          </div>
        ) : (
          <div className="h-8 w-8 p-1 text-gray/500">
            <UserIcon />
          </div>
        )}

        {hasValue ? (
          <p className="font-medium text-gray/900">{selected?.name}</p>
        ) : (
          <p className="text-gray/500">{placeholder}</p>
        )}

        <div
          className={`ml-auto h-8 w-8 p-1 text-gray/500 transition duration-200 ${
            isOpen && "-rotate-180"
          }`}
        >
          <ChevronIcon />
        </div>
      </div>

      <div
        className={`${
          !isOpen ? "scale-y-0" : "scale-y-100"
        } absolute left-0 right-0 top-[calc(100%+5px)] origin-top overflow-hidden transition duration-300`}
      >
        <Options options={options} onSelect={handleSelect} />
      </div>
    </div>
  );
}

function Options({ options, onSelect }: HeroOptionsProps) {
  return (
    <div className="flex h-full max-h-[500px] w-full flex-col overflow-y-auto rounded-lg border-2 border-gray/100 bg-white shadow-lg">
      {options.map((hero) => (
        <HeroOption
          key={hero.id}
          label={hero.name}
          value={hero.id}
          imageUrl={hero.imageUrl}
          isSelected={hero.isSelected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function HeroOption({
  label,
  value,
  isSelected,
  imageUrl,
  onSelect,
}: HeroOptionProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray/100"
      onClick={() => onSelect?.(value)}
    >
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <img src={imageUrl} alt="" />
      </div>

      <p className="font-medium text-gray/900">{label}</p>

      {isSelected && (
        <div className="ml-auto h-6 w-6">
          <CheckIcon />
        </div>
      )}
    </div>
  );
}
