import type { Meta, StoryObj } from "@storybook/react";

import { LoginField } from "./LoginField";

const meta = {
  title: "Components/LoginField",
  component: LoginField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
