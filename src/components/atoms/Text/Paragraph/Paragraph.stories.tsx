import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./Paragraph";

const meta = {
  title: "Atoms/Paragraphs",
  component: Paragraph,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Medium400: Story = {
  args: {
    size: "medium",
    weight: 400,
  },
};

export const Medium500: Story = {
  args: {
    size: "medium",
    weight: 500,
  },
};

export const Large400: Story = {
  args: {
    size: "large",
    weight: 400,
  },
};

export const Large500: Story = {
  args: {
    size: "large",
    weight: 500,
  },
};
