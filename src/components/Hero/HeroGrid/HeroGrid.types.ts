import { HeroCardProps } from "@/components/Hero/HeroCard";

export type HeroGridProps = {
  heroes: HeroCardProps[];
  isLoading?: boolean;
};
