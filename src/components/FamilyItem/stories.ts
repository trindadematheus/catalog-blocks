import type { Meta, StoryObj } from "@storybook/react";

import FamilyItem from ".";

const meta: Meta<typeof FamilyItem> = {
  title: "FamilyItem",
  component: FamilyItem,
  argTypes: {
    family: {
      id: "",
      name: "Sofá Retrátil",
      description: "Sofá de luxo bege",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FamilyItem>;

export const Index: Story = {
  args: {
    family: {
      id: "",
      premium: false,
      details: {
        name: "Sofá Retrátil",
        description: "Sofá de luxo bege",
      },
    },
  },
};
