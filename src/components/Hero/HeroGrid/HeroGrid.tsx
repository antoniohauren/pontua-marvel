import HeroCard from "@/components/Hero/HeroCard";
import { HeroGridProps } from ".";

export default function HeroGrid({ heroes, isLoading }: HeroGridProps) {
  return (
    <div className="gridcols-1 grid gap-4 border-b-2 border-b-gray/100 pb-4 lg:grid-cols-2 xl:grid-cols-4">
      {heroes.map((hero, index) => (
        <HeroCard {...hero} key={`${hero.id}-${index}`} isLoading={isLoading} />
      ))}
    </div>
  );
}
