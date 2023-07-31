import { useApiGetCharacters } from "@/api/hooks/useApiGetCharacters";
import HomeDashBoardLayout from "@/layouts/home";
import { useState } from "react";

export default function HomeDashBoardPage() {
  const [page, setPage] = useState(0);

  const { data, isLoading } = useApiGetCharacters(page);

  return (
    <HomeDashBoardLayout
      heroes={data?.items || []}
      isLoading={isLoading}
      totalPages={data?.total}
      page={page}
      setPage={setPage}
    />
  );
}
