export interface IMovieTileProps {
  movies: IMovie[];

  handleClick(movie: IMovie): void;
}

export interface IMovie {
  poster: string;
  title: string;
  releaseYear: string;
  genres: string[];
  rating: string;
  description: string;
  url?: string;
  runtime?: string;
}

export type SortOptionsType = "Release Date" | "Title";
