import type { Meta, StoryObj } from "@storybook/react";

import HeroGrid, { mockHeroGridProps } from ".";

const meta: Meta<typeof HeroGrid> = {
  title: "Components/Heroes/HeroGrid",
  component: HeroGrid,
};

export default meta;
type Story = StoryObj<typeof HeroGrid>;

export const Default: Story = {
  render: () => (
    <div className="max-w-[1050px]">
      <HeroGrid {...mockHeroGridProps} />
    </div>
  ),
};
