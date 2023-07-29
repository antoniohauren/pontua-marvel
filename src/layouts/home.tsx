import { HeroGridProps } from "@/components/Hero/HeroGrid";
import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";

type HomeDashBoardLayoutProps = {
  heroes: HeroGridProps["heroes"];
};
export default function HomeDashBoardLayout({
  heroes,
}: HomeDashBoardLayoutProps) {
  return (
    <LoggedBaseLayout hasSearch={true}>
      <HeroGrid heroes={heroes} />
    </LoggedBaseLayout>
  );
}
