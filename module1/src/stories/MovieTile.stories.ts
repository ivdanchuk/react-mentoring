import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MovieTile } from "../components/MovieTile/movie-tile";
import { MOVIES } from "../constants/movies-data";

const meta = {
  title: "Netflix/SortControl",
  component: MovieTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    movies: MOVIES,
    handleClick: fn(),
  },
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoviesTile: Story = {
  args: {
    movies: MOVIES,
    handleClick: fn(),
  },
};
