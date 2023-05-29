import type { Meta, StoryObj } from "@storybook/react";

import AlertBar from ".";

const meta: Meta<typeof AlertBar> = {
  title: "AlertBar",
  component: AlertBar,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof AlertBar>;

export const Index: Story = {
  args: {},
};
