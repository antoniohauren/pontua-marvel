import { InputProps } from ".";

export default function Input({
  icon,
  onClick,
  inputRef,
  ...rest
}: InputProps) {
  return (
    <div className="relative focus-within:text-blue/800 text-gray/400">
      <input
        {...rest}
        ref={inputRef}
        className="border-gray/400 border-2 px-4 rounded-lg focus:outline-blue/800 focus:text-blue/800 w-full py-2 group"
      />

      <div
        className={`w-10 h-10 absolute top-0 bottom-0 right-0 pr-2 mr-1 my-auto py-2 ${
          onClick && "cursor-pointer"
        }`}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
}
