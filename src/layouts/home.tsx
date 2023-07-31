import { HeroGridProps } from "@/components/Hero/HeroGrid";
import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout from "@/components/LoggedBaseLayout";
import { PaginationProps } from "@/components/Pagination";
import Pagination from "@/components/Pagination/Pagination";

type HomeDashBoardLayoutProps = {
  heroes: HeroGridProps["heroes"];
  isLoading?: boolean;
} & Pick<PaginationProps, "page" | "setPage" | "totalPages">;
export default function HomeDashBoardLayout({
  heroes,
  isLoading,
  page,
  setPage,
  totalPages = 0,
}: HomeDashBoardLayoutProps) {
  return (
    <LoggedBaseLayout hasSearch={true}>
      {isLoading ? "Loading..." : <HeroGrid heroes={heroes} />}

      <div className="mt-4 flex w-full justify-center">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={Math.ceil(totalPages / 16)}
        />
      </div>
    </LoggedBaseLayout>
  );
}
