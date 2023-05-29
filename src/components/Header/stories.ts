import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Index: Story = {
  args: {},
};
