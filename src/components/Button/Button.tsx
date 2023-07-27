import { ButtonProps } from ".";

export default function Button({ title, icon, fullWidth }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg bg-blue/800 px-4 py-3 text-white ${
        fullWidth && "w-full"
      }`}
    >
      <span className="text-2xl font-bold">{title}</span>
      <div className="mt-[6px] h-3 w-3">{icon}</div>
    </button>
  );
}
