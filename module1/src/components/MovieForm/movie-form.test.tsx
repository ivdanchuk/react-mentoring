import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieForm, { IMovieFormProps } from "./movie-form";
import { fn } from "@storybook/test";

afterEach(cleanup);

const mockProps: IMovieFormProps = {
  initialMovieInfo: {
    poster: "./img/pulp-fiction.png",
    title: "Pulp Fiction",
    releaseYear: "2004",
    genres: ["Action"],
    rating: "5.0",
    description: "some decr",
  },
  onSubmit: fn(),
};

describe("GenreSelector", () => {
  test("renders the correct genres", () => {
    render(<MovieForm {...mockProps} />);
    expect(screen.getByDisplayValue("Pulp Fiction")).toBeInTheDocument();
  });
});
