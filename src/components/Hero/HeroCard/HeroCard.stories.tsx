import type { Meta, StoryObj } from "@storybook/react";

import HeroCard from "./HeroCard";

const meta: Meta<typeof HeroCard> = {
  title: "Components/Heroes/HeroCard",
  component: HeroCard,
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <HeroCard
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dicta illum placeat repudiandae magnam doloremque alias velit? Numquam cum id quos nam vel in omnis suscipit ab nulla rerum recusandae quae adipisci voluptates tenetur, consequatur nobis dolor natus libero rem totam repudiandae vitae excepturi facilis! Eius illo unde quaerat blanditiis."
        name="Cyclops"
        imageUrl="https://via.placeholder.com/300x400"
      />
    </div>
  ),
};
