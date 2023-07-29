import { useApiGetCharacterById } from "@/api/hooks/useApiGetCharacterById";
import ProfileLayout from "@/layouts/profile";
import { useParams } from "react-router-dom";

export function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const heroId = parseInt(id!);

  const { data } = useApiGetCharacterById(heroId);

  return (
    <ProfileLayout
      name={data?.name || "-"}
      description={data?.description || "-"}
      imageUrl={data?.imageUrl || "-"}
      events={data?.events || []}
      comics={data?.comics || []}
      series={data?.series || []}
      authors={[]}
    />
  );
}
