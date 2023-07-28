import HeroCard from "@/components/Hero/HeroCard";
import { HeroGridProps } from ".";

export default function HeroGrid({ heroes }: HeroGridProps) {
  return (
    <div className="gridcols-1 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
      {heroes.map((hero, index) => (
        <HeroCard {...hero} key={index} />
      ))}
    </div>
  );
}