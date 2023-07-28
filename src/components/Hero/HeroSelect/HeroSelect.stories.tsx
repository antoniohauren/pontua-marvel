import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import HeroSelect from ".";

const meta: Meta<typeof HeroSelect> = {
  title: "Components/Heroes/HeroSelect",
  component: HeroSelect,
};

export default meta;
type Story = StoryObj<typeof HeroSelect>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<undefined | string>(undefined);

    return (
      <HeroSelect
        placeholder="Selecione um agente"
        onSelect={setValue}
        value={value}
        heroes={[
          {
            id: "1",
            name: "Jett",
            isSelected: false,
            imageUrl:
              "https://pbs.twimg.com/profile_images/1625941785573818369/KqXrAHVM_400x400.jpg",
          },
        ]}
      />
    );
  },
};
