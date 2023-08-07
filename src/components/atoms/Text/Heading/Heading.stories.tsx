import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta = {
  title: "Atoms/Text/Headings",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Primary: Story = {
  args: {
    type: "h1",
    font: "primary",
  },
};

export const H2Primary: Story = {
  args: {
    type: "h2",
    font: "primary",
  },
};

export const H1Secondary: Story = {
  args: {
    type: "h1",
    font: "secondary",
  },
};

export const H2Secondary: Story = {
  args: {
    type: "h2",
    font: "secondary",
  },
};
