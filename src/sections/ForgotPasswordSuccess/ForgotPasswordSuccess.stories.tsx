import type { Meta, StoryObj } from "@storybook/react";

import ForgotPasswordSuccess from ".";

const meta: Meta<typeof ForgotPasswordSuccess> = {
  title: "Sections/ForgotPasswordSuccess",
  component: ForgotPasswordSuccess,
};

export default meta;
type Story = StoryObj<typeof ForgotPasswordSuccess>;

export const Default: Story = {
  render: () => <ForgotPasswordSuccess />,
};
