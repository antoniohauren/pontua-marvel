import type { Meta, StoryObj } from "@storybook/react";

import Tabs from ".";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs
      items={[
        { label: "Geral", content: <h1>Visão Geral</h1> },
        { label: "Teams", content: <h1>Teams</h1> },
        { label: "Powers", content: <h1>Powers</h1> },
        { label: "Species", content: <h1>Species</h1> },
        { label: "Authors", content: <h1>Authors</h1> },
      ]}
    />
  ),
};
