import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Sections/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: () => <LoginForm />,
};
