import { fireEvent, render, screen } from "@testing-library/react";
import { MovieTile } from "./movie-tile";
import { MOVIES } from "../../constants/movies-data";

describe("<MovieTile />", () => {
  it("renders correctly", () => {
    const handleClick = jest.fn();

    render(<MovieTile movies={MOVIES} handleClick={handleClick} />);

    MOVIES.forEach((movie) => {
      expect(screen.getByAltText(movie.title)).toBeInTheDocument();
      expect(screen.getByText(movie.title)).toBeInTheDocument();
      expect(
        screen.getByText(movie.releaseYear.toString()),
      ).toBeInTheDocument();
      expect(screen.getByText(movie.genres.join(", "))).toBeInTheDocument();
    });
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("handles click event", () => {
    const handleClick = jest.fn();

    render(<MovieTile movies={MOVIES} handleClick={handleClick} />);

    fireEvent.click(screen.getByAltText("Pulp Fiction"));

    expect(handleClick).toBeCalledWith(MOVIES[0]);
  });
});
