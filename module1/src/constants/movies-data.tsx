import { IMovie } from "./type";

export const GENRES = ["ALL", "Crime", "Comedy", "Drama", "Horror"];
export const MOVIES: IMovie[] = [
  {
    poster: "./img/pulp-fiction.png",
    title: "Pulp Fiction",
    releaseYear: "2004",
    genres: ["Action"],
    rating: "5.0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum nihil voluptates impedit quod! Dolores mollitia incidunt, ut distinctio fuga quaerat numquam maxime eligendi, commodi corrupti voluptates voluptas eaque aut?",
    url: "https://www.imdb.com/title/tt0110912/",
    runtime: "154 min",
  },
  {
    poster: "./img/kill-bill.png",
    title: "Bill: Vol2",
    releaseYear: "1994",
    genres: ["Oscar winning Movie"],
    rating: "8.0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum nihil voluptates impedit quod! Dolores mollitia incidunt, ut distinctio fuga quaerat numquam maxime eligendi, commodi corrupti voluptates voluptas eaque aut?",
    url: "https://www.imdb.com/title/tt0378194/",
    runtime: "154 min",
  },
];
