import { HeroGridProps } from "@/components/Hero/HeroGrid";
import HeroGrid from "@/components/Hero/HeroGrid/HeroGrid";
import LoggedBaseLayout, {
  LoggedBaseLayoutProps,
} from "@/components/LoggedBaseLayout";
import { PaginationProps } from "@/components/Pagination";
import Pagination from "@/components/Pagination/Pagination";

type HomeDashBoardLayoutProps = {
  heroes: HeroGridProps["heroes"];
  isLoading?: boolean;
} & Pick<PaginationProps, "page" | "setPage" | "totalPages"> &
  Pick<LoggedBaseLayoutProps, "search" | "setSearch">;

export default function HomeDashBoardLayout({
  heroes,
  isLoading,
  page,
  setPage,
  totalPages = 0,
  search,
  setSearch,
}: HomeDashBoardLayoutProps) {
  return (
    <LoggedBaseLayout hasSearch={true} setSearch={setSearch} search={search}>
      <HeroGrid heroes={heroes} isLoading={isLoading} />

      <div className="mt-4 flex justify-center">
        <Pagination
          isLoading={isLoading}
          page={page}
          setPage={setPage}
          totalPages={Math.ceil(totalPages / 16)}
        />
      </div>
    </LoggedBaseLayout>
  );
}
