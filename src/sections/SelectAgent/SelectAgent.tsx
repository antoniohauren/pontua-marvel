import BaseSection from "@/components/BaseSection/BaseSection";
import Button from "@/components/Button/Button";
import HeroSelect from "@/components/Hero/HeroSelect/HeroSelect";
import { useState } from "react";
import { SelectAgentProps } from ".";

export default function SelectAgent({ heroes }: SelectAgentProps) {
  const [value, setValue] = useState<number | undefined>();

  function onAgentSelect(value: number) {
    setValue(value);
    window.localStorage.setItem("heroId", value.toString());
  }

  return (
    <BaseSection
      title="Selecione o seu agente mais legal"
      titleDetail="."
      description="Tenha a visão completa do seu agente."
      shouldShrink={true}
    >
      <HeroSelect heroes={heroes} value={value} onSelect={onAgentSelect} />

      <div className="mt-4 flex justify-end">
        <Button title="Entrar" href={`/profile/${value}`} />
      </div>
    </BaseSection>
  );
}
