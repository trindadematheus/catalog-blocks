import type { Meta, StoryObj } from "@storybook/react";

import Menu from ".";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Index: Story = {
  args: {},
};
