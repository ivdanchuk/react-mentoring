import { GENRES, IMovie } from "../../constants";
import { useEffect, useState } from "react";

type MovieFormProps = {
  initialMovieInfo?: IMovie;
  onSubmit: Function;
};

export default function MovieForm({
  initialMovieInfo,
  onSubmit,
}: MovieFormProps) {
  const [movieInfo, setMovieInfo] = useState<IMovie>(
    initialMovieInfo ?? {
      poster: "",
      title: "",
      releaseYear: "",
      genres: [],
      description: "",
      rating: "",
    },
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        releaseYear: "",
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
      <form onSubmit={handleSubmit}>
        <input name="title" value={movieInfo.title} onChange={handleChange} />
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
        <input
          name="releaseYear"
          value={movieInfo.releaseYear}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
