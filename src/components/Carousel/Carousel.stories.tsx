import type { Meta, StoryObj } from "@storybook/react";
import { artistData } from "../../data/mock-data";

const songs = artistData[0].albums[0].songs;
const items = songs.map((song) => ({
  id: song.id,
  header: song.title,
  subheader: artistData[0].name,
  description: "2021",
  image: artistData[0].albums[0].image,
  imageSize: 150,

  imageAlt: song.title,
}));

import { Carousel } from "./Carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Latest Releases",
    items: items,
  },
};
