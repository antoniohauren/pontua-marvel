import { HeroDetailProps } from ".";

export default function HeroDetail({
  description,
  name,
  imageUrl,
}: HeroDetailProps) {
  return (
    <div className="mt-4 flex w-full gap-4 rounded-lg p-4 shadow-md">
      <div className="h-12 min-h-[100px] w-12 min-w-[100px] overflow-hidden rounded-full">
        <img
          src={imageUrl}
          alt={`${name} image`}
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-blue/800">{name}</h1>
        <p className="font-medium text-gray/500">{description}</p>
      </div>
    </div>
  );
}
