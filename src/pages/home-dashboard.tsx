import { useApiGetCharacters } from "@/api/hooks/useApiGetCharacters";
import HomeDashBoardLayout from "@/layouts/home";

export default function HomeDashBoardPage() {
  const { data, isLoading } = useApiGetCharacters();

  return <HomeDashBoardLayout heroes={data || []} isLoading={isLoading} />;
}
