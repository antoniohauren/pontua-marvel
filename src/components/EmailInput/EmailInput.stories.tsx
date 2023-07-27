import EmailInput from "@/components/EmailInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmailInput> = {
  title: "Components/Form/EmailInput",
  component: EmailInput,
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  render: () => <EmailInput />,
};
