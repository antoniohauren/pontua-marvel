import { HeroGridProps } from "@/components/Hero/HeroGrid";
import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";

type HomeDashBoardLayoutProps = {
  heroes: HeroGridProps["heroes"];
  isLoading?: boolean;
};
export default function HomeDashBoardLayout({
  heroes,
  isLoading,
}: HomeDashBoardLayoutProps) {
  return (
    <LoggedBaseLayout hasSearch={true}>
      {isLoading ? "Loading..." : <HeroGrid heroes={heroes} />}
    </LoggedBaseLayout>
  );
}
