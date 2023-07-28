import type { Meta, StoryObj } from "@storybook/react";

import BreadCrumb from ".";

const meta: Meta<typeof BreadCrumb> = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  render: () => <BreadCrumb items={["Perfil", "A-Bomb"]} />,
};
