import { useApiGetCharacters } from "@/api/hooks/useApiGetCharacters";
import HomeDashBoardLayout from "@/layouts/home";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function HomeDashBoardPage() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const [debounceSearch] = useDebounce(search, 300);

  const { data, isLoading } = useApiGetCharacters(page, debounceSearch);

  useEffect(() => {
    setPage(0);
  }, [debounceSearch]);

  return (
    <HomeDashBoardLayout
      heroes={data?.items || Array(16).fill("")}
      isLoading={isLoading}
      totalPages={data?.total}
      page={page}
      search={search}
      setPage={setPage}
      setSearch={setSearch}
    />
  );
}
