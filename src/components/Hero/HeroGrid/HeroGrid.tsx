import HeroCard from "@/components/Hero/HeroCard";
import { HeroGridProps } from ".";

export default function HeroGrid({ heroes }: HeroGridProps) {
  return (
    <div className="gridcols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </div>
  );
}
