import BaseLayout from "@/components/BaseLayout/BaseLayout";
import { SelectAgentProps } from "@/sections/SelectAgent";
import SelectAgent from "@/sections/SelectAgent/SelectAgent";

type SelectAgentLayoutProps = SelectAgentProps;

export default function SelectAgentLayout({ heroes }: SelectAgentLayoutProps) {
  return (
    <BaseLayout>
      <SelectAgent heroes={heroes} />
    </BaseLayout>
  );
}
