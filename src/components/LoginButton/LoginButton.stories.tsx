import type { Meta, StoryObj } from "@storybook/react";

import LoginButton from ".";

const meta: Meta<typeof LoginButton> = {
  title: "Components/Form/LoginLoginButton",
  component: LoginButton,
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const Default: Story = {
  render: () => <LoginButton />,
};
