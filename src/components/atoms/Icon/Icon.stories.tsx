import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "bs-arrow-left",
  },
};

export const Small: Story = {
  args: {
    name: "bs-arrow-left",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    name: "bs-arrow-left",
    size: "medium",
  },
};
