import { IMovieTileProps } from "../../constants";

import styles from "./movie-title.module.scss";

export const MovieTile = ({ movies, handleClick }: IMovieTileProps) => {
  return (
    <>
      <div className={styles.movieTileContainer}>
        {movies.map((movie, index) => (
          <div key={index} className={styles.movieItem}>
            <img
              src={movie.poster}
              alt={movie.title}
              className={styles.poster}
              onClick={() => handleClick(movie)}
            />
            <div className={styles.movieDetails}>
              <span className={styles.title}>{movie.title}</span>
              <span className={styles.releaseYear}>{movie.releaseYear}</span>
            </div>
            <p className={styles.genres}>{movie.genres.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
};
