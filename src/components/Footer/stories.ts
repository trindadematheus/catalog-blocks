import type { Meta, StoryObj } from "@storybook/react";

import Footer from ".";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Index: Story = {
  args: {},
};
