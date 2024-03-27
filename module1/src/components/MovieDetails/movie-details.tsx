import { IMovie } from "../../constants";

import styles from "./movie-details.module.scss";

export interface Props {
  movie: IMovie | null;
}

export const MovieDetails = ({ movie }: Props) => {
  if (!movie) {
    return null;
  }
  return (
    <div className={styles.movieDetails}>
      <img
        src={movie?.poster}
        alt={`${movie.title} poster`}
        className={styles.movieDetailsPoster}
      />
      <div className={styles.movieDetailsInfo}>
        <h2 className={styles.movieDetailsTitle}>{movie.title}</h2>
        <p>{movie.releaseYear}</p>
        <p>{movie.rating}</p>
        <p>{movie.genres.join(", ")}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};
