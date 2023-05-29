import type { Meta, StoryObj } from "@storybook/react";

import PageState from ".";

const meta: Meta<typeof PageState> = {
  title: "PageState",
  component: PageState,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageState>;

export const Index: Story = {
  args: {},
};
