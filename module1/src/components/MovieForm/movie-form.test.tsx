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
    url: "https://www.imdb.com/title/tt0110912/",
    runtime: "154 min",
  },
  onSubmit: fn(),
};

describe("GenreSelector", () => {
  test("renders the correct title", () => {
    render(<MovieForm {...mockProps} />);
    expect(screen.getByDisplayValue("Pulp Fiction")).toBeInTheDocument();
  });

  test("renders the correct rating", () => {
    render(<MovieForm {...mockProps} />);
    expect(screen.getByDisplayValue("5.0")).toBeInTheDocument();
  });

  test("renders the correct poster", () => {
    render(<MovieForm {...mockProps} />);
    expect(screen.getByDisplayValue("5.0")).toBeInTheDocument();
  });

  test("renders the correct url", () => {
    render(<MovieForm {...mockProps} />);
    expect(
      screen.getByDisplayValue("https://www.imdb.com/title/tt0110912/"),
    ).toBeInTheDocument();
  });
});
