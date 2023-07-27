import type { Meta, StoryObj } from "@storybook/react";

import ForgotPassword from ".";

const meta: Meta<typeof ForgotPassword> = {
  title: "Sections/ForgotPassword",
  component: ForgotPassword,
};

export default meta;
type Story = StoryObj<typeof ForgotPassword>;

export const Default: Story = {
  render: () => <ForgotPassword />,
};
