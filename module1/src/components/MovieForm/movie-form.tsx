import { useEffect, useState } from "react";

import { GENRES, IMovie } from "../../constants";

import styles from "./movie-form.module.scss";

export interface IMovieFormProps {
  initialMovieInfo?: IMovie;
  onSubmit: Function;
}

export const MovieForm = ({ initialMovieInfo, onSubmit }: IMovieFormProps) => {
  const [movieInfo, setMovieInfo] = useState<IMovie>(
    initialMovieInfo ?? {
      poster: "",
      title: "",
      releaseYear: 0,
      genres: [],
      description: "",
      rating: "",
    },
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(movieInfo);
  };

  useEffect(() => {
    setMovieInfo(
      initialMovieInfo ?? {
        poster: "",
        title: "",
        releaseYear: 0,
        genres: [],
        description: "",
        rating: "",
      },
    );
  }, [initialMovieInfo]);

  const handleGenresChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieInfo({ ...movieInfo, genres: [e.target.value] });
  };

  return (
    <>
      <div className={styles.movieForm}>
        {/*<FocusTrap>*/}
        <form onSubmit={handleSubmit}>
          <div className={styles.movieDetails}>
            <div className={styles.inputBox}>
              <span className={styles.details}>TITLE</span>
              <input
                name="title"
                value={movieInfo.title}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputBox}>
              <span className={styles.details}>RELEASE YEAR</span>
              <input
                type="date"
                name="releaseYear"
                value={movieInfo.releaseYear}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputBox}>
              <span className={styles.details}>MOVIE URL </span>
              <input
                name="url"
                placeholder={"https://"}
                value={movieInfo.url}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputBox}>
              <span className={styles.details}>RATING </span>
              <input
                name="rating"
                placeholder={"7.8"}
                value={movieInfo.rating}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputBox}>
              <span className={styles.details}>GENRE </span>
              <select
                name="genres"
                value={movieInfo.genres[0]}
                onChange={handleGenresChange}
              >
                {GENRES.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputBox}>
              <span className={styles.details}>RUNTIME</span>
              <input
                name="runtime"
                placeholder={"minutes"}
                value={movieInfo.runtime}
                onChange={handleChange}
              />
            </div>

            <div className={styles.description}>
              <span className={styles.title}>OVERVIEW</span>
              <textarea
                name="overview"
                placeholder={"Movie description"}
                value={movieInfo.description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.resetButton}>
              <button>Reset</button>
            </div>
            <div className={styles.submitButton}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
