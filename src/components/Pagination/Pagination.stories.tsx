import type { Meta, StoryObj } from "@storybook/react";

import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => <Pagination page={1} totalPages={10} />,
};
