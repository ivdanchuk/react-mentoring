import { IMovieTileProps } from "../../constants";

import "./movie-title.scss";

export const MovieTile = ({ movies, handleClick }: IMovieTileProps) => {
  return (
    <>
      <div className="movie-tile">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img
              src={movie.poster}
              alt={movie.title}
              className="poster"
              onClick={() => handleClick(movie)}
            />
            <div className="movie-details">
              <span className="title">{movie.title}</span>
              <span className="release-year">{movie.releaseYear}</span>
            </div>
            <p className="genres">{movie.genres.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
};
