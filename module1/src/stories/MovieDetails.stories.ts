import type { Meta, StoryObj } from "@storybook/react";
import { MovieDetails } from "../components/MovieDetails/movie-details";
import { MOVIES } from "../constants/movies-data";

const meta = {
  title: "Netflix/SortControl",
  component: MovieDetails,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    movie: MOVIES[0],
  },
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieDetail: Story = {
  args: {
    movie: MOVIES[0],
  },
};
