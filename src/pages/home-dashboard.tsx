import { useApiGetCharacters } from "@/api/hooks/useApiGetCharacters";
import HomeDashBoardLayout from "@/layouts/home";

export default function HomeDashBoardPage() {
  const { data, isLoading } = useApiGetCharacters();
  console.log(data);

  if (isLoading) {
    return null;
  }

  return <HomeDashBoardLayout heroes={data || []} />;
}
