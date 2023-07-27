import PasswordInput from "@/components/PasswordInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Form/PasswordInput",
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: () => <PasswordInput />,
};
