import { InputProps } from ".";

export default function Input({
  icon,
  onClick,
  inputRef,
  ...rest
}: InputProps) {
  return (
    <div className="relative text-gray/400 focus-within:text-blue/800">
      <input
        {...rest}
        ref={inputRef}
        className="group w-full rounded-lg border-2 border-gray/400 px-4 py-4 focus:text-blue/800 focus:outline-blue/800"
      />

      <div
        className={`absolute bottom-0 right-0 top-0 my-auto mr-1 h-10 w-10 py-2 pr-2 ${
          onClick && "cursor-pointer"
        }`}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
}
