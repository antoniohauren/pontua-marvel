import type { Meta, StoryObj } from "@storybook/react";

import HeroDetail from ".";

const meta: Meta<typeof HeroDetail> = {
  title: "Components/HeroDetail",
  component: HeroDetail,
};

export default meta;
type Story = StoryObj<typeof HeroDetail>;

export const Default: Story = {
  render: () => (
    <HeroDetail
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas explicabo ducimus nostrum modi quibusdam rerum sunt labore similique dolorem?"
      name="A-Bomb"
    />
  ),
};
