import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Dialog from "../components/Dialog/dialog";
import MovieForm from "../components/MovieForm/movie-form";

const meta = {
  title: "Netflix/Dialog",
  component: Dialog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    title: "Title",
    onClose: fn(),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditMovieDialog: Story = {
  args: {
    title: "Edit movie",
    onClose: fn(),
    children: MovieForm({
      initialMovieInfo: {
        poster: "./img/pulp-fiction.png",
        title: "Pulp Fiction",
        releaseYear: "2004",
        genres: ["Action"],
        rating: "5.0",
        description: "some decr",
      },
      onSubmit: fn(),
    }),
  },
};
