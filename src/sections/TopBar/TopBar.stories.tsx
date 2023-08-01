import type { Meta, StoryObj } from "@storybook/react";

import TopBar from ".";

const meta: Meta<typeof TopBar> = {
  title: "Sections/TopBar",
  component: TopBar,
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  render: () => <TopBar menuItems={[]} />,
};

export const WithSearch: Story = {
  render: () => <TopBar menuItems={[]} />,
};
