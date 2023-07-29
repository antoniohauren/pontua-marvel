import { Link } from "react-router-dom";
import { HeroCardProps } from ".";

export default function HeroCard({
  id,
  description,
  name,
  imageUrl,
}: HeroCardProps) {
  return (
    <Link to={`/profile/${id}`}>
      <div className="flex h-full max-h-[150px] min-h-[150px] w-full gap-2 rounded-xl bg-gray/100 p-4 shadow-sm">
        <div className="flex max-h-[120px] min-h-full w-full min-w-[90px] max-w-[100px] overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={`${name} image`}
            className="w-full object-cover"
          />
        </div>

        <div
          className="overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
          }}
        >
          <h2 className="text-md font-bold">{name}</h2>
          <p className="text-[12px]">{description}</p>
        </div>
      </div>
    </Link>
  );
}
