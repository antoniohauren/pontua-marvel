import { HeroGridProps } from "@/components/Hero/HeroGrid";
import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";
import Pagination from "@/components/Pagination/Pagination";

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

      <div className="mt-4 flex w-full justify-center">
        <Pagination />
      </div>
    </LoggedBaseLayout>
  );
}
