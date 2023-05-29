import type { Meta, StoryObj } from "@storybook/react";

import Loading from ".";

const meta: Meta<typeof Loading> = {
  title: "Loading",
  component: Loading,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Index: Story = {
  args: {},
};
