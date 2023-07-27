import { BaseSectionProps } from ".";

export default function BaseSection({
  title,
  titleDetail,
  description,
  children,
  shouldShrink = false,
}: BaseSectionProps) {
  return (
    <div
      className={`min-w-full rounded-xl bg-white p-8 py-10 shadow-sm md:max-w-[400px] ${
        !shouldShrink && "min-h-[400px]"
      }`}
    >
      <h1 className="text-3xl font-bold text-blue/600">
        {title}
        <span className="text-[red]">{titleDetail}</span>
      </h1>

      <p className="mt-2 text-gray/500">{description}</p>

      <div className="mt-2">{children}</div>
    </div>
  );
}
