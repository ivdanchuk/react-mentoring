import { IMovie } from "./type";

export const GENRES = ["ALL", "Crime", "Comedy", "Drama", "Horror"];
export const MOVIES: IMovie[] = [
  {
    poster: "./img/pulp-fiction.png",
    title: "Pulp Fiction",
    releaseYear: "2004",
    genres: ["Action"],
    rating: "5.0",
    description: "some decr",
  },
  {
    poster: "./img/kill-bill.png",
    title: "Bill: Vol2",
    releaseYear: "1994",
    genres: ["Oscar winning Movie"],
    rating: "8.0",
    description: "some decr",
  },
];
