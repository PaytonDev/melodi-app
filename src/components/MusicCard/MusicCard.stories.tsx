import type { Meta, StoryObj } from "@storybook/react";
import { artistData } from "../../data/mock-data";

import { MusicCard } from "./MusicCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MusicCard",
  component: MusicCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MusicCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: artistData[0].name,
    subheader: artistData[0].albums[0].name,
    description: "2021",
    image: artistData[0].albums[0].image,
    imageSize: "150px",
    imageAlt: artistData[0].albums[0].name,
  },
};
