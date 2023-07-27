import type { Meta, StoryObj } from "@storybook/react";

import SelectAgent from ".";

const meta: Meta<typeof SelectAgent> = {
  component: SelectAgent,
};

export default meta;
type Story = StoryObj<typeof SelectAgent>;

export const Default: Story = {
  render: () => <SelectAgent />,
};
