import type { Meta, StoryObj } from "@storybook/react";

import NavMenuLink from "./NavMenuLink";

const meta = {
  title: "Atoms/NavMenuLink",
  component: NavMenuLink,
  tags: ["autodocs"],
  args: {
    children: "Link",
  },
} satisfies Meta<typeof NavMenuLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
