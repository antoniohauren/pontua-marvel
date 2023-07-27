import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Form/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input />,
};
