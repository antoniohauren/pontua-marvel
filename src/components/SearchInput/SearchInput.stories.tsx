import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from ".";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Form/SearchInput",
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: () => <SearchInput />,
};
