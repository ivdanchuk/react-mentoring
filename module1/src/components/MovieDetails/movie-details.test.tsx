import React from "react";

import { render, screen } from "@testing-library/react";
import { IMovie } from "../../constants";
import { MovieDetails } from "./movie-details"; // assuming this is the location of your file

const stubMovie = {
  poster: "test-poster",
  title: "test-title",
  releaseYear: 2024,
  rating: "test-rating",
  genres: ["test-genre1", "test-genre2"],
  description: "test-description",
};

describe("MovieDetails component", () => {
  it("should render null if no movie is provided", () => {
    const { container } = render(<MovieDetails movie={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render movie details properly", () => {
    render(<MovieDetails movie={stubMovie as IMovie} />);

    expect(screen.getByAltText(`${stubMovie.title} poster`)).toBeTruthy();
    expect(screen.getByText(stubMovie.title)).toBeVisible();
    expect(screen.getByText(stubMovie.releaseYear)).toBeVisible();
    expect(screen.getByText(stubMovie.rating)).toBeVisible();
    expect(screen.getByText(stubMovie.genres.join(", "))).toBeVisible();
    expect(screen.getByText(stubMovie.description)).toBeVisible();
  });
});
