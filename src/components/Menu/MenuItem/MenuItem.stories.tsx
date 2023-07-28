import UserIcon from "@/assets/user.svg";
import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from ".";

const meta: Meta<typeof MenuItem> = {
  title: "Components/Menu/MenuItem",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  render: () => <MenuItem label="Perfil" icon={<UserIcon />} />,
};

export const Selected: Story = {
  render: () => (
    <MenuItem label="Perfil" icon={<UserIcon />} isSelected={true} />
  ),
};
