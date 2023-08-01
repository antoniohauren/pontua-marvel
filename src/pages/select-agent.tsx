import { useApiGetCharacters } from "@/api/hooks/useApiGetCharacters";
import SelectAgentLayout from "@/layouts/select-agent";

export default function SelectAgentPage() {
  const { data } = useApiGetCharacters(0, "", 10);

  return (
    <SelectAgentLayout
      heroes={data?.items.map((item) => ({ ...item, isSelected: false })) || []}
    />
  );
}
