import type { Meta, StoryObj } from "@storybook/react";

import { NavigationUtility } from "./NavigationUtility";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Layout/NavigationUtility",
  component: NavigationUtility,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "start",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof NavigationUtility>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
