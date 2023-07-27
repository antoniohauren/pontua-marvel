import BaseSection from "@/components/BaseSection/BaseSection";
import Button from "@/components/Button/Button";
import { SelectAgentProps } from ".";

export default function SelectAgent({}: SelectAgentProps) {
  return (
    <BaseSection
      title="Selecione o seu agente mais legal"
      titleDetail="."
      description="Tenha a visão completa do seu agente."
      shouldShrink={true}
    >
      {/* mock */}
      <div className="my-2 rounded-md border-2 border-black p-2">
        <p>Captain America</p>
      </div>
      {/* mock */}

      <div className="flex justify-end">
        <Button title="Entrar" />
      </div>
    </BaseSection>
  );
}
