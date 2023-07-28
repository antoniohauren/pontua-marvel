import UserIcon from "@/assets/user.svg";
import type { Meta, StoryObj } from "@storybook/react";

import SideBar from ".";

const meta: Meta<typeof SideBar> = {
  title: "Sections/SideBar",
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  render: () => (
    <SideBar
      menuItems={[
        {
          label: "Perfil",
          href: "/perfil",
          icon: <UserIcon />,
          isSelected: true,
        },
        { label: "Perfil", href: "/perfil", icon: <UserIcon /> },
        { label: "Perfil", href: "/perfil", icon: <UserIcon /> },
      ]}
    />
  ),
};
