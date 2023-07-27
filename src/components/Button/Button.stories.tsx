import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Base/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button title="Button" />,
};

export const Disabled: Story = {
  render: () => <Button title="Button" disabled={true} />,
};
